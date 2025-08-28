# 智学古韵 - 所以然AI教育平台（React 迁移版 + 内置文心生成服务）

这是原始 HTML+CSS+JS 网站的 React 版本迁移项目，并内置了“调用文心大模型自动生成页面”的服务与前端页面，彻底摆脱旧 FastAPI 依赖。

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

- **自动生成功能（React 内置）**
  - 新增前端页面：`/generate`（表单生成）
  - 新增详情页：`/generated/:id`（渲染生成 Markdown）
  - 导航“临时方案”动态展示生成结果（localStorage 持久化）
  - 内置 Node 服务：`So_Why/server/index.js` 直接调用文心接口

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
- **服务端（内置）**: Node + Express（调用文心大模型 API）

## 项目结构（节选）

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
│   ├── Generate.jsx      # 自动生成页面（新）
│   ├── GeneratedDetail.jsx # 生成结果详情（新）
│   ├── Awards.jsx        # 团队荣誉/奖项
│   ├── News.jsx          # 新闻咨询
│   ├── OpenSource.jsx    # 开源模型
│   ├── Patents.jsx       # 专利
│   ├── Papers.jsx        # 论文
│   └── Software.jsx      # 软著
└── styles/               # 样式文件
    ├── global.css        # 全局样式
    └── styles.css        # 主要样式（从原始项目迁移）

server/
└── index.js              # 内置 Node 服务（调用文心 API）
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

2. 推荐：同时启动前端与内置文心服务（开发联动）：
```bash
npm run dev
```

等价于同时执行：
```bash
npm run server   # 启动内置 Node 服务（默认端口 8016）
npm start        # 启动 CRA 前端（默认端口 3000）
```

3. 构建生产版本：
```bash
npm run build
```

4. 健康检查（内置服务）：
```text
GET http://localhost:8016/api/health
```

5. 生成演示：
- 访问前端路由 `/generate`
- 填写“产品名称”（可选“基础信息/要点”）→ 点击“生成页面”
- 成功后跳转到 `/generated/:id` 查看，导航“临时方案”自动出现该条目

## 环境变量（文心 API）

- `WENXIN_API_KEY`（必填，推荐）：文心大模型 API Key
- `WENXIN_BASE_URL`（可选，默认 `https://aistudio.baidu.com/llm/lmapi/v3`）
- `WENXIN_MODEL`（可选，默认 `ernie-4.5-turbo-128k-preview`）

Windows（cmd）一键示例：
```bat
set WENXIN_API_KEY=你的key && npm run dev
```

说明：当前项目按“环境变量优先”的方式调用文心；未设置时不会使用旧 FastAPI，保持 React 内置服务独立。

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 注意事项

- 所有图片资源已复制到 `public/img/` 目录
- 原始CSS样式完全保留，确保视觉效果一致
- 使用 React Router 进行页面导航（新增 `/generate`、`/generated/:id`）
- 保持原始的中文内容和文案
- 生产部署使用 `BrowserRouter` 时，请配置服务端将未知路径回退到 `index.html`（SPA 重写规则）
- `public/index.html` 默认引用了 `favicon.ico` 与 `logo192.png`，如未提供请补齐或移除对应引用

## 下一步计划

1. 迁移其他页面组件
2. 优化性能和加载速度
3. 添加更多交互功能（如更高保真的 Markdown 渲染）
4. 实现完整的路由系统
5. 添加状态管理（如需要）
