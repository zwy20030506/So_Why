import React from 'react';
import Container from '../components/layout/Container';
import Card from '../components/common/Card';

const Software = () => {
  const softwareItems = [
    {
      title: '智学古韵教育平台V1.0',
      registrationNumber: '2024SR012345',
      developers: '智学古韵团队',
      completionDate: '2024-01-10',
      description: '融合传统文化与现代AI技术的教育平台软件'
    },
    {
      title: 'AI教研助手系统V2.0',
      registrationNumber: '2023SR098765',
      developers: '智学古韵团队',
      completionDate: '2023-12-15',
      description: '智能化的教学研究辅助系统'
    },
    {
      title: '古诗词智能理解系统V1.5',
      registrationNumber: '2023SR087654',
      developers: '智学古韵团队',
      completionDate: '2023-11-20',
      description: '基于AI的古诗词理解与赏析系统'
    }
  ];

  return (
    <div className="software-page">
      <Container>
        <h1 className="page-title">软件著作权</h1>
        
        <section className="software-section">
          <div className="software-grid">
            {softwareItems.map((software, index) => (
              <Card
                key={index}
                title={software.title}
                description={software.description}
                className="software-card"
              >
                <div className="software-meta">
                  <p><strong>登记号:</strong> {software.registrationNumber}</p>
                  <p><strong>开发者:</strong> {software.developers}</p>
                  <p><strong>完成日期:</strong> {software.completionDate}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Software;
