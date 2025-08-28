import React from 'react';
import Container from '../components/layout/Container';
import Card from '../components/common/Card';

const Patents = () => {
  const patents = [
    {
      title: '一种基于深度学习的古诗词理解方法',
      patentNumber: 'CN202410123456.7',
      inventors: '张三, 李四',
      applicationDate: '2024-01-15',
      status: '已授权',
      abstract: '本发明涉及一种基于深度学习的古诗词理解方法...'
    },
    {
      title: '教育大数据分析系统及方法',
      patentNumber: 'CN202310987654.3',
      inventors: '王五, 赵六',
      applicationDate: '2023-12-20',
      status: '实质审查',
      abstract: '本发明提供了一种教育大数据分析系统及方法...'
    },
    {
      title: '多模态情感计算在教育中的应用系统',
      patentNumber: 'CN202310876543.2',
      inventors: '钱七, 孙八',
      applicationDate: '2023-11-10',
      status: '已公开',
      abstract: '本发明涉及多模态情感计算在教育中的应用系统...'
    }
  ];

  return (
    <div className="patents-page">
      <Container>
        <h1 className="page-title">专利技术</h1>
        
        <section className="patents-section">
          <div className="patents-grid">
            {patents.map((patent, index) => (
              <Card
                key={index}
                title={patent.title}
                description={patent.abstract}
                className="patent-card"
              >
                <div className="patent-meta">
                  <p><strong>专利号:</strong> {patent.patentNumber}</p>
                  <p><strong>发明人:</strong> {patent.inventors}</p>
                  <p><strong>申请日期:</strong> {patent.applicationDate}</p>
                  <p><strong>状态:</strong> <span className={`status-${patent.status === '已授权' ? 'granted' : 'pending'}`}>{patent.status}</span></p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Patents;
