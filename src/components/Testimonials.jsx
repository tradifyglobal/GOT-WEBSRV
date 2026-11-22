import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { TESTIMONIALS } from '../data/commercialData';
import { DiaTextReveal } from './ui/dia-text-reveal';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-anim', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="bg-[#fcf9f2] text-[#2c2416] py-24 sm:py-32  overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#808080] font-bold mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight">
            <DiaTextReveal
              className="text-7xl font-sans font-medium tracking-tight"
              colors={["#22d3ee", "#818cf8", "#f472b6", "#34d399"]}
              text="Operator Experience"
            />
          </h2>
        </div>

        {/* Featured Testimonial Card */}
        <div className="testimonial-anim max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-14 border border-[#e8dfcf] shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[380px]">
          {/* Quote Mark Icon */}
          <div className="text-6xl font-serif text-[#ff443a]/20 absolute top-6 right-8 select-none pointer-events-none">
            “
          </div>

          {/* Quote Body */}
          <div className="relative z-10 my-auto">
            <p className="text-lg sm:text-2xl text-[#2c2416] font-normal leading-relaxed mb-8 italic">
              {current.quote}
            </p>
          </div>

          {/* Bottom Author Profile */}
          <div className="relative z-10 pt-6 border-t border-[#f0f0f0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#e8dfcf]"
                loading="lazy"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-[#2c2416]">
                    {current.author}
                  </h4>
                  {current.instagramUrl !== '#' && (
                    <a
                      href={current.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#ff443a] hover:underline"
                    >
                      {current.handle}
                    </a>
                  )}
                </div>
                <p className="text-xs text-[#808080]">{current.role}</p>
                <span className="inline-block text-[10px] text-[#b08c4f] font-medium bg-[#faf8f5] px-2 py-0.5 rounded-full mt-1 border border-[#e8dfcf]">
                  {current.tag}
                </span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                onClick={prevSlide}
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-full border border-[#e8dfcf] bg-[#faf8f5] hover:bg-[#2c2416] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                ←
              </button>
              <span className="text-xs font-mono text-[#808080] px-2">
                {currentIndex + 1} / {TESTIMONIALS.length}
              </span>
              <button
                onClick={nextSlide}
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-full border border-[#e8dfcf] bg-[#faf8f5] hover:bg-[#2c2416] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
