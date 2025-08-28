import React, { useEffect, useRef, useCallback } from 'react';
import { useCarousel } from '../../hooks/useCarousel';

const Carousel = ({ slides, autoPlayDuration = 6000 }) => {
  const {
    currentSlide,
    progress,
    nextSlide,
    prevSlide,
    pauseAutoPlay,
    resumeAutoPlay,
  } = useCarousel(slides, autoPlayDuration);

  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const mouseStartX = useRef(null);

  const handleSwipe = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [nextSlide, prevSlide]);

  return (
    <section 
      className="hero-carousel"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <div className="carousel-container" ref={containerRef}
        onTouchStart={(e) => { touchStartX.current = e.changedTouches[0].screenX; }}
        onTouchEnd={(e) => { touchEndX.current = e.changedTouches[0].screenX; handleSwipe(); }}
        onMouseDown={(e) => { mouseStartX.current = e.clientX; }}
        onMouseUp={(e) => {
          if (mouseStartX.current === null) return;
          const diff = (mouseStartX.current || 0) - e.clientX;
          if (Math.abs(diff) > 50) {
            if (diff > 0) { nextSlide(); } else { prevSlide(); }
          }
          mouseStartX.current = null;
        }}
      >
        <div className="carousel-wrapper">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="slide-background">
                <img src={slide.image} alt={slide.title} />
                <div className="slide-overlay"></div>
              </div>
              <div className="slide-content">
                <div className="container">
                  <div className="slide-text">
                    <h1 className="slide-title">{slide.title}</h1>
                    <p className="slide-subtitle">{slide.description}</p>
                    <div className="slide-actions">
                      {slide.primaryAction && (
                        <a href={slide.primaryAction.href} className="btn btn-primary btn-large">
                          {slide.primaryAction.text}
                        </a>
                      )}
                      {slide.secondaryAction && (
                        <a href={slide.secondaryAction.href} className="btn btn-outline btn-large">
                          {slide.secondaryAction.text}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 进度条 */}
        <div className="carousel-progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
