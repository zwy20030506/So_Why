// 应用常量
export const APP_NAME = '智学古韵';
export const APP_MOTTO = '知其然，知其所以然';
export const APP_DESCRIPTION = '所以然AI教育平台';

// 路由常量
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  AWARDS: '/awards',
  NEWS: '/news',
  PAPERS: '/papers',
  PATENTS: '/patents',
  SOFTWARE: '/software'
};

// 产品分类
export const PRODUCT_CATEGORIES = {
  REGIONAL_EDUCATION: '区域教育治理',
  CAMPUS_CONSTRUCTION: '校园主阵地建设',
  SMART_EXAM: '智慧考试',
  TEMPORARY_SOLUTIONS: '临时方案'
};

// 导航配置
export const NAVIGATION_CONFIG = {
  products: {
    title: '产品与服务',
    columns: 4
  },
  honors: {
    title: '团队荣誉',
    columns: 2
  }
};

// API配置
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  TIMEOUT: 10000
};

// 图片路径
export const IMAGE_PATHS = {
  LOGO: '/img/logo.png',
  CAROUSEL: {
    SLIDE1: '/img/轮播图1.png',
    SLIDE2: '/img/青绿水墨风一叶知秋.png',
    SLIDE3: '/img/青绿水墨风渔舟唱晚.png'
  }
};
