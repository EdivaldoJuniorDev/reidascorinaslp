
import React, { useState } from 'react';

interface LeadFormProps {
  onSuccess?: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    mensagem: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Format message for WhatsApp
    const message = `*Nova Solicitação de Orçamento*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Mensagem:* ${formData.mensagem || 'Sem mensagem adicional'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5592984098700?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Show success state
    setTimeout(() => {
      setStatus('success');
      if (onSuccess) {
        setTimeout(onSuccess, 2000);
      }
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 animate-fade-in">
        <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 className="text-2xl font-serif mb-2">Solicitação Recebida</h3>
        <p className="text-zinc-500 text-sm">Em breve um consultor entrará em contato via WhatsApp.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Nome Completo</label>
          <input 
            required
            type="text"
            className="w-full bg-transparent border-b border-zinc-300 py-3 focus:border-black outline-none transition-all text-sm"
            placeholder="Ex: João Silva"
            value={formData.nome}
            onChange={(e) => setFormData({...formData, nome: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">WhatsApp</label>
          <input 
            required
            type="tel"
            className="w-full bg-transparent border-b border-zinc-300 py-3 focus:border-black outline-none transition-all text-sm"
            placeholder="(00) 00000-0000"
            value={formData.whatsapp}
            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">E-mail</label>
        <input 
          required
          type="email"
          className="w-full bg-transparent border-b border-zinc-300 py-3 focus:border-black outline-none transition-all text-sm"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Conte sobre seu projeto (Opcional)</label>
        <textarea 
          className="w-full bg-transparent border-b border-zinc-300 py-3 focus:border-black outline-none transition-all text-sm h-24 resize-none"
          placeholder="Ex: Gostaria de cortinas motorizadas para minha sala..."
          value={formData.mensagem}
          onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
        />
      </div>
      
      <button 
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-5 bg-black text-white text-xs uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {status === 'loading' ? 'Enviando...' : 'Solicitar Consultoria'}
      </button>

      <p className="text-[10px] text-center text-zinc-400 uppercase tracking-widest">
        Privacidade Garantida • Atendimento em até 24h
      </p>
    </form>
  );
};

export default LeadForm;
