
import React, { useRef } from 'react';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
}

interface ProductShowcaseProps {
  onOpenModal: () => void;
}

const products: ProductItem[] = [
  {
    id: 'rolo-blackout',
    name: 'Persiana Rolô Blackout',
    category: 'Privacidade Total',
    description: 'Bloqueio completo da luminosidade com design minimalista. Ideal para quartos e salas de cinema.',
    imageUrl: '/img/catalogo/persiana-rolo-blackout.png'
  },
  {
    id: 'rolo-tela-solar',
    name: 'Persiana Rolô Tela Solar',
    category: 'Conforto Térmico',
    description: 'Proteção UV e redução de calor sem perder a visibilidade externa. Essencial para varandas gourmet.',
    imageUrl: '/img/catalogo/persiana-rolo-tela-solar.png'
  },
  {
    id: 'cortina-tecido',
    name: 'Cortina de Tecido',
    category: 'Alfaiataria Clássica',
    description: 'Linho, seda ou veludo. Caimento impecável para ambientes que exigem requinte e aconchego.',
    imageUrl: '/img/catalogo/cortina-tecido.png'
  },
  {
    id: 'double-vision',
    name: 'Persiana Double Vision',
    category: 'Versatilidade',
    description: 'O jogo perfeito entre faixas translúcidas e opacas para controle absoluto da luz e privacidade.',
    imageUrl: '/img/catalogo/persiana-double-vision.png'
  },
  {
    id: 'motorizacao',
    name: 'Sistemas de Motorização',
    category: 'Tecnologia',
    description: 'Controle via smartphone ou voz. O máximo em conforto para janelas de grandes proporções.',
    imageUrl: '/img/catalogo/motorizacao.png'
  },
  {
    id: 'madeira',
    name: 'Persiana de Madeira',
    category: 'Nobreza Natural',
    description: 'Lâminas de madeira natural que trazem calor e sofisticação orgânica aos seus espaços.',
    imageUrl: '/img/catalogo/persiana-madeira.png'
  },
  {
    id: 'romana',
    name: 'Persiana Romana',
    category: 'Design em Gomos',
    description: 'Dobra clássica que cria um volume elegante e estruturado quando recolhida.',
    imageUrl: '/img/catalogo/persiana-romana.png'
  },
  {
    id: 'triple-shade',
    name: 'Cortina Triple Shade',
    category: 'Híbrida Premium',
    description: 'A leveza do tecido combinada com o controle de luz das persianas em uma única peça.',
    imageUrl: '/img/catalogo/cortina-triple-shade.png'
  },
  {
    id: 'celular',
    name: 'Cortina Celular',
    category: 'Acústica e Térmica',
    description: 'Estrutura em colmeia que cria um colchão de ar, isolando ruídos e mantendo a temperatura.',
    imageUrl: '/img/catalogo/cortina-celular.png'
  },
  {
    id: 'aluminio',
    name: 'Persiana de Alumínio',
    category: 'Contemporâneo',
    description: 'Praticidade e precisão. Ideal para escritórios e ambientes de estética industrial refinada.',
    imageUrl: '/img/catalogo/persiana-aluminio.png'
  }
];

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenModal }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-32 overflow-hidden border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 block mb-4">Portfólio de Soluções</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">Nossa Coleção </h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-black hover:text-white transition-all group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-black hover:text-white transition-all group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-8 px-[5vw] pb-12"
      >
        {products.map((product) => (
          <div 
            key={product.id}
            className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center group"
          >
            <div className="relative aspect-[4/5] bg-zinc-100 mb-8 overflow-hidden">
                  <picture>
                    <source srcSet={product.imageUrl.replace(/\.(png|jpg|jpeg)$/, '.avif')} type="image/avif" />
                    <source srcSet={product.imageUrl.replace(/\.(png|jpg|jpeg)$/, '.webp')} type="image/webp" />
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </picture>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
              
              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur px-4 py-1.5 text-[9px] uppercase tracking-[0.2em] font-bold text-black border border-zinc-200 shadow-sm">
                  {product.category}
                </span>
              </div>
            </div>
            
            <div className="px-2">
              <h3 className="text-2xl font-serif mb-4 group-hover:italic transition-all">{product.name}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 h-12 overflow-hidden line-clamp-2">
                {product.description}
              </p>
              <button 
                onClick={onOpenModal}
                className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black pb-1 hover:text-zinc-400 hover:border-zinc-300 transition-all"
              >
                Personalizar este modelo
              </button>
            </div>
          </div>
        ))}
        {/* Padding for the end of scroll */}
        <div className="flex-shrink-0 w-24"></div>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default ProductShowcase;
