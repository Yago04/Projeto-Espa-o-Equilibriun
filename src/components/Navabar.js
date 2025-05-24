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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 900);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const linkStyle = {
    color: '#7d5a8c',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: mobile ? 16 : 18,
    cursor: 'pointer',
    position: 'relative',
    padding: '8px 0',
    transition: 'all 0.3s ease',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '0%',
      height: '2px',
      bottom: 0,
      left: '50%',
      background: '#7d5a8c',
      transition: 'all 0.3s ease',
      transform: 'translateX(-50%)',
    },
    '&:hover:after': {
      width: '100%',
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : '#fff',
        color: '#7d5a8c',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: mobile ? '5px 20px' : '10px 50px',
        zIndex: 1000,
        boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.3s ease',
        height: mobile ? '100px' : '110px',
      }}
    >
      {/* Logo */}
      <div
        style={{ 
          flexShrink: 0, 
          cursor: 'pointer',
          marginLeft: mobile ? 0 : 20,
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img
          src={require('../assets/images/LogoEquilibrium/logo.png')}
          alt="Logo"
          style={{
            height: '100%',
            width: '150px',
            objectFit: 'contain',
            transition: 'all 0.3s ease',
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
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <span
            style={{
              width: 28,
              height: 2,
              background: '#7d5a8c',
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
              height: 2,
              background: '#7d5a8c',
              borderRadius: 2,
              margin: '6px 0',
              opacity: menuOpen ? 0 : 1,
              transition: 'all 0.3s',
            }}
          />
          <span
            style={{
              width: 28,
              height: 2,
              background: '#7d5a8c',
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
          top: mobile ? 100 : 'auto',
          right: mobile ? 0 : 'auto',
          backgroundColor: mobile ? '#fff' : 'transparent',
          width: mobile ? '100%' : 'auto',
          height: mobile ? 'calc(100vh - 100px)' : 'auto',
          boxShadow: mobile ? '0 4px 8px rgba(0,0,0,0.1)' : 'none',
          paddingTop: mobile ? 20 : 0,
          zIndex: 1050,
          overflowY: 'auto',
          alignItems: 'center',
          gap: mobile ? 30 : 40,
        }}
      >
        {sections.map(({ id, label }) => {
          if (id === 'contato') {
            return (
              <li key={id} style={{ margin: 0 }}>
                <a
                  href="https://api.whatsapp.com/send?phone=5561981707664"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...linkStyle,
                    background: '#25D366',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: 25,
                    '&:after': {
                      display: 'none',
                    },
                    '&:hover': {
                      background: '#1ebe57',
                      transform: 'translateY(-2px)',
                    }
                  }}
                >
                  {label}
                </a>
              </li>
            );
          }

          return (
            <li key={id} style={{ margin: 0 }}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(id);
                }}
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.target.style.color = '#9b6db7';
                  e.target.style.after = {
                    width: '100%',
                  };
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#7d5a8c';
                  e.target.style.after = {
                    width: '0%',
                  };
                }}
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
