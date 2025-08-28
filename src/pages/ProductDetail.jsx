import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PRODUCT_CONTENT = {
  'yincaishijiao': {
    title: '因材施教综合解决方案',
    heroImage: '/img/江南书院联盟.png',
    introImage: '/img/构建数据模型体系.png',
    subtitle: '数据驱动的分层分类教学与精准评价',
    description:
      '以学习者画像为核心，联通校内外数据，提供分层教学、个性化资源推荐与过程性评价，帮助区域与学校落地因材施教。'
  },
  'edu-foundation': {
    title: '教育数字基座',
    heroImage: '/img/浅色棕黄色系-圆形-荷花.png',
    introImage: '/img/构建数据模型体系.png',
    subtitle: '统一的数据与能力底座，支撑教育全场景应用',
    description:
      '围绕身份、数据、知识与算力构建统一底座，提供标准化接入与治理能力，支撑区域教育数字化转型。'
  },
  'spark-dev': {
    title: '星火应用开发助手',
    heroImage: '/img/浅黄色系_飞鸟与黄花.png',
    introImage: '/img/创新教学策略.png',
    subtitle: '低门槛、快速构建教育AI应用',
    description:
      '面向教育业务的应用搭建助手，支持可视化编排、组件复用与模型接入，快速实现业务需求落地。'
  },
  'edu-insight': {
    title: '教育大数据洞察',
    heroImage: '/img/青绿水墨风一叶知秋.png',
    introImage: '/img/大数据精准助学.png',
    subtitle: '从数据到洞察，从洞察到决策',
    description:
      '提供学情、教情、校情多维度分析看板，辅助区域与学校开展治理评估与决策优化。'
  },
  'ai-research': {
    title: 'AI教研平台',
    heroImage: '/img/在线教研.png',
    introImage: '/img/在线教研.png',
    subtitle: 'AI助力备课、磨课与资源共建',
    description:
      '集备课、生生成、课堂反馈与教研协作于一体，沉淀优质资源与教研成果。'
  },
  'smart-classroom': {
    title: '智慧课堂',
    heroImage: '/img/智慧课堂.png',
    introImage: '/img/智慧课堂.png',
    subtitle: '以学为中心的课堂重构与数据闭环',
    description:
      '课堂多模态采集与实时反馈，支持教学过程优化与因材施教落地。'
  },
  'spark-teacher': {
    title: '星火教师助手',
    heroImage: '/img/教师管理系统界面.png',
    introImage: '/img/教师管理系统界面.png',
    subtitle: '让教师专注于教，繁杂交给AI',
    description:
      '提供教案生成、作业批阅、测评分析等辅助能力，提升教师教学效率。'
  },
  'personalized-learning': {
    title: '个性化学习手册',
    heroImage: '/img/青绿水墨风渔舟唱晚.png',
    introImage: '/img/青绿水墨风渔舟唱晚.png',
    subtitle: '千人千面的学习路径与资源推荐',
    description:
      '基于学生画像与知识图谱，动态生成个性化学习路径与资源清单。'
  },
  'ai-speaking': {
    title: 'AI听说课堂',
    heroImage: '/img/听说资源库.png',
    introImage: '/img/吟诵课堂.png',
    subtitle: '口语听力AI评测与个性化训练',
    description:
      '面向语文学科的吟诵与口语训练，提供即时测评与纠错反馈。'
  },
  'precise-teaching': {
    title: '大数据精准教学',
    heroImage: '/img/大数据精准助学.png',
    introImage: '/img/大数据精准助学.png',
    subtitle: '以数据为依据的精准教与学',
    description:
      '通过学情诊断与资源匹配，支持备、教、学、评全流程的精准化。'
  },
  'smart-pe': {
    title: '智慧体育',
    heroImage: '/img/监督管理系统.png',
    introImage: '/img/监督管理系统.png',
    subtitle: '体测数据与课堂教学一体化',
    description:
      '采集学生体能数据，驱动体育教学与课后锻炼闭环管理。'
  },
  'traditional-exam': {
    title: '传统教育考试',
    heroImage: '/img/古韵科考系统.png',
    introImage: '/img/古韵科考系统.png',
    subtitle: '纸笔考试数字化管理',
    description:
      '支持命题、制卷、阅卷、统计全流程的信息化管理。'
  },
  'cbt-exam': {
    title: '计算机化考试',
    heroImage: '/img/监督管理系统.png',
    introImage: '/img/监督管理系统.png',
    subtitle: '安全可靠的上机考试方案',
    description:
      '题库管理、随机组卷、防作弊监测与成绩分析一体化。'
  },
  'language-test': {
    title: '智能语言测试',
    heroImage: '/img/听说资源库.png',
    introImage: '/img/听说资源库.png',
    subtitle: '发音、韵律、语义理解多维评估',
    description:
      '提供分项评分与改进建议，支持个性化训练计划生成。'
  },
  'language-learning': {
    title: '智能语言学习',
    heroImage: '/img/吟诵课堂.png',
    introImage: '/img/吟诵课堂.png',
    subtitle: 'AI互动式语言学习体验',
    description:
      '沉浸式互动学习与即时反馈，提升语言学习效果。'
  },
  'ai-device': {
    title: 'AI学习机',
    heroImage: '/img/浅黄色系_飞鸟与黄花.png',
    introImage: '/img/浅黄色棕黄色系-圆形-荷花.png',
    subtitle: '随时随地的个性化学习助手',
    description:
      '软硬件一体的学习终端，支持多学科、多场景学习应用。'
  },
  'digital-homework': {
    title: '数智作业',
    heroImage: '/img/构建数据模型体系.png',
    introImage: '/img/构建数据模型体系.png',
    subtitle: '布置、完成、批改、反馈全流程在线化',
    description:
      '信息化作业平台，提供智能批改与过程性评价能力。'
  },
  'ranxi-writing': {
    title: '然析智能作文批改',
    heroImage: '/img/青绿水墨风渔舟唱晚.png',
    introImage: '/img/作文润色.png',
    subtitle: 'AI赋能，让每一篇作文都得到精准反馈与高效提升',
    description:
      '自然语言处理与深度学习加持，提供语法、结构、表达全方位批改建议。'
  }
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = PRODUCT_CONTENT[slug];

  if (!product) {
    return (
      <div className="container" style={{ padding: '40px 0' }}>
        <h2>未找到对应的产品页面</h2>
        <p>请从导航中选择其他产品。</p>
        <Link to="/products" className="btn btn-primary">返回产品与服务</Link>
      </div>
    );
  }

  return (
    <div className="products-page">
      <section className="product-hero">
        <div className="hero-background">
          <img src={product.heroImage} alt={product.title} />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">首页</Link> &gt; <Link to="/products">产品与服务</Link> &gt; <span>{product.title}</span>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">{product.title}</h1>
            {product.subtitle && <p className="hero-subtitle">{product.subtitle}</p>}
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary btn-large">联系我们</a>
              <a href="#product-intro" className="btn btn-outline btn-large">了解详情</a>
            </div>
          </div>
        </div>
      </section>

      <section id="product-intro" className="product-intro product-intro-modern">
        <div className="container">
          <div className="intro-wrapper">
            <div className="intro-text">
              <h2 className="intro-title">产品简介</h2>
              <p className="intro-description">{product.description}</p>
              <div className="intro-visual">
                <div className="visual-container">
                  <img src={product.introImage} alt={product.title} />
                  <div className="visual-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品价值（与原产品页一致的模块结构） */}
      <section className="product-value">
        <div className="container">
          <div className="section-header">
            <h2>产品价值</h2>
          </div>
          <div className="value-section">
            <div className="value-item text-right">
              <div className="value-content">
                <h3>精准批改/诊断</h3>
                <p>运用AI技术深入分析学习过程中的关键要素，精准定位问题与改进空间，提供具体、可操作的建议。</p>
              </div>
              <div className="value-image">
                <img src="/img/智能课题优化.png" alt="智能诊断" />
                <div className="image-overlay"></div>
              </div>
            </div>

            <div className="value-item image-right">
              <div className="value-image">
                <img src="/img/中华民族共同体.png" alt="个性化指导" />
                <div className="image-overlay"></div>
              </div>
              <div className="value-content">
                <h3>个性化指导</h3>
                <p>根据用户画像与历史表现，提供针对性的学习与教学建议，并在持续使用中不断优化策略。</p>
              </div>
            </div>

            <div className="value-item text-right">
              <div className="value-content">
                <h3>实时成长</h3>
                <p>建立动态追踪机制，记录进步轨迹，形成数据驱动的正反馈循环，持续提升能力与效果。</p>
              </div>
              <div className="value-image">
                <img src="/img/监督管理系统.png" alt="实时成长" />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 覆盖范围（与原产品页一致的模块结构） */}
      <section className="coverage-scope">
        <div className="container">
          <div className="section-header">
            <h2>覆盖范围</h2>
            <p>产品已在多地应用落地，服务大量师生与管理者，为教育数字化转型提供坚实支撑。</p>
          </div>
          <div className="coverage-stats">
            <div className="coverage-map">
              <div className="map-placeholder">
                <i className="fas fa-map-marked-alt"></i>
                <p>全国覆盖地图</p>
              </div>
            </div>
            <div className="coverage-numbers">
              <div className="stat-large">
                <div className="stat-number-large">31个</div>
                <div className="stat-label-large">省级行政区</div>
                <div className="stat-desc">遍布全国，助力教育发展</div>
              </div>
              <div className="stat-large">
                <div className="stat-number-large">430万+</div>
                <div className="stat-label-large">累计服务用户</div>
                <div className="stat-desc">面向师生与管理者的综合支撑</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 典型应用（与原产品页一致的模块结构） */}
      <section className="typical-applications">
        <div className="container">
          <div className="section-header">
            <h2>典型应用</h2>
            <p>见证人工智能与教育深度融合的成功实践，推动教育教学数字化转型</p>
          </div>
          <div className="applications-grid">
            <div className="application-card">
              <div className="application-image">
                <img src="/img/创新教学策略.png" alt="齐鲁师范学院附属小学" />
              </div>
              <div className="application-content">
                <h3>齐鲁师范学院附属小学</h3>
                <h4>人工智能与教育融合实践座谈会</h4>
                <p>围绕AI课前教学PPT、教案自主生成、课后智能批改、问题回答系统等进行交流，探索实用落地的应用模式。</p>
                <div className="application-tags">
                  <span className="app-tag">AI融合</span>
                  <span className="app-tag">教学实践</span>
                  <span className="app-tag">智能批改</span>
                </div>
                <a href="http://neuai.qlnu.edu.cn/info/1118/1283.htm" className="application-link">了解更多 <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>

            <div className="application-card">
              <div className="application-image">
                <img src="/img/教师管理系统界面.png" alt="成武县孙寺镇" />
              </div>
              <div className="application-content">
                <h3>成武县孙寺镇基础教育</h3>
                <h4>AI赋能教师应用平台</h4>
                <p>提供智能课堂评价、过程性评估等功能，为教师提供精准指导与优化意见，助力基层教育提质增效。</p>
                <div className="application-tags">
                  <span className="app-tag">AI平台</span>
                  <span className="app-tag">智能评价</span>
                  <span className="app-tag">教育帮扶</span>
                </div>
                <a href="http://neuai.qlnu.edu.cn/info/1118/1315.htm" className="application-link">了解更多 <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>

            <div className="application-card">
              <div className="application-image">
                <img src="/img/智慧课堂.png" alt="人工智能教育研究院" />
              </div>
              <div className="application-content">
                <h3>人工智能教育研究院</h3>
                <h4>技术研发与成果转化</h4>
                <p>开发智能批改系统、AI赋能教师平台等核心技术，推进产学研合作，将前沿AI技术转化为实用工具。</p>
                <div className="application-tags">
                  <span className="app-tag">技术研发</span>
                  <span className="app-tag">成果转化</span>
                  <span className="app-tag">产学研合作</span>
                </div>
                <a href="#" className="application-link">了解更多 <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>

            <div className="application-card">
              <div className="application-image">
                <img src="/img/大数据精准助学.png" alt="基础教育合作" />
              </div>
              <div className="application-content">
                <h3>基础教育合作发展</h3>
                <h4>区域教育协同创新</h4>
                <p>建立区域教育协同发展机制，整合优质资源，推广AI教育应用，促进教育公平与质量提升。</p>
                <div className="application-tags">
                  <span className="app-tag">区域合作</span>
                  <span className="app-tag">教育协同</span>
                  <span className="app-tag">资源共享</span>
                </div>
                <a href="#" className="application-link">了解更多 <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品特色/独特优势（与原产品页一致的模块结构） */}
      <section className="product-features">
        <div className="container">
          <div className="section-header">
            <h2>独特优势</h2>
            <p>融合传统教育智慧与现代技术创新，打造个性化学习新体验</p>
          </div>
          <div className="features-showcase">
            <div className="feature-highlight">
              <div className="feature-icon-large">
                <i className="fas fa-brain"></i>
              </div>
              <h3>智能分析</h3>
              <p>基于自然语言处理与多模态分析技术，提供面向教学与学习的深度洞察与决策支持。</p>
            </div>
            <div className="feature-highlight">
              <div className="feature-icon-large">
                <i className="fas fa-users"></i>
              </div>
              <h3>个性化指导</h3>
              <p>根据画像持续优化学习与教学建议，支持千人千面的能力成长路径。</p>
            </div>
            <div className="feature-highlight">
              <div className="feature-icon-large">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h3>成长追踪</h3>
              <p>提供过程性评价与成长报告，形成闭环提升，助力因材施教落地。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-main">
        <div className="container">
          <div className="contact-content-main">
            <div className="contact-info-main">
              <h2>想要了解更多，欢迎探讨交流</h2>
              <div className="contact-methods-main">
                <div className="contact-method-main">
                  <i className="fas fa-scroll"></i>
                  <div>
                    <h4>咨询电话</h4>
                    <p>15680484984</p>
                  </div>
                </div>
                <div className="contact-method-main">
                  <i className="fas fa-sun"></i>
                  <div>
                    <h4>工作时间</h4>
                    <p>08:30-22:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-main">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="姓名" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="邮箱" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="电话" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="咨询内容" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">提交</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;


