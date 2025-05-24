import React from 'react';
import SimboloImg from '../assets/images/imagesIcons/Simbolo.png';
import coracaoImg from '../assets/images/imagesIcons/coracao.png';
import cerebroImg from '../assets/images/imagesIcons/cerebro.jpg'; 
import { useScrollReveal } from './useScrollReveal';

const infoBlocks = [
  {
    id: 'simboloid',
    img: SimboloImg,
    text: 'Neurodiversidade é um termo que reconhece as variações neurológicas, como: autismo, TDAH e dislexia, parte natural da condição humana.',
    imgPosition: 'left',
  },
  {
    id: 'coracaoid',
    img: coracaoImg,
    text: 'Em vez de considerar essas diferenças como problemas a serem corrigidos, a neurodiversidade propõe que elas sejam aceitas e valorizadas. Dessa forma, essas diferenças devem ser reconhecidas como características naturais, e não como questões a serem consertadas.',
    imgPosition: 'right',
  },
  {
    id: 'cerebroid',
    img: cerebroImg,
    text: 'A neurodiversidade enfatiza que cada pessoa tem um conjunto único de habilidades e desafios, e que as diferenças devem ser celebradas e compreendidas.',
    imgPosition: 'left',
  },
];

const NeurodiversityInfoSection = () => {
  const [mobile, setMobile] = React.useState(window.innerWidth < 800);
  const [ref, visible] = useScrollReveal();

  React.useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
    id='neurodiversidade'
      ref={ref}
      style={{
        background: '#fff',
        padding: '60px 0 40px 0',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.7s, transform 0.7s',
      }}
    >
      {/* Título */}
      <h2 style={{
        color: '#6b3fa0',
        fontSize: mobile ? 32 : 44,
        fontWeight: 900,
        textAlign: mobile ? 'center' : 'left',
        width: '90%',
        maxWidth: 900,
        marginBottom: 40,
        marginLeft: 0
      }}>
        O que é <br />
        <span style={{ fontWeight: 900 }}>Neurodiversidade?</span>
      </h2>

      {/* Blocos de informação */}
      <div style={{ width: '90%', maxWidth: 900 }}>
        {infoBlocks.map((block, idx) => (
          <React.Fragment key={idx}>
            <div
              style={{
                display: 'flex',
                flexDirection: mobile
                  ? 'column'
                  : block.imgPosition === 'left'
                  ? 'row'
                  : 'row-reverse',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: mobile ? 36 : 48,
                gap: 24,
                
              }}
            >
              <img
                src={block.img}
                alt=""
                style={{
                  width: block.id === 'cerebroid' 
                  ? (mobile ? 180 : 150) 
                  : block.id === 'simboloid'  
                  ? (mobile ? 210 : 200) 
                  : block.id === 'coracaoid'
                  ? (mobile ? 185 : 210)
                  : (mobile ? 160 : 210),

                  height: block.id === 'cerebroid'
                  ? (mobile ? 150 : 130) 
                  : block.id === 'simboloid'
                  ? (mobile ? 150 : 170)
                  : block.id === 'coracaoid'
                  ? (mobile ? 150 : 125)
                  : (mobile ? 150 : 125),

                  marginBottom: mobile ? 18 : 0,
                  transition: 'width 0.3s, height 0.3s',
                }}
              />
              
              <div style={{
                flex: 1,
                color: '#6b3fa0',
                fontSize: mobile ? 16 : 18,
                fontWeight: 700,
                textAlign: mobile ? 'center' : (idx === 1 ? 'right' : 'left'),
                minWidth: mobile ? 'unset' : 200,
                padding: mobile ? '0 4vw' : 0,
                wordBreak: 'break-word',
                transition: 'text-align 0.3s',
              }}>
                {block.text}
              </div>
            </div>
            {/* Linha pontilhada, exceto após o último bloco */}
            {idx < infoBlocks.length - 1 && (
              <div style={{
                width: '100%',
                borderBottom: '2px dotted #bfa3d2',
                margin: mobile ? '28px 0 28px 0' : '38px 0 38px 0'
              }} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Botão centralizado */}
      <a
      href='https://api.whatsapp.com/send?phone=5561981707664&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!.'
      target='_blank'
      rel='noopener noreferrer'
        style={{
          background: '#4fd1c5',
          color: '#fff',
          fontWeight: 900,
          fontSize: 20,
          border: 'none',
          borderRadius: 25,
          padding: '18px 48px',
          boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
          cursor: 'pointer',
          marginTop: 30,
          textDecoration: 'none',
          display: 'inline-block',
          textAlign: 'center',
          
        }}

      >
        Agende sua consulta
      </a>
    </section>
  );
};

export default NeurodiversityInfoSection; 