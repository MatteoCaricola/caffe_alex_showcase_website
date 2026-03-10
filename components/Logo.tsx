import React from 'react';
import { Coffee } from 'lucide-react';

export const Logo: React.FC<{ light?: boolean, className?: string }> = ({ light = false, className = "" }) => {
  return (
    <div className={`flex flex-col items-center ${className} ${light ? 'text-white' : 'text-coffee-900'}`}>
      <span className="font-serif text-sm tracking-[0.2em] uppercase mb-[-4px]">Caffè</span>
      <div className="flex items-center justify-center relative">
        <span className="font-serif text-4xl leading-none tracking-tight">A</span>
        <span className="font-serif text-4xl leading-none tracking-tight">l</span>
        <span className="font-serif text-4xl leading-none tracking-tight">e</span>
        <span className="font-serif text-4xl leading-none tracking-tight">X</span>
      </div>
      <Coffee size={16} strokeWidth={2.5} className="mt-1 opacity-80" />
    </div>
  );
};