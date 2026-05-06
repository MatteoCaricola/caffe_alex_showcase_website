import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const ComingSoon: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-coffee-950 flex flex-col items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}assets/coming_soon.png`}
          alt="Coming soon"
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/60 to-coffee-950/40" />
      </div>

      {/* Back */}
      <div className="absolute top-0 left-0 px-6 md:px-24 pt-52 md:pt-44 z-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-coffee-400 hover:text-white transition-colors group cursor-pointer"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase">Torna indietro</span>
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <span className="text-coffee-500 font-bold tracking-[0.5em] text-xs uppercase block mb-8">
          Prossimamente
        </span>
        <h1 className="font-serif text-6xl md:text-9xl text-white mb-8 leading-[0.9] tracking-tighter">
          Lavori
          <br />
          <span className="italic text-coffee-400">in corso</span>
        </h1>
        <p className="text-coffee-300 text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto border-l-2 border-coffee-800 pl-6 text-left">
          Stiamo preparando qualcosa di speciale per te. Torna a trovarci presto.
        </p>
      </div>
    </div>
  );
};
