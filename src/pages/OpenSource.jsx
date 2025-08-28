import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const OpenSource = () => {
  useScrollAnimation(); // 启用滚动动画

  return (
    <div className="open-source-page">
      {/* 页面标题区域 */}
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">首页</a> / <span>开源模型</span>
          </div>
          <h1 className="page-title">开源模型</h1>
          <p className="page-subtitle">展示所以然AI教育平台的开源贡献与模型分享</p>
        </div>
      </div>

      {/* 页面内容区域 */}
      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <div className="coming-soon">
              <div className="coming-soon-icon">
                <i className="fas fa-code-branch"></i>
              </div>
              <h2>开源模型</h2>
              <p>我们的开源模型和代码库正在整理中，敬请期待...</p>
              <div className="features-preview">
                <div className="feature-item">
                  <i className="fas fa-brain"></i>
                  <h3>AI教育模型</h3>
                  <p>专注于教育领域的人工智能模型</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-language"></i>
                  <h3>NLP工具包</h3>
                  <p>自然语言处理相关的开源工具</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-graduation-cap"></i>
                  <h3>教学资源</h3>
                  <p>开放的教学数据集和评测基准</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>想要了解更多开源项目？</h2>
            <p>联系我们的团队，获取最新的开源模型和技术资料</p>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="btn btn-primary btn-large">联系我们</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpenSource;
