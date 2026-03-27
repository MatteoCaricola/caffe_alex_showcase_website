import React, { useRef, useEffect } from "react";
import { ArrowLeft, Brush } from "lucide-react";

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
      src: `${import.meta.env.BASE_URL}assets/craft-detail/presentation_tazzione.png`,
      caption: "Tazzine con logo personalizzato",
    },
    {
      src: `${import.meta.env.BASE_URL}assets/craft-detail/presentation_buste.png`,
      caption: "Buste del caffè personalizzate con logo",
    },
    {
      src: `${import.meta.env.BASE_URL}assets/craft-detail/presentation_accessori.png`,
      caption: "Accessori da caffè su misura",
    },
  ];

  // ─── CAROSELLO CLIENTI ────────────────────────────────────────────────────────
  // Aggiungi qui le foto dei clienti che hanno personalizzato i prodotti
  const clientPhotos = [
    {
      src: `${import.meta.env.BASE_URL}assets/clienti/kiwi.jpeg`,
      label: "Kiwi Bar",
    },
    {
      src: `${import.meta.env.BASE_URL}assets/clienti/lulu.jpeg`,
      label: "Pasticceria Lulù",
    },
    {
      src: `${import.meta.env.BASE_URL}assets/clienti/da_rossella.jpeg`,
      label: "Ristorante Da Rossella",
    },
  ];

  // ─── CAROSELLO: animazione JS + swipe touch ──────────────────────────────────
  const marqueeRef  = useRef<HTMLDivElement>(null);
  const posRef      = useRef(0);
  const isDragging  = useRef(false);
  const lastTouchX  = useRef(0);
  const rafRef      = useRef<number>(0);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const SPEED = 1.5; // px per frame

    const animate = () => {
      if (!isDragging.current) {
        const loopAt = el.scrollWidth / 2;
        posRef.current -= SPEED;
        if (posRef.current <= -loopAt) posRef.current += loopAt;
      }
      el.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    lastTouchX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !marqueeRef.current) return;
    const delta = e.touches[0].clientX - lastTouchX.current;
    lastTouchX.current = e.touches[0].clientX;

    const loopAt = marqueeRef.current.scrollWidth / 2;
    posRef.current += delta;
    while (posRef.current > 0)        posRef.current -= loopAt;
    while (posRef.current <= -loopAt) posRef.current += loopAt;
  };

  const handleTouchEnd = () => { isDragging.current = false; };

  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className="bg-coffee-950 min-h-screen text-coffee-50 overflow-hidden">
      {/* Hero */}
      <div className="relative h-[75vh] md:h-screen flex flex-col justify-start px-6 md:px-24 pt-28 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}assets/craft-detail/presentation_tazzione.png`}
            className="w-full h-full object-cover opacity-25 grayscale"
            alt="Personalizzazione background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-950 via-coffee-950/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-coffee-400 hover:text-white transition-colors mb-8 md:mb-16 group"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase">Torna alla Home</span>
          </button>

          <span className="text-coffee-500 font-bold tracking-[0.5em] text-xs uppercase block mb-6">
            Su misura per te
          </span>
          <h1 className="font-serif text-6xl md:text-9xl text-white mb-10 leading-[0.9] tracking-tighter">
            {introTitle.split(" ").slice(0, 1).join(" ")} <br />
            <span className="italic text-coffee-400">
              {introTitle.split(" ").slice(1, 3).join(" ")}
            </span>{" "}
            <br />
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
                Come funziona la{" "}
                <span className="text-coffee-500 italic">
                  personalizzazione
                </span>
              </h2>
            </div>
            <p className="text-coffee-300 text-lg leading-relaxed whitespace-pre-line">
              {introText}
            </p>
          </div>

          {/* Lista prodotti */}
          <div className="md:col-span-5 md:sticky md:top-32">
            <div className="bg-coffee-900 p-10 border-l-4 border-coffee-400">
              <h3 className="font-serif text-2xl text-white mb-8">
                Cosa puoi personalizzare
              </h3>
              <ul className="space-y-4">
                {items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-coffee-200"
                  >
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
          Esempi di{" "}
          <span className="italic text-coffee-400">personalizzazione</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
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

        {/* Track scorrevole JS infinito con swipe */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div ref={marqueeRef} className="flex w-max" style={{ willChange: 'transform' }}>
            {[...clientPhotos, ...clientPhotos, ...clientPhotos, ...clientPhotos].map((photo, i) => (
              <div key={i} className="w-72 shrink-0 mr-6">
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full h-full object-cover"
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
