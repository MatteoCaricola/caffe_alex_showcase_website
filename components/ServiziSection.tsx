
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiziSectionProps {
  onDetailClick?: () => void;
}

export const ServiziSection: React.FC<ServiziSectionProps> = ({ onDetailClick }) => {
  return (
    <section id="servizi" className="bg-white">
      {/* Block 2: Text Left, Image Right */}
      <div className="grid md:grid-cols-2 md:min-h-[600px]">
        <div className="flex flex-col justify-center bg-white p-12 md:p-24 order-2 md:order-1">
          <span className="mb-4 text-xs font-bold tracking-widest text-coffee-500 uppercase">I Nostri Servizi</span>
          <h2 className="mb-6 font-serif text-4xl text-coffee-900 md:text-5xl">Qualità che Ti Accompagna</h2>
          <p className="mb-6 text-coffee-700 leading-relaxed text-lg">
            Caffè Alex offre servizi pensati per supportare ogni cliente con soluzioni affidabili e su misura. Dalla consulenza all’assistenza, accompagniamo ogni scelta con competenza e passione per garantire un’esperienza completa nel mondo del caffè.
          </p>

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
        <div className="relative h-[400px] md:h-auto overflow-hidden group order-1 md:order-2">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczM-f3XeB0bbH47txuHe-BYPJ57mbeCPeGC_tqcHUE7CwrZL2T7kYZED9KL0l2q_ENBQiz-SyM_sff5y9iedA9kF0YusTK-xUB8V0eYf8uXqGvRbaOUTu1ayvhhJJEp9L-sxVqyVJccbtWYmvLpQtYLI=w1438-h672-s-no-gm"
            alt="Caffè Alex Tazzina"
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            onError={(e) => {
              console.warn("Local image not found, using fallback.");
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=1000";
            }}
          />
          <div className="absolute inset-0 bg-coffee-900/10"></div>
        </div>
      </div>
    </section>
  );
};
