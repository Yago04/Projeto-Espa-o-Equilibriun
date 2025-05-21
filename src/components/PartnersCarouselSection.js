import React, { useState, useRef } from 'react';
// Importe seus logos reais
import logo1 from '../assets/bradesco.png';
import logo2 from '../assets/cassi.png';
import logo3 from '../assets/Serpro.png';
import logo4 from '../assets/fascal.webp';
import logo5 from '../assets/casembrapa.png';
import logo6 from '../assets/Real_grandeza.png';
import logo7 from '../assets/Affego.png'; 
import logo8 from '../assets/unnamed.png'
import logo9 from '../assets/bradesc.png'
import logo10 from '../assets/crapesp.png'


const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

const PartnersCarouselSection = () => {
  const isMobile = window.innerWidth < 900;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

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
      <h2 style={{
        color: '#7d5a8c',
        fontSize: isMobile ? 32 : 48,
        fontWeight: 900,
        marginBottom: 40,
        letterSpacing: 1,
      }}>
        Convênios e Parcerias
      </h2>
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
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {logos.map((logo, idx) => (
          <div key={idx} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: '0 0 auto',
            width: isMobile ? 140 : 180,
            height: isMobile ? 80 : 100,
            transition: 'all 0.3s ease-in-out',
            userSelect: 'none',
          }}>
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a
          href='https://api.whatsapp.com/send?phone=5561981707664&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!.'
          target='_blank'
          rel='noopener noreferrer'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            background: isHovered ? '#7d5a8c' : '#bfa3d2',
            color: '#fff',
            fontWeight: 500,
            fontSize: 18,
            border: 'none',
            borderRadius: 24,
            padding: '16px 40px',
            cursor: 'pointer',
            boxShadow: isHovered ? '0 4px 12px rgba(125,90,140,0.2)' : '0 2px 8px rgba(125,90,140,0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
            textAlign: 'center',
          }}
        >
          <span role="img" aria-label="whatsapp" style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}>💬</span>
          Fale com um consultor
        </a>
      </div>
    </section>
  );
};

export default PartnersCarouselSection; 