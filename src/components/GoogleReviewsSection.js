import React, { useState, useEffect, useRef } from 'react';
import fotoperfil from '../assets/images/foto_perfil/perfil.png';
import fotoperfil2 from '../assets/images/foto_perfil/perfil2.png';
import fotoperfil3 from '../assets/images/foto_perfil/perfil3.png';
import fotoperfil4 from '../assets/images/foto_perfil/perfil4.png';

const reviews = [
  {
    name: 'Maria Souza',
    avatar: fotoperfil,
    rating: 5,
    comment: 'Atendimento excelente! Profissionais muito atenciosos e ambiente acolhedor. Recomendo demais.'
  },
  {
    name: 'Ana Paula',
    avatar: fotoperfil2,
    rating: 5,
    comment: 'Mudou a vida da nossa família! Só gratidão pelo cuidado e profissionalismo.'
  },
  {
    name: 'Carlos Mendes',
    avatar: fotoperfil3,
    rating: 5,
    comment: 'Ótima estrutura e profissionais qualificados. Recomendo para todos que buscam um atendimento humanizado.'
  },
  {
    name: 'Victória Gonçalves',
    avatar: fotoperfil4,
    rating: 4,
    comment: 'Espaço grande e aconchegante, pessoal muito atencioso e ótimos profissionais'
  }
];

const Star = ({ filled }) => (
  <span style={{ color: filled ? '#FFD700' : '#e0e0e0', fontSize: 22, marginRight: 2 }}>★</span>
);

const GoogleReviewsSection = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 600 : false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {

    return undefined;
  }, [isMobile]);


  const handleMouseDown = (e) => {
    if (isMobile) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    if (isMobile) return;
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isMobile || !isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Sensibilidade
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsDragging(false);
  };

  // Touch events para mobile
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isMobile || !isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    setIsDragging(false);
  };

  return (
    <section style={{ background: '#fff', padding: isMobile ? '36px 0 48px 0' : '60px 0 80px 0' }}>
      <h2 style={{
        color: '#7d5a8c',
        fontSize: isMobile ? 22 : 36,
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: isMobile ? 28 : 50
      }}>
        Pacientes e familiares que confiam em nossos serviços
      </h2>
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          justifyContent: isMobile ? 'flex-start' : 'center',
          alignItems: 'stretch',
          gap: isMobile ? 12 : 32,
          maxWidth: 1400,
          margin: '0 auto',
          overflowX: isMobile ? 'hidden' : 'auto',
          padding: isMobile ? '0 4vw 8px 4vw' : '0 0 16px 0',
          boxSizing: 'border-box',
          scrollbarWidth: 'thin',
          WebkitOverflowScrolling: 'touch',
          position: 'relative',
        }}
      >
        {reviews.map((review, idx) => (
          <div
            key={idx}
            style={{
              background: '#f7f3fa',
              borderRadius: 20,
              boxShadow: '0 4px 16px rgba(125,90,140,0.08)',
              padding: isMobile ? '18px 5vw' : '32px 28px',
              width: isMobile ? '92vw' : 320,
              minWidth: isMobile ? '92vw' : 320,
              maxWidth: isMobile ? '98vw' : 320,
              minHeight: isMobile ? 'unset' : 320,
              flex: isMobile ? `0 0 92vw` : '0 0 320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              fontSize: isMobile ? 14 : 17,
              marginLeft: isMobile && idx === 0 ? '4vw' : 0,
              marginRight: isMobile && idx === reviews.length - 1 ? '4vw' : 0,
              boxSizing: 'border-box',
              justifyContent: 'space-between',
            }}
          >
            <img
              src={review.avatar}
              alt={review.name}
              style={{
                width: isMobile ? 40 : 64,
                height: isMobile ? 40 : 64,
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: isMobile ? 8 : 16,
                border: '3px solid #fff',
                boxShadow: '0 2px 8px rgba(125,90,140,0.10)'
              }}
            />
            <div style={{ marginBottom: isMobile ? 4 : 10 }}>
              {[1,2,3,4,5].map((n) => (
                <Star key={n} filled={n <= review.rating} />
              ))}
            </div>
            <p style={{ fontSize: isMobile ? 12 : 17, color: '#6b4c7b', marginBottom: isMobile ? 8 : 18, fontWeight: 500 }}>
              "{review.comment}"
            </p>
            <span style={{ fontWeight: 700, color: '#7d5a8c', fontSize: isMobile ? 13 : 18 }}>{review.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoogleReviewsSection; 