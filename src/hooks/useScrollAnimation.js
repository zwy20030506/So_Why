import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const animatedSetRef = useRef(new Set());
  const countedSetRef = useRef(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const nodes = document.querySelectorAll(
        '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, ' +
        '.transT, .transLs, .transRs, .transScale, .float-up, .rotate-in'
      );

      nodes.forEach((el) => {
        if (animatedSetRef.current.has(el)) return;
        const rect = el.getBoundingClientRect();
        const winH = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= winH * 0.8) {
          // 为 scroll-animate* 添加 animate-in
          if (
            el.classList.contains('scroll-animate') ||
            el.classList.contains('scroll-animate-left') ||
            el.classList.contains('scroll-animate-right') ||
            el.classList.contains('scroll-animate-scale')
          ) {
            el.classList.add('animate-in');
          }
          // 为 trans*/float-up/rotate-in 添加 showd
          if (
            el.classList.contains('transT') ||
            el.classList.contains('transLs') ||
            el.classList.contains('transRs') ||
            el.classList.contains('transScale') ||
            el.classList.contains('float-up') ||
            el.classList.contains('rotate-in')
          ) {
            el.classList.add('showd');
          }
          animatedSetRef.current.add(el);
        }
      });

      // 数字动画: .stat-number-main
      const statNodes = document.querySelectorAll('.stat-number-main');
      statNodes.forEach((el) => {
        if (countedSetRef.current.has(el)) return;
        const rect = el.getBoundingClientRect();
        const winH = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= winH * 0.7) {
          const finalText = el.textContent || '';
          const finalNumber = parseInt(finalText.replace(/[^\d]/g, ''), 10);
          const suffix = (finalText || '').replace(/[\d]/g, '');
          if (!Number.isNaN(finalNumber)) {
            let current = 0;
            const increment = Math.max(1, Math.ceil(finalNumber / 50));
            const timer = setInterval(() => {
              current += increment;
              if (current >= finalNumber) {
                current = finalNumber;
                clearInterval(timer);
              }
              el.textContent = `${current}${suffix}`;
            }, 30);
          }
          countedSetRef.current.add(el);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {};
};
