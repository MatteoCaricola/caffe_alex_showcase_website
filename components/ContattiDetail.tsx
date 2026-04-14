import React from "react";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
} from "lucide-react";

interface ContattiDetailProps {
  onBack: () => void;
}

export const ContattiDetail: React.FC<ContattiDetailProps> = ({ onBack }) => {
  return (
    <div className="bg-coffee-950 min-h-screen text-coffee-50 overflow-hidden">
      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <div className="relative h-[75vh] md:h-screen flex flex-col justify-start px-6 md:px-24 pt-52 md:pt-44">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&q=80&w=2000"
            alt="Caffè Alex location"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-950 via-coffee-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-coffee-400 hover:text-white transition-colors mb-8 md:mb-16 group"
          >
            <ArrowLeft
              size={20}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span className="text-xs font-bold tracking-[0.3em] uppercase">
              Torna alla Home
            </span>
          </button>

          <span className="text-coffee-500 font-bold tracking-[0.5em] text-xs uppercase block mb-6">
            Avezzano, Abruzzo
          </span>
          <h1 className="font-serif text-6xl md:text-9xl text-white mb-10 leading-[0.9] tracking-tighter">
            Siamo
            <br />
            <span className="italic text-coffee-400">qui</span>
          </h1>
          <p className="text-coffee-200 text-xl md:text-2xl font-light leading-relaxed max-w-xl border-l-2 border-coffee-800 pl-8">
            Scrivici o chiamaci, rispondiamo sempre.
          </p>
        </div>
      </div>

      {/* ── Contatti ──────────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-32 px-6 md:px-24 max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-16">
          Come <span className="italic text-coffee-400">contattarci</span>
        </h2>

        <div className="space-y-8">
          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 bg-coffee-900 border border-coffee-800 flex items-center justify-center shrink-0 group-hover:border-coffee-500 transition-colors">
              <MapPin size={20} className="text-coffee-400" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-coffee-500 mb-1">
                Zona
              </p>
              <p className="text-coffee-100 text-lg">Avezzano, L'Aquila</p>
              <p className="text-coffee-400 text-sm mt-1">Abruzzo, Italia</p>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 bg-coffee-900 border border-coffee-800 flex items-center justify-center shrink-0 group-hover:border-coffee-500 transition-colors">
              <Phone size={20} className="text-coffee-400" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-coffee-500 mb-1">
                Telefono
              </p>
              <a
                href="tel:+393394458758"
                className="text-coffee-100 text-lg hover:text-white transition-colors"
              >
                +39 339 445 8758
              </a>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="w-12 h-12 bg-coffee-900 border border-coffee-800 flex items-center justify-center shrink-0 group-hover:border-coffee-500 transition-colors">
              <Mail size={20} className="text-coffee-400" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-coffee-500 mb-1">
                Email
              </p>
              <a
                href="mailto:caricola.alessandro@gmail.com"
                className="text-coffee-100 text-lg hover:text-white transition-colors"
              >
                {/* info@caffealex.com */}
                caricola.alessandro@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Social */}
        {/* <div className="mt-16 pt-16 border-t border-coffee-800">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-coffee-500 mb-6">
            Seguici
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-12 h-12 bg-coffee-900 border border-coffee-800 flex items-center justify-center hover:border-coffee-400 hover:text-white transition-all text-coffee-400"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-coffee-900 border border-coffee-800 flex items-center justify-center hover:border-coffee-400 hover:text-white transition-all text-coffee-400"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div> */}
      </section>

      {/* ── Citazione ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-coffee-900 border-y border-coffee-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-3xl md:text-4xl italic text-coffee-200 leading-relaxed">
            "Il caffè è il benvenuto più sincero che si possa offrire."
          </p>
          <span className="block mt-6 text-coffee-500 text-xs font-bold tracking-[0.4em] uppercase">
            — Caffè Alex, Avezzano
          </span>
        </div>
      </section>

      {/* ── CTA finale ────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center bg-coffee-950 border-t border-coffee-900">
        <p className="text-coffee-400 text-sm tracking-[0.3em] uppercase">
          Non esitare a contattarci
        </p>
      </section>
    </div>
  );
};
