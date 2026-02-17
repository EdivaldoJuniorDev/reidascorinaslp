
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm text-black' : 'bg-transparent py-6 text-white'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className={`w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform ${scrolled ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <span className="font-serif text-xl">R</span>
          </div>
          <div className="leading-none">
            <span className="block text-sm font-bold tracking-[0.2em] uppercase">Rei das Cortinas</span>
            <span className={`block text-[10px] tracking-[0.3em] uppercase ${scrolled ? 'text-zinc-500' : 'text-zinc-300'}`}>E Persianas</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-12 text-xs uppercase tracking-[0.15em] font-medium">
          <a href="#" className={`transition-colors ${scrolled ? 'hover:text-zinc-500' : 'hover:text-zinc-300'}`}>Início</a>
          <a href="#produtos" className={`transition-colors ${scrolled ? 'hover:text-zinc-500' : 'hover:text-zinc-300'}`}>Produtos</a>
          <a href="#consultoria" className={`transition-colors ${scrolled ? 'hover:text-zinc-500' : 'hover:text-zinc-300'}`}>Consultoria AI</a>
          <button 
            onClick={onOpenModal}
            className={`px-6 py-2 border transition-all duration-300 ${
              scrolled 
                ? 'border-black bg-black text-white hover:bg-zinc-800' 
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
          >
            Orçamento
          </button>
        </div>

        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
