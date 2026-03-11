
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProdottiSectionProps {
  onDetailClick?: () => void;
}

export const ProdottiSection: React.FC<ProdottiSectionProps> = ({ onDetailClick }) => {
  return (
    <section id="prodotti" className="bg-white">
      {/* Block 1: Image Left, Text Right */}
      <div className="grid md:grid-cols-2 md:min-h-[600px]">
        <div className="relative h-[400px] md:h-full overflow-hidden group" style={{ minHeight: '600px' }}>
          <img
            src="/assets/homePage/raw_coffe.png"
            alt="Caffè Alex Double Cream and Aromatic & Creamy blends"
            style={{ height: '600px' }}
            className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-coffee-900/10"></div>
        </div>
        <div className="flex flex-col justify-center bg-coffee-50 p-12 md:p-24">
          <span className="mb-4 text-xs font-bold tracking-widest text-coffee-500 uppercase">I Nostri Prodotti</span>
          <h2 className="mb-6 font-serif text-4xl text-coffee-900 md:text-5xl">Coltivati con Passione</h2>
          <p className="mb-6 text-coffee-700 leading-relaxed text-lg">
            Da Caffè Alex selezioniamo solo chicchi di caffè di alta qualità, provenienti da piantagioni attentamente scelte. Ogni raccolto è valorizzato per il suo carattere unico e per il potenziale di offrire un’esperienza di gusto autentica.
          </p>
          <p className="mb-10 text-coffee-700 leading-relaxed">
            Il nostro impegno per la qualità nasce all’origine e prosegue in ogni fase del processo produttivo, dove competenza e passione si incontrano. Ti invitiamo a scoprire il percorso che rende speciali le nostre miscele.
          </p>

          <div className="mb-10">
            <span className="font-serif italic text-xl text-coffee-800">"Quality is not an act, it is a habit."</span>
          </div>

          <button
            onClick={onDetailClick}
            className="group flex items-center gap-3 text-coffee-800 font-bold tracking-widest uppercase text-sm hover:text-coffee-600 transition-colors"
          >
            Vai al dettaglio
            <div className="relative overflow-hidden w-6 h-6 flex items-center">
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
