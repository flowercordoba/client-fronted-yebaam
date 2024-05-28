import React from 'react';

const Footer: React.FC = () => {
  const links1 = [
    'Español', 'English (US)', 'Français (France)', 'Português (Brasil)', 'Italiano', 'Deutsch',

  ];
  const links2 = [
    'Registrarte', 'Iniciar sesión', 'Messenger', 'Video', 'Lugares', 'Juegos',
    'Centro de privacidad', 'Grupos', 'Información', 'Crear anuncio', 'Crear página', 'Desarrolladores',
    'Empleo', 'Cookies', 'Opciones de anuncios', 'Condiciones', 'Ayuda', 'Importación de contactos y no usuarios'
  ];

  return (
    <footer className="bg-gray-100 py-4 mt-8 w-full">
      <div className="max-w-5xl mx-auto text-gray-500">
        <div className="flex flex-wrap justify-center space-x-4 mb-2">
          {links1.map((link, index) => (
            <a key={index} href="#" className="hover:underline text-sm">{link}</a>
          ))}
        </div>
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          {links2.map((link, index) => (
            <a key={index} href="#" className="hover:underline text-xs">{link}</a>
          ))}
        </div>
        <div className="text-center text-xs">
          yebaam
        </div>
      </div>
    </footer>
  );
};

export default Footer;
