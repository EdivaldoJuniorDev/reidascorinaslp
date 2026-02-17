
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const GeminiConsultant: React.FC = () => {
  const [room, setRoom] = useState('');
  const [style, setStyle] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    if (!room || !style) return;
    setLoading(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Como um designer de interiores de alto luxo especializado em cortinas e persianas para a marca 'Rei das Cortinas', sugira a melhor opção para um(a) ${room} com estilo ${style}. Seja elegante, breve e foque em tecidos premium, funcionalidade e sofisticação preto e branco. Retorne em português.`,
        config: {
          temperature: 0.7,
          systemInstruction: "Você é um consultor de luxo da marca 'Rei das Cortinas e Persianas'. Seu tom é sofisticado, educado e técnico."
        }
      });

      setResult(response.text || "Desculpe, não conseguimos processar sua sugestão agora. Tente novamente.");
    } catch (error) {
      console.error("Gemini Error:", error);
      setResult("Nossos consultores humanos estão disponíveis para te ajudar. Solicite um orçamento abaixo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultoria" className="py-24 bg-white border-y border-zinc-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-zinc-50 border border-zinc-200 p-8 md:p-16 relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="black">
              <path d="M20 20 L80 20 L80 80 L20 80 Z" fill="none" stroke="black" strokeWidth="1"/>
            </svg>
          </div>

          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 mb-2 block">Powered by AI</span>
            <h2 className="text-3xl md:text-4xl font-serif">Consultoria Digital</h2>
            <p className="text-zinc-500 mt-4 text-sm max-w-md mx-auto">
              Nossa inteligência artificial de design ajuda você a encontrar a composição perfeita em segundos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">Qual o ambiente?</label>
              <select 
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="w-full bg-white border border-zinc-200 p-4 focus:border-black outline-none transition-all text-sm appearance-none"
              >
                <option value="">Selecione...</option>
                <option value="Sala de Estar">Sala de Estar</option>
                <option value="Quarto Master">Quarto Master</option>
                <option value="Home Office">Home Office</option>
                <option value="Cozinha Gourmet">Cozinha Gourmet</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold">Qual a sensação desejada?</label>
              <select 
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full bg-white border border-zinc-200 p-4 focus:border-black outline-none transition-all text-sm appearance-none"
              >
                <option value="">Selecione...</option>
                <option value="Privacidade e Escuridão">Privacidade e Escuridão (Blackout)</option>
                <option value="Luz Natural e Leveza">Luz Natural e Leveza</option>
                <option value="Moderna e Tecnológica">Moderna e Tecnológica</option>
                <option value="Clássica e Aconchegante">Clássica e Aconchegante</option>
              </select>
            </div>
          </div>

          <button 
            onClick={handleConsult}
            disabled={loading || !room || !style}
            className={`w-full py-5 bg-black text-white text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-zinc-800'}`}
          >
            {loading ? 'Consultando especialista digital...' : 'Obter Recomendação'}
          </button>

          {result && (
            <div className="mt-12 p-8 bg-white border-l-4 border-black animate-fade-in">
              <h4 className="font-serif text-xl mb-4 italic">Sugestão do Consultor:</h4>
              <p className="text-zinc-600 text-sm leading-relaxed whitespace-pre-wrap">
                {result}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a href="#orcamento" className="text-[10px] uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-all">
                  Solicitar este projeto
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiConsultant;
