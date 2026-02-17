
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <span className="text-white font-serif text-lg">R</span>
              </div>
              <div className="leading-none">
                <span className="block text-xs font-bold tracking-[0.2em] uppercase">Rei das Cortinas</span>
                <span className="block text-[8px] tracking-[0.3em] uppercase text-zinc-500">E Persianas</span>
              </div>
            </div>
            <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
              Elevando o padrão de decoração de interiores através de soluções personalizadas em cortinas e persianas. Desde 2008 transformando janelas em molduras de arte.
            </p>
          </div>
          
          <div className="space-y-6">
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black">Menu</h5>
            <ul className="text-sm text-zinc-500 space-y-4">
              <li><a href="#" className="hover:text-black transition-colors">Início</a></li>
              <li><a href="#produtos" className="hover:text-black transition-colors">Produtos</a></li>
              <li><a href="#consultoria" className="hover:text-black transition-colors">Consultoria AI</a></li>
              <li><a href="#orcamento" className="hover:text-black transition-colors">Orçamento</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-black">Contato</h5>
            <ul className="text-sm text-zinc-500 space-y-4">
              <li>contato@reidascortinas.com.br</li>
              <li>+55 (11) 99999-9999</li>
              <li>Manaus, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-zinc-100">
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
            © 2024 Rei das Cortinas e Persianas. Todos os direitos reservados.
          </span>
          <div className="flex gap-8">
             <a href="#" className="text-zinc-400 hover:text-black transition-colors">Instagram</a>
             <a href="#" className="text-zinc-400 hover:text-black transition-colors">Pinterest</a>
             <a href="#" className="text-zinc-400 hover:text-black transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
