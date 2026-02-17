
import React from 'react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/img/hero_bg.webp"
          preload="metadata"
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/video/hero-background.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col justify-center max-w-2xl">
          <div className="overflow-hidden mb-4">
            <span className="block text-sm uppercase tracking-[0.4em] text-zinc-300 animate-slide-up">
              SOFISTICAÇÃO SOB MEDIDA
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-[1.1] text-white">
            A Majestade <br />
            <span className="italic">em Cada Detalhe</span>
          </h1>
          
          <p className="text-lg font-thin text-zinc-200 max-w-md mb-10 leading-relaxed">
            Especialistas em cortinas sob medida e persianas automatizadas que unem o design clássico à tecnologia moderna. 
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={onOpenModal}
              className="px-10 py-5 bg-white text-black text-xs uppercase tracking-[0.2em] hover:bg-zinc-200 transition-all group flex items-center justify-center gap-3"
            >
              Agendar Medição Gratuita
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
            <a 
              href="#produtos"
              className="px-10 py-5 border border-white/30 text-white text-xs uppercase tracking-[0.2em] hover:bg-white/10 hover:border-white transition-all text-center"
            >
              Ver Coleção 2025
            </a>
          </div>
        </div>
      </div>

      {/* Aesthetic Accents - Left Bottom */}
      <div className="absolute bottom-12 left-6 hidden md:block z-10">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-20 bg-zinc-500"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">Atendimento Premium em Todo o Manaus</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
