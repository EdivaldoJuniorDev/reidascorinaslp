
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import BeforeAfter from './components/BeforeAfter';
import Gallery from './components/Gallery';
import GeminiConsultant from './components/GeminiConsultant';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showLeadModal, setShowLeadModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenModal={() => setShowLeadModal(true)} />
      
      <main>
        <Hero onOpenModal={() => setShowLeadModal(true)} />
        <Features />
        <ProductShowcase onOpenModal={() => setShowLeadModal(true)} />
        <BeforeAfter />
        <Gallery />
        <GeminiConsultant />
        <div id="orcamento" className="bg-zinc-50 py-24">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Solicite seu Orçamento</h2>
              <div className="h-1 w-24 bg-black mx-auto mb-6"></div>
              <p className="text-zinc-600 max-w-xl mx-auto">
                Transforme seu ambiente com a consultoria exclusiva do Rei das Cortinas. Preencha os dados abaixo e entraremos em contato.
              </p>
            </div>
            <LeadForm />
          </div>
        </div>
      </main>

      <Footer />

      {/* Persistent CTA Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-zinc-200 z-50">
        <button 
          onClick={() => setShowLeadModal(true)}
          className="w-full bg-black text-white py-4 font-medium tracking-wider uppercase text-sm"
        >
          Orçamento Personalizado
        </button>
      </div>

      {/* Simple Modal overlay for leads */}
      {showLeadModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg p-8 relative">
            <button 
              onClick={() => setShowLeadModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-black transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h3 className="text-3xl font-serif mb-6">Comece sua jornada</h3>
            <LeadForm onSuccess={() => setShowLeadModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
