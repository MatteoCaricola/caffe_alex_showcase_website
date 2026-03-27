
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProdottiSection } from './components/ProdottiSection';
import { ServiziSection } from './components/ServiziSection';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { CraftDetail } from './components/CraftDetail';
import { ContattiDetail } from './components/ContattiDetail';
import { BioSection } from './components/BioSection';
import { Footer } from './components/Footer';
import { Section } from './types';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  const activeView: 'home' | 'product-details' | 'craft-details' | 'contatti' =
    location.pathname === '/prodotti' ? 'product-details'
    : location.pathname === '/servizi' ? 'craft-details'
    : location.pathname === '/contatti' ? 'contatti'
    : 'home';

  const scrollToSection = (section: Section) => {
    if (section === Section.PRODOTTI) { navigate('/prodotti'); return; }
    if (section === Section.SERVIZI)  { navigate('/servizi');  return; }
    if (section === Section.CONTATTI) { navigate('/contatti'); return; }

    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return;
    }

    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-coffee-900">
      <ScrollToTop />
      <Navbar
        scrollToSection={scrollToSection}
        currentView={isHome ? 'home' : 'details'}
        activeView={activeView}
      />

      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero scrollToSection={scrollToSection} />
              <ProdottiSection onDetailClick={() => navigate('/prodotti')} />
              <ServiziSection onDetailClick={() => navigate('/servizi')} />
              <ProductList />
              <BioSection />
            </>
          } />
          <Route path="/prodotti"  element={<ProductDetail onBack={() => navigate('/')} />} />
          <Route path="/servizi"   element={<CraftDetail   onBack={() => navigate('/')} />} />
          <Route path="/contatti"  element={<ContattiDetail onBack={() => navigate('/')} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
