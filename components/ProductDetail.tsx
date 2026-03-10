
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
      image: "https://lh3.googleusercontent.com/pw/AP1GczOdBKfdSHZkUWp_lpXB0S5BEmqWJmA2ioXNJkZ_-3U2skPYIYCcNM8RhATLGt0oBKTFeawuT9bwn8JWwo1SPUCr_V_VTNg2XSTSauJSxWfq8_JCr36YWczffVjwKPhlRDq3051-g00anZSwxXvMIadb=w982-h650-s-no-gm?authuser=0"
    },
    {
      title: "Caffè in grani - Miscela Black",
      description: "Caffè in grani - Miscela Black.",
      image: "https://lh3.googleusercontent.com/pw/AP1GczPensaYegAvqy4Q98Nf4Ae27wAaTm3IMUxO4qs351jNu5O_wwNoC9Mp8O1GRcDwVIqS7p4Hvo6mFxdsR4yjbRs2J18-5YodH3dnKSxmtmkZK3_waW2LX6jW9DHxSzkPpOdzfm29E30-8iLi3E0JUc72=w998-h665-s-no-gm?authuser=0"
    },
    {
      title: "Caffè in grani - Miscela White",
      description: "Caffè in grani - Miscela White.",
      image: "https://lh3.googleusercontent.com/pw/AP1GczP-Z20Uqk1IiBtu0dSi7Wmo0OmHcffJN-jYL7L77yd8guaaKa1t9beA6XNwswPfHWgEWYqFoIptwYJEAyjEgF9nYdyIGTmnPUkrz5EogVilhIerVfNWa-0-JnLsn7orBPhj28sc4hhzU9C9iP5uJAXj=w970-h832-s-no-gm?authuser=0"
    }
  ];

  const productGinseng = [
    {
      title: "Caffè al Ginseng - Rosso",
      description: "Caffè al Ginseng - Rosso.",
      image: "https://lh3.googleusercontent.com/pw/AP1GczO2q9JoqnldhN45YZrmPJ5dEa22cyb_SrFGAMO6YTOnFJ0F1i9zmznx3xotSpO7BKgSeuScqfeuDSxmbB7Ja_A5vJPg-yzd9tLnkWoZuJUwsLYzhpkkbi8cRWGIVZlIJvZkOsd3wmhb6XYNaeM3S8uX=w1248-h832-s-no-gm?authuser=0"
    },
    {
      title: "Caffè al Ginseng - Primus",
      description: "Caffè al Ginseng - Primus.",
      image: "https://lh3.googleusercontent.com/pw/AP1GczPjxNhJcaXJPN8ID-eTkLBK_W0GK1csqAtyeURqDp694MSusl0VB_Ls1D6MLy7Z9JmUmmgDfoCHRFEudOz9dIi81mMTKfDAeBNftIYIMNtNaviBL9gN97s1_CtFzrYf5l8TJvQH_BPAJ_hhrQ03im3x=w1100-h832-s-no-gm?authuser=0"
    },
    {
      title: "Caffè al Ginseng - Platinum",
      description: "Caffè al Ginseng - Platinum.",
      image: "https://lh3.googleusercontent.com/pw/AP1GczNRL-P0YBBEHJK0kP7vAE0ZDQsf1I1wr-taNcYkm8NkZAoLTlyPLZ-mhBd166W9dhwWRTU5Rzuof3xehdZeVDjTwa1DojMiSjMJTaMi1VRddBvB8TjXiXbk5fPvvvO1wL3iz_l4rvrc4SXSJvR8kUDR=w1100-h832-s-no-gm?authuser=0"
    },
    {
      title: "Caffè al Ginseng - Platinum senza saccarosio",
      description: "Caffè al Ginseng - Platinum senza saccarosio.",
      image: "https://lh3.googleusercontent.com/pw/AP1GczP8ui1kqTaoMHhlgIT81e5hIoM7vyfXSVR_VTPt9Ckm4G4gI9JSp05x3Pju3eQAid-yO2RYVZSJ5ydfll3dexOthlA20OAFjd57dhM3RW7VfanRJc7OGEm4U8GoG_1tbGTF0RnIZncxlS8NyAFOglgb=w1087-h1012-s-no-gm?authuser=0"
    }
  ];

  const productCialde = [
    {
      title: "Caffè in ciale E.S.E.",
      description: "Caffè in ciale E.S.E.",
      image: "https://lh3.googleusercontent.com/pw/AP1GczPYJV7gZSg4CvRTqL4ExkfvoduQqMoZJz--Io0B_MPa-YxbLM9eKdZkbM2RZnDueISxyff7iepjX16Spx2jH5Knh9JRYstTJt8-rbiVjC5VetX8zW6Z2gM4nB9OAgCVLBqdjslA6Q9OM8_z_piLBSu2=w864-h897-s-no-gm?authuser=0"
    }
  ];

  const productZuccher = [
    {
      title: "Zucchero bianco extra fine - alta solubilità",
      description: "Zucchero bianco extra fine - alta solubilità",
      image: "https://lh3.googleusercontent.com/pw/AP1GczMbcDm2_PueDxkGqgPxX5kKzzNCPE2R8I2AmJcA5_COW-f6tMGc8llueqokU2yLaTpsBklpaFML0BSQjA1w8bOL4XqQLuaNB1TuZoZM1Sa9kfSBDJ1Ux-aLx2QLzLJaK2T8USp4vqSGjso6-bA0DRvf=w1024-h940-s-no-gm?authuser=0"
    },
    {
      title: "Zucchero di canna extra fine - alta solubilità",
      description: "Zucchero di canna extra fine - alta solubilità",
      image: "https://lh3.googleusercontent.com/pw/AP1GczMdR0wqyecUZRXIpz6bjtgdKogyr2MsJ4Rx4-QBvjC4tuhREJyhALWFdZycxmVqCrMNlOX8COAbRJFbyN-u88Gb8ADHu8reReiEEauoyhoK2ZFyALeuFWqLLIEBESBhFiPeUNhmRB4Y9iE9VFncWweY=w896-h796-s-no-gm?authuser=0"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Image Background and Red Overlay */}
      <div className="relative h-[65vh] w-full overflow-hidden bg-black flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczMcu_F7tBXzOOG9ZZO6Cgmu6MBu9heZi5_DIGFPVM1lTktTOYx4f4VfovuxJz0a-2okFJ-v0RHcmp_g-bCEF1o9Ist3C9tlvx7QL5BTokKMd9qy-VVDv26BJZo1FDS5vm_tr_XwPXxF4_SsdgnS8tfb=w1408-h736-s-no-gm?authuser=0"
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
