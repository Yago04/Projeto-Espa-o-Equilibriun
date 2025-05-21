import React, { useState, useEffect } from 'react';
// Importe suas imagens reais
import aguas1 from '../assets/escritorio_aguas.png';
import aguas2 from '../assets/escritorio_aguas1.png';
import aguas3 from '../assets/escritorio_aguas2.png';
import tagua1 from '../assets/escritorio.webp';
import tagua2 from '../assets/escritorio2.webp';
import tagua3 from '../assets/escritorio3.webp';


const grupos = {
  aguas: [aguas1, aguas2, aguas3],
  taguatinga: [tagua1, tagua2, tagua3],
};

const StructureCarouselSection = () => {
  const [grupo, setGrupo] = useState('aguas');
  const [startIdx, setStartIdx] = useState(0);
  const visibleImages = 3;
  const isMobile = window.innerWidth < 900;
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200);
  }, [grupo]);

  const images = grupos[grupo];

  const next = () => {
    setStartIdx((prev) => (prev + 1) % (images.length - visibleImages + 1));
  };

  const prev = () => {
    setStartIdx((prev) => (prev - 1 + (images.length - visibleImages + 1)) % (images.length - visibleImages + 1));
  };

  const handleGrupo = (novoGrupo) => {
    setGrupo(novoGrupo);
    setStartIdx(0);
  };

  return (
    <section style={{ background: '#fff', padding: '60px 0', textAlign: 'center' }}>
      <h2 style={{ color: '#8e5fa2', fontSize: 44, fontWeight: 900, marginBottom: 10 }}>Nossa Estrutura</h2>
      <p style={{ color: '#8e5fa2', fontSize: 22, fontWeight: 700, marginBottom: 40 }}>
        Atendimento especializado e humanizado para todas as idades.
      </p>
      <div style={{ marginBottom: 30, display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={() => handleGrupo('aguas')}
          style={{
            background: grupo === 'aguas' ? '#7d5a8c' : '#d1b3e0',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            fontWeight: 500,
            fontSize: 'clamp(15px, 4vw, 20px)',
            padding: '14px 0',
            minWidth: 0,
            width: '100%',
            maxWidth: 320,
            cursor: 'pointer',
            boxShadow: grupo === 'aguas' ? '0 2px 8px rgba(125,90,140,0.08)' : 'none',
            transition: 'all 0.2s',
            marginBottom: 10,
          }}
        >
          Unidade Águas Claras
        </button>
        <button
          onClick={() => handleGrupo('taguatinga')}
          style={{
            background: grupo === 'taguatinga' ? '#7d5a8c' : '#d1b3e0',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            fontWeight: 500,
            fontSize: 'clamp(15px, 4vw, 20px)',
            padding: '14px 0',
            minWidth: 0,
            width: '100%',
            maxWidth: 320,
            cursor: 'pointer',
            boxShadow: grupo === 'taguatinga' ? '0 2px 8px rgba(125,90,140,0.08)' : 'none',
            transition: 'all 0.2s',
            marginBottom: 10,
          }}
        >
          Unidade Taguatinga
        </button>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        marginBottom: 30,
      }}>
        <div style={{
          display: 'flex',
          gap: 30,
          flexDirection: isMobile ? 'column' : 'row',
        }}>
          {images.slice(startIdx, startIdx + visibleImages).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Estrutura ${idx + 1}`}
              style={{
                width: isMobile ? 300 : 400,
                height: isMobile ? 180 : 260,
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