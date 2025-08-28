import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSolution } from '../utils/tempSolutions';
import { parseMarkdown, parseProductValues } from '../utils/mdParser';
import { selectImagesForValues, AVAILABLE_IMAGES } from '../utils/generatedAssets';

// 采用最轻量的渲染：将 markdown 作为段落与列表简单展示
// 如果后续需要更高保真，可引入 markdown 渲染库（不在本次范围内，避免多余改动）

function simpleMarkdown(md) {
  if (!md) return null;
  const lines = md.split('\n');
  const nodes = [];
  let buffer = [];

  const flushParagraph = () => {
    if (buffer.length) {
      nodes.push(<p key={`p-${nodes.length}`}>{buffer.join(' ')}</p>);
      buffer = [];
    }
  };

  lines.forEach((line) => {
    const l = line.trim();
    if (!l) {
      flushParagraph();
      return;
    }
    if (l.startsWith('# ')) {
      flushParagraph();
      nodes.push(<h2 key={`h2-${nodes.length}`}>{l.slice(2).trim()}</h2>);
      return;
    }
    if (l.startsWith('## ')) {
      flushParagraph();
      nodes.push(<h3 key={`h3-${nodes.length}`}>{l.slice(3).trim()}</h3>);
      return;
    }
    if (l.startsWith('- ')) {
      flushParagraph();
      nodes.push(<li key={`li-${nodes.length}`}>{l.slice(2).trim()}</li>);
      return;
    }
    buffer.push(l);
  });
  flushParagraph();

  // 将连续 li 包裹成 ul
  const grouped = [];
  let listBuffer = [];
  nodes.forEach((n) => {
    if (n.type === 'li') {
      listBuffer.push(n);
    } else {
      if (listBuffer.length) {
        grouped.push(<ul key={`ul-${grouped.length}`}>{listBuffer}</ul>);
        listBuffer = [];
      }
      grouped.push(n);
    }
  });
  if (listBuffer.length) {
    grouped.push(<ul key={`ul-${grouped.length}`}>{listBuffer}</ul>);
  }
  return grouped;
}

const GeneratedDetail = () => {
  const { id } = useParams();
  const data = useMemo(() => {
    if (!id) return null;
    const raw = getSolution(id);
    if (raw) return raw;
    const enc = encodeURIComponent(id);
    return getSolution(enc);
  }, [id]);

  // 将 hooks 放在条件返回之前，避免条件调用 hooks
  const markdown = data?.markdown || '';
  const parsed = useMemo(() => parseMarkdown(markdown), [markdown]);
  const values = useMemo(() => parseProductValues(parsed['产品价值']), [parsed]);

  if (!data) {
    return (
      <div className="container" style={{ padding: '40px 0' }}>
        <h2>未找到内容</h2>
        <p>请返回生成页面重新生成。</p>
      </div>
    );
  }

  const images = selectImagesForValues(values?.length || 0);
  const heroImage = AVAILABLE_IMAGES[0];
  const introImage = AVAILABLE_IMAGES[1] || heroImage;

  return (
    <div className="products-page">
      <section className="product-hero">
        <div className="hero-background">
          <img src={heroImage} alt={parsed.product_name || data.title} />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">首页</Link> &gt; <Link to="/products">产品与服务</Link> &gt; <span>{parsed.product_name || data.title}</span>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">{parsed.product_name || data.title}</h1>
            {parsed['一句话精炼吸引口号'] && <p className="hero-subtitle">{parsed['一句话精炼吸引口号']}</p>}
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary btn-large">联系我们</a>
              <a href="#product-intro" className="btn btn-outline btn-large">了解详情</a>
            </div>
          </div>
        </div>
      </section>

      {parsed['产品简介'] ? (
        <section id="product-intro" className="product-intro product-intro-modern">
          <div className="container">
            <div className="intro-wrapper">
              <div className="intro-text">
                <h2 className="intro-title">产品简介</h2>
                <p className="intro-description">{parsed['产品简介']}</p>
                <div className="intro-visual">
                  <div className="visual-container">
                    <img src={introImage} alt={parsed.product_name || data.title} />
                    <div className="visual-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {values && values.length ? (
        <section className="product-value">
          <div className="container">
            <div className="section-header">
              <h2>产品价值</h2>
            </div>
            <div className="value-section">
              {values.map((v, i) => {
                const isRight = i % 2 === 0; // 与产品页一致的交错布局
                const img = images[i] || images[0];
                return (
                  <div key={`${v.title}-${i}`} className={`value-item ${isRight ? 'text-right' : 'image-right'}`}>
                    {isRight ? (
                      <>
                        <div className="value-content">
                          <h3>{v.title}</h3>
                          <p>{v.description}</p>
                        </div>
                        <div className="value-image">
                          <img src={img} alt={v.title} />
                          <div className="image-overlay"></div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="value-image">
                          <img src={img} alt={v.title} />
                          <div className="image-overlay"></div>
                        </div>
                        <div className="value-content">
                          <h3>{v.title}</h3>
                          <p>{v.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {/* 其余模块沿用产品页结构（占位可选），保持视觉一致性，如需生成可扩展 */}
      <section className="coverage-scope">
        <div className="container">
          <div className="section-header">
            <h2>覆盖范围</h2>
            <p>支持在不同地区与学校落地应用，持续迭代优化。</p>
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

export default GeneratedDetail;


