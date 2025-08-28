// 这是一个 React 应用的主组件，使用了 React Router 来实现不同页面间的导航
// 它使用 BrowserRouter 作为路由器，并使用 Routes 和 Route 组件来定义应用的路由规则
// 每个 Route 组件都与一个路径（path）相关联，当用户访问该路径时，相应的组件会被渲染
// Layout 组件用于管理应用的布局，它包含应用的头部、内容区域和底部等部分
// 通过这种方式，App 组件可以管理整个应用的结构和逻辑，并根据用户访问的路径来渲染相应的组件

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Awards from './pages/Awards';
import News from './pages/News';
import Papers from './pages/Papers';
import Patents from './pages/Patents';
import Software from './pages/Software';
import OpenSource from './pages/OpenSource';
import Generate from './pages/Generate';
import GeneratedDetail from './pages/GeneratedDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/generated/:id" element={<GeneratedDetail />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/news" element={<News />} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/patents" element={<Patents />} />
          <Route path="/software" element={<Software />} />
          <Route path="/open-source" element={<OpenSource />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
