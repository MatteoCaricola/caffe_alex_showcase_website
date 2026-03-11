
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ProductDetailProps {
  onBack: () => void;
}

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image }) => (
  <div className="flex flex-col group cursor-pointer">
    <div className="aspect-[3/4] overflow-hidden bg-[#f4f1ee] mb-6 flex items-center justify-center p-8">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="space-y-3">
      <h3 className="font-serif text-2xl text-coffee-950 group-hover:text-red-700 transition-colors">
        {title}
      </h3>
      <p className="text-coffee-600 text-sm leading-relaxed font-light line-clamp-2">
        {description}
      </p>
    </div>
  </div>
);

export const ProductDetail: React.FC<ProductDetailProps> = ({ onBack }) => {
  const productCaffe = [
    {
      title: "Caffè in grani - Miscela Gold",
      description: "Caffè in grani - Miscela Gold.",
      image: "/assets/homePage/presentation_gold.png"
    },
    {
      title: "Caffè in grani - Miscela Black",
      description: "Caffè in grani - Miscela Black.",
      image: "/assets/homePage/presentation_black.png"
    },
    {
      title: "Caffè in grani - Miscela White",
      description: "Caffè in grani - Miscela White.",
      image: "/assets/homePage/presentation_white.png"
    }
  ];

  const productGinseng = [
    {
      title: "Caffè al Ginseng - Rosso",
      description: "Caffè al Ginseng - Rosso.",
      image: "/assets/product-detail/presentation_ginseng_rosso.png"
    },
    {
      title: "Caffè al Ginseng - Primus",
      description: "Caffè al Ginseng - Primus.",
      image: "/assets/product-detail/presentation_ginseng_primus.png"
    },
    {
      title: "Caffè al Ginseng - Platinum",
      description: "Caffè al Ginseng - Platinum.",
      image: "/assets/product-detail/presentation_ginseng_platinum.png"
    },
    {
      title: "Caffè al Ginseng - Platinum senza saccarosio",
      description: "Caffè al Ginseng - Platinum senza saccarosio.",
      image: "/assets/product-detail/presentation_ginseng_platinum_senza_saccarosio.png"
    }
  ];

  const productCialde = [
    {
      title: "Caffè in ciale E.S.E.",
      description: "Caffè in ciale E.S.E.",
      image: "/assets/product-detail/presentation_cialde.png"
    }
  ];

  const productZuccher = [
    {
      title: "Zucchero bianco extra fine - alta solubilità",
      description: "Zucchero bianco extra fine - alta solubilità",
      image: "/assets/product-detail/presentation_zucchero.png"
    },
    {
      title: "Zucchero di canna extra fine",
      description: "Zucchero di canna extra fine",
      image: "/assets/product-detail/presentation_zucchero_canna.png"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Image Background and Red Overlay */}
      <div className="relative h-[65vh] w-full overflow-hidden bg-black flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/product-detail/product_detail_header.png"
            alt="Caffè Alex selection background"
            className="h-full w-full object-cover opacity-60"
          />
          {/* Red Gradient Overlay */}

        </div>

        {/* Navigation Button */}
        <button
          onClick={onBack}
          className="absolute top-10 left-6 md:left-12 flex items-center gap-2 text-white/70 hover:text-white transition-colors z-20 group"
        >
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-xs font-bold tracking-widest uppercase">Torna alla Home</span>
        </button>

        {/* Hero Text Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white font-serif text-5xl md:text-8xl mb-8 tracking-tighter drop-shadow-2xl">
            I nostri caffè
          </h1>
          <p className="text-white/95 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto tracking-wide italic">
            Grani, macinato, capsule e cialde: scegli il tuo formato preferito per gustare un caffè indimenticabile.
          </p>
        </div>
      </div>

      {/* Main Product Catalog Section CAffè */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Caffè Header */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-coffee-950 mb-2">Caffè in grani</h2>
            <div className="h-[1px] w-20 bg-red-600"></div>
          </div>

          {/* Product Grid Caffè */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {productCaffe.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Product Catalog Section Ginseng */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Ginseng Header */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-coffee-950 mb-2">Caffè Ginseng</h2>
            <div className="h-[1px] w-20 bg-red-600"></div>
          </div>

          {/* Product Grid Ginseng */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {productGinseng.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Product Catalog Section Cialde */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Cialde Header */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-coffee-950 mb-2">Caffè Cialde</h2>
            <div className="h-[1px] w-20 bg-red-600"></div>
          </div>

          {/* Product Grid Cialde */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {productCialde.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Product Catalog Section Zucchero */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Zucchero Header */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-coffee-950 mb-2">Zucchero</h2>
            <div className="h-[1px] w-20 bg-red-600"></div>
          </div>

          {/* Product Grid Zucchero */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {productZuccher.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Second Section - Focus Title */}
      <section className="py-24 px-6 md:px-12 bg-[#f9f7f5] border-t border-coffee-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-red-600 font-bold tracking-[0.4em] text-xs uppercase block mb-4">Solo Eccellenza</span>
          <h2 className="font-serif text-5xl text-coffee-950 mb-8 max-w-3xl mx-auto leading-tight">La scelta perfetta per ogni tua pausa</h2>
          <p className="text-coffee-700 text-lg font-light max-w-2xl mx-auto mb-12">
            Ogni formato è pensato per garantirti la massima resa aromatica. Dalla macinatura fresca dei grani alla praticità delle capsule in alluminio, la qualità Alex rimane costante.
          </p>
          <button
            onClick={onBack}
            className="px-12 py-4 bg-coffee-950 text-white font-bold tracking-widest uppercase text-xs hover:bg-red-700 transition-all hover:scale-105"
          >
            Ritorna alla selezione
          </button>
        </div>
      </section>
    </div>
  );
};
