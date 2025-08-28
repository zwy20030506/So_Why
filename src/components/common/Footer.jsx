import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>产品与服务</h4>
            <ul>
              <li><a href="/products">基础教育智能化</a></li>
              <li><a href="/products">特殊教育支持</a></li>
              <li><a href="/products">教育治理智能化</a></li>
              <li><a href="/products">教育智库</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>服务角色</h4>
            <ul>
              <li><a href="/roles/manager">教育管理者</a></li>
              <li><a href="/roles/teacher">教师</a></li>
              <li><a href="/roles/student">学生</a></li>
              <li><a href="/roles/parent">家长</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>教育智库</h4>
            <ul>
              <li><a href="/think-tank">教育智库</a></li>
              <li><a href="/institute">教育技术研究院</a></li>
              <li><a href="/cases">客户案例</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>关于我们</h4>
            <ul>
              <li><a href="/about">关于我们</a></li>
              <li><a href="/join">加入我们</a></li>
              <li><a href="/contact">联系我们</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>联系我们</h4>
            <p>服务热线：15680484984</p>
            <p>工作时间：08:30-22:00</p>
            <div className="social-links">
              <a href="/social/wechat"><i className="fab fa-weixin"></i></a>
              <a href="/social/weibo"><i className="fab fa-weibo"></i></a>
              <a href="/social/linkedin"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 所以然AI教育平台. 保留所有权利. 皖ICP备05001217号</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
