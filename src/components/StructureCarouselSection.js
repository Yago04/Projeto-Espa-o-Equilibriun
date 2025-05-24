import React, { useState, useEffect } from 'react';
import { useScrollReveal } from './useScrollReveal';

const grupos = {
  aguas: [
    require('../assets/nutricao.jpg'),
    require('../assets/psicologa.jpg'),
    require('../assets/psicopedagogia.jpg'),
  ],
  taguatinga: [
    require('../assets/escritorio.webp'),
    require('../assets/escritorio2.webp'),
    require('../assets/images//escritorio3.webp'),
  ],
};

const StructureCarouselSection = () => {
  const [grupo, setGrupo] = useState('aguas');
  const [startIdx, setStartIdx] = useState(0);
  const visibleImages = 3;
  const isMobile = window.innerWidth < 900;
  const [fadeIn, setFadeIn] = useState(false);
  const [ref, visible] = useScrollReveal();
  const [titleRef, titleVisible] = useScrollReveal();

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200);
  }, [grupo]);

  const images = grupos[grupo];

  return (
    <section
    id='estrutura'
      ref={ref}
      style={{
        background: '#fff',
        padding: '60px 0',
        textAlign: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.7s, transform 0.7s',
      }}
    >
      <h2
        ref={titleRef}
        style={{
          color: '#8e5fa2',
          fontSize: 44,
          fontWeight: 900,
          marginBottom: 10,
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.7s, transform 0.7s',
        }}
      >
        Nossa Estrutura
      </h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: isMobile ? 10 : 30,
        marginBottom: 30,
        padding: isMobile ? '0 4vw' : 0,
      }}>
        <div style={{
          display: 'flex',
          gap: isMobile ? 10 : 30,
          flexDirection: isMobile ? 'column' : 'row',
        }}>
          {images.slice(startIdx, startIdx + visibleImages).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Estrutura ${idx + 1}`}
              style={{
                width: isMobile ? '90vw' : 400,
                height: isMobile ? '28vw' : 260,
                maxWidth: 400,
                minWidth: 120,
                objectFit: 'cover',
                borderRadius: 20,
                boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
                background: '#f3f7fb',
                opacity: fadeIn ? 1 : 0,
                transform: fadeIn ? 'translateY(0)' : 'translateY(40px)',
                transition: 'opacity 0.7s, transform 0.7s',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructureCarouselSection; 