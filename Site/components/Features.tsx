
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Design Exclusivo",
      desc: "Tecidos selecionados das melhores tecelagens mundiais para projetos únicos.",
      icon: "✧"
    },
    {
      title: "Automação Inteligente",
      desc: "Controle suas persianas via smartphone, comando de voz ou sensores solares.",
      icon: "⚙"
    },
    {
      title: "Consultoria Premium",
      desc: "Nossos especialistas auxiliam na escolha ideal para o conforto térmico e acústico.",
      icon: "✎"
    }
  ];

  return (
    <section id="produtos" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          {features.map((f, i) => (
            <div key={i} className="group cursor-default">
              <div className="text-4xl mb-6 text-zinc-300 group-hover:text-black transition-colors duration-500">
                {f.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{f.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {f.desc}
              </p>
              <div className="mt-8 h-[1px] w-0 bg-black group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
