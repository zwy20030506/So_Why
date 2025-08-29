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
                  <h4>基础教育</h4>
                  <ul>
                    <li><a href="/products/智能作文修改" onClick={onNavigate}>智能作文修改</a></li>
                    <li><a href="/products/古诗词语音评测" onClick={onNavigate}>古诗词语音评测</a></li>
                    <li><a href="/products/智能书法练习" onClick={onNavigate}>智能书法练习</a></li>
                    <li><a href="/products/数学讲题生成" onClick={onNavigate}>数学讲题生成</a></li>
                    <li><a href="/products/基于SOLO的作业批改" onClick={onNavigate}>基于SOLO的作业批改</a></li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>特殊教育</h4>
                  <ul>
                    <li><a href="/products/声纹传语" onClick={onNavigate}>声纹传语</a></li>
                    <li><a href="/products/字词评测系统" onClick={onNavigate}>字词评测系统</a></li>
                    <li><a href="/products/盲文智能批改系统" onClick={onNavigate}>盲文智能批改系统</a></li>
                    <li><a href="/products/构音障碍识别" onClick={onNavigate}>构音障碍识别</a></li>
                    <li><a href="/products/AI言语康复师" onClick={onNavigate}>AI言语康复师</a></li>
                    <li><a href="/products/心理陪伴" onClick={onNavigate}>心理陪伴</a></li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>其他产品</h4>
                  <ul>
                    <li><a href="/products/传统教育考试" onClick={onNavigate}>传统教育考试</a></li>
                    <li><a href="/products/计算机化考试" onClick={onNavigate}>计算机化考试</a></li>
                    <li><a href="/products/智能语言测试" onClick={onNavigate}>智能语言测试</a></li>
                    <li><a href="/products/智能语言学习" onClick={onNavigate}>智能语言学习</a></li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <h4>计划方案</h4>
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
