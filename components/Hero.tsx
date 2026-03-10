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
        <span className="mb-6 text-xs font-bold tracking-[0.4em] uppercase opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards] border-b border-white/30 pb-2">
          Italian Heritage
        </span>
        <h1 className="mb-8 font-serif text-6xl font-normal leading-tight md:text-8xl opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
          <span className="block text-2xl md:text-3xl mb-2 tracking-widest font-sans font-light uppercase">Welcome to</span>
          Caffè Alex
        </h1>
        <p className="mb-12 max-w-lg text-lg font-light text-coffee-50 opacity-0 animate-[fadeIn_1s_ease-out_1.1s_forwards] italic">
          "Where every bean tells a story, and every cup is a masterpiece of flavor."
        </p>
        
        <div className="opacity-0 animate-[fadeIn_1s_ease-out_1.4s_forwards]">
          <button 
            onClick={() => scrollToSection(Section.PRODOTTI)}
            className="group relative px-8 py-3 text-sm font-bold tracking-widest text-white transition-all hover:text-coffee-200"
          >
            <span className="relative z-10">DISCOVER OUR WORLD</span>
            <div className="absolute bottom-0 left-1/2 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/50 cursor-pointer" onClick={() => scrollToSection(Section.PRODOTTI)}>
        <ChevronDown size={32} strokeWidth={1} />
      </div>
    </div>
  );
};