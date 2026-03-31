
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Section } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  scrollToSection: (section: Section) => void;
  currentView: 'home' | 'details';
  activeView: 'home' | 'product-details' | 'craft-details' | 'contatti';
}

export const Navbar: React.FC<NavbarProps> = ({ scrollToSection, currentView, activeView }) => {

  const activeSection = {
    'product-details': Section.PRODOTTI,
    'craft-details':   Section.SERVIZI,
    'contatti':        Section.CONTATTI,
    'home':            Section.HOME,
  }[activeView];

  const btnClass = (section: Section) => {
    const isActive = activeSection === section;
    const base = 'text-xs font-bold uppercase tracking-widest transition-all';
    if (isActive) return `${base} px-3 py-1 bg-coffee-900 text-white`;
    return `${base} hover:opacity-70`;
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', section: Section.HOME },
    { label: 'Prodotti', section: Section.PRODOTTI },
    { label: 'Servizi', section: Section.SERVIZI },
    { label: 'Contatti', section: Section.CONTATTI },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-white/95 text-coffee-900 shadow-md backdrop-blur-sm py-2'
        : 'bg-transparent text-white py-6'
    }`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">

        {/* Desktop Links Left */}
        <div className="hidden items-center gap-8 md:flex w-1/3">
          <button onClick={() => scrollToSection(Section.HOME)} className={btnClass(Section.HOME)}>
            Home
          </button>
          <button onClick={() => scrollToSection(Section.PRODOTTI)} className={btnClass(Section.PRODOTTI)}>
            Prodotti
          </button>
        </div>

        {/* Logo Center */}
        <div className="flex justify-center w-1/3 cursor-pointer" onClick={() => scrollToSection(Section.HOME)}>
          <Logo light={!isScrolled} />
        </div>

        {/* Desktop Links Right */}
        <div className="hidden items-center justify-end gap-8 md:flex w-1/3">
          <button onClick={() => scrollToSection(Section.SERVIZI)} className={btnClass(Section.SERVIZI)}>
            Servizi
          </button>
          <button onClick={() => scrollToSection(Section.CONTATTI)} className={`${btnClass(Section.CONTATTI)} ml-8`}>
            Contatti
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-6 top-1/2 -translate-y-1/2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white px-6 py-8 text-coffee-900 shadow-xl md:hidden border-t border-gray-100">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  scrollToSection(link.section);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-lg font-serif italic ${activeSection === link.section ? 'underline underline-offset-4' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
