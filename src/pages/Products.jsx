import React from 'react';

const Products = () => {
  return (
    <div className="products-page">
      {/* 产品头部横幅 */}
      <section className="product-hero">
        <div className="hero-background">
          <img src="/img/青绿水墨风渔舟唱晚.png" alt="个性化学习手册" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="breadcrumb">
            <a href="/">首页</a> &gt; 
            <a href="/products">产品与服务</a> &gt; 
            <span>然析智能作文批改</span>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">然析智能作文批改</h1>
            <p className="hero-subtitle">AI赋能，让每一篇作文都得到精准反馈与高效提升！</p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary btn-large">联系我们</a>
              <a href="#product-intro" className="btn btn-outline btn-large">了解详情</a>
            </div>
          </div>
        </div>
      </section>

      {/* 产品简介 */}
      <section id="product-intro" className="product-intro product-intro-modern">
        <div className="container">
          <div className="intro-wrapper">
            <div className="intro-text">
              <h2 className="intro-title">产品简介</h2>
              <p className="intro-description">
                然析智能作文批改是一款基于AI技术的智能作文批改工具，专为教师、学生及教育机构设计。它通过自然语言处理与深度学习算法，快速、精准地分析作文内容，提供语法纠错、结构优化、表达提升等全方位批改建议。无论是日常练习、考试作文还是学术写作，然析都能帮助用户节省批改时间，提升写作质量，让写作学习更高效、更智能。
              </p>
              <div className="intro-visual">
                <div className="visual-container">
                  <img src="/img/作文润色.png" alt="然析智能作文批改" />
                  <div className="visual-overlay"></div>
                </div>
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
                <h3>精准批改</h3>
                <p>运用AI技术深入分析作文的语言表达、逻辑结构、文体风格和创新性。精准定位写作中的语法错误、表达不当、逻辑缺陷，为学生提供具体、可操作的改进建议。</p>
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
                <p>根据学生的写作特点和历史表现，提供针对性的写作建议。通过机器学习算法，不断优化写作指导策略，帮助学生发现并克服个人写作的薄弱环节。</p>
              </div>
            </div>

            <div className="value-item text-right">
              <div className="value-content">
                <h3>实时成长</h3>
                <p>建立动态追踪机制，记录学生写作进步轨迹。通过数据驱动的反馈循环，帮助学生逐步提升写作技巧、拓展表达方式、培养文学素养，实现写作能力的持续成长。</p>
              </div>
              <div className="value-image">
                <img src="/img/监督管理系统.png" alt="实时成长" />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 覆盖范围 */}
      <section className="coverage-scope">
        <div className="container">
          <div className="section-header">
            <h2>覆盖范围</h2>
            <p>目前，然析智能作文批改已覆盖全国31个省级行政区，服务430余万名师生，为中小学语文教学提供智能化支持。</p>
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
                <div className="stat-desc">遍布全国，助力语文教育</div>
              </div>
              <div className="stat-large">
                <div className="stat-number-large">430万</div>
                <div className="stat-label-large">累计服务师生</div>
                <div className="stat-desc">提升写作能力，激发创作潜能</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 典型应用案例 */}
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
                <p>2024年3月29日，人工智能教育研究院刘斌院长和李成飞老师来到附属小学，就人工智能与教育融合成果实践合作进行交流探讨。学校领导、各级部语文教研骨干教师及在人工智能方面有所探索的老师参加了本次座谈会，共同探讨AI课前教学PPT、教案自主生成、课后作文智能批改系统、问题回答系统等技术的实际应用。</p>
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
                <h4>AI赋能教师应用平台捐赠</h4>
                <p>2024年8月2日，人工智能教育研究院负责人刘斌向成武县孙寺镇捐赠由学校自主开发的"AI赋能教师应用平台试用权"。该平台能够实现智能化课堂评价、学生学习过程全面评估等功能，为教师提供精准的指导和优化意见，有效提升基层教育教学质量。</p>
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
                <p>研究院致力于人工智能教育技术的研发与应用，成功开发了包括智能批改系统、AI赋能教师平台等多项核心技术。通过产学研合作，将前沿AI技术转化为实用的教育工具，为各级学校提供智能化教学解决方案。</p>
                <div className="application-tags">
                  <span className="app-tag">技术研发</span>
                  <span className="app-tag">成果转化</span>
                  <span className="app-tag">产学研合作</span>
                </div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
                <p>通过签署基础教育合作框架协议，建立区域教育协同发展机制。整合优质教育资源，推广AI教育技术应用，促进教育公平与质量提升，为更多学生提供优质的人工智能辅助教学服务。</p>
                <div className="application-tags">
                  <span className="app-tag">区域合作</span>
                  <span className="app-tag">教育协同</span>
                  <span className="app-tag">资源共享</span>
                </div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="application-link">了解更多 <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品特色 */}
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
              <p>运用AI自然语言处理技术，深入解析作文的语言表达、逻辑结构、文体风格和创新性。精准定位写作中的语法错误、表达不当和逻辑缺陷。</p>
            </div>
            <div className="feature-highlight">
              <div className="feature-icon-large">
                <i className="fas fa-users"></i>
              </div>
              <h3>个性化指导</h3>
              <p>根据学生的写作特点和历史表现，提供针对性的写作建议。通过机器学习算法，不断优化写作指导策略，帮助学生发现并克服个人写作的薄弱环节。</p>
            </div>
            <div className="feature-highlight">
              <div className="feature-icon-large">
                <i className="fas fa-chart-bar"></i>
              </div>
              <h3>成长追踪</h3>
              <p>实时记录学生写作进步轨迹，生成个性化的写作成长报告。通过数据驱动的反馈循环，帮助学生系统性地提升写作技巧和文学素养。</p>
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
