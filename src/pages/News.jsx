import React from 'react';
import Container from '../components/layout/Container';
import Card from '../components/common/Card';

const News = () => {
  const newsItems = [
    {
      title: '智学古韵平台正式上线',
      description: '融合传统文化与现代AI技术的教育平台正式启动',
      date: '2024-01-15',
      category: '平台动态'
    },
    {
      title: 'AI教研平台获得教育部门认可',
      description: '我们的AI教研平台在教育部门评估中获得高度评价',
      date: '2024-01-10',
      category: '产品新闻'
    },
    {
      title: '参加2024教育科技展',
      description: '智学古韵团队将参加2024年教育科技展览会',
      date: '2024-01-05',
      category: '活动信息'
    }
  ];

  return (
    <div className="news-page">
      <Container>
        <h1 className="page-title">新闻咨询</h1>
        
        <section className="news-section">
          <div className="news-grid">
            {newsItems.map((news, index) => (
              <Card
                key={index}
                title={news.title}
                description={news.description}
                className="news-card"
              >
                <div className="news-meta">
                  <span className="news-date">{news.date}</span>
                  <span className="news-category">{news.category}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default News;
