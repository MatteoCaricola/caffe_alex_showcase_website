import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
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
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Hai una domanda o vuoi una fornitura personalizzata?{" "}
            <span className="italic text-coffee-400">Scrivici subito su WhatsApp.</span>
          </h2>
          <p className="text-coffee-400 text-base mb-12">
            Rispondiamo rapidamente per aiutarti a scegliere il prodotto giusto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="bg-coffee-900 border border-coffee-800 p-6 text-left">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-coffee-500 mb-2">Privati</p>
              <p className="text-coffee-200 text-sm leading-relaxed">
                Dubbi sulle miscele? Ti aiutiamo a scegliere quella giusta.
              </p>
            </div>
            <div className="bg-coffee-900 border border-coffee-800 p-6 text-left">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-coffee-500 mb-2">Bar / Ristoranti</p>
              <p className="text-coffee-200 text-sm leading-relaxed">
                Richiedi una fornitura su misura per la tua attività.
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
            Risposta media entro pochi minuti
          </p>
        </div>
      </section>
    </div>
  );
};
