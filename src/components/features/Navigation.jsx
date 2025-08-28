import React, { useRef, useEffect, useMemo } from 'react';
import { useNavigation } from '../../hooks/useNavigation';
import { loadSolutions } from '../../utils/tempSolutions';

const Navigation = ({ mobileOpen = false, navRef, onNavigate }) => {
  const { activeDropdown, handleDropdownToggle, registerDropdown } = useNavigation();
  const productsDropdownRef = useRef(null);
  const honorsDropdownRef = useRef(null);

  useEffect(() => {
    registerDropdown('products', productsDropdownRef.current);
    registerDropdown('honors', honorsDropdownRef.current);
  }, [registerDropdown]);

  return (
    <nav className={`nav ${mobileOpen ? 'mobile-menu-open' : ''}`} ref={navRef}>
      <ul className="nav-list">
        <li className="nav-item dropdown" ref={productsDropdownRef}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a 
            href="#" 
            className="nav-link" 
            onClick={(e) => {
              e.preventDefault();
              handleDropdownToggle('products');
            }}
          >
            产品与服务 <i className="fas fa-chevron-down"></i>
          </a>
          <div className={`dropdown-menu ${activeDropdown === 'products' ? 'active' : ''}`}>
            <div className="container">
              <div className="dropdown-columns">
                <div className="dropdown-column">
                  <h4>区域教育治理</h4>
                  <ul>
                    <li><a href="/products/yincaishijiao" onClick={onNavigate}>因材施教综合解决方案</a></li>
                    <li><a href="/products/edu-foundation" onClick={onNavigate}>教育数字基座</a></li>
                    <li><a href="/products/spark-dev" onClick={onNavigate}>星火应用开发助手</a></li>
                    <li><a href="/products/edu-insight" onClick={onNavigate}>教育大数据洞察</a></li>
                    <li><a href="/products/ai-research" onClick={onNavigate}>AI教研平台</a></li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>校园主阵地建设</h4>
                  <ul>
                    <li><a href="/products/smart-classroom" onClick={onNavigate}>智慧课堂</a></li>
                    <li><a href="/products/spark-teacher" onClick={onNavigate}>星火教师助手</a></li>
                    <li><a href="/products/personalized-learning" onClick={onNavigate}>个性化学习手册</a></li>
                    <li><a href="/products/ai-speaking" onClick={onNavigate}>AI听说课堂</a></li>
                    <li><a href="/products/precise-teaching" onClick={onNavigate}>大数据精准教学</a></li>
                    <li><a href="/products/smart-pe" onClick={onNavigate}>智慧体育</a></li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>智慧考试</h4>
                  <ul>
                    <li><a href="/products/traditional-exam" onClick={onNavigate}>传统教育考试</a></li>
                    <li><a href="/products/cbt-exam" onClick={onNavigate}>计算机化考试</a></li>
                    <li><a href="/products/language-test" onClick={onNavigate}>智能语言测试</a></li>
                    <li><a href="/products/language-learning" onClick={onNavigate}>智能语言学习</a></li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>临时方案</h4>
                  <ul>
                    {useMemo(() => loadSolutions(), []).map((s) => (
                      <li key={s.id}><a href={`/generated/${s.id}`} onClick={onNavigate}>{s.title}</a></li>
                    ))}
                    <li><a href="/generate" onClick={onNavigate}>+ 自动生成</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item dropdown" ref={honorsDropdownRef}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a 
            href="#" 
            className="nav-link" 
            onClick={(e) => {
              e.preventDefault();
              handleDropdownToggle('honors');
            }}
          >
            团队荣誉 <i className="fas fa-chevron-down"></i>
          </a>
          <div className={`dropdown-menu ${activeDropdown === 'honors' ? 'active' : ''}`}>
            <div className="container">
              <div className="dropdown-columns">
                <div className="dropdown-column">
                  <h4>团队成就</h4>
                  <ul>
                    <li><a href="/news" onClick={onNavigate}>新闻咨询</a></li>
                    <li><a href="/open-source" onClick={onNavigate}>开源模型</a></li>
                    <li><a href="/awards" onClick={onNavigate}>比赛奖项</a></li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>知识产权</h4>
                  <ul>
                    <li><a href="/patents" onClick={onNavigate}>专利</a></li>
                    <li><a href="/papers" onClick={onNavigate}>论文</a></li>
                    <li><a href="/software" onClick={onNavigate}>软著</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item"><a href="/ai-platform" className="nav-link" onClick={onNavigate}>AI数据平台</a></li>
        <li className="nav-item"><a href="/think-tank" className="nav-link" onClick={onNavigate}>教育智库</a></li>
        <li className="nav-item"><a href="/about" className="nav-link" onClick={onNavigate}>关于我们</a></li>
        <li className="nav-item"><a href="/contact" className="nav-link" onClick={onNavigate}>联系我们</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
