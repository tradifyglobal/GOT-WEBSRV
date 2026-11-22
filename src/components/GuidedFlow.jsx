import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { GUIDED_FLOW_STEPS } from '../data/commercialData';

export default function GuidedFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.guided-flow-anim', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-[#fcf9f2] text-[#2c2416] py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight">
            <span data-grad>Guests feel guided. Operators stay relaxed.</span>
          </h2>
        </div>

        {/* Guided Flow Physical Stand Device Mockup (matching 00:16 - 00:17 in video) */}
        <div className="guided-flow-anim relative max-w-4xl mx-auto bg-[#dbdbdb]/40 rounded-[2.5rem] p-6 sm:p-12 border border-[#c2c2c2] shadow-2xl overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Nav Menu on Stand */}
            <div className="md:col-span-4 space-y-2">
              {GUIDED_FLOW_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-white text-[#2c2416] shadow-md border border-[#dbdbdb]'
                        : 'text-[#808080] hover:text-[#2c2416] hover:bg-white/50'
                    }`}
                  >
                    <span>{step.title}</span>
                    {isActive && <span className="text-[#ff443a] text-xs">●</span>}
                  </button>
                );
              })}
            </div>

            {/* Right Interactive Touchscreen */}
            <div className="md:col-span-8 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#2c2416] bg-black aspect-[16/10] flex items-center justify-center">
                <img
                  key={activeStep}
                  src={GUIDED_FLOW_STEPS[activeStep].screen}
                  alt={GUIDED_FLOW_STEPS[activeStep].alt}
                  className="w-full h-full object-cover animate-in fade-in duration-400"
                />

                {/* Interactive Touch Indicator */}
                <div className="absolute bottom-6 right-10 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#ff443a] animate-ping" />
                  <span>Interactive Touch UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

