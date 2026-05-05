import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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
      src: `${import.meta.env.BASE_URL}assets/clienti/lulu_caffe.jpeg`,
      label: "Pasticceria Lulù",
    },
    {
      src: `${import.meta.env.BASE_URL}assets/clienti/da_rossella_2.jpg`,
      label: "Ristorante Da Rossella",
    },
    {
      src: `${import.meta.env.BASE_URL}assets/clienti/lulu_cappuccino.jpeg`,
      label: "Pasticceria Lulù",
    },
  ];

  // ─── CAROSELLO: animazione JS + swipe touch ──────────────────────────────────
  const marqueeRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const isDragging = useRef(false);
  const lastTouchX = useRef(0);
  const rafRef = useRef<number>(0);

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
    while (posRef.current > 0) posRef.current -= loopAt;
    while (posRef.current <= -loopAt) posRef.current += loopAt;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className="bg-coffee-950 min-h-screen text-coffee-50 overflow-hidden">
      {/* Hero */}
      <div className="relative h-[75vh] md:h-screen flex flex-col justify-start px-6 md:px-24 pt-52 md:pt-44">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}assets/craft-detail/presentation_tazzione.png`}
            className="w-full h-full object-cover opacity-25 grayscale"
            alt="Personalizzazione background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-950 via-coffee-950/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <Link
            to="/"
            className="flex items-center gap-2 text-coffee-400 hover:text-white transition-colors mb-8 md:mb-16 group cursor-pointer"
          >
            <ArrowLeft
              size={20}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span className="text-xs font-bold tracking-[0.3em] uppercase">
              Torna alla Home
            </span>
          </Link>

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
      <section className="pb-12 px-6 md:px-24 max-w-7xl mx-auto">
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

      {/* CTA WhatsApp */}
      <section className="py-12 px-6 text-center bg-coffee-950">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Porta il tuo brand{" "}
            <span className="italic text-coffee-400">su ogni tazzina.</span>
          </h2>
          <p className="text-coffee-400 text-base mb-12">
            Dalle tazzine al packaging, realizziamo prodotti personalizzati per rendere unico il tuo locale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="bg-coffee-900 border border-coffee-800 p-6 text-left">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-coffee-500 mb-2">Privati</p>
              <p className="text-coffee-200 text-sm leading-relaxed">
                Vuoi un'idea regalo o un prodotto unico? Ti aiutiamo a creare qualcosa di personalizzato.
              </p>
            </div>
            <div className="bg-coffee-900 border border-coffee-800 p-6 text-left">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-coffee-500 mb-2">Bar / Ristoranti</p>
              <p className="text-coffee-200 text-sm leading-relaxed">
                Rendi il tuo locale riconoscibile con prodotti su misura per il tuo brand.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/393394458758"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold tracking-[0.2em] uppercase text-sm px-10 py-4 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Parla con noi su WhatsApp
          </a>

          <p className="text-coffee-600 text-xs mt-4 tracking-wide">
            Ti rispondiamo in pochi minuti, senza impegno
          </p>
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
          <div
            ref={marqueeRef}
            className="flex w-max"
            style={{ willChange: "transform" }}
          >
            {[
              ...clientPhotos,
              ...clientPhotos,
              ...clientPhotos,
              ...clientPhotos,
            ].map((photo, i) => (
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
        <p className="text-coffee-400 text-sm tracking-[0.3em] uppercase">
          Interessato? Vieni a trovarci o contattaci
        </p>
      </section>
    </div>
  );
};
