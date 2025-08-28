// 与后端文档生成服务交互的轻量封装
// 默认使用本地运行的 FastAPI（SoWhy_Helga/doc/API.py）服务端口 8016

const DEFAULT_BASE_URL = process.env.REACT_APP_DOC_API_BASE_URL || 'http://localhost:8016/api';

export async function generateProductDocument({ productName, content = '' }) {
  const url = `${DEFAULT_BASE_URL}/generate_product_document`;
  const payload = {
    product_name: productName,
    content,
    task: 'generate_product_document',
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || '生成接口请求失败');
  }

  const data = await res.json();
  // 期望字段: { markdown_content }
  if (!data || !data.markdown_content) {
    throw new Error('生成结果为空');
  }
  return data.markdown_content;
}

export function getApiBaseUrl() {
  return DEFAULT_BASE_URL;
}


