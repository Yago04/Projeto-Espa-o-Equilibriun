import React, { useState, useEffect } from 'react';
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
  const [fadeIn, setFadeIn] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);

  const images = grupos[grupo];
  const visibleImages = isMobile ? 1 : 3;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200);
  }, [grupo, startIdx]);

  const handleGrupo = (novoGrupo) => {
    setGrupo(novoGrupo);
    setStartIdx(0);
  };

  const handlePrev = () => {
    if (startIdx > 0) setStartIdx((prev) => prev - 1);
  };

  const handleNext = () => {
    if (startIdx < images.length - visibleImages) setStartIdx((prev) => prev + 1);
  };

  const handleTouchStart = (e) => setDragStart(e.touches[0].clientX);
  const handleTouchMove = (e) => setDragEnd(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (!dragStart || !dragEnd) return;
    const distance = dragStart - dragEnd;
    if (distance > 50 && startIdx < images.length - 1) handleNext();
    else if (distance < -50 && startIdx > 0) handlePrev();
    setDragStart(null);
    setDragEnd(null);
  };

  const handleMouseDown = (e) => setDragStart(e.clientX);
  const handleMouseMove = (e) => {
    if (dragStart !== null) setDragEnd(e.clientX);
  };
  const handleMouseUp = () => {
    if (!dragStart || !dragEnd) return;
    const distance = dragStart - dragEnd;
    if (distance > 50 && startIdx < images.length - 1) handleNext();
    else if (distance < -50 && startIdx > 0) handlePrev();
    setDragStart(null);
    setDragEnd(null);
  };

  return (
    <section style={{ background: '#fff', padding: '60px 0', textAlign: 'center' }} id='estrutura'>
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
            width: '100%',
            maxWidth: 320,
            cursor: 'pointer',
            boxShadow: grupo === 'aguas' ? '0 2px 8px rgba(125,90,140,0.08)' : 'none',
            transition: 'all 0.2s',
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
            width: '100%',
            maxWidth: 320,
            cursor: 'pointer',
            boxShadow: grupo === 'taguatinga' ? '0 2px 8px rgba(125,90,140,0.08)' : 'none',
            transition: 'all 0.2s',
          }}
        >
          Unidade Taguatinga
        </button>
      </div>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 15,
          marginBottom: 30,
          overflow: 'hidden',
          touchAction: 'pan-y',
          width: isMobile ? 320 : 960,
          margin: '0 auto',
          cursor: 'grab',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Botão seta esquerda */}
        <button
          onClick={handlePrev}
          disabled={startIdx === 0}
          style={{
            position: 'absolute',
            left: 0,
            background: '#7d5a8c',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: 40,
            height: 40,
            cursor: startIdx === 0 ? 'not-allowed' : 'pointer',
            opacity: startIdx === 0 ? 0.5 : 1,
            display: isMobile ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            userSelect: 'none',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
          }}
        >
          ◀
        </button>

        {/* Imagens */}
        {images.slice(startIdx, startIdx + visibleImages).map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Estrutura ${idx + 1}`}
            style={{
              width: isMobile ? 280 : 300,
              height: isMobile ? 180 : 260,
              objectFit: 'cover',
              borderRadius: 20,
              boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
              background: '#f3f7fb',
              opacity: fadeIn ? 1 : 0,
              transform: fadeIn ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.7s, transform 0.7s',
              userSelect: 'none',
            }}
            draggable={false}
          />
        ))}

        {/* Botão seta direita */}
        <button
          onClick={handleNext}
          disabled={startIdx >= images.length - visibleImages}
          style={{
            position: 'absolute',
            right: 0,
            background: '#7d5a8c',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: 40,
            height: 40,
            cursor: startIdx >= images.length - visibleImages ? 'not-allowed' : 'pointer',
            opacity: startIdx >= images.length - visibleImages ? 0.5 : 1,
            display: isMobile ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            userSelect: 'none',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
          }}
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default StructureCarouselSection;
