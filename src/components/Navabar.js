import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'neurodiversidade', label: 'O que é neurodiversidade' },
  { id: 'servicos', label: 'Nossos serviços' },
  { id: 'estrutura', label: 'Nossa estrutura' },
  { id: 'onde-estamos', label: 'Onde estamos' },
  { id: 'contato', label: 'Contato' },
];

const Navbar = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 900);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#7d5a8c',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      }}
    >
      {/* Logo */}
      <div
        style={{ 
          flexShrink: 0, 
          cursor: 'pointer',
          marginLeft: mobile ? 0 : 50, // margem para trazer a logo mais para direita
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img
          src={require('../assets/logo-branca.png')} // ajuste caminho
          alt="Logo"
          style={{
            height: mobile ? 60 : 80,
            width: 'auto',
            transition: 'height 0.3s',
          }}
        />
      </div>

      {/* Botão hambúrguer só no mobile */}
      {mobile && (
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 30,
            height: 30,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            zIndex: 1100,
          }}
        >
          <span
            style={{
              width: 28,
              height: 3,
              background: '#fff',
              borderRadius: 2,
              transition: 'all 0.3s',
              transform: menuOpen ? 'rotate(45deg)' : 'none',
              position: 'relative',
              top: menuOpen ? 12 : 0,
            }}
          />
          <span
            style={{
              width: 28,
              height: 3,
              background: '#fff',
              borderRadius: 2,
              margin: '6px 0',
              opacity: menuOpen ? 0 : 1,
              transition: 'all 0.3s',
            }}
          />
          <span
            style={{
              width: 28,
              height: 3,
              background: '#fff',
              borderRadius: 2,
              transition: 'all 0.3s',
              transform: menuOpen ? 'rotate(-45deg)' : 'none',
              position: 'relative',
              top: menuOpen ? -6 : 0,
            }}
          />
        </button>
      )}

      {/* Menu */}
      <ul
        style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: mobile ? (menuOpen ? 'flex' : 'none') : 'flex',
          flexDirection: mobile ? 'column' : 'row',
          position: mobile ? 'fixed' : 'static',
          top: mobile ? 60 : 'auto',
          right: mobile ? 0 : 'auto',
          backgroundColor: '#7d5a8c',
          width: mobile ? '60vw' : 'auto',
          height: mobile ? 'calc(100vh - 60px)' : 'auto',
          boxShadow: mobile ? '-2px 0 8px rgba(0,0,0,0.15)' : 'none',
          paddingTop: mobile ? 20 : 0,
          zIndex: 1050,
          overflowY: 'auto',
          alignItems: 'center',
          alignItems: mobile ? 'stretch' : 'center'
        }}
      >
        {sections.map(({ id, label }) => {
          if (id === 'contato') {
            return (
              <li key={id} style={{ margin: mobile ? '0 0 20px 20px' : '0 20px' }}>
                <a
                  href="https://api.whatsapp.com/send?phone=5561981707664"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#fff',
                    backgroundColor: '#25D366',
                    fontWeight: '700',
                    fontSize: 18,
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    padding: '8px 16px',
                    borderRadius: 25,
                    display: 'inline-block',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1ebe57')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
                >
                  {label}
                </a>
              </li>
            );
          }

          return (
            <li key={id} style={{ margin: mobile ? '0 0 20px 20px' : '0 20px' }}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(id);
                }}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: 18,
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  display: 'block',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#d1b3e0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
