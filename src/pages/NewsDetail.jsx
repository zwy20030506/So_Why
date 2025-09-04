import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '../components/layout/Container';
import { getNewsById } from '../utils/newsData';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const news = getNewsById(parseInt(id));

  if (!news) {
    return (
      <div className="news-detail-page">
        <Container>
          <div className="news-not-found">
            <h2>新闻不存在</h2>
            <p>抱歉，您访问的新闻内容不存在或已被删除。</p>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/news')}
            >
              返回新闻列表
            </button>
          </div>
        </Container>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="news-detail-page">
      <Container>
        {/* 返回按钮 */}
        <div className="news-back">
          <button 
            className="back-btn"
            onClick={() => navigate('/news')}
          >
            ← 返回新闻列表
          </button>
        </div>

        {/* 新闻头部信息 */}
        <article className="news-article">
          <header className="news-header">
            <div className="news-category-badge">
              {news.category}
            </div>
            <h1 className="news-title">{news.title}</h1>
            <div className="news-meta">
              <div className="meta-left">
                <span className="meta-item">
                  <i className="icon">📅</i>
                  {formatDate(news.date)}
                </span>
                <span className="meta-item">
                  <i className="icon">👤</i>
                  {news.author}
                </span>
                <span className="meta-item">
                  <i className="icon">👁️</i>
                  {news.readCount} 次阅读
                </span>
              </div>
              <div className="meta-right">
                <span className="publish-time">
                  发布时间：{formatDate(news.date)}
                </span>
              </div>
            </div>
          </header>

          {/* 新闻图片 */}
          {news.image && (
            <div className="news-image">
              <img src={news.image} alt={news.title} />
            </div>
          )}

          {/* 新闻标签 */}
          <div className="news-tags">
            {news.tags.map((tag, index) => (
              <span key={index} className="news-tag">{tag}</span>
            ))}
          </div>

          {/* 新闻内容 */}
          <div className="news-content">
            <div 
              className="content-html"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </div>

          {/* 新闻底部信息 */}
          <footer className="news-footer">
            <div className="news-actions">
              <button className="action-btn">
                <i className="icon">👍</i>
                点赞
              </button>
              <button className="action-btn">
                <i className="icon">💬</i>
                评论
              </button>
              <button className="action-btn">
                <i className="icon">📤</i>
                分享
              </button>
            </div>
            
            <div className="news-source">
              <p>文章来源：智学古韵官方发布</p>
              <p>版权声明：本文版权归智学古韵所有，转载请注明出处</p>
            </div>
          </footer>
        </article>

        {/* 相关新闻推荐 */}
        <section className="related-news">
          <h3 className="section-title">相关新闻</h3>
          <div className="related-news-grid">
            {news.relatedNews.map(relatedId => {
              const relatedNews = getNewsById(relatedId);
              if (!relatedNews) return null;
              
              return (
                <div key={relatedId} className="related-news-item">
                  <div className="related-news-image">
                    <img src={relatedNews.image} alt={relatedNews.title} />
                  </div>
                  <div className="related-news-content">
                    <h4>{relatedNews.title}</h4>
                    <p>{relatedNews.description}</p>
                    <div className="related-news-meta">
                      <span>{formatDate(relatedNews.date)}</span>
                      <span>{relatedNews.category}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default NewsDetail;
