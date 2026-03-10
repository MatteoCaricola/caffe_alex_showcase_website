
import React from 'react';

export const BioSection: React.FC = () => {
  return (
    <section className="bg-coffee-900 text-coffee-50 overflow-hidden border-t border-coffee-800">
      <div className="mx-auto max-w-7xl px-0 md:px-12">
        <div className="grid md:grid-cols-2 items-stretch min-h-[750px]">

          {/* Portrait Column - High Contrast B&W with warm tint */}
          <div className="relative order-2 md:order-1 flex items-end overflow-hidden group">
            <div className="relative w-full h-[600px] md:h-full">
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczMDF2wuedjb2ahLqJ7gsa5sZn7fWmp5Dr3GG3ggUvBQXWwkDZtiLFoV-TTkaPG7kn7oN7tDDJQOWkQDjiIZNyvwNZryQKKRWZuNRFfygTSNyRDDbE_AmF1e1IFTOC_FnCmPSkJa7alrAUu6x-OFnZmT=w607-h911-s-no-gm?authuser=0"
                alt="Alex Mollicone"
                className="h-full w-full object-cover grayscale transition-transform duration-[3s] group-hover:scale-105"
                style={{ filter: 'contrast(1.2) brightness(0.8) sepia(0.1)' }}
              />
              {/* Warm gradient blend into the coffee-900 background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-coffee-900/40"></div>
              <div className="absolute inset-0 bg-coffee-900/10 mix-blend-multiply"></div>
            </div>
          </div>

          {/* Text Column - Editorial Style */}
          <div className="flex flex-col justify-center p-12 md:p-24 order-1 md:order-2">
            <div className="max-w-xl">
              <span className="text-coffee-300 font-bold tracking-[0.4em] text-[10px] uppercase block mb-10 border-l-2 border-coffee-400 pl-4">
                The Founder's Vision
              </span>

              <p className="mb-8 font-serif text-2xl md:text-3xl leading-snug text-white first-letter:text-7xl first-letter:font-bold first-letter:mr-4 first-letter:float-left first-letter:leading-[0.7] first-letter:text-coffee-300">
                Caffè Alex non è solo una torrefazione: è l’incontro tra competenza produttiva e conoscenza profonda del territorio.
                // <strong className="text-coffee-200 font-serif italic">Alex Mollicone</strong>
              </p>

              <div className="h-[1px] w-24 bg-coffee-700 mb-8"></div>

              <p className="mb-10 text-coffee-50 leading-relaxed font-light text-lg">
                Nasce dall’unione tra l’esperienza della torrefazione Dicos Group e la visione imprenditoriale di Alessandro Caricola, con l’obiettivo di portare nel canale Ho.Re.Ca. un caffè di qualità superiore, frutto di ricerca, studio e selezione accurata delle migliori origini.
              </p>

              <p className="mb-10 text-coffee-50 leading-relaxed font-light text-lg">
                Ogni miscela è il risultato di una tostatura lenta e di una lunga stagionatura, nel rispetto dei tempi naturali del chicco. Un metodo artigianale che valorizza le migliori varietà di arabica e robusta, lavorate con un approccio lontano dalle logiche industriali. Qualità e sostenibilità diventano così i pilastri di un progetto che punta a trasformare una semplice bevanda in un’esperienza distintiva per il cliente finale.
              </p>

              <div className="space-y-6">
                <div className="relative italic text-coffee-200 text-xl font-serif">
                  <span className="absolute -left-6 -top-4 text-4xl text-coffee-700 opacity-50">"</span>
                  La qualità non si suggerisce, si dimostra. Un grande caffè non si beve soltanto: si ascolta, si respira, si vive.
                  <span className="text-4xl text-coffee-700 opacity-50 ml-2">"</span>
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-coffee-800 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-3xl tracking-tight text-white italic">Alessandro Caricola</h4>
                  <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-coffee-300 mt-2 block">Distribuzione & Selezione Ho.Re.Ca.</span>
                </div>
                <div className="hidden lg:block opacity-40">
                  {/* Decorative Seal */}
                  <div className="w-20 h-20 border-2 border-dashed border-coffee-200 rounded-full flex items-center justify-center text-[10px] font-bold rotate-12 text-coffee-200">
                    DAL 1994
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
