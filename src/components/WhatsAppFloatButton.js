import React from 'react';

const pulseKeyframes = `
@keyframes whatsapp-pulse {
  0% { box-shadow: 0 0 0 0 rgba(37,211,102, 0.7); }
  70% { box-shadow: 0 0 0 16px rgba(37,211,102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37,211,102, 0); }
}
`;

const WhatsAppFloatButton = () => {
  // Adiciona o keyframes no head apenas uma vez
  React.useEffect(() => {
    if (!document.getElementById('whatsapp-pulse-keyframes')) {
      const style = document.createElement('style');
      style.id = 'whatsapp-pulse-keyframes';
      style.innerHTML = pulseKeyframes;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <a
      href="https://api.whatsapp.com/send?phone=5561981707664&text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informações!."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999,
        background: '#25D366',
        borderRadius: '50%',
        width: 64,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
        transition: 'box-shadow 0.2s',
        cursor: 'pointer',
        animation: 'whatsapp-pulse 1.6s infinite',
      }}
      aria-label="Fale conosco no WhatsApp"
    >
      <svg width="36" height="36" viewBox="0 0 32 32" fill="white">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.18-2.32C13.1 27.13 14.52 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.33 0-2.62-.26-3.81-.76l-.27-.11-4.25 1.38 1.38-4.13-.18-.28C7.26 19.62 7 18.33 7 17c0-5.06 4.13-9.19 9.19-9.19S25.38 11.94 25.38 17c0 5.06-4.13 9.19-9.19 9.19z"/>
        <path d="M22.47 19.37c-.33-.17-1.95-.96-2.25-1.07-.3-.11-.52-.17-.74.17-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.71.08-.33-.17-1.39-.51-2.65-1.62-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.51.15-.68.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.62-.09-.17-.74-1.78-1.01-2.44-.27-.66-.54-.57-.74-.58-.19-.01-.41-.01-.63-.01-.22 0-.57.08-.87.38-.3.3-1.14 1.12-1.14 2.73 0 1.61 1.17 3.17 1.34 3.39.17.22 2.3 3.51 5.58 4.78.78.3 1.39.48 1.87.61.79.2 1.51.17 2.08.1.64-.08 1.95-.8 2.23-1.57.28-.77.28-1.43.2-1.57-.08-.14-.3-.22-.63-.39z"/>
      </svg>
    </a>
  );
};

export default WhatsAppFloatButton; 