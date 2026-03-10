
import React from 'react';
import { ArrowLeft, Flame, Droplets, Wind, Zap } from 'lucide-react';

interface CraftDetailProps {
  onBack: () => void;
}

export const CraftDetail: React.FC<CraftDetailProps> = ({ onBack }) => {
  const processes = [
    {
      icon: <Flame className="text-coffee-400" size={32} />,
      title: "The Alchemy of Heat",
      text: "Roasting is a delicate dance between temperature and time. We use conductive and convective heat to transfer energy into the heart of the bean, initiating the Maillard reaction that creates hundreds of aroma compounds.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000",
      color: "bg-orange-950"
    },
    {
      icon: <Zap className="text-coffee-400" size={32} />,
      title: "The First Crack",
      text: "At approximately 196°C, the bean reaches a critical point. Internal pressure builds until the cellular structure fractures with an audible 'pop'. This is the moment we capture the peak acidity and brightness of our light roasts.",
      image: "https://images.unsplash.com/photo-1559056199-c020f545465c?auto=format&fit=crop&q=80&w=1000",
      color: "bg-coffee-900"
    },
    {
      icon: <Droplets className="text-coffee-400" size={32} />,
      title: "Oil Migration",
      text: "As we push further into the roast, internal oils begin to migrate to the surface. For our Dark Roasts, this process adds a smoky, chocolatey depth and a viscous mouthfeel that defines the classic Italian espresso experience.",
      image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=1000",
      color: "bg-black"
    }
  ];

  return (
    <div className="bg-coffee-950 min-h-screen text-coffee-50 overflow-hidden">
      {/* Immersive Hero Header */}
      <div className="relative h-screen flex items-center px-6 md:px-24 pt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30 grayscale" 
            alt="Roasting background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-950 via-coffee-950/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          {/* Increased spacing and updated label */}
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-coffee-400 hover:text-white transition-colors mb-20 md:mb-32 group"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase">Back to Home</span>
          </button>
          
          <span className="text-coffee-500 font-bold tracking-[0.5em] text-xs uppercase block mb-6">Volume II</span>
          <h1 className="font-serif text-6xl md:text-9xl text-white mb-10 leading-[0.9] tracking-tighter">
            The Soul <br/><span className="italic text-coffee-400">of the</span> <br/>Roast
          </h1>
          <p className="text-coffee-200 text-xl md:text-2xl font-light leading-relaxed max-w-xl border-l-2 border-coffee-800 pl-8">
            The transformation of a hard, green seed into a fragrant bean is a scientific miracle. At Caffè Alex, we treat it as an art form.
          </p>
        </div>
      </div>

      {/* Narrative Section */}
      <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5 sticky top-32">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">Mastering the <span className="text-coffee-500 italic">Thermodynamics</span></h2>
            <div className="space-y-8">
              {processes.map((p, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="pt-1 transition-transform group-hover:scale-110 duration-500">{p.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-white">{p.title}</h4>
                    <p className="text-coffee-400 leading-relaxed text-sm">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7 space-y-12">
            <div className="aspect-[4/5] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000">
               <img src="https://images.unsplash.com/photo-1559056199-c020f545465c?auto=format&fit=crop&q=80&w=1200" alt="Roasting" className="w-full h-full object-cover" />
            </div>
            <div className="bg-coffee-900 p-12 border-l-4 border-coffee-400">
              <h3 className="font-serif text-3xl mb-6">The Secret Profiling</h3>
              <p className="text-coffee-200 leading-relaxed italic">
                "We don't just roast. We listen. We smell. We watch the color shift from pale yellow to cinnamon, and then to a deep, rich mahogany. The bean tells us when it is ready. We merely provide the stage."
              </p>
              <p className="mt-8 text-xs font-bold tracking-widest text-coffee-400 uppercase">— ALEX, MASTER ROASTER</p>
            </div>
            <div className="aspect-[16/9] overflow-hidden rounded-sm">
               <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200" alt="Process" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Cooling Section */}
      <section className="py-32 bg-white text-coffee-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Wind size={48} className="mx-auto mb-8 text-coffee-500 animate-pulse" />
          <h2 className="font-serif text-5xl md:text-7xl mb-8">The Cooling Ritual</h2>
          <p className="text-coffee-600 max-w-2xl mx-auto text-lg mb-16 leading-relaxed">
            Stopping the roast at the exact micro-second is vital. Our air-cooling trays reduce the temperature of the beans in under three minutes, locking in the aromatic compounds before they can dissipate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             {['Bright', 'Syrupy', 'Complex', 'Volcanic', 'Floral'].map(tag => (
               <span key={tag} className="px-6 py-2 border border-coffee-200 rounded-full text-xs font-bold tracking-widest uppercase text-coffee-400">
                 {tag}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* Dark Footer CTA */}
      <section className="py-24 px-6 text-center bg-coffee-950">
          <button 
            onClick={onBack}
            className="px-12 py-6 border-2 border-coffee-800 text-white font-bold tracking-[0.4em] uppercase text-sm hover:bg-white hover:text-coffee-950 transition-all duration-500"
          >
            Back to Home
          </button>
      </section>
    </div>
  );
};
