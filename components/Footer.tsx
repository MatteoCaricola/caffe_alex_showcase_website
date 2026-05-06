import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isContattiPage = location.pathname === '/contatti';

  return (
    <footer
      id="contatti"
      className="bg-coffee-50 text-coffee-900 border-t border-coffee-200"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 scale-125">
            <Logo light={false} width={300} widthMobile={250}/>
          </div>

          <p className="mb-10 max-w-md font-serif text-lg leading-relaxed text-coffee-700 italic">
            "Coffee is a language in itself."
          </p>

          <div className="w-full border-t border-coffee-200 pt-10 mb-10 text-center">
            <h3 className="font-serif text-2xl md:text-3xl text-coffee-900 mb-4 leading-snug">
              Trova il caffè giusto per te o per la tua attività
            </h3>
            <p className="text-coffee-600 text-base font-light mb-8">
              Ti aiutiamo a scegliere la soluzione migliore, con risposta veloce su WhatsApp.
            </p>
            {!isContattiPage && <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/393394458758?text=Ciao%2C%20vorrei%20informazioni%20sulle%20miscele%20di%20caff%C3%A8%20per%20casa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold tracking-[0.3em] uppercase px-8 py-3 transition-all duration-300"
                style={{ backgroundColor: '#d6c3a3', color: '#2a2a2a', border: '2px solid #c4ae8a' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#4a2a1a'; (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#4a2a1a'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#d6c3a3'; (e.currentTarget as HTMLAnchorElement).style.color = '#2a2a2a'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#c4ae8a'; }}
              >
                Caffè per casa
              </a>
              <a
                href="https://wa.me/393394458758?text=Ciao%2C%20vorrei%20informazioni%20per%20una%20fornitura%20per%20la%20mia%20attivit%C3%A0."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold tracking-[0.3em] uppercase px-8 py-3 transition-all duration-300"
                style={{ backgroundColor: '#d6c3a3', color: '#2a2a2a', border: '2px solid #c4ae8a' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#4a2a1a'; (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#4a2a1a'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#d6c3a3'; (e.currentTarget as HTMLAnchorElement).style.color = '#2a2a2a'; (e.currentTarget as HTMLAnchorElement).style.borderColor = '#c4ae8a'; }}
              >
                Forniture per locali
              </a>
            </div>}
          </div>

          <div className="grid w-full max-w-2xl gap-8 border-t border-coffee-200 pt-10 text-sm md:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <MapPin size={20} className="text-coffee-500" />
              <span>Avezzano</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail size={20} className="text-coffee-500" />
              <span>caricola.alessandro@gmail.com</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone size={20} className="text-coffee-500" />
              <span>+39 339 445 8758</span>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-xs text-coffee-400">
          <p>&copy; 2024 Caffè Alex. All rights reserved.</p>
          <button
            onClick={() => navigate('/privacy')}
            className="mt-2 underline underline-offset-2 hover:text-coffee-600 transition-colors"
          >
            Privacy Policy & Cookie Policy
          </button>
          <p className="mt-1 text-coffee-200 text-[10px] select-none">v1.0.5</p>
        </div>
      </div>
    </footer>
  );
};
