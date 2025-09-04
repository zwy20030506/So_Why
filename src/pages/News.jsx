import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/layout/Container';
import { getAllNews } from '../utils/newsData';

const News = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const newsItems = getAllNews();
  const sortedNews = useMemo(() => {
    return [...newsItems].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [newsItems]);
  const featuredNews = sortedNews.slice(0, 3);
  const listNews = useMemo(() => {
    if (!searchTerm) return sortedNews;
    const term = searchTerm.toLowerCase();
    return sortedNews.filter(n =>
      n.title.toLowerCase().includes(term) ||
      n.description.toLowerCase().includes(term) ||
      (n.tags || []).some(t => t.toLowerCase().includes(term))
    );
  }, [sortedNews, searchTerm]);

  // 无需在此设置样式，使用统一的 hero 结构样式
  useEffect(() => {}, []);

  // 移除分类与分页，保留搜索

  const handleNewsClick = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  return (
    <div className="news-page">
      {/* 顶部横幅区域：复用产品与服务页的 hero 结构 */}
      <div className="product-hero news-hero">
        <div className="hero-background">
          <img src="/img/青绿水墨风一叶知秋.png" alt="新闻资讯背景" />
        </div>
        <div className="hero-overlay"></div>
        <Container>
          <div className="hero-content">
            <h1 className="hero-title">新闻资讯</h1>
            <p className="hero-subtitle">AI赋能，让一切皆有可能</p>
            <div className="banner-search">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="搜索新闻资讯..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <button className="search-btn">
                  <i className="search-icon">🔍</i>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* 新闻总览：左窄右宽 1:3 */}
        <section className="news-overview">
          <div className="overview-grid">
            <div className="overview-left">
              <h3 className="overview-title">最新发布</h3>
              <div className="overview-featured">
                {featuredNews.map(item => (
                  <article
                    key={item.id}
                    className="featured-card"
                    onClick={() => handleNewsClick(item.id)}
                  >
                    <div className="featured-thumb">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="featured-info">
                      <h4 className="featured-title">{item.title}</h4>
                      <span className="featured-date">{formatDate(item.date)}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="overview-right">
              <h3 className="overview-title">新闻列表</h3>
              <ul className="overview-list">
                {listNews.map(item => (
                  <li key={item.id} className="overview-list-item" onClick={() => handleNewsClick(item.id)}>
                    <span className="list-title">{item.title}</span>
                    <span className="list-date">{formatDate(item.date)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default News;
