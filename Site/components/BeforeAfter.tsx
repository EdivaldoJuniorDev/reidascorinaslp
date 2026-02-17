
import React, { useState, useRef, useEffect } from 'react';

const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  useEffect(() => {
    const onEnd = () => setIsDragging(false);
    
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchend', onEnd);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchend', onEnd);
    };
  }, [isDragging]);

  return (
    <section className="py-24 bg-white border-b border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 block mb-4">Experiência Visual</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Controle <span className="italic">Absoluto</span> da Luz</h2>
          <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed">
            Deslize para ver a transformação: da suavidade do Voil translúcido ao conforto inigualável do nosso sistema 100% Blackout.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative aspect-[16/9] md:aspect-[21/9] w-full max-w-5xl mx-auto cursor-ew-resize select-none overflow-hidden bg-zinc-100 group shadow-2xl"
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* Blackout Side (Bottom) */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=2000" 
              alt="Blackout After"
              className="w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-8 right-8 text-white">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">Sistema</span>
              <h4 className="text-2xl font-serif">100% Blackout</h4>
            </div>
          </div>

          {/* Voil Side (Top) */}
          <div 
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=2000" 
              alt="Voil Before"
              className="w-full h-full object-cover grayscale opacity-90"
            />
            <div className="absolute bottom-8 left-8 text-black">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">Suavidade</span>
              <h4 className="text-2xl font-serif">Voil Natural</h4>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-[1px] bg-white z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white flex items-center justify-center rounded-full shadow-lg border border-zinc-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6 6-6" transform="rotate(180 12 12)"/></svg>
            </div>
          </div>

          {/* Interactive Hint */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="bg-black/80 text-white text-[9px] uppercase tracking-[0.3em] px-4 py-2 backdrop-blur-sm">Arraste para comparar</span>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
           <div className="max-w-xs">
              <h4 className="font-serif text-xl mb-3">Conforto Térmico</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">A tecnologia blackout reduz em até 40% a troca de calor com o exterior.</p>
           </div>
           <div className="h-[1px] w-12 bg-zinc-200 hidden md:block"></div>
           <div className="max-w-xs">
              <h4 className="font-serif text-xl mb-3">Privacidade Plena</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">Vedação lateral impecável que impede qualquer feixe de luz indesejado.</p>
           </div>
           <div className="h-[1px] w-12 bg-zinc-200 hidden md:block"></div>
           <div className="max-w-xs">
              <h4 className="font-serif text-xl mb-3">Design Integrado</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">Combine tecidos leves com trilhos de alta performance em um único projeto.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
