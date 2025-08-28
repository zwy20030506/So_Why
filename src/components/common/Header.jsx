import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import Navigation from '../features/Navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(st > 100);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`header${isScrolled ? ' header-scrolled' : ''}`}>
      <div className="container">
        <Logo />
        <Navigation mobileOpen={mobileOpen} navRef={navRef} onNavigate={() => setMobileOpen(false)} />
        <div className="header-actions">
          <a href="https://www.qlnu.edu.cn/" className="btn btn-outline">齐鲁师范学院</a>
          <a href="http://neuai.qlnu.edu.cn/" className="btn btn-primary">人工智能教育研究院</a>
        </div>
        
        {/* 移动端菜单按钮 */}
        <div className={`mobile-menu-btn${mobileOpen ? ' active' : ''}`} onClick={() => setMobileOpen(v => !v)}>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
