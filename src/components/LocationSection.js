import React, { useState, useEffect } from 'react';

const LocationSection = () => {
  const [selectedUnit, setSelectedUnit] = useState('aguas');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const locations = {
    aguas: {
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.617409883473!2d-48.062780323982516!3d-15.824114984820417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33349b61fc23%3A0xac0c774121a92fb8!2sEspa%C3%A7o%20Equilibrium!5e0!3m2!1spt-PT!2sbr!4v1747751844860!5m2!1spt-PT!2sbr",
      address: "nº sala 1508, R. das Figueiras, Lote 07 - Águas Claras, Brasília - DF, 71906-750",
      phone: "(061) 3208-5001",
      whatsapp: "(061) 3208-5001",
      whatsappUrl: "https://api.whatsapp.com/send?phone=556132085001&text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20a%20unidade%20de%20Águas%20Claras!",
      email: "espacoequilibrium.adm@gmail.com"
    },
    taguatinga: {
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30708.939276761874!2d-48.098314225683595!3d-15.824114999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33349b61fc23%3A0xac0c774121a92fb8!2sEspa%C3%A7o%20Equilibrium!5e0!3m2!1spt-PT!2sbr!4v1747776103900!5m2!1spt-PT!2sbr",
      address: "Endereço da unidade Taguatinga",
      phone: "(061) 3964-2994",
      whatsapp: "(61) 3964-2994",
      whatsappUrl: "https://api.whatsapp.com/send?phone=556139642994&text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20a%20unidade%20de%20Taguatinga!",
      email: "espacoequilibrium.adm@gmail.com"
    }
  };

  const getContactInfo = () => [
    {
      title: "Telefone",
      value: locations[selectedUnit].phone,
      icon: "📞"
    },
    {
      title: "Whatsapp",
      value: locations[selectedUnit].whatsapp,
      icon: "💬"
    },
    {
      title: "Email",
      value: locations[selectedUnit].email,
      icon: "✉️"
    }
  ];

  return (
    <section style={{ padding: '60px 0', background: '#fff' }} id='onde-estamos'>
      <h2 style={{ 
        color: '#8e5fa2', 
        fontSize: 44, 
        fontWeight: 900, 
        marginBottom: 20,
        textAlign: 'center'
      }}>
        Onde Estamos
      </h2>

      {/* Botões de seleção de unidade */}
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        gap: 20,
        flexWrap: 'wrap',
        padding: '0 20px',
        marginBottom: 30
      }}>
        <button
          onClick={() => setSelectedUnit('aguas')}
          style={{
            background: selectedUnit === 'aguas' ? '#7d5a8c' : '#d1b3e0',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            fontWeight: 500,
            fontSize: 20,
            padding: '16px 40px',
            minWidth: 260,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.2s'
          }}
        >
          Unidade Águas Claras
        </button>
        <button
          onClick={() => setSelectedUnit('taguatinga')}
          style={{
            background: selectedUnit === 'taguatinga' ? '#7d5a8c' : '#d1b3e0',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            fontWeight: 500,
            fontSize: 20,
            padding: '16px 40px',
            minWidth: 260,
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.2s'
          }}
        >
          Unidade Taguatinga
        </button>
      </div>

      {/* Mapa */}
      <div style={{ 
        width: '100%', 
        height: '500px',
        marginBottom: 40,
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <iframe
          src={locations[selectedUnit].map}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contatos */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: 1200,
        margin: '0 auto',
        gap: 30,
        padding: isMobile ? '0 4vw' : '0 20px',
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        {getContactInfo().map((info, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              background: '#7d5a8c',
              padding: isMobile ? '18px' : '30px',
              borderRadius: 20,
              color: '#fff',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <div style={{ fontSize: isMobile ? 28 : 40, marginBottom: 10 }}>
              {info.icon}
            </div>
            <h3 style={{ 
              fontSize: isMobile ? 18 : 24, 
              marginBottom: 15,
              fontWeight: 500
            }}>
              {info.title}
            </h3>
            {info.title === "Whatsapp" ? (
              <a
                href={locations[selectedUnit].whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: isMobile ? 14 : 20,
                  wordBreak: 'break-word',
                  display: 'block',
                  cursor: 'pointer',
                  transition: 'opacity 0.3s ease',
                  ':hover': {
                    opacity: 0.8
                  }
                }}
              >
                {info.value}
              </a>
            ) : (
              <p style={{ 
                fontSize: isMobile ? 14 : 20,
                wordBreak: 'break-word'
              }}>
                {info.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationSection;
