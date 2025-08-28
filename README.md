# 智学古韵 - 所以然AI教育平台

这是原始HTML+CSS+JS网站的React版本迁移项目。

更多关于项目结构与规范说明，见《学习迁移react.md》。

## 迁移进度

### ✅ 已完成
- **主页 (Home)** - 完全迁移完成
  - 顶部导航栏（包括下拉菜单）
  - 主轮播图（带进度条和动画）
  - 服务角色展示
  - 核心产品预览
  - 客户案例展示
  - 数据统计
  - 联系表单
  - 页脚

### 🔄 进行中
- 其他页面已完成基础路由与页面骨架，内容与样式细化中

### 📋 待完成
- 产品与服务、团队荣誉、新闻咨询、开源模型、比赛奖项、专利、论文、软著等页面的内容完善与数据填充

## 技术栈

- **前端框架**: React 18.2.0
- **路由**: React Router 6.3.0
- **样式**: CSS3 (保持原始设计)
- **图标**: Font Awesome 6.0.0
- **构建工具**: Create React App

## 项目结构

```
src/
├── components/
│   ├── common/           # 通用组件
│   │   ├── Button.jsx    # 按钮组件
│   │   ├── Card.jsx      # 卡片组件
│   │   ├── Footer.jsx    # 页脚组件
│   │   ├── Header.jsx    # 头部组件
│   │   └── Logo.jsx      # Logo组件
│   ├── features/         # 功能组件
│   │   ├── Carousel.jsx  # 轮播图组件
│   │   ├── Dropdown.jsx  # 下拉菜单组件
│   │   └── Navigation.jsx # 导航组件
│   └── layout/           # 布局组件
│       ├── Container.jsx # 容器组件
│       └── Layout.jsx    # 主布局组件
├── hooks/                # 自定义Hooks
│   ├── useCarousel.js    # 轮播图逻辑
│   ├── useNavigation.js  # 导航逻辑
│   └── useScrollAnimation.js # 滚动动画逻辑
├── pages/                # 页面组件
│   ├── Home.jsx          # 主页
│   ├── Products.jsx      # 产品与服务
│   ├── Awards.jsx        # 团队荣誉/奖项
│   ├── News.jsx          # 新闻咨询
│   ├── OpenSource.jsx    # 开源模型
│   ├── Patents.jsx       # 专利
│   ├── Papers.jsx        # 论文
│   └── Software.jsx      # 软著
└── styles/               # 样式文件
    ├── global.css        # 全局样式
    └── styles.css        # 主要样式（从原始项目迁移）
```

## 设计保持

- ✅ 完全保持原始的视觉设计
- ✅ 保持所有动画效果
- ✅ 保持响应式布局
- ✅ 保持交互行为
- ✅ 保持字体和颜色方案

## 组件化改进

- 🔧 将原始的单体HTML拆分为可复用组件
- 🔧 使用React Hooks管理状态和副作用
- 🔧 实现响应式下拉菜单
- 🔧 优化轮播图性能
- 🔧 添加滚动动画触发

## 运行项目

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm start
```

3. 构建生产版本：
```bash
npm run build
```

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 注意事项

- 所有图片资源已复制到 `public/img/` 目录
- 原始CSS样式完全保留，确保视觉效果一致
- 使用React Router进行页面导航
- 保持原始的中文内容和文案
- 生产部署使用 `BrowserRouter` 时，请配置服务端将未知路径回退到 `index.html`（SPA 重写规则）
- `public/index.html` 默认引用了 `favicon.ico` 与 `logo192.png`，如未提供请补齐或移除对应引用

## 下一步计划

1. 迁移其他页面组件
2. 优化性能和加载速度
3. 添加更多交互功能
4. 实现完整的路由系统
5. 添加状态管理（如需要）
