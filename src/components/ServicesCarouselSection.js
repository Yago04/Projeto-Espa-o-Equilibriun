import React, { useState, useEffect } from 'react';
import psicologaImg from '../assets/psicologa.jpg';
import psicopedagogiaImg from '../assets/psicopedagogia.jpg';
import fonodiologa1 from '../assets/fonodiologa1.jpg';
import nutricaoImg from '../assets/nutricao.jpg';
import { useScrollReveal } from './useScrollReveal';


// Imagens de exemplo (substitua pelos seus arquivos locais se desejar)


const allCards = [
  {
    img: psicologaImg,
    title: 'Psicologa',
    
    name: '',
    description: 'Especialista em avaliação neuropsicológica infantil e adulta.',
    contato: '',
    url: 'https://api.whatsapp.com/send?phone=5561981707664&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!.'
  },
  {
    img: psicopedagogiaImg,
    title: 'Psicopedagogia',
    name: '',
    description: 'Psicóloga clínica com foco em desenvolvimento humano.',
    contato: '',
    url: 'https://api.whatsapp.com/send?phone=5561981707664&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!.'
  },
  {
    img: nutricaoImg,
    title: 'Nutrição',
    name: '',
    description: 'Fonoaudiólogo com experiência em linguagem e comunicação.',
    contato: '',
    url: '/servicos/nutricao'
  },

  {
    img: fonodiologa1,
    title: 'Fonoaudiologia',
    name: '',
    description: 'Fonoaudiólogo com experiência em linguagem e comunicação.',
    contato: '',
    url: 'https://api.whatsapp.com/send?phone=5561981707664&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!.'
  },


];

const ServicesCarouselSection = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [flipped, setFlipped] = useState([false, false, false, false]);
  const isMobile = window.innerWidth < 900;
  const visibleCards = isMobile ? 1 : 4;
  const [fadeIn, setFadeIn] = useState(false);
  const [ref, visible] = useScrollReveal();
  const [titleRef, titleVisible] = useScrollReveal();

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200);
  }, []);

  const next = () => {
    setStartIdx((prev) => (prev + 1) % (allCards.length - visibleCards + 1));
    setFlipped(Array(visibleCards).fill(false));
  };

  const prev = () => {
    setStartIdx((prev) => (prev - 1 + (allCards.length - visibleCards + 1)) % (allCards.length - visibleCards + 1));
    setFlipped(Array(visibleCards).fill(false));
  };

  const handleFlip = (idx) => {
    setFlipped((prev) => prev.map((f, i) => (i === idx ? !f : f)));
  };

  return (
    <section
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
          color: '#6b3fa0',
          fontSize: 44,
          fontWeight: 900,
          marginBottom: 10,
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.7s, transform 0.7s',
        }}
      >
        Nossos Serviços
      </h2>
      <p style={{ color: '#6b3fa0', fontSize: 20, fontWeight: 700, marginBottom: 40 }}>
        Atendimento especializado e humanizado para todas as idades
      </p>
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: isMobile ? 24 : 80,
        marginBottom: 30,
        padding: isMobile ? '0 4vw' : '0',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 24 : 120,
          alignItems: 'center',
        }}>
          {(isMobile ? allCards : allCards.slice(startIdx, startIdx + visibleCards)).map((card, idx) => (
            <div
              key={idx}
              style={{
                perspective: 1200,
                minWidth: isMobile ? '90vw' : 220,
                maxWidth: isMobile ? '95vw' : 240,
                height: isMobile ? 340 : 320,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: fadeIn ? 1 : 0,
                transform: fadeIn ? 'translateY(0)' : 'translateY(40px)',
                transition: 'opacity 0.7s, transform 0.7s',
                margin: isMobile ? '0 auto' : 0,
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transition: 'transform 0.6s',
                  transformStyle: 'preserve-3d',
                  transform: flipped[idx] ? 'rotateY(180deg)' : 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => handleFlip(idx)}
                onMouseEnter={() => handleFlip(idx)}
                onMouseLeave={() => handleFlip(idx)}
              >
                {/* Frente do card */}
                <div
                  style={{
                    background: '#f3f7fb',
                    borderRadius: 24,
                    padding: isMobile ? 18 : 18,
                    boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    style={{ 
                      width: isMobile ? '80vw' : 200, 
                      height: isMobile ? 180 : 200, 
                      objectFit: 'cover', 
                      borderRadius: 22, 
                      marginBottom: isMobile ? 16 : 18 
                    }} 
                  />
                  <div style={{ color: '#1a3365', fontWeight: 900, fontSize: 22, marginBottom: 10 }}>{card.title}</div>
                  <div style={{ color: '#6b3fa0', fontWeight: 500, fontSize: 16 }}>{card.subtitle}</div>
                  <div style={{ color: '#6b3fa0', fontWeight: 400, fontSize: 14, marginTop: 10 }}>Clique ou passe o mouse para saber mais</div>
                </div>
                {/* Verso do card */}
                <div
                  style={{
                    background: '#6b3fa0',
                    color: '#fff',
                    borderRadius: 24,
                    padding: 18,
                    boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <h3 style={{ fontSize: 24, marginBottom: 16, fontWeight: 700 }}>{card.title}</h3>
                  <p style={{ fontSize: 16, marginBottom: 16 }}>{card.description}</p>
                  <p style={{ fontSize: 16, marginBottom: 24 }}>{card.name}</p>
                  <p style={{ fontSize: 14, marginBottom: 24 }}>{card.contato}</p>
                  <a
                    href={card.url}
                    style={{
                      background: '#fff',
                      color: '#6b3fa0',
                      padding: '12px 24px',
                      borderRadius: 12,
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: 16,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                    }}
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarouselSection; 