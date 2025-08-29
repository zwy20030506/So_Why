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

// 指定文件夹资源（用户要求）：
// 顶部大图随机自 /img/chinese
export const CHINESE_IMAGES = [
  '/img/chinese/轮播图1.png',
  '/img/chinese/棕色千载风雅宋.png',
  '/img/chinese/青绿水墨风渔舟唱晚.png',
  '/img/chinese/青绿水墨风一叶知秋.png'
];

// 价值区交错图随机自 /img/demo（节选了提供清单中的全部文件）
export const DEMO_IMAGES = [
  '/img/demo/作文网站2.png',
  '/img/demo/作文网站1.png',
  '/img/demo/中文作文批改能力全景图.png',
  '/img/demo/三段三步.png',
  '/img/demo/E听说.png',
  '/img/demo/互动课.png',
  '/img/demo/问诊规划.png',
  '/img/demo/多重群体画像.png',
  '/img/demo/评价方式多元.png',
  '/img/demo/五育学生评价解决方案.png',
  '/img/demo/专有大模型.png',
  '/img/demo/对话引导思考.png',
  '/img/demo/奇思妙想好问窗.png',
  '/img/demo/音乐教师.png',
  '/img/demo/数字化音乐教育解决方案.png',
  '/img/demo/解决方案体系.png',
  '/img/demo/解决方案体系完整.png',
  '/img/demo/专家团队.png',
  '/img/demo/定期普查与动态监测.png',
  '/img/demo/强化体育教育督导与评价.png',
  '/img/demo/AI裁判.png',
  '/img/demo/国家体测.png',
  '/img/demo/运动小站.png',
  '/img/demo/智慧操场.png',
  '/img/demo/健康数据.png',
  '/img/demo/课后服务平台统计.png',
  '/img/demo/放心课.png',
  '/img/demo/课后服务管理平台.png',
  '/img/demo/四部成册.png',
  '/img/demo/资源丰富.png',
  '/img/demo/个性化学习手册.png',
  '/img/demo/资源沉淀.png',
  '/img/demo/错题巩固.png',
  '/img/demo/学情诊断.png',
  '/img/demo/原卷留痕.png',
  '/img/demo/智能批改2.png',
  '/img/demo/自由出卷.png',
  '/img/demo/多维大数据驱动的监督管理.png',
  '/img/demo/测练讲评滚动一体的精准教学.png',
  '/img/demo/智能批改.png',
  '/img/demo/作业设计.png',
  '/img/demo/畅言国通.png',
  '/img/demo/学前智能助教系统.png',
  '/img/demo/AI语文课堂.png',
  '/img/demo/听说资源库.png',
  '/img/demo/AI听说课堂.png',
  '/img/demo/科学决策.png',
  '/img/demo/精准教学.png',
  '/img/demo/大数据精准教学.png',
  '/img/demo/陪伴教师成长.png',
  '/img/demo/创新教学策略.png',
  '/img/demo/辅助课件编创.png',
  '/img/demo/教师助手.png',
  '/img/demo/智能管理.png',
  '/img/demo/智能化课题管理.png',
  '/img/demo/名师研修共同体.png',
  '/img/demo/全场景成果汇聚和教研监管.png',
  '/img/demo/教研活动常态化.png',
  '/img/demo/AI教研平台.png',
  '/img/demo/多元数据采集.png',
  '/img/demo/数据模型体系.png',
  '/img/demo/兼顾教师和个人.png',
  '/img/demo/保障体系完善.png',
  '/img/demo/应用全景.png',
  '/img/demo/分析报告.png',
  '/img/demo/教育大数据洞察.png',
  '/img/demo/应用开发能力.png',
  '/img/demo/自然语言交互式应用开发.png',
  '/img/demo/星火应用开发助手.png',
  '/img/demo/在线教研.png',
  '/img/demo/中华民族共同体.png',
  '/img/demo/构建数据模型体系.png',
  '/img/demo/智慧课堂.png',
  '/img/demo/监督管理系统.png',
  '/img/demo/大数据精准助学.png',
  '/img/demo/智能课题优化.png',
  '/img/demo/教师管理系统界面.png'
];

function hashString(str = '') {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

// 根据标题稳定随机选择顶部与简介图片（来自 chinese 文件夹）
export function pickHeroAndIntroByTitle(title = '') {
  const n = CHINESE_IMAGES.length;
  if (!n) return { hero: '', intro: '' };
  const h = hashString(title || String(Date.now()));
  const heroIdx = h % n;
  const introIdx = (h + 1) % n;
  return { hero: CHINESE_IMAGES[heroIdx], intro: CHINESE_IMAGES[introIdx] };
}

// 按标题稳定随机选择价值区图片序列（来自 demo 文件夹）
export function selectDemoImagesForValues(count, title = '') {
  const n = DEMO_IMAGES.length;
  if (!n || !count) return [];
  const h = hashString(title || String(Date.now()));
  const start = h % n;
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push(DEMO_IMAGES[(start + i) % n]);
  }
  return out;
}

