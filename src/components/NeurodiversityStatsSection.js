import React from 'react';
import { useScrollReveal } from './useScrollReveal';

const stats = [
  {
    value: '+ 20%',
    description: (
      <>
        População mundial <br/>
        é neurodiversa, abragendo novas condições como autismo, TDAH, dislexia, entre outras.
      </>
    ),
  },
  {
    value: '1 entre 5',
    description: (
      <>
       Tem algum tipo
        deferença de 
        aprendizagem,
        destacando a
        necessidade de
         ambiente educacionais inclusivos.
        
      </>
    ),
  },
  {
    value: '90%',
    description: (
      <>
        Dos gestores que
        adotaram a 
        neurodiversidade relataram melhorias na cultura organizacional
      </>
    ),
  },
];

const NeurodiversityStatsSection = () => {
  const [mobile, setMobile] = React.useState(window.innerWidth < 900);
  const [ref, visible] = useScrollReveal();
  const [titleRef, titleVisible] = useScrollReveal();

  React.useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: `url(${require('/Users/yagoribeirodeoliveira/Desktop/ Projeto Equilibrium /lp-frontend/src/assets/images/imagesContainer/imagesContaine/container_fundo.png')}) center/cover no-repeat`,
        color: '#fff',
        position: 'relative',
        padding: mobile ? '60px 0 60px 0' : '100px 0 100px 0',
        minHeight: '60vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.7s, transform 0.7s',
      }}
    >
      {/* Curva superior */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: mobile ? 80 : 150,
          zIndex: 1,
        }}
      >
        <path
          fill="#fff"
          d="M0,32L60,37.3C120,43,240,53,360,58.7C480,64,600,64,720,53.3C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      {/* Conteúdo */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <h2
          ref={titleRef}
          style={{
            textAlign: 'center',
            fontSize: mobile ? 28 : 44,
            fontWeight: 400,
            marginBottom: 10,
            marginTop: mobile ? 40 : 0,
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.7s, transform 0.7s',
          }}
        >
          Dados e estatísticas sobre
        </h2>
        <h1
          style={{
            textAlign: 'center',
            fontSize: mobile ? 32 : 48,
            fontWeight: 900,
            marginBottom: mobile ? 40 : 60,
            letterSpacing: 1,
          }}
        >
          NEURODIVERSIDADE
        </h1>

        <div
          style={{
            display: 'flex',
            flexDirection: mobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: mobile ? 'center' : 'flex-start',
            gap: mobile ? 16 : 80,
            marginBottom: 40,
            width: '100%',
          }}
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: mobile ? 'unset' : 180,
                width: mobile ? '90vw' : 'auto',
                maxWidth: 260,
                margin: '0 10px',
              }}
            >
              <div
                style={{
                  fontSize: mobile ? 32 : 40,
                  fontWeight: 700,
                  marginBottom: 10,
                  marginTop: 10,
                  letterSpacing: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: mobile ? 16 : 18,
                  fontWeight: 700,
                  textAlign: 'center',
                  lineHeight: 1.2,
                  letterSpacing: 0.5,
                }}
              >
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Botões alinhados */}
        <div style={{ 
          display: 'flex', 
          flexDirection: mobile ? 'column' : 'row',
          justifyContent: 'center', 
          alignItems: 'center',
          gap: mobile ? 20 : 40,
          marginTop: 40,
          width: '100%',
        }}>
          <a
            href='https://cfa.org.br/'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              background: '#6b3fa0',
              color: '#fff',
              fontWeight: 700,
              fontSize: mobile ? 16 : 18,
              border: 'none',
              borderRadius: 25,
              padding: mobile ? '12px 24px' : '15px 30px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
              }
            }}
          >
            Saiba mais
          </a>

          <a
            href='https://api.whatsapp.com/send?phone=5561981707664&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!.'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              background: '#4fd1c5',
              color: '#fff',
              fontWeight: 900,
              fontSize: mobile ? 16 : 18,
              border: 'none',
              borderRadius: 25,
              padding: mobile ? '12px 24px' : '15px 30px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
              }
            }}
          >
            Agende sua consulta
          </a>
        </div>
      </div>

      {/* Curva inferior */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: mobile ? 80 : 150,
          zIndex: 1,
        }}
      >
        <path
          fill="#fff"
          d="M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,80C840,75,960,85,1080,90.7C1200,96,1320,96,1380,96L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
        ></path>
      </svg>
    </section>
  );
};

export default NeurodiversityStatsSection;
