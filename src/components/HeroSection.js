import React from 'react';

const isMobile = () => window.innerWidth <= 900;

const HeroSection = () => {
  const [mobile, setMobile] = React.useState(isMobile());
  const [hover, setHover] = React.useState(false);
  const [img1Visible, setImg1Visible] = React.useState(false);
  const [img2Visible, setImg2Visible] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setMobile(isMobile());
    window.addEventListener('resize', handleResize);
    // Efeito de fade-in
    setTimeout(() => setImg1Visible(true), 200);
    setTimeout(() => setImg2Visible(true), 500);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      style={{
        background: `url(${require('../assets/container_fundo.png')}) center/cover no-repeat`,
        color: '#fff',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Logo no canto superior esquerdo */}
      <img
        src={require('/Users/yagoribeirodeoliveira/Desktop/ Projeto Equilibrium /lp-frontend/src/assets/logo-branca.png')}
        alt="Logo Espaço Equilibrium"
        style={{
          width: mobile ? '32vw' : 180,
          minWidth: 80,
          maxWidth: 140,
          position: 'absolute',
          top: mobile ? 12 : 30,
          left: mobile ? 12 : 40,
          zIndex: 10,
        }}
      />

      {/* Container central flexível */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: mobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          width: '100%',
          maxWidth: 1400,
          margin: '0 auto',
          padding: mobile ? '0 4vw' : '0 40px',
          boxSizing: 'border-box',
        }}
      >
        {/* Coluna centralizada com textos e botão */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            marginBottom: mobile ? 40 : 0,
            marginTop: mobile ? 120 : 0,
          }}
        >
          <h1
            style={{
              fontSize: mobile ? '6vw' : 48,
              fontWeight: 700,
              margin: '0 0 24px 0',
              textAlign: 'center',
              lineHeight: mobile ? 1.3 : 1.1,
              letterSpacing: mobile ? '-0.5px' : 'normal',
              padding: mobile ? '0 2vw' : '0',
              wordBreak: 'break-word',
            }}
          >
            Você já ouviu falar em <br /> Neurodiversidade?
          </h1>
          <p
            style={{
              fontSize: mobile ? '4vw' : 22,
              maxWidth: 500,
              margin: '0 auto 32px auto',
              textAlign: 'justify',
              fontWeight: 500,
              lineHeight: mobile ? 1.5 : 1.4,
              padding: mobile ? '0 2vw' : '0',
              wordBreak: 'break-word',
            }}
          >
            Descubra como a aceitação das diferenças neurológicas pode transformar vidas e como nossos serviços especializados podem ajudar você e a sua família.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5561981707664&text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informações!."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: hover ? '#38b2ac' : '#4fd1c5',
              color: '#fff',
              fontWeight: 700,
              fontSize: mobile ? '4vw' : 20,
              border: 'none',
              borderRadius: 25,
              padding: mobile ? '3vw 7vw' : '18px 48px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
              cursor: 'pointer',
              marginTop: 10,
              transition: 'all 0.3s ease',
              width: mobile ? '90vw' : 'auto',
              maxWidth: mobile ? '320px' : 'none',
              minWidth: mobile ? '60vw' : 'none',
              textDecoration: 'none',
              display: 'inline-block',
              textAlign: 'center',
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Agende sua consulta
          </a>
        </div>

        {/* Coluna das imagens à direita ou abaixo no mobile */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: mobile ? 'center' : 'flex-end',
            position: 'relative',
            minWidth: mobile ? 180 : 420,
            minHeight: mobile ? 180 : 480,
            width: '100%',
            marginTop: mobile ? 30 : 0,
          }}
        >
          {/* Círculo lilás de fundo */}
          <div
            style={{
              position: 'absolute',
              right: mobile ? 8 : 60,
              top: mobile ? 0 : -90,
              width: mobile ? '40vw' : 380,
              height: mobile ? '40vw' : 380,
              minWidth: 120,
              minHeight: 120,
              borderRadius: '50%',
              background: '#bfa3d2',
              zIndex: 0,
            }}
          />
          {/* Primeira criança (fundo) */}
          <img
            src={require('/Users/yagoribeirodeoliveira/Desktop/ Projeto Equilibrium /lp-frontend/src/assets/foto_crianca2.png')}
            alt="Criança 1"
            style={{
              width: mobile ? '50vw' : 420,
              height: mobile ? '50vw' : 420,
              minWidth: 120,
              minHeight: 120,
              borderRadius: '50%',
              border: '5px solid #fff',
              objectFit: 'cover',
              position: 'absolute',
              right: mobile ? 16 : 100,
              top: mobile ? 0 : -90,
              zIndex: 1,
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
              background: '#fff',
              opacity: img1Visible ? 1 : 0,
              transform: img1Visible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.7s, transform 0.7s',
              maxWidth: '90vw',
              maxHeight: '90vw',
            }}
          />
          {/* Segunda criança (frente, sobreposta) */}
          <img
            src={require('/Users/yagoribeirodeoliveira/Desktop/ Projeto Equilibrium /lp-frontend/src/assets/foto_crianca.png')}
            alt="Criança 2"
            style={{
              width: mobile ? '36vw' : 360,
              height: mobile ? '36vw' : 360,
              minWidth: 90,
              minHeight: 90,
              borderRadius: '50%',
              border: '5px solid #fff',
              objectFit: 'cover',
              position: 'absolute',
              right: mobile ? 0 : 0,
              top: mobile ? 60 : 220,
              zIndex: 2,
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
              background: '#fff',
              opacity: img2Visible ? 1 : 0,
              transform: img2Visible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.7s, transform 0.7s',
              maxWidth: '80vw',
              maxHeight: '80vw',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 