
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProdottiSection } from './components/ProdottiSection';
import { ServiziSection } from './components/ServiziSection';
import { ProductList } from './components/ProductList';
import { ProductsLanding } from './components/ProductsLanding';
import { ProductDetail } from './components/ProductDetail';
import { ProductDetailPrivati } from './components/ProductDetailPrivati';
import { ComingSoon } from './components/ComingSoon';
import { CraftDetail } from './components/CraftDetail';
import { ContattiDetail } from './components/ContattiDetail';
import { BioSection } from './components/BioSection';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { PrivacyPolicy } from './components/PrivacyPolicy';
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
    location.pathname.startsWith('/prodotti') ? 'product-details'
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
      {location.pathname !== '/privacy' && (
        <Navbar
          scrollToSection={scrollToSection}
          currentView={isHome ? 'home' : 'details'}
          activeView={activeView}
        />
      )}

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
          <Route path="/prodotti"         element={<ProductsLanding />} />
          <Route path="/prodotti/azienda" element={<ProductDetail onBack={() => navigate('/prodotti')} />} />
          <Route path="/prodotti/privato"          element={<ProductDetailPrivati onBack={() => navigate('/prodotti')} />} />
          <Route path="/prodotti/privato/catalogo" element={<ComingSoon />} />
          <Route path="/servizi"   element={<CraftDetail   onBack={() => navigate('/')} />} />
          <Route path="/contatti"  element={<ContattiDetail onBack={() => navigate('/')} />} />
          <Route path="/privacy"   element={<PrivacyPolicy />} />
        </Routes>
      </main>

      {!['/prodotti', '/prodotti/privato/catalogo'].includes(location.pathname) && <Footer />}
      <CookieBanner />
    </div>
  );
}

export default App;
