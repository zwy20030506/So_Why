// 标准的 React 项目入口文件，负责将 React 应用渲染到网页上
import React from 'react';
// ReactDOM 是 React 中用于将组件渲染到 DOM（网页上的元素）中的库。这里使用 client，这是 React 18 中的新特性，允许更好的并行渲染和优化
import ReactDOM from 'react-dom/client';
// 导入样式文件，这些文件定义了应用的样式和布局
import './styles/global.css';
import './styles/styles.css';

// 导入根组件，这是应用的顶层组件，负责管理整个应用的结构和逻辑.它通常包含了其他子组件和应用的主要结构。
import App from './App';

// 创建根元素，这是 ReactDOM 创建的根节点，用于渲染应用。getElementById('root') 获取 HTML 文件中 id 为 root 的 DOM 元素，这通常是 <div id="root"></div>，React 会将整个应用挂载到这个 DOM 元素上。
const root = ReactDOM.createRoot(document.getElementById('root'));

// 渲染根组件，这是 ReactDOM 渲染应用的入口点。React.StrictMode 是一个开发模式下的工具，它帮助开发者发现潜在的性能问题、生命周期方法的问题等。它不会影响生产环境的行为，但在开发过程中提供警告和帮助。
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
