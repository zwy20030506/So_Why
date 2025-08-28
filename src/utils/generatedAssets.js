// 与旧版 HTMLRenderer 中的可用图片列表对齐
// 注意：路径以 React 静态资源为准（public/img 下）

export const AVAILABLE_IMAGES = [
  '/img/智能课题优化.png',
  '/img/中华民族共同体.png',
  '/img/监督管理系统.png',
  '/img/江南书院联盟.png',
  '/img/京师学堂数智化.png',
  '/img/智慧课堂.png',
  '/img/作文润色.png'
];

export function selectImagesForValues(count) {
  // 简单去重轮询选择，尽量避免重复
  const result = [];
  let pool = [...AVAILABLE_IMAGES];
  for (let i = 0; i < count; i++) {
    if (pool.length === 0) pool = [...AVAILABLE_IMAGES];
    const idx = i % pool.length;
    result.push(pool[idx]);
  }
  return result;
}


