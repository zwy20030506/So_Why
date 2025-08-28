import React from 'react';
import Container from '../components/layout/Container';
import Card from '../components/common/Card';

const Papers = () => {
  const papers = [
    {
      title: '基于AI的古诗词理解与生成研究',
      authors: '张三, 李四, 王五',
      journal: '计算机学报',
      year: '2024',
      abstract: '本文提出了一种基于深度学习的古诗词理解与生成方法...'
    },
    {
      title: '教育大数据分析与个性化教学',
      authors: '赵六, 钱七',
      journal: '教育研究',
      year: '2023',
      abstract: '通过分析教育大数据，实现个性化教学策略的制定...'
    },
    {
      title: '多模态情感计算在教育中的应用',
      authors: '孙八, 周九',
      journal: '人工智能学报',
      year: '2023',
      abstract: '探索多模态情感计算技术在教育场景中的实际应用...'
    }
  ];

  return (
    <div className="papers-page">
      <Container>
        <h1 className="page-title">学术论文</h1>
        
        <section className="papers-section">
          <div className="papers-grid">
            {papers.map((paper, index) => (
              <Card
                key={index}
                title={paper.title}
                description={paper.abstract}
                className="paper-card"
              >
                <div className="paper-meta">
                  <p><strong>作者:</strong> {paper.authors}</p>
                  <p><strong>期刊:</strong> {paper.journal}</p>
                  <p><strong>年份:</strong> {paper.year}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Papers;
