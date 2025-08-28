// 轻量本地存储：用于保存“临时方案”（自动生成的产品页面）列表
// 仅在 React 前端中维护，不修改原有 HTML 项目目录

const STORAGE_KEY = 'sowhy_temp_solutions';

export function loadSolutions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const list = JSON.parse(raw);
    if (!Array.isArray(list)) return [];
    return list;
  } catch (_) {
    return [];
  }
}

export function saveSolutions(solutions) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(solutions || []));
}

export function addSolution({ id, title, markdown }) {
  const list = loadSolutions();
  const existsIndex = list.findIndex((x) => x.id === id);
  const item = { id, title, markdown, createdAt: Date.now() };
  if (existsIndex >= 0) {
    list[existsIndex] = item;
  } else {
    list.push(item);
  }
  saveSolutions(list);
  return item;
}

export function removeSolution(id) {
  const list = loadSolutions().filter((x) => x.id !== id);
  saveSolutions(list);
}

export function getSolution(id) {
  return loadSolutions().find((x) => x.id === id) || null;
}


