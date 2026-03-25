
import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Brush } from 'lucide-react';

interface CraftDetailProps {
  onBack: () => void;
}

export const CraftDetail: React.FC<CraftDetailProps> = ({ onBack }) => {

  // ─── TESTO PRINCIPALE ────────────────────────────────────────────────────────
  const introTitle = "Personalizza il tuo stile";
  const introSubtitle = "Ogni dettaglio, a modo tuo.";
  const introText = `Da Caffè Alex crediamo che ogni prodotto possa diventare unico quanto chi lo usa.
Offriamo la possibilità di personalizzare una selezione di articoli — dalle tazzine da espresso
ai portazucchero — con il tuo logo, il nome della tua attività o un design su misura.
Che tu voglia un tocco di personalità per il tuo locale o un regalo originale,
siamo qui per realizzarlo insieme a te.`;

  // ─── PRODOTTI PERSONALIZZABILI ────────────────────────────────────────────────
  const items = [
    "Tazzine da espresso",
    "Tazze da cappuccino",
    "Portazucchero",
    "Vassoi e sottotazze",
    "Packaging personalizzato",
  ];

  // ─── GALLERIA IMMAGINI (2 foto principali) ────────────────────────────────────
  // Sostituisci i src con le tue foto dei prodotti personalizzati
  const gallery = [
    {
      src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1200",
      caption: "Tazzine con logo personalizzato",
    },
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
      caption: "Accessori da caffè su misura",
    },
  ];

  // ─── CAROSELLO CLIENTI ────────────────────────────────────────────────────────
  // Aggiungi qui le foto dei clienti che hanno personalizzato i prodotti
  const clientPhotos = [
    {
      src: "https://images.unsplash.com/photo-1559056199-c020f545465c?auto=format&fit=crop&q=80&w=800",
      label: "Bar Centrale",
    },
    {
      src: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=800",
      label: "Caffetteria Roma",
    },
    {
      src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800",
      label: "Hotel Bellavista",
    },
    {
      src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800",
      label: "Pasticceria Mille",
    },
    {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
      label: "Bistrot del Porto",
    },
    {
      src: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&q=80&w=800",
      label: "Lounge Bar 900",
    },
  ];

  // ─────────────────────────────────────────────────────────────────────────────

  // Auto-scroll carosello: duplica le foto per scorrimento infinito
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    const speed = 0.5; // px per frame — aumenta per scorrere più veloce
    let raf: number;

    const tick = () => {
      pos += speed;
      // quando ha percorso metà (le foto originali), torna a 0
      if (pos >= track.scrollWidth / 2) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-coffee-950 min-h-screen text-coffee-50 overflow-hidden">

      {/* Hero */}
      <div className="relative h-screen flex items-center px-6 md:px-24 pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-25 grayscale"
            alt="Personalizzazione background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-950 via-coffee-950/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-coffee-400 hover:text-white transition-colors mb-20 md:mb-32 group"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase">Torna alla Home</span>
          </button>

          <span className="text-coffee-500 font-bold tracking-[0.5em] text-xs uppercase block mb-6">
            Su misura per te
          </span>
          <h1 className="font-serif text-6xl md:text-9xl text-white mb-10 leading-[0.9] tracking-tighter">
            {introTitle.split(" ").slice(0, 1).join(" ")} <br />
            <span className="italic text-coffee-400">{introTitle.split(" ").slice(1, 3).join(" ")}</span> <br />
            {introTitle.split(" ").slice(3).join(" ")}
          </h1>
          <p className="text-coffee-200 text-xl md:text-2xl font-light leading-relaxed max-w-xl border-l-2 border-coffee-800 pl-8">
            {introSubtitle}
          </p>
        </div>
      </div>

      {/* Sezione testo + lista prodotti */}
      <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-start">

          {/* Testo descrittivo */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-8">
              <Brush className="text-coffee-400" size={28} />
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
                Come funziona la <span className="text-coffee-500 italic">personalizzazione</span>
              </h2>
            </div>
            <p className="text-coffee-300 text-lg leading-relaxed whitespace-pre-line">
              {introText}
            </p>
          </div>

          {/* Lista prodotti */}
          <div className="md:col-span-5 md:sticky md:top-32">
            <div className="bg-coffee-900 p-10 border-l-4 border-coffee-400">
              <h3 className="font-serif text-2xl text-white mb-8">Cosa puoi personalizzare</h3>
              <ul className="space-y-4">
                {items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-coffee-200">
                    <span className="w-6 h-px bg-coffee-500 block shrink-0"></span>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-xs font-bold tracking-widest text-coffee-500 uppercase">
                Contattaci per un preventivo
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Galleria prodotti personalizzati */}
      <section className="pb-32 px-6 md:px-24 max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-16 text-center">
          Esempi di <span className="italic text-coffee-400">personalizzazione</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {gallery.map((item, i) => (
            <div key={i} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="mt-4 text-coffee-400 text-sm tracking-widest uppercase font-bold text-center">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Carosello clienti */}
      <section className="py-24 bg-coffee-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-24 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-white text-center">
            I nostri <span className="italic text-coffee-400">clienti</span>
          </h2>
          <p className="text-coffee-400 text-center mt-4 text-sm tracking-widest uppercase">
            Chi ha già scelto di personalizzare
          </p>
        </div>

        {/* Track scorrevole — overflow nascosto dal parent */}
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex gap-6 w-max will-change-transform">
            {/* Foto originali + duplicato per loop infinito */}
            {[...clientPhotos, ...clientPhotos].map((photo, i) => (
              <div key={i} className="w-72 shrink-0 group">
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="mt-3 text-coffee-400 text-xs tracking-widest uppercase font-bold text-center">
                  {photo.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="py-24 px-6 text-center bg-coffee-950 border-t border-coffee-900">
        <p className="text-coffee-400 text-sm tracking-[0.3em] uppercase mb-10">
          Interessato? Vieni a trovarci o contattaci
        </p>
        <button
          onClick={onBack}
          className="px-12 py-6 border-2 border-coffee-800 text-white font-bold tracking-[0.4em] uppercase text-sm hover:bg-white hover:text-coffee-950 transition-all duration-500"
        >
          Torna alla Home
        </button>
      </section>

    </div>
  );
};
