import React from 'react';

const Products = () => {
  return (
    <div className="products-page">
      {/* 产品头部横幅 */}
      <section className="product-hero">
        <div className="hero-background">
          <img src="/img/青绿水墨风渔舟唱晚.png" alt="产品与服务" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="breadcrumb">
            <a href="/">首页</a> &gt; 
            <a href="/products">产品与服务</a> &gt; 
            <span>产品总览</span>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">产品与服务</h1>
            <p className="hero-subtitle">AI赋能教育，让每个学生都能享受个性化的学习体验！</p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary btn-large">联系我们</a>
              <a href="#product-intro" className="btn btn-outline btn-large">了解详情</a>
            </div>
          </div>
        </div>
      </section>

      {/* 产品分类介绍 */}
      <section id="product-intro" className="product-intro product-intro-modern">
        <div className="container">
          <div className="intro-wrapper">
            <div className="intro-text">
              <h2 className="intro-title">产品分类</h2>
              <p className="intro-description">
                我们提供三大类教育产品与服务，涵盖基础教育、特殊教育和考试评估等多个领域。每款产品都融合了前沿的AI技术，旨在为教育工作者和学生提供智能化、个性化的学习解决方案。
              </p>
              <div className="intro-visual">
                <div className="visual-container">
                  <img src="/img/京师学堂数智化.png" alt="产品分类" />
                  <div className="visual-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品分类展示 */}
      <section className="product-categories">
        <div className="container">
          <div className="section-header">
            <h2>产品分类</h2>
          </div>
          
          {/* 基础教育 */}
          <div className="category-section">
            <h3 className="category-title">基础教育</h3>
            <div className="category-grid">
              <div className="category-item">
                <img src="/img/作文润色.png" alt="智能作文修改" />
                <h4>智能作文修改</h4>
                <p>AI赋能，让每一篇作文都得到精准反馈与高效提升</p>
                <a href="/products/智能作文修改" className="btn btn-outline">了解详情</a>
              </div>
              <div className="category-item">
                <img src="/img/吟诵课堂.png" alt="古诗词语音评测" />
                <h4>古诗词语音评测</h4>
                <p>智能语音识别，精准评测古诗词语音表现</p>
                <a href="/products/古诗词语音评测" className="btn btn-outline">了解详情</a>
              </div>
              <div className="category-item">
                <img src="/img/京师学堂数智化.png" alt="智能书法练习" />
                <h4>智能书法练习</h4>
                <p>AI指导，让书法练习更科学、更有效</p>
                <a href="/products/智能书法练习" className="btn btn-outline">了解详情</a>
              </div>
              <div className="category-item">
                <img src="/img/创新教学策略.png" alt="数学讲题生成" />
                <h4>数学讲题生成</h4>
                <p>智能生成数学题目，个性化教学支持</p>
                <a href="/products/数学讲题生成" className="btn btn-outline">了解详情</a>
              </div>
              <div className="category-item">
                <img src="/img/构建数据模型体系.png" alt="基于SOLO的作业批改" />
                <h4>基于SOLO的作业批改</h4>
                <p>SOLO理论指导的智能作业评价系统</p>
                <a href="/products/基于SOLO的作业批改" className="btn btn-outline">了解详情</a>
              </div>
            </div>
          </div>

          {/* 特殊教育 */}
          <div className="category-section">
            <h3 className="category-title">特殊教育</h3>
            <div className="category-grid">
              <div className="category-item">
                <img src="/img/听说资源库.png" alt="声纹传语" />
                <h4>声纹传语</h4>
                <p>声纹识别技术，助力特殊教育沟通</p>
                <a href="/products/声纹传语" className="btn btn-outline">了解详情</a>
              </div>
              <div className="category-item">
                <img src="/img/古韵科考系统.png" alt="字词评测系统" />
                <h4>字词评测系统</h4>
                <p>智能评测汉字书写和词汇掌握</p>
                <a href="/products/字词评测系统" className="btn btn-outline">了解详情</a>
              </div>
              <div className="category-item">
                <img src="/img/京师学堂数智化.png" alt="盲文智能批改系统" />
                <h4>盲文智能批改系统</h4>
                <p>AI助力盲文学习，提升学习效率</p>
                <a href="/products/盲文智能批改系统" className="btn btn-outline">了解详情</a>
              </div>
              <div className="category-item">
                <img src="/img/听说资源库.png" alt="构音障碍识别" />
                <h4>构音障碍识别</h4>
                <p>AI辅助构音障碍诊断与训练</p>
                <a href="/products/构音障碍识别" className="btn btn-outline">了解详情</a>
              </div>
              <div className="category-item">
                <img src="/img/教师管理系统界面.png" alt="AI言语康复师" />
                <h4>AI言语康复师</h4>
                <p>24小时在线的智能言语康复助手</p>
                <a href="/products/AI言语康复师" className="btn btn-outline">了解详情</a>
              </div>
              <div className="category-item">
                <img src="/img/智慧心育.png" alt="心理陪伴" />
                <h4>心理陪伴</h4>
                <p>AI心理支持，守护学生心理健康</p>
                <a href="/products/心理陪伴" className="btn btn-outline">了解详情</a>
              </div>
            </div>
          </div>

          {/* 其他产品 */}
          <div className="category-section">
            <h3 className="category-title">其他产品</h3>
            <div className="category-grid">
              <div className="category-item">
                <img src="/img/古韵科考系统.png" alt="传统教育考试" />
                <h4>传统教育考试</h4>
                <p>纸笔考试数字化管理</p>
                <a href="/products/传统教育考试" className="btn btn-outline">了解详情</a>
              </div>
              <div className="category-item">
                <img src="/img/古韵科考系统.png" alt="计算机化考试" />
                <h4>计算机化考试</h4>
                <p>现代化考试系统，提升考试效率</p>
                <a href="/products/计算机化考试" className="btn btn-outline">了解详情</a>
              </div>
              <div className="category-item">
                <img src="/img/听说资源库.png" alt="智能语言测试" />
                <h4>智能语言测试</h4>
                <p>AI驱动的语言能力评估</p>
                <a href="/products/智能语言测试" className="btn btn-outline">了解详情</a>
              </div>
              <div className="category-item">
                <img src="/img/听说资源库.png" alt="智能语言学习" />
                <h4>智能语言学习</h4>
                <p>个性化语言学习路径规划</p>
                <a href="/products/智能语言学习" className="btn btn-outline">了解详情</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品价值 */}
      <section className="product-value">
        <div className="container">
          <div className="section-header">
            <h2>产品价值</h2>
          </div>
          <div className="value-section">
            <div className="value-item text-right">
              <div className="value-content">
                <h3>AI赋能</h3>
                <p>运用前沿的人工智能技术，为教育提供智能化解决方案，让传统教育焕发新的活力。</p>
              </div>
              <div className="value-image">
                <img src="/img/智能课题优化.png" alt="AI赋能" />
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
                <p>根据学习者的特点和需求，提供定制化的学习路径和资源推荐，实现因材施教。</p>
              </div>
            </div>

            <div className="value-item text-right">
              <div className="value-content">
                <h3>持续创新</h3>
                <p>不断探索教育技术与AI的融合应用，为教育工作者和学生提供更好的学习体验。</p>
              </div>
              <div className="value-image">
                <img src="/img/监督管理系统.png" alt="持续创新" />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们（锚点） */}
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

export default Products;
