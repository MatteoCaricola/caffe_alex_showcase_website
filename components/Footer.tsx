import React from "react";
import { useNavigate } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  const navigate = useNavigate();

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
          <p className="mt-1 text-coffee-200 text-[10px] select-none">v1.0.1</p>
        </div>
      </div>
    </footer>
  );
};
