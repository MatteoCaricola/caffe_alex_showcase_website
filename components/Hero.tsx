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
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1920" 
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
        <p className="mb-3 max-w-xl text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-white opacity-0 animate-[fadeIn_1s_ease-out_1.1s_forwards] leading-snug">
          Non solo caffè.<br className="hidden sm:block" /> Un'esperienza irripetibile.
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/50 cursor-pointer z-20" onClick={() => scrollToSection(Section.PRODOTTI)}>
        <ChevronDown size={32} strokeWidth={1} />
      </div>
    </div>
  );
};