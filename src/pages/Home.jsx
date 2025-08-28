import React from 'react';
import Carousel from '../components/features/Carousel';
import Button from '../components/common/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home = () => {
  useScrollAnimation(); // 启用滚动动画
  
  const carouselSlides = [
    {
      image: '/img/轮播图1.png',
      title: '千载风雅宋韵',
      description: '承古韵之美，融现代之智，开启智慧教育新篇章',
      primaryAction: { href: '#', text: '探索智慧' },
      secondaryAction: { href: '#', text: '了解详情' }
    },
    {
      image: '/img/青绿水墨风一叶知秋.png',
      title: '一叶知秋意',
      description: '以智能科技为笔，绘制教育未来蓝图',
      primaryAction: { href: '#', text: '体验课堂' },
      secondaryAction: { href: '#', text: '查看案例' }
    },
    {
      image: '/img/青绿水墨风渔舟唱晚.png',
      title: '渔舟唱晚歌',
      description: '因材施教，个性化学习，让每个学子都能扬帆起航',
      primaryAction: { href: '#', text: '开始学习' },
      secondaryAction: { href: '#', text: '联系我们' }
    }
  ];

  return (
    <div className="home-page">
      {/* 主轮播图区域 */}
      <Carousel slides={carouselSlides} />

      {/* 服务角色 */}
      <section className="service-roles">
        <div className="container">
          <div className="section-header transT">
            <h2>服务不同教育角色</h2>
            <p>因材施教，为不同教育角色提供个性化智慧学习方案</p>
          </div>
          <div className="roles-grid-main transLs">
            <div className="role-item-main transScale animate-delay-1">
              <div className="role-icon-main">
                <i className="fas fa-crown"></i>
              </div>
              <h3>教育管理者</h3>
            </div>
            <div className="role-item-main transScale animate-delay-2">
              <div className="role-icon-main">
                <i className="fas fa-university"></i>
              </div>
              <h3>学校管理者</h3>
            </div>
            <div className="role-item-main transScale animate-delay-3">
              <div className="role-icon-main">
                <i className="fas fa-feather-alt"></i>
              </div>
              <h3>教师</h3>
            </div>
            <div className="role-item-main transScale animate-delay-4">
              <div className="role-icon-main">
                <i className="fas fa-home"></i>
              </div>
              <h3>家长</h3>
            </div>
            <div className="role-item-main transScale animate-delay-5">
              <div className="role-icon-main">
                <i className="fas fa-book-open"></i>
              </div>
              <h3>学生</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 核心产品预览 */}
      <section className="core-products">
        <div className="container">
          <div className="section-header transT">
            <h2>覆盖教育的全场景</h2>
            <p>融古今之学，汇东西之智，开启智慧教育之路</p>
          </div>
          <div className="products-grid-main transLs">
            <div className="product-item-main float-up animate-delay-1">
              <div className="product-image-main">
                <img src="/img/智慧课堂.png" alt="智慧课堂" />
              </div>
              <div className="product-content-main">
                <h3>智能作文批改</h3>
                <p> AI点睛——秒批精改，文思跃然</p>
                <a href="/products" className="product-link-main">详情观览 <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="product-item-main float-up animate-delay-2">
              <div className="product-image-main">
                <img src="/img/吟诵课堂.png" alt="吟诵课堂" />
              </div>
              <div className="product-content-main">
                <h3>古诗词语音评测</h3>
                <p>AI点睛——语音评测，古韵新声</p>
                <a href="/products" className="product-link-main">详情观览 <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
            <div className="product-item-main float-up animate-delay-3">
              <div className="product-image-main">
                <img src="/img/古文精研.png" alt="古文精研" />
              </div>
              <div className="product-content-main">
                <h3>智能书法练习</h3>
                <p>AI点睛——智能书法，笔墨生辉</p>
                <a href="/products" className="product-link-main">详情观览 <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="view-more-main transT">
            <a href="/products" className="btn btn-outline btn-large">查看更多</a>
          </div>
        </div>
      </section>

      {/* 客户案例 */}
      <section className="customer-cases">
        <div className="container">
          <div className="section-header transT">
            <h2>新资讯新动态</h2>
            <p>关注最新资讯，了解最新动态</p>
          </div>
          <div className="cases-grid-main transLs">
            <div className="case-item-main transScale animate-delay-1">
              <div className="case-image-main">
                <img src="/img/江南书院联盟.png" alt="案例1" />
              </div>
              <div className="case-content-main">
                <h3>齐鲁师范附属小学</h3>
                <p>智能作文批改，助力学生写作能力提升</p>
                <span className="case-tag-main">智能作文批改</span>
              </div>
            </div>
            <div className="case-item-main transScale animate-delay-2">
              <div className="case-image-main">
                <img src="/img/京师学堂数智化.png" alt="私塾改革" />
              </div>
              <div className="case-content-main">
                <h3>研究院捐赠自主开发的"AI赋能教师应用平台"</h3>
                <p>助力教师提升教学效率，实现教育现代化</p>
                <span className="case-tag-main">AI赋能教师应用平台</span>
              </div>
            </div>
            <div className="case-item-main transScale animate-delay-3">
              <div className="case-image-main">
                <img src="/img/古韵科考系统.png" alt="科举新制" />
              </div>
              <div className="case-content-main">
                <h3>古韵科考系统</h3>
                <p>传承科举精神，引入AI评测技术，让古典考试焕发新的生机</p>
                <span className="case-tag-main">智慧科考</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 数据统计 */}
      <section className="statistics-main">
        <div className="container">
          <div className="stats-header-main scroll-animate">
            <h2>因信任而选择，因选择而信赖</h2>
          </div>
          <div className="stats-grid-main scroll-animate-left">
            <div className="stat-item-main scroll-animate-scale animate-delay-1">
              <div className="stat-number-main">32个</div>
              <div className="stat-label-main">覆盖省级行政区</div>
            </div>
            <div className="stat-item-main scroll-animate-scale animate-delay-2">
              <div className="stat-number-main">5万+</div>
              <div className="stat-label-main">常态化应用学校</div>
            </div>
            <div className="stat-item-main scroll-animate-scale animate-delay-3">
              <div className="stat-number-main">1.3亿</div>
              <div className="stat-label-main">累计服务师生超过</div>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="contact-main">
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
                <Button type="submit" variant="primary" full>
                  提交
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
