import React, { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ProductDetailProps {
  onBack: () => void;
}

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
}) => (
  <div className="flex flex-col group cursor-pointer">
    <div className="aspect-[3/4] overflow-hidden bg-[#f4f1ee] mb-6 flex items-center justify-center px-3 py-2 md:p-8">
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
      <p className="text-coffee-600 text-sm leading-relaxed font-light line-clamp-5">
        {description}
      </p>
    </div>
  </div>
);

export const ProductDetailPrivati: React.FC<ProductDetailProps> = (_props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const anchor = (location.state as { anchor?: string } | null)?.anchor;
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const productCaffe = [
    {
      id: "miscela-gold",
      title: "Caffè in grani - Miscela Gold",
      description:
        "La miscela più pregiata, dal gusto ricco ed elegante. Si distingue per l’aroma intenso, il perfetto equilibrio tra corpo e dolcezza e una crema fine e persistente. Ideale per un espresso di alta qualità.",
      image: `${import.meta.env.BASE_URL}assets/homePage/presentation_gold.png`,
    },
    {
      id: "miscela-black",
      title: "Caffè in grani - Miscela Black",
      description:
        "Una miscela dal carattere deciso, con un gusto pieno e una buona intensità aromatica. Perfetta per chi cerca un caffè corposo e strutturato, leggermente più diretto rispetto alla Gold.",
      image: `${import.meta.env.BASE_URL}assets/homePage/presentation_black.png`,
    },
    {
      id: "miscela-white",
      title: "Caffè in grani - Miscela White",
      description:
        "Equilibrata e cremosa, offre un gusto morbido e avvolgente con una texture più vellutata. Una valida alternativa alla Black, ideale per chi preferisce un espresso più rotondo e delicato.v",
      image: `${import.meta.env.BASE_URL}assets/homePage/presentation_white.png`,
    },
  ];

  const productGinseng = [
    {
      title: "Caffè al Ginseng - Rosso",
      description:
        "Prodotto solubile in busta da 500g, senza glutine, senza grassi idrogenati e senza OGM. Consente di preparare una bevanda dall’intenso profumo di caffè al ginseng rosso e con un’elevata cremosità.",
      image: `${import.meta.env.BASE_URL}assets/product-detail/presentation_ginseng_rosso.png`,
    },
    {
      title: "Caffè al Ginseng - Primus",
      description:
        "Prodotto solubile in busta da 500g, senza glutine, senza grassi idrogenati e senza OGM.  Consente di preparare un caffè al ginseng estremamente cremoso e con una spiccata nota di caffelatte e un caratteristico retrogusto di nocciola",
      image: `${import.meta.env.BASE_URL}assets/product-detail/presentation_ginseng_primus.png`,
    },
    {
      title: "Caffè al Ginseng - Platinum",
      description:
        "Prodotto solubile in busta da 500g, senza glutine, senza grassi idrogenati e senza OGM. Consente di preparare un caffè al ginseng corposo, con un’ottima cremosità e una piacevole nota di caffè e caramello.",
      image: `${import.meta.env.BASE_URL}assets/product-detail/presentation_ginseng_platinum.png`,
    },
    {
      title: "Caffè al Ginseng - Platinum senza saccarosio",
      description:
        "Prodotto solubile in busta da 500g, senza glutine, senza grassi idrogenati e OGM. Permette di ottenere un caffè al ginseng corposo e cremoso, con note di caffè e caramello. Senza saccarosio, ha un gusto amaro che consente di dosare lo zucchero secondo le proprie preferenze.",
      image: `${import.meta.env.BASE_URL}assets/product-detail/presentation_ginseng_platinum_senza_saccarosio.jpeg`,
    },
  ];

  const productCialde = [
    {
      title: "Caffè in cialde E.S.E.",
      description:
        "Pratiche e veloci da utilizzare, garantiscono un espresso sempre perfetto, con aroma intenso e crema consistente.",
      image: `${import.meta.env.BASE_URL}assets/product-detail/presentation_cialde.png`,
    },
  ];

  const productZuccher = [
    {
      title: "Zucchero bianco extra fine - alta solubilità",
      description:
        "Cristalli finissimi che si sciolgono rapidamente, ideali per dolcificare ogni bevanda senza alterarne il gusto.",
      image: `${import.meta.env.BASE_URL}assets/product-detail/presentation_zucchero.png`,
    },
    {
      title: "Zucchero di canna",
      description:
        "Naturale e dal sapore leggermente caramellato, dona un tocco aromatico in più a caffè e bevande calde.",
      image: `${import.meta.env.BASE_URL}assets/product-detail/presentation_zucchero_canna.jpeg`,
    },
    {
      title: "Dolcificante",
      description:
        "Dolcificante pratico e leggero, ideale per addolcire bevande calde e fredde senza apportare calorie. Perfetto per chi desidera un’alternativa allo zucchero senza rinunciare al gusto.",
      image: `${import.meta.env.BASE_URL}assets/product-detail/dolcificante.jpeg`,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Image Background and Red Overlay */}
      <div className="relative h-[65vh] w-full overflow-hidden bg-black flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`${import.meta.env.BASE_URL}assets/product-detail/product_detail_header.jpeg`}
            alt="Caffè Alex selection background"
            className="h-full w-full object-cover opacity-60"
          />
          {/* Red Gradient Overlay */}
        </div>

        {/* Navigation Button */}
        <Link
          to="/prodotti"
          className="absolute top-52 md:top-40 left-6 md:left-12 flex items-center gap-2 text-white/70 hover:text-white transition-colors z-20 group cursor-pointer"
        >
          <ArrowLeft
            size={20}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span className="text-xs font-bold tracking-widest uppercase">
            Torna ai Prodotti
          </span>
        </Link>

        {/* Hero Text Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mt-36 md:mt-0">
          <h1 className="text-white font-serif text-5xl md:text-8xl mb-8 tracking-tighter drop-shadow-2xl">
            I nostri caffè
          </h1>
          <p className="text-white/95 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto tracking-wide italic">
            Grani, macinato, capsule e cialde: scegli il tuo formato preferito
            per gustare un caffè indimenticabile.
          </p>
        </div>
      </div>

      {/* Main Product Catalog Section CAffè */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Caffè Header */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-coffee-950 mb-2">
              Caffè in grani
            </h2>
            <div className="h-[1px] w-20 bg-red-600"></div>
          </div>

          {/* Product Grid Caffè */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {productCaffe.map((product, index) => (
              <div key={index} id={product.id}>
                <ProductCard
                  title={product.title}
                  description={product.description}
                  image={product.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-coffee-200 mx-6 md:mx-12" />

      {/* Main Product Catalog Section Ginseng */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Ginseng Header */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-coffee-950 mb-2">
              Caffè al Ginseng
            </h2>
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

      <hr className="border-t border-coffee-200 mx-6 md:mx-12" />

      {/* Main Product Catalog Section Cialde */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Cialde Header */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-coffee-950 mb-2">
              Caffè Cialde
            </h2>
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

      <hr className="border-t border-coffee-200 mx-6 md:mx-12" />

      {/* Main Product Catalog Section Zucchero */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Zucchero Header */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-coffee-950 mb-2">
              Zucchero
            </h2>
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
          <span className="text-red-600 font-bold tracking-[0.4em] text-xs uppercase block mb-4">
            Solo Eccellenza
          </span>
          <h2 className="font-serif text-5xl text-coffee-950 mb-8 max-w-3xl mx-auto leading-tight">
            Ogni pausa merita il caffè giusto
          </h2>
          <p className="text-coffee-700 text-lg font-light max-w-2xl mx-auto mb-12">
          Miscele, capsule e formati pensati per accompagnare ogni momento della tua giornata.
          </p>
          <button
            onClick={() => navigate('/prodotti/privato/catalogo')}
            className="px-12 py-4 bg-coffee-950 text-white font-bold tracking-widest uppercase text-xs hover:bg-red-700 transition-all hover:scale-105"
          >
            SCOPRI IL CATALOGO
          </button>
        </div>
      </section>
    </div>
  );
};
