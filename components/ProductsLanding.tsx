import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const ProductsLanding: React.FC = () => {
  const [hovered, setHovered] = useState<"privati" | "aziende" | null>(null);

  return (
    <div className="bg-coffee-950 min-h-screen text-coffee-50">
      {/* Back */}
      <div className="absolute top-0 left-0 z-10 px-6 md:px-24 pt-52 md:pt-44">
        <Link
          to="/"
          className="flex items-center gap-2 text-coffee-400 hover:text-white transition-colors group cursor-pointer"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase">Torna alla Home</span>
        </Link>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row md:min-h-screen">

        {/* Card Privati */}
        <Link
          to="/prodotti/privato"
          onMouseEnter={() => setHovered("privati")}
          onMouseLeave={() => setHovered(null)}
          className="relative flex flex-col items-center justify-center px-12 pt-52 md:pt-0 group overflow-hidden cursor-pointer h-[60vh] md:flex-1 md:h-auto transition-opacity duration-500"
          style={{ opacity: hovered === "aziende" ? 0.6 : 1 }}
        >
          {/* Separatore sfumato */}
          <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-coffee-700 to-coffee-700 z-10" />

          <div className="absolute inset-0">
            <img
              src={`${import.meta.env.BASE_URL}assets/product-detail/img_home.png`}
              alt="Privati"
              className="w-full h-full object-cover opacity-35 grayscale group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-coffee-950/20 to-coffee-950/30" />
          </div>

          {/* Glow */}
          {hovered === "privati" && (
            <div className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: "inset 0 0 80px rgba(192,157,122,0.08)" }} />
          )}

          <div className="relative z-10 text-center max-w-sm">
            <span className="text-coffee-400 font-bold tracking-[0.5em] text-sm uppercase block mb-6">
              Per te
            </span>
            <h2 className="font-serif text-6xl md:text-8xl text-white mb-6 leading-[0.9] tracking-tighter">
              Privati
            </h2>
            <p className="text-coffee-200 text-xl font-light leading-relaxed mb-10">
              Il piacere di un caffè autentico, direttamente a casa tua.
            </p>
            <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.3em] uppercase border-2 border-white/60 text-white/90 px-8 py-3 transition-all duration-300 group-hover:border-white group-hover:text-white group-hover:bg-white/10">
              Scopri i prodotti
              <ArrowRight size={14} />
            </div>
          </div>
        </Link>

        {/* Card Aziende */}
        <Link
          to="/prodotti/azienda"
          onMouseEnter={() => setHovered("aziende")}
          onMouseLeave={() => setHovered(null)}
          className="relative flex flex-col items-center justify-center px-12 group overflow-hidden cursor-pointer h-[50vh] md:flex-1 md:h-auto transition-opacity duration-500"
          style={{ opacity: hovered === "privati" ? 0.6 : 1 }}
        >
          <div className="absolute inset-0">
            <img
              src={`${import.meta.env.BASE_URL}assets/product-detail/img_attivity.png`}
              alt="Aziende"
              className="w-full h-full object-cover opacity-35 grayscale group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-coffee-950/20 to-coffee-950/30" />
          </div>

          {/* Glow */}
          {hovered === "aziende" && (
            <div className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: "inset 0 0 80px rgba(192,157,122,0.08)" }} />
          )}

          <div className="relative z-10 text-center max-w-sm">
            <span className="text-coffee-400 font-bold tracking-[0.5em] text-sm uppercase block mb-6">
              Per la tua attività
            </span>
            <h2 className="font-serif text-6xl md:text-8xl text-white mb-6 leading-[0.9] tracking-tighter">
              Aziende
            </h2>
            <p className="text-coffee-200 text-xl font-light leading-relaxed mb-10">
              Soluzioni professionali pensate per offrire qualità e continuità alla tua attività.
            </p>
            <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.3em] uppercase border-2 border-white/60 text-white/90 px-8 py-3 transition-all duration-300 group-hover:border-white group-hover:text-white group-hover:bg-white/10">
              Scopri i prodotti
              <ArrowRight size={14} />
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};
