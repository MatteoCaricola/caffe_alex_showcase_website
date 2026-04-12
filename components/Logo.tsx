import React, { useState, useEffect } from 'react';
// import { Coffee } from 'lucide-react';

const LOGO_BIANCO = `${import.meta.env.BASE_URL}assets/logo/logo_bianco.png`;
const LOGO_NERO   = `${import.meta.env.BASE_URL}assets/logo/logo.png`;

const MOBILE_BREAKPOINT = 768;

export const Logo: React.FC<{ light?: boolean, className?: string, width?: number, widthMobile?: number }> = ({ light = true, className = "", width = 140, widthMobile }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const currentWidth = isMobile && widthMobile !== undefined ? widthMobile : width;
  const src = light ? LOGO_BIANCO : LOGO_NERO;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img
        src={src}
        alt="Caffè Alex Logo"
        style={{ width: `${currentWidth}px` }}
        className="object-contain"
      />
    </div>
  );
};

// {/* Original logo (text-based):
// import { Coffee } from 'lucide-react';
// <div className={`flex flex-col items-center ${className} ${light ? 'text-white' : 'text-coffee-900'}`}>
//   <span className="font-serif text-sm tracking-[0.2em] uppercase mb-[-4px]">Caffè</span>
//   <div className="flex items-center justify-center relative">
//     <span className="font-serif text-4xl leading-none tracking-tight">A</span>
//     <span className="font-serif text-4xl leading-none tracking-tight">l</span>
//     <span className="font-serif text-4xl leading-none tracking-tight">e</span>
//     <span className="font-serif text-4xl leading-none tracking-tight">X</span>
//   </div>
//   <Coffee size={16} strokeWidth={2.5} className="mt-1 opacity-80" />
// </div>
// */}