import React from "react";
import { CoffeeProduct } from "../types";

const PRODUCTS: CoffeeProduct[] = [
  {
    id: 1,
    name: "Miscela Gold",
    origin: "Ethiopia",
    roast: "Robusta",
    image: `${import.meta.env.BASE_URL}assets/homePage/presentation_gold.png`,
    tags: ["Floral", "Citrus", "Bright"],
    description:
      "Una tostatura scura e corposa, dal gusto profondo e persistente. Un vero classico.",
  },
  {
    id: 2,
    name: "Miscela Black",
    origin: "Colombia",
    roast: "Media",
    image: `${import.meta.env.BASE_URL}assets/homePage/presentation_black.png`,
    tags: ["Caramel", "Nutty", "Balanced"],
    description:
      "La nostra miscela a tostatura media, espressione del nostro caffè. Un gusto armonioso e perfettamente bilanciato.",
  },
  {
    id: 3,
    name: "Miscela White",
    origin: "Indonesia",
    roast: "Cremoso",
    image: `${import.meta.env.BASE_URL}assets/homePage/presentation_white.png`,
    tags: ["Earthy", "Spicy", "Full Body"],
    description:
      "La nostra miscela cremosa, espressione di equilibrio e morbidezza. Un gusto pieno e avvolgente.",
  },
];

export const ProductList: React.FC = () => {
  return (
    <section
      id="collection"
      className="bg-coffee-950 py-24 px-6 md:px-12 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <span className="text-coffee-400 font-bold tracking-[0.2em] text-xs uppercase block mb-4">
            la nostra selezione
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
            Eccellenza curata
          </h2>
          <p className="mx-auto max-w-2xl text-coffee-200 font-light text-lg">
            Non ci limitiamo a tostare il caffè: creiamo esperienze uniche.
            Esplora la nostra selezione dei migliori chicchi al mondo.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Image Circle */}
              <div className="mb-8 transition-transform duration-500 group-hover:scale-105 [will-change:transform]">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-coffee-800 transition-colors duration-500 group-hover:border-coffee-400 shadow-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-coffee-950/20 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col items-center">
                <span className="mb-2 text-[10px] font-bold tracking-[0.2em] text-coffee-400 uppercase">
                  {product.id !== 3
                    ? `Tostatura ${product.roast}`
                    : product.roast}
                </span>
                <h3 className="mb-4 font-serif text-3xl text-white group-hover:text-coffee-300 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm leading-relaxed text-coffee-200 opacity-80 max-w-xs">
                  {product.description}
                </p>
                <div className="mt-6 w-0 h-[1px] bg-coffee-400 transition-all duration-500 group-hover:w-12"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-coffee-300 italic text-sm">
            Scopri tutte le nostre miscele e trova il tuo caffè ideale nella sezione "PRODOTTI"
          </p>
        </div>
      </div>
    </section>
  );
};
