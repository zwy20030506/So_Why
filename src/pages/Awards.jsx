import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Awards = () => {
  useScrollAnimation(); // 启用滚动动画

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部项目', icon: 'fas fa-th-large' },
    { id: 'smart-education', name: '智慧教育平台', icon: 'fas fa-robot' },
    { id: 'emotion-computing', name: '情感计算', icon: 'fas fa-heart' },
    { id: 'nlp-evaluation', name: 'NLP评测', icon: 'fas fa-language' },
    { id: 'data-challenge', name: '数据挑战赛', icon: 'fas fa-chart-line' },
    { id: 'community-contribution', name: '社区贡献', icon: 'fas fa-users' },
    { id: 'special-honor', name: '特殊荣誉', icon: 'fas fa-crown' }
  ];

  const awards = [
    // 国家智慧教育平台类奖项
    {
      id: 1,
      category: 'smart-education',
      image: '/img/证书/国家智慧教育平台-题目一-精品课视频资源分析.png',
      title: '国家智慧教育平台-题目一-精品课视频资源分析',
      description: '第一届国家智慧教育平台数据创新应用活动',
      year: '2025年',
      competition: '精品课视频资源分析评测',
      tags: ['视频分析', '教育资源', '智慧平台'],
      badge: { type: 'trophy', text: '国家智慧教育平台' }
    },
    {
      id: 2,
      category: 'smart-education',
      image: '/img/证书/国家智慧教育平台-题目二-多模态试题知识点标签预测.png',
      title: '国家智慧教育平台-题目二-多模态试题知识点标签预测',
      description: '第一届国家智慧教育平台数据创新应用活动',
      year: '2025年',
      competition: '多模态试题知识点标签预测评测',
      tags: ['多模态', '知识点预测', '试题分析'],
      badge: { type: 'trophy', text: '国家智慧教育平台' }
    },
    {
      id: 3,
      category: 'smart-education',
      image: '/img/证书/国家智慧教育平台-题目三-教学课件内容识别与分类.png',
      title: '国家智慧教育平台-题目三-教学课件内容识别与分类',
      description: '第一届国家智慧教育平台数据创新应用活动',
      year: '2025年',
      competition: '教学课件内容识别与分类评测',
      tags: ['内容识别', '课件分类', '教学资源'],
      badge: { type: 'trophy', text: '国家智慧教育平台' }
    },

    // CCAC情感计算类奖项
    {
      id: 4,
      category: 'emotion-computing',
      image: '/img/证书/CCAC2025第五届中国情感计算大会技术评测-中国多模态讽刺计算.jpg',
      title: 'CCAC2025第五届中国情感计算大会技术评测-中国多模态讽刺计算',
      description: '第五届中国情感计算大会技术评测',
      year: '2025年',
      competition: '中国多模态讽刺计算评测',
      tags: ['情感计算', '多模态', '讽刺识别'],
      badge: { type: 'medal', text: 'CCAC2025' }
    },
    {
      id: 5,
      category: 'emotion-computing',
      image: '/img/证书/CCAC2025第五届中国情感计算大会技术评测-四格漫画理解评测_四格漫画上下文推理.jpg',
      title: 'CCAC2025第五届中国情感计算大会技术评测-四格漫画理解评测',
      description: '第五届中国情感计算大会技术评测',
      year: '2025年',
      competition: '四格漫画上下文推理评测',
      tags: ['漫画理解', '上下文推理', '视觉理解'],
      badge: { type: 'medal', text: 'CCAC2025' }
    },
    {
      id: 6,
      category: 'emotion-computing',
      image: '/img/证书/CCAC2025第五届中国情感计算大会技术评测-细粒度比拟句情绪分析.jpg',
      title: 'CCAC2025第五届中国情感计算大会技术评测-细粒度比拟句情绪分析',
      description: '第五届中国情感计算大会技术评测',
      year: '2025年',
      competition: '细粒度比拟句情绪分析评测',
      tags: ['情绪分析', '比拟句', '细粒度'],
      badge: { type: 'medal', text: 'CCAC2025' }
    },

    // NLP评测类奖项
    {
      id: 7,
      category: 'nlp-evaluation',
      image: '/img/证书/CCL25-Eval任务五 第一届中文古诗词赏析评测.png',
      title: 'CCL25-Eval任务五 第一届中文古诗词赏析评测',
      description: '第一届中文古诗词赏析评测',
      year: '2025年',
      competition: '中文古诗词赏析评测',
      tags: ['古诗词', '赏析评测', '中文理解'],
      badge: { type: 'award', text: 'CCL25-Eval' }
    },
    {
      id: 8,
      category: 'nlp-evaluation',
      image: '/img/证书/CCL25-Eval 任务9中医辨证辨病及中药处方生成评测.png',
      title: 'CCL25-Eval 任务9中医辨证辨病及中药处方生成评测',
      description: '中医辨证辨病及中药处方生成评测',
      year: '2025年',
      competition: '中医辨证辨病及中药处方生成评测',
      tags: ['中医AI', '辨证辨病', '处方生成'],
      badge: { type: 'award', text: 'CCL25-Eval' }
    },

    // 数据挑战赛类奖项
    {
      id: 9,
      category: 'data-challenge',
      image: '/img/证书/智源行业数据应用大模型挑战赛-旅游数据赛道.png',
      title: '智源行业数据应用大模型挑战赛-旅游数据赛道',
      description: '智源行业数据应用大模型挑战赛',
      year: '2025年',
      competition: '旅游数据赛道',
      tags: ['大模型', '旅游数据', '行业应用'],
      badge: { type: 'star', text: '智源挑战赛' }
    },
    {
      id: 10,
      category: 'data-challenge',
      image: '/img/证书/AIRS2025开发大赛.jpg',
      title: 'AIRS2025开发大赛',
      description: 'AIRS2025开发大赛获奖项目',
      year: '2025年',
      competition: 'AIRS2025开发大赛',
      tags: ['开发大赛', 'AI技术', '创新应用'],
      badge: { type: 'star', text: 'AIRS2025' }
    },

    // 社区贡献类奖项
    {
      id: 11,
      category: 'community-contribution',
      image: '/img/证书/李成飞-智源开源社区价值贡献个人.png',
      title: '李成飞-智源开源社区价值贡献个人',
      description: '智源开源社区价值贡献个人奖',
      year: '2025年',
      competition: '智源开源社区',
      tags: ['开源社区', '价值贡献', '个人荣誉'],
      badge: { type: 'users', text: '社区贡献' }
    },
    {
      id: 12,
      category: 'community-contribution',
      image: '/img/证书/李晓艺-智源开源社区价值贡献个人.png',
      title: '李晓艺-智源开源社区价值贡献个人',
      description: '智源开源社区价值贡献个人奖',
      year: '2025年',
      competition: '智源开源社区',
      tags: ['开源社区', '价值贡献', '个人荣誉'],
      badge: { type: 'users', text: '社区贡献' }
    },
    {
      id: 13,
      category: 'community-contribution',
      image: '/img/证书/李静涵-智源开源社区价值贡献个人.png',
      title: '李静涵-智源开源社区价值贡献个人',
      description: '智源开源社区价值贡献个人奖',
      year: '2025年',
      competition: '智源开源社区',
      tags: ['开源社区', '价值贡献', '个人荣誉'],
      badge: { type: 'users', text: '社区贡献' }
    },
    {
      id: 14,
      category: 'community-contribution',
      image: '/img/证书/王春雨-智源开源社区价值贡献个人.png',
      title: '王春雨-智源开源社区价值贡献个人',
      description: '智源开源社区价值贡献个人奖',
      year: '2025年',
      competition: '智源开源社区',
      tags: ['开源社区', '价值贡献', '个人荣誉'],
      badge: { type: 'users', text: '社区贡献' }
    },
    {
      id: 15,
      category: 'community-contribution',
      image: '/img/证书/陈子豪-智源开源社区价值贡献个人.png',
      title: '陈子豪-智源开源社区价值贡献个人',
      description: '智源开源社区价值贡献个人奖',
      year: '2025年',
      competition: '智源开源社区',
      tags: ['开源社区', '价值贡献', '个人荣誉'],
      badge: { type: 'users', text: '社区贡献' }
    },

    // 特殊荣誉类奖项
    {
      id: 16,
      category: 'special-honor',
      image: '/img/证书/齐鲁师范学院-清华大中小学人工智能通识教育体系研究教学试点单位.png',
      title: '齐鲁师范学院-清华大中小学人工智能通识教育体系研究教学试点单位',
      description: '清华大中小学人工智能通识教育体系研究教学试点单位',
      year: '2025年',
      competition: '清华大学试点单位',
      tags: ['试点单位', '人工智能', '通识教育'],
      badge: { type: 'crown', text: '试点单位' }
    }
  ];

  const filteredAwards = activeCategory === 'all' 
    ? awards 
    : awards.filter(award => award.category === activeCategory);

  // 添加悬停效果
  useEffect(() => {
    const awardCards = document.querySelectorAll('.award-card');
    
    awardCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.transition = 'transform 0.3s ease';
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });

    return () => {
      awardCards.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, [filteredAwards]);

  // 分类切换时的动画效果
  useEffect(() => {
    const awardCards = document.querySelectorAll('.award-card');
    awardCards.forEach((card, index) => {
      if (activeCategory === 'all' || card.getAttribute('data-category') === activeCategory) {
        card.style.display = 'block';
        card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s`;
      } else {
        card.style.display = 'none';
      }
    });
  }, [activeCategory]);

  const getBadgeIcon = (type) => {
    const iconMap = {
      trophy: 'fas fa-trophy',
      medal: 'fas fa-medal',
      award: 'fas fa-award',
      star: 'fas fa-star',
      users: 'fas fa-users',
      crown: 'fas fa-crown'
    };
    return iconMap[type] || 'fas fa-award';
  };

  const timelineData = [
    {
      year: '2025年',
      content: '获得国家智慧教育平台评测3项，CCAC情感计算评测3项，CCL评测2项，智源挑战赛1项，AIRS开发大赛1项，社区贡献奖5项，试点单位1项',
      highlight: '在多个AI技术领域取得重大突破，获得广泛认可'
    },
    {
      year: '2024年',
      content: '在自然语言处理、情感计算、多模态理解等领域持续深耕',
      highlight: '技术实力稳步提升，为2025年的突破性成果奠定基础'
    },
    {
      year: '2023年',
      content: '开始在教育AI和NLP领域崭露头角',
      highlight: '团队组建完成，开始系统性的技术研发和项目实践'
    }
  ];

  return (
    <div className="awards-page">
      {/* 页面标题区域 */}
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">首页</a> / <span>比赛奖项</span>
          </div>
          <h1 className="page-title">比赛奖项</h1>
          <p className="page-subtitle">展示所以然AI教育平台在各类比赛中的获奖成果，见证我们的创新与卓越</p>
        </div>
      </div>

      {/* 奖项统计概览 */}
      <section className="awards-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="overview-number">17</div>
              <div className="overview-label">总计获奖</div>
            </div>
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fas fa-medal"></i>
              </div>
              <div className="overview-number">5</div>
              <div className="overview-label">国家智慧教育平台</div>
            </div>
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="overview-number">5</div>
              <div className="overview-label">CCAC情感计算</div>
            </div>
            <div className="overview-card">
              <div className="overview-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="overview-number">7</div>
              <div className="overview-label">其他重要奖项</div>
            </div>
          </div>
        </div>
      </section>

      {/* 项目分类导航 */}
      <section className="project-categories">
        <div className="container">
          <div className="section-header">
            <h2>项目分类</h2>
            <p>按项目类型浏览我们的获奖成果</p>
          </div>
          <div className="category-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <i className={category.icon}></i>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 奖项展示区域 */}
      <section className="awards-showcase">
        <div className="container">
          <div className="awards-grid">
            {filteredAwards.map(award => (
              <div key={award.id} className="award-card" data-category={award.category}>
                <div className="award-image">
                  <img src={award.image} alt={award.title} />
                  <div className="award-badge">
                    <i className={getBadgeIcon(award.badge.type)}></i>
                    {award.badge.text}
                  </div>
                </div>
                <div className="award-content">
                  <h3>{award.title}</h3>
                  <p className="award-description">{award.description}</p>
                  <div className="award-meta">
                    <span className="award-year">{award.year}</span>
                    <span className="award-competition">{award.competition}</span>
                  </div>
                  <div className="award-tags">
                    {award.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 获奖历程时间线 */}
      <section className="awards-timeline">
        <div className="container">
          <div className="section-header">
            <h2>获奖历程</h2>
            <p>见证我们的成长与进步</p>
          </div>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{item.year}</h3>
                  <p>{item.content}</p>
                  <div className="timeline-highlight">{item.highlight}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2>想要了解更多获奖项目？</h2>
            <p>联系我们的团队，获取详细的项目介绍和技术方案</p>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="btn btn-primary btn-large">联系我们</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Awards;
