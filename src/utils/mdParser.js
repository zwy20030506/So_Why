// 解析与 Python 版 MDParser 对齐：
// - 识别 # 标题作为 product_name
// - 二级标题 ## 下的内容为对应段落文本
// - 去除 ** * 与行首 "- "

export function parseMarkdown(md) {
  const result = {};
  if (!md || typeof md !== 'string') return result;
  const lines = md.trim().split('\n');
  let currentSection = null;
  let buffer = [];

  const push = () => {
    if (currentSection) {
      result[currentSection] = (buffer.join('\n').trim());
      buffer = [];
    }
  };

  for (let raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('# ')) {
      push();
      result.product_name = line.slice(2).trim();
      currentSection = null;
      continue;
    }
    if (line.startsWith('## ')) {
      push();
      currentSection = line.slice(3).trim();
      continue;
    }
    if (currentSection) {
      let cleaned = line.replace(/\*\*/g, '').replace(/\*/g, '');
      if (cleaned.startsWith('- ')) cleaned = cleaned.slice(2).trim();
      buffer.push(cleaned);
    }
  }
  push();
  return result;
}

// 解析“产品价值”为条目，支持 “标题：描述” 或 “标题:描述”，并合并后续行描述
export function parseProductValues(valueContent) {
  if (!valueContent) return [];
  const lines = valueContent.split('\n');
  const values = [];
  let current = null;
  for (let raw of lines) {
    let line = raw.trim();
    if (!line) continue;
    // 清理 markdown 符号与项目符号
    if (line.startsWith('- ')) line = line.slice(2).trim();
    line = line.replace(/\*\*/g, '').replace(/\*/g, '');

    // 查找首个分隔符位置（支持中文冒号与英文冒号）
    const idxCn = line.indexOf('：');
    const idxEn = line.indexOf(':');
    const useIdx = idxCn >= 0 ? idxCn : idxEn;

    if (useIdx >= 0) {
      // 新的价值点
      if (current) values.push(current);
      const title = line.slice(0, useIdx).trim();
      const desc = line.slice(useIdx + 1).trim();
      current = { title, description: desc };
    } else if (current) {
      // 续写上一条描述
      current.description = (current.description ? current.description + ' ' : '') + line;
    }
  }
  if (current) values.push(current);
  return values;
}


