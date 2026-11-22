import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { WHY_STANDS_ALONE } from '../data/commercialData';

export default function WhyStandsAlone() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stands-alone-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#faf8f5] text-[#2c2416] py-24 sm:py-32 border-t border-[#e8dfcf] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#808080] font-bold mb-2">
            Competitive Edge
          </p>
          <h2 data-grad className="text-3xl sm:text-5xl font-medium tracking-tight">
            Why Redgevity Master stands alone
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_STANDS_ALONE.map((card, idx) => (
            <div
              key={idx}
              className="stands-alone-card bg-white rounded-3xl p-6 border border-[#e8dfcf] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Graphic */}
                <div className="relative h-44 rounded-2xl overflow-hidden bg-[#faf8f5] border border-[#f0f0f0] mb-6 flex items-center justify-center p-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-lg font-bold text-[#2c2416] mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5c4929] leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#b08c4f]">
                <span>Pillar 0{idx + 1}</span>
                <span>•</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
