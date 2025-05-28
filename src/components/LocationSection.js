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
      map:" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4848.109844835373!2d-48.0106605!3d-15.8301146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3218253da761%3A0x6e004aed7d3510cc!2sEspa%C3%A7o%20Equilibrium%20-%20Cl%C3%ADnica%20de%20Psicologia%2C%20Fonoaudiologia%20e%20Psicopedagogia!5e1!3m2!1spt-PT!2sbr!4v1748030920708!5m2!1spt-PT!2sbr",
      phone: "(061) 3208-5001",
      email: "espacoequilibrium.saude@gmail.com"
    },
    taguatinga: {
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30708.939276761874!2d-48.098314225683595!3d-15.824114999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33349b61fc23%3A0xac0c774121a92fb8!2sEspa%C3%A7o%20Equilibrium!5e0!3m2!1spt-PT!2sbr!4v1747776103900!5m2!1spt-PT!2sbr",
      phone: "(061) 3964-2994",
      whatsapp: "(61) 98170-7664",
      whatsappUrl: "https://wa.link/7gxyzl",
      email: "espacoequilibrium.saude@gmail.com"
    }
  };

  const getContactInfo = () => {
    const contacts = [
      {
        title: "Telefone",
        value: locations[selectedUnit].phone,
        icon: "📞",
        link: `tel:${locations[selectedUnit].phone.replace(/\D/g, '')}`
      },
      {
        title: "Email",
        value: locations[selectedUnit].email,
        icon: "✉️",
        link: `mailto:${locations[selectedUnit].email}`
      }
    ];

    if (selectedUnit === 'taguatinga') {
      contacts.splice(1, 0, {
        title: "Whatsapp",
        value: locations[selectedUnit].whatsapp,
        icon: "💬",
        link: locations[selectedUnit].whatsappUrl
      });
    }

    return contacts;
  };

  const buttonStyle = (isSelected) => ({
    background: isSelected ? '#7d5a8c' : '#d1b3e0',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    fontWeight: 500,
    fontSize: isMobile ? 18 : 20,
    padding: isMobile ? '12px 30px' : '16px 40px',
    minWidth: isMobile ? 220 : 260,
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease',
    transform: isSelected ? 'scale(1.02)' : 'scale(1)'
  });

  const contactCardStyle = {
    flex: 1,
    background: '#7d5a8c',
    padding: isMobile ? '18px' : '30px',
    borderRadius: 20,
    color: '#fff',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textDecoration: 'none',
    cursor: 'pointer'
  };

  return (
    <section style={{ padding: '60px 0', background: '#fff' }} id='onde-estamos'>
      <h2 style={{ 
        color: '#8e5fa2', 
        fontSize: isMobile ? 32 : 44, 
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
          style={buttonStyle(selectedUnit === 'aguas')}
        >
          Unidade Águas Claras
        </button>
        <button
          onClick={() => setSelectedUnit('taguatinga')}
          style={buttonStyle(selectedUnit === 'taguatinga')}
        >
          Unidade Taguatinga
        </button>
      </div>

      {/* Endereço */}
      <div style={{
        textAlign: 'center',
        marginBottom: 30,
        padding: '0 20px'
      }}>
        <p style={{
          fontSize: isMobile ? 16 : 20,
          color: '#666',
          maxWidth: 800,
          margin: '0 auto'
        }}>
          {locations[selectedUnit].address}
        </p>
      </div>

      {/* Mapa */}
      <div style={{ 
        width: '100%', 
        height: isMobile ? '300px' : '500px',
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
        gap: 20,
        padding: isMobile ? '0 4vw' : '0 20px',
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        {getContactInfo().map((info, index) => (
          <a
            key={index}
            href={info.link}
            target={info.title === "Email" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            style={{
              ...contactCardStyle,
              transform: 'translateY(0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
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
            <p style={{ 
              fontSize: isMobile ? 14 : 20,
              wordBreak: 'break-word',
              margin: 0
            }}>
              {info.value}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LocationSection;
