const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.use(express.json({ limit: '1mb' }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // 或指定 http://localhost:3000
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    next();
  });

const WENXIN_API_KEY = process.env.WENXIN_API_KEY || process.env.REACT_DOC_WENXIN_API_KEY;
const WENXIN_BASE_URL = process.env.WENXIN_BASE_URL || 'https://aistudio.baidu.com/llm/lmapi/v3';
const WENXIN_MODEL = process.env.WENXIN_MODEL || 'ernie-4.5-turbo-128k-preview';

function buildPrompt(productName, content) {
  return `\n你是一位资深的产品经理和方案设计师，需要基于提供的基础信息，或者在没有基础信息的情况下，设计一份精简而有吸引力的自动化产品介绍网页内容。\n\n## 基础产品信息\n如果有提供基础信息，请将其作为参考。如果没有，可以根据常见的产品特点和价值进行生成。\n\n## 产品名称  \n${productName}\n\n## 核心要求\n1. **简洁明了**：将产品的核心信息浓缩为精炼内容，避免过于冗长的描述。\n2. **吸引眼球**：在有限的文字内，尽可能突出产品的独特性和优势，激发读者兴趣。\n3. **易读性**：确保内容通俗易懂，适合各层级读者，避免使用复杂的技术术语。\n4. **结构清晰**：内容结构化，层次分明，易于浏览。\n\n## 文档结构要求\n\n### 1. 产品名称  \n清晰展示产品名称，并与整体设计风格保持一致。\n\n### 2. 一句话精炼吸引口号  \n用一句简短且引人注目的口号，突出产品的价值主张。例如：“快速提升效率，智能化管理您的工作流程。”\n\n### 3. 产品简介 (100-300字)  \n简洁明了地介绍产品的核心价值、定位以及它解决的关键问题。如果没有提供基础信息，请根据常见的产品应用场景和痛点进行生成，突出产品的创新性和实际价值。\n\n### 4. 产品价值 (条目形式)  \n以条目形式展示产品的独特价值，每个条目可以包含一个简短的小标题和一句话描述，突出产品的实际效果与优势。例如：\n- **提升效率**：通过自动化处理重复工作，节省时间，提升整体工作效率。\n- **简便易用**：设计简洁，用户无需培训即可快速上手。\n- **降低成本**：减少人工操作，降低人为错误，提高工作精度。\n\n## 写作风格要求\n- 内容要简洁、有吸引力，并适合快速浏览。\n- 使用简明、易懂的语言，避免过度技术化。\n- 重点突出产品的核心优势，尽可能以实际场景化表达。\n- 确保整体风格现代且具备用户友好性。\n\n## 输出格式\n直接输出markdown内容，格式如下：\n\n# ${productName}\n\n## 一句话精炼吸引口号\n[简洁的口号，突出产品卖点]\n\n## 产品简介  \n[100-300字的产品简介，简洁说明产品的价值和定位。如果没有基础信息，可以根据产品的常见特性和应用场景进行创作]\n\n## 产品价值  \n- **[价值小标题]**：[简短介绍具体的价值]\n- **[价值小标题]**：[简短介绍具体的价值]\n- **[价值小标题]**：[简短介绍具体的价值]\n\n【可选补充信息】\n${content || ''}\n`; 
}

function cleanMarkdown(content) {
  if (!content) return content;
  const lines = content.split('\n');
  const cleaned = [];
  for (let i = 0; i < lines.length; i++) {
    const s = lines[i].trim();
    if (i === 0 && (s.startsWith('```markdown') || s === '```')) continue;
    if (i === lines.length - 1 && s === '```') continue;
    if (s === '```' && i > 0 && i < lines.length - 1) continue;
    cleaned.push(lines[i]);
  }
  return cleaned.join('\n');
}

async function callWenxin(prompt) {
  if (!WENXIN_API_KEY) {
    throw new Error('缺少 WENXIN_API_KEY 环境变量');
  }
  const url = `${WENXIN_BASE_URL}/chat/completions`;
  const body = {
    model: WENXIN_MODEL,
    messages: [{ role: 'user', content: prompt }],
    stream: false,
    extra_body: { penalty_score: 1 },
    max_completion_tokens: 4000,
    temperature: 0.7,
    top_p: 0.9,
    frequency_penalty: 0,
    presence_penalty: 0
  };
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${WENXIN_API_KEY}`
    },
    body: JSON.stringify(body)
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(text || `文心API请求失败(${resp.status})`);
  }
  const data = await resp.json();
  const result = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
  return result || '';
}

app.post('/api/generate_product_document', async (req, res) => {
  try {
    const { product_name: productName = '未命名产品', content = '' } = req.body || {};
    const prompt = buildPrompt(productName, content);
    const raw = await callWenxin(prompt);
    const markdown = cleanMarkdown(raw) || `# ${productName}\n\n生成失败，请重试。`;
    res.json({ markdown_content: markdown, success: true, message: 'ok' });
  } catch (err) {
    res.status(500).json({ success: false, message: err?.message || '生成失败' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', service: 'react-embedded-generator', model: WENXIN_MODEL });
});

const PORT = process.env.PORT || 8016;
app.listen(PORT, () => {
  console.log(`Generator API listening on http://localhost:${PORT}`);
});


