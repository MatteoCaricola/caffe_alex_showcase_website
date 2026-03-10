
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProdottiSection } from './components/ProdottiSection';
import { ServiziSection } from './components/ServiziSection';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { CraftDetail } from './components/CraftDetail';
import { BioSection } from './components/BioSection';
import { Footer } from './components/Footer';
import { Section } from './types';

function App() {
  const [view, setView] = useState<'home' | 'product-details' | 'craft-details'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const scrollToSection = (section: Section) => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showProductDetails = () => setView('product-details');
  const showCraftDetails = () => setView('craft-details');
  const goHome = () => setView('home');

  return (
    <div className="min-h-screen bg-white font-sans text-coffee-900">
      <Navbar scrollToSection={scrollToSection} currentView={view === 'home' ? 'home' : 'details'} />
      
      <main>
        {view === 'home' && (
          <>
            <Hero scrollToSection={scrollToSection} />
            <ProdottiSection onDetailClick={showProductDetails} />
            <ServiziSection onDetailClick={showCraftDetails} />
            <ProductList />
            <BioSection />
          </>
        )}
        {view === 'product-details' && <ProductDetail onBack={goHome} />}
        {view === 'craft-details' && <CraftDetail onBack={goHome} />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
