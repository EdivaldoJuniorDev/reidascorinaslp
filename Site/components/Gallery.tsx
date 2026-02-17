
import React from 'react';

const Gallery: React.FC = () => {
  const items = [
    { title: "Living Minimalista", category: "Ambientação", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800" },
    { title: "Escritório Executivo", category: "Produtividade", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
    { title: "Suíte Master", category: "Conforto", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800" },
    { title: "Varanda Integrada", category: "Lazer", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 block mb-4">Moodboard</span>
            <h2 className="text-4xl md:text-6xl font-serif">Curadoria <br /><span className="italic">de Atmosferas</span></h2>
          </div>
          <div className="max-w-sm text-right">
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">
              "A luz é o material mais importante da arquitetura. Nós apenas a esculpimos para você."
            </p>
            <div className="flex justify-end gap-2">
              <span className="w-8 h-[1px] bg-white mt-3"></span>
              <span className="text-[10px] uppercase tracking-[0.2em]">Inspiracional</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div key={i} className="group relative aspect-[3/4] overflow-hidden bg-zinc-800">
              <img 
                src={item.img} 
                alt={item.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2">{item.category}</span>
                <h4 className="text-xl font-serif">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
