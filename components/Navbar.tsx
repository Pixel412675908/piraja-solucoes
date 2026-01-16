
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinks = [
    { name: 'Início', href: '#' },
    { name: 'Tecnologia', href: '#tecnologia' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#form' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-nav border-b border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Branding Section - Typographic Only */}
        <a href="#" className="flex items-center group transition-transform hover:scale-105">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-white leading-none tracking-tighter">
              PIRAJÁ
            </span>
            <span className="text-[10px] font-bold text-electric tracking-[0.3em] uppercase">
              Soluções
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {menuLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/80 hover:text-white transition-colors font-medium text-sm tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#form" 
            className="bg-electric hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-electric/20"
          >
            SOLICITAR AGORA
          </a>
        </div>

        {/* Hamburger Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
        >
          <div className="w-6 h-5 flex flex-col justify-between overflow-hidden">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0 translate-x-4' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden bg-navy absolute top-20 left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen border-b border-white/10' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {menuLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-white/80 hover:text-white text-lg font-medium border-b border-white/5 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#form" 
            onClick={() => setIsMenuOpen(false)}
            className="bg-electric text-white text-center py-4 rounded-xl font-bold mt-2"
          >
            SOLICITAR AGORA
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;