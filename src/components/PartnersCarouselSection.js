import React, { useState, useRef, useEffect } from 'react';
// Importe seus logos reais
import logo1 from '../assets/images/imagesLogo/bradesco.png';
import logo2 from '../assets/images/imagesLogo/cassi.png';
import logo3 from '../assets/images/imagesLogo/Serpro.png';
import logo4 from '../assets/images/imagesLogo/fascal.webp';
import logo5 from '../assets/images/imagesLogo/casembrapa.png';
import logo6 from '../assets/images/imagesLogo/Real_grandeza.png';
import logo7 from '../assets/images/imagesLogo/Affego.png'; 
import logo8 from '../assets/images/imagesLogo/unnamed.png';
import logo9 from '../assets/images/imagesLogo/bradesc.png';
import logo10 from '../assets/images/imagesLogo/crapesp.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

const PartnersCarouselSection = () => {
  const isMobile = window.innerWidth < 900;
  const sliderRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const loopedLogos = [...logos, ...logos, ...logos];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollByAmount = (amount) => {
    sliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    const handleScroll = () => {
      const scrollWidth = slider.scrollWidth / 3;
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = scrollWidth;
      } else if (slider.scrollLeft >= scrollWidth * 2) {
        slider.scrollLeft = scrollWidth;
      }
    };

    slider.addEventListener('scroll', handleScroll);
    slider.scrollLeft = slider.scrollWidth / 3;

    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      style={{
        background: '#d1b3e0',
        padding: isMobile ? '40px 0 60px 0' : '80px 0 100px 0',
        textAlign: 'center',
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <h2
        style={{
          color: '#7d5a8c',
          fontSize: isMobile ? 32 : 48,
          fontWeight: 900,
          marginBottom: 40,
          letterSpacing: 1,
        }}
      >
        Convênios e Parcerias
      </h2>

      <div
        style={{
          position: 'relative',
          paddingBottom: isMobile ? 80 : 100, // espaço para setas abaixo
        }}
      >
        {/* Setas */}
        <button
          onClick={() => scrollByAmount(-200)}
          aria-label="Scroll Left"
          style={{
            position: 'absolute',
            top: '100%',
            marginTop: 12,
            left: isMobile ? 10 : 20,
            background: '#7d5a8c',
            border: 'none',
            color: '#fff',
            fontSize: isMobile ? 32 : 40,
            padding: isMobile ? '12px 16px' : '16px 20px',
            borderRadius: '50%',
            cursor: 'pointer',
            zIndex: 10,
            opacity: 0.85,
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
            transition: 'opacity 0.3s ease',
            width: isMobile ? 50 : 60,
            height: isMobile ? 50 : 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = 1)}
          onMouseLeave={e => (e.currentTarget.style.opacity = 0.85)}
        >
          &#8249;
        </button>

        <button
          onClick={() => scrollByAmount(200)}
          aria-label="Scroll Right"
          style={{
            position: 'absolute',
            top: '100%',
            marginTop: 12,
            right: isMobile ? 10 : 20,
            background: '#7d5a8c',
            border: 'none',
            color: '#fff',
            fontSize: isMobile ? 32 : 40,
            padding: isMobile ? '12px 16px' : '16px 20px',
            borderRadius: '50%',
            cursor: 'pointer',
            zIndex: 10,
            opacity: 0.85,
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
            transition: 'opacity 0.3s ease',
            width: isMobile ? 50 : 60,
            height: isMobile ? 50 : 60,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = 1)}
          onMouseLeave={e => (e.currentTarget.style.opacity = 0.85)}
        >
          &#8250;
        </button>

        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? 10 : 40,
            marginBottom: 40,
            cursor: isDragging ? 'grabbing' : 'grab',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            padding: isMobile ? '20px 4vw' : '20px 0',
          }}
        >
          {loopedLogos.map((logo, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: '0 0 auto',
                width: isMobile ? 140 : 180,
                height: isMobile ? 80 : 100,
                transition: 'all 0.3s ease-in-out',
                userSelect: 'none',
              }}
            >
              <img
                src={logo}
                alt={`Logo ${idx + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'all 0.3s ease-in-out',
                  userSelect: 'none',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a
          href='https://api.whatsapp.com/send?phone=5561981707664&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!.'
          target='_blank'
          rel='noopener noreferrer'
          style={{
            background: '#bfa3d2',
            color: '#fff',
            fontWeight: 500,
            fontSize: 18,
            border: 'none',
            borderRadius: 24,
            padding: '16px 40px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(125,90,140,0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
            textAlign: 'center',
            transition: 'all 0.3s ease',
          }}
        >
          <span role="img" aria-label="whatsapp">
            💬
          </span>
          Fale com um consultor
        </a>
      </div>
    </section>
  );
};

export default PartnersCarouselSection;
