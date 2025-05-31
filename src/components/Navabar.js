import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';


const sections = [
  { id: 'neurodiversidade', label: 'O que é neurodiversidade' },
  { id: 'servicos', label: 'Nossos serviços' },
  { id: 'estrutura', label: 'Nossa estrutura' },
  { id: 'onde-estamos', label: 'Onde estamos' },
  { id: 'contato', label: 'Contato' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'bg-white shadow-sm' : 'bg-white'}`} 
         style={{ 
           transition: 'all 0.3s ease',
           height: '100px',
           backgroundColor: '#fff',
           boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
         }}>
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src={require('../assets/images/LogoEquilibrium/logo.png')}
            alt="Logo"
            style={{
              height: '80px',
              width: 'auto',
              objectFit: 'contain',
              transition: 'all 0.3s ease',
            }}
          />
        </a>

        {/* Botão hambúrguer */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: 'none',
            padding: '0.5rem',
            color: '#7d5a8c'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {sections.map(({ id, label }) => {
              if (id === 'contato') {
                return (
                  <li className="nav-item" key={id}>
                    <a
                      className="nav-link"
                      href="https://api.whatsapp.com/send?phone=5561981707664"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: '#25D366',
                        color: '#fff',
                        padding: '10px 20px',
                        borderRadius: '25px',
                        marginLeft: '1rem',
                        transition: 'all 0.3s ease',
                        fontWeight: 500,
                        '@media (max-width: 991px)': {
                          margin: '10px 0',
                          textAlign: 'center',
                          width: '100%'
                        }
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#1ebe57';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = '#25D366';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      {label}
                    </a>
                  </li>
                );
              }

              return (
                <li className="nav-item" key={id}>
                  <a
                    className="nav-link"
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(id);
                    }}
                    style={{
                      color: '#7d5a8c',
                      fontWeight: 500,
                      fontSize: '1.1rem',
                      padding: '0.5rem 1rem',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      '@media (max-width: 991px)': {
                        background: '#f8f5fa',
                        margin: '5px 0',
                        borderRadius: '8px',
                        textAlign: 'center',
                        padding: '12px 20px',
                        width: '100%',
                        display: 'block',
                        border: '1px solid #e6d9f0'
                      }
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#9b6db7';
                      if (window.innerWidth <= 991) {
                        e.target.style.background = '#f0e6f5';
                        e.target.style.borderColor = '#d4b8e6';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#7d5a8c';
                      if (window.innerWidth <= 991) {
                        e.target.style.background = '#f8f5fa';
                        e.target.style.borderColor = '#e6d9f0';
                      }
                    }}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
