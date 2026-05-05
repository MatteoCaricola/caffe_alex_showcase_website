import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Section } from '../types';

interface HeroProps {
  scrollToSection: (section: Section) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}assets/homePage/roasted_caffe.avif`}
          alt="Premium roasted coffee beans close up"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-coffee-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/90 via-coffee-950/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="mb-8 font-serif text-6xl font-normal leading-tight md:text-8xl opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
          <span className="block text-2xl md:text-3xl mb-2 tracking-widest font-sans font-light uppercase">Il gusto autentico di</span>
          Caffè Alex
        </h1>
        <p className="mb-8 max-w-xl text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-white opacity-0 animate-[fadeIn_1s_ease-out_1.1s_forwards] leading-snug">
          Non solo caffè.<br className="hidden sm:block" /> Un'esperienza irripetibile.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeIn_1s_ease-out_1.4s_forwards]">
          <a
            href="https://wa.me/393394458758?text=Ciao%2C%20vorrei%20informazioni%20sulle%20miscele%20di%20caff%C3%A8%20per%20casa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-bold tracking-[0.3em] uppercase px-8 py-3 border-2 border-white/60 text-white/90 hover:border-white hover:text-white transition-all duration-300"
          >
            Caffè per casa
          </a>
          <a
            href="https://wa.me/393394458758?text=Ciao%2C%20vorrei%20informazioni%20per%20una%20fornitura%20per%20la%20mia%20attivit%C3%A0."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-bold tracking-[0.3em] uppercase px-8 py-3 border-2 border-white/60 text-white/90 hover:border-white hover:text-white transition-all duration-300"
          >
            Forniture per locali
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/50 cursor-pointer z-20" onClick={() => window.scrollBy({ top: window.innerHeight * 0.4, behavior: 'smooth' })}>
        <ChevronDown size={32} strokeWidth={1} />
      </div>
    </div>
  );
};