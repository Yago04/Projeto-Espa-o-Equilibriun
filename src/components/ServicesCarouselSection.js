import React, { useState, useEffect } from 'react';
import psicologaImg from '../assets/images/imagesProf/psicologa.jpg';
import psicopedagogiaImg from '../assets/images/imagesProf/psicopedagogia.jpg';
import fonodiologa1 from '../assets/images/imagesProf/fonodiologia.jpg';
import nutricaoImg from '../assets/images/imagesProf/nutricao.jpg';
import avaliacaoImg from '../assets/images/imagesProf/avaliacao.jpg';
import mbaImg from '../assets/images/imagesProf/mba.jpg';
import terapia from '../assets/images/imagesProf/terapiaocu.avif';
import Pediatria from '../assets/images/imagesProf/pediatra.webp';
import Psiquiatria from '../assets/images/imagesProf/psiquiatria.jpg';
import { useScrollReveal } from './useScrollReveal';


// Imagens de exemplo (substitua pelos seus arquivos locais se desejar)


const allCards = [
  {
    img: psicologaImg,
    title: 'Psicologia',
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
  {
    img: mbaImg,
    title: 'Metodologia ABA',
    name: '',
    description: 'Abordagens baseadas em Análise do Comportamento Aplicada.',
    contato: '',
    url: 'https://api.whatsapp.com/send?phone=5561981707664&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!.'
  },
  
  {
    img: avaliacaoImg,
    title: 'Avaliação Neuropsicológica',
    name: '',
    description: 'Avaliação completa das funções cognitivas.',
    contato: '',
    url: 'https://api.whatsapp.com/send?phone=5561981707664&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!.'
  },
  {
    img: terapia,
    title: 'Terapia Ocupacional',
    name: '',
    description: 'Atendimento especializado em terapia ocupacional para todas as idades.',
    contato: '',
    url: 'https://api.whatsapp.com/send?phone=5561981707664&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!.'
  },
  {
  img: Pediatria,
  title: 'Pediatria',
  name: '',
  description: 'Atendimento especializado em pediatria para todas as idades.',
  contato: '',
  url: 'https://api.whatsapp.com/send?phone=5561981707664&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!.'
},
{
  img: Psiquiatria,
  title: 'Psiquiatria',
  name: '',
  description: 'Atendimento especializado em Psiquiatria para todas as idades.',
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

  // Indicadores de página
  const totalPages = Math.ceil(allCards.length / visibleCards);
  const currentPage = Math.floor(startIdx / visibleCards) + 1;

  return (
    <section
    id='servicos'
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
          fontSize: isMobile ? 32 : 44,
          fontWeight: 900,
          marginBottom: 10,
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.7s, transform 0.7s',
        }}
      >
        Nossos Serviços
      </h2>
      <p style={{ 
        color: '#6b3fa0', 
        fontSize: isMobile ? 16 : 20, 
        fontWeight: 700, 
        marginBottom: 40,
        padding: isMobile ? '0 20px' : '0'
      }}>
        Atendimento especializado e humanizado para todas as idades
      </p>

      {/* Botões de navegação */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginBottom: 30
      }}>
        <button
          onClick={prev}
          style={{
            background: '#6b3fa0',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: isMobile ? 35 : 50,
            height: isMobile ? 35 : 50,
            fontSize: isMobile ? 18 : 24,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }}
        >
          ←
        </button>

        {/* Indicadores de página */}
        <div style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center'
        }}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              style={{
                width: isMobile ? 8 : 10,
                height: isMobile ? 8 : 10,
                borderRadius: '50%',
                background: currentPage === index + 1 ? '#6b3fa0' : '#d1b3e0',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          style={{
            background: '#6b3fa0',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: isMobile ? 35 : 50,
            height: isMobile ? 35 : 50,
            fontSize: isMobile ? 18 : 24,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }}
        >
          →
        </button>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: isMobile ? 24 : 60,
        marginBottom: 30,
        padding: isMobile ? '0 4vw' : '0',
        transition: 'all 0.5s ease-in-out',
        width: '100%',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 24 : 60,
          transition: 'all 0.5s ease-in-out',
          width: '100%',
          maxWidth: isMobile ? '100%' : '1200px',
          margin: '0 auto',
        }}>
          {allCards.slice(startIdx, startIdx + visibleCards).map((card, idx) => (
            <div
              key={idx}
              style={{
                perspective: '1000px',
                width: isMobile ? '85%' : '280px',
                height: isMobile ? '350px' : '350px',
                cursor: 'pointer',
                transition: 'all 0.5s ease-in-out',
                margin: isMobile ? '0 auto' : 0,
              }}
              onClick={() => handleFlip(idx)}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.8s ease-in-out',
                  transformStyle: 'preserve-3d',
                  transform: flipped[idx] ? 'rotateY(180deg)' : 'rotateY(0)',
                }}
              >
                {/* Frente do card */}
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                    transition: 'all 0.5s ease-in-out',
                  }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'all 0.5s ease-in-out',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                      padding: '20px',
                      color: '#fff',
                      transition: 'all 0.5s ease-in-out',
                    }}
                  >
                    <h3 style={{ margin: 0, fontSize: isMobile ? 20 : 24, fontWeight: 700 }}>
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Verso do card */}
                <div
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: '#6b3fa0',
                    borderRadius: '20px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                    transition: 'all 0.5s ease-in-out',
                  }}
                >
                  <h3 style={{ margin: '0 0 15px 0', fontSize: isMobile ? 20 : 24, fontWeight: 700 }}>
                    {card.title}
                  </h3>
                  <p style={{ 
                    margin: '0 0 20px 0', 
                    fontSize: isMobile ? 14 : 16,
                    textAlign: 'center',
                    lineHeight: 1.5
                  }}>
                    {card.description}
                  </p>
                  {card.name && (
                    <p style={{ 
                      margin: '0 0 10px 0', 
                      fontSize: isMobile ? 14 : 16,
                      fontWeight: 600
                    }}>
                      {card.name}
                    </p>
                  )}
                  {card.contato && (
                    <p style={{ 
                      margin: '0 0 20px 0', 
                      fontSize: isMobile ? 14 : 16
                    }}>
                      {card.contato}
                    </p>
                  )}
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: '#fff',
                      color: '#6b3fa0',
                      padding: '10px 20px',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: isMobile ? 14 : 16,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      }
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