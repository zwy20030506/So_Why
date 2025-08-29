import React from 'react';
import { useParams, Link } from 'react-router-dom';

const PRODUCT_CONTENT = {
  // 基础教育分类
  '智能作文修改': {
    title: '智能作文修改',
    heroImage: '/img/作文润色.png',
    introImage: '/img/作文润色.png',
    subtitle: 'AI赋能，让每一篇作文都得到精准反馈与高效提升',
    description:
      '基于AI技术的智能作文批改工具，通过自然语言处理与深度学习算法，快速、精准地分析作文内容，提供语法纠错、结构优化、表达提升等全方位批改建议。'
  },
  '古诗词语音评测': {
    title: '古诗词语音评测',
    heroImage: '/img/吟诵课堂.png',
    introImage: '/img/吟诵课堂.png',
    subtitle: '智能语音识别，精准评测古诗词语音表现',
    description:
      '运用先进的语音识别技术，对学生的古诗词语音朗读进行实时评测，提供发音准确性、语调韵律、情感表达等多维度反馈，帮助学生提升古诗词语音学习效果。'
  },
  '智能书法练习': {
    title: '智能书法练习',
    heroImage: '/img/京师学堂数智化.png',
    introImage: '/img/京师学堂数智化.png',
    subtitle: 'AI指导，让书法练习更科学、更有效',
    description:
      '结合计算机视觉和AI技术，实时分析学生的书法笔画、结构布局和书写规范，提供个性化的练习建议和纠正指导，让传统书法学习融入现代科技元素。'
  },
  '数学讲题生成': {
    title: '数学讲题生成',
    heroImage: '/img/创新教学策略.png',
    introImage: '/img/创新教学策略.png',
    subtitle: '智能生成数学题目，个性化教学支持',
    description:
      '基于数学知识图谱和难度模型，智能生成符合教学大纲的数学题目，支持不同难度等级和知识点的题目定制，为教师提供丰富的教学资源。'
  },
  '基于SOLO的作业批改': {
    title: '基于SOLO的作业批改',
    heroImage: '/img/构建数据模型体系.png',
    introImage: '/img/构建数据模型体系.png',
    subtitle: 'SOLO理论指导的智能作业评价系统',
    description:
      '运用SOLO（Structure of Observed Learning Outcome）理论框架，对学生的作业进行结构化分析和评价，识别学习层次，提供针对性的改进建议。'
  },
  
  // 特殊教育分类
  '声纹传语': {
    title: '声纹传语',
    heroImage: '/img/听说资源库.png',
    introImage: '/img/听说资源库.png',
    subtitle: '声纹识别技术，助力特殊教育沟通',
    description:
      '利用声纹识别技术，为有语言障碍的学生提供个性化的语音训练和沟通辅助，通过AI分析语音特征，帮助改善发音和语言表达能力。'
  },
  '字词评测系统': {
    title: '字词评测系统',
    heroImage: '/img/古韵科考系统.png',
    introImage: '/img/古韵科考系统.png',
    subtitle: '智能评测汉字书写和词汇掌握',
    description:
      '专门为特殊教育设计的字词评测系统，通过图像识别和AI分析，评估学生的汉字书写规范性和词汇理解程度，提供精准的学习反馈。'
  },
  '盲文智能批改系统': {
    title: '盲文智能批改系统',
    heroImage: '/img/京师学堂数智化.png',
    introImage: '/img/京师学堂数智化.png',
    subtitle: 'AI助力盲文学习，提升学习效率',
    description:
      '专为视障学生设计的盲文学习辅助系统，通过AI技术识别和批改盲文作业，提供即时反馈和个性化学习建议，让盲文学习更加高效。'
  },
  '构音障碍识别': {
    title: '构音障碍识别',
    heroImage: '/img/听说资源库.png',
    introImage: '/img/听说资源库.png',
    subtitle: 'AI辅助构音障碍诊断与训练',
    description:
      '运用语音识别和AI分析技术，自动识别学生的构音障碍问题，提供专业的诊断报告和个性化的康复训练方案，支持言语治疗师的工作。'
  },
  'AI言语康复师': {
    title: 'AI言语康复师',
    heroImage: '/img/教师管理系统界面.png',
    introImage: '/img/教师管理系统界面.png',
    subtitle: '24小时在线的智能言语康复助手',
    description:
      '基于AI技术的虚拟言语康复师，为学生提供全天候的言语训练指导，包括发音练习、语言表达训练、康复进度跟踪等功能。'
  },
  '心理陪伴': {
    title: '心理陪伴',
    heroImage: '/img/智慧心育.png',
    introImage: '/img/智慧心育.png',
    subtitle: 'AI心理支持，守护学生心理健康',
    description:
      '运用AI技术为学生提供心理健康支持和情感陪伴，通过智能对话、情绪识别、心理评估等功能，帮助学生缓解压力、调节情绪。'
  },
  
  // 其他产品分类
  '传统教育考试': {
    title: '传统教育考试',
    heroImage: '/img/古韵科考系统.png',
    introImage: '/img/古韵科考系统.png',
    subtitle: '纸笔考试数字化管理',
    description:
      '支持命题、制卷、阅卷、统计全流程的信息化管理。'
  },
  '计算机化考试': {
    title: '计算机化考试',
    heroImage: '/img/古韵科考系统.png',
    introImage: '/img/古韵科考系统.png',
    subtitle: '现代化考试系统，提升考试效率',
    description:
      '基于计算机技术的现代化考试系统，支持多种题型、自动评分、数据分析等功能，为教育机构提供完整的考试解决方案。'
  },
  '智能语言测试': {
    title: '智能语言测试',
    heroImage: '/img/听说资源库.png',
    introImage: '/img/听说资源库.png',
    subtitle: 'AI驱动的语言能力评估',
    description:
      '运用AI技术进行语言能力测试，包括听说读写全方位评估，提供精准的语言水平诊断和个性化学习建议。'
  },
  '智能语言学习': {
    title: '智能语言学习',
    heroImage: '/img/听说资源库.png',
    introImage: '/img/听说资源库.png',
    subtitle: '个性化语言学习路径规划',
    description:
      '基于AI技术的智能语言学习平台，根据学习者水平制定个性化学习计划，提供丰富的学习资源和智能化的学习指导。'
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


