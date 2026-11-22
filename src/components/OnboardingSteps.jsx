import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ONBOARDING_STEPS } from '../data/commercialData';
import DataCenterImageOrange from "../../public/images/Data-Center-Image-orange.webp";
export default function OnboardingSteps({ onOpenModal }) {
  const [openIndex, setOpenIndex] = useState(-1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.step-anim-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleStep = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#fcf9f2] py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {/* First Card: Top Visual Banner matching the dimensions of the second card */}
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/10 h-[420px] sm:h-[540px] md:h-[600px] w-full">
          <img
            src={DataCenterImageOrange}
            alt="Person lying inside Redgevity Master pod"
            className="w-full h-full object-cover"
            loading="lazy"
          />
               <div className="absolute top-70 left-55 w-full h-full object-cover pointer-events-none">
            <h2 className="text-lg sm:text-3xl font-medium font-sans tracking-tight text-white mb-3">
            From Infrastructure Requirement To Production.
            </h2>
            {/* <p className="text-xs sm:text-base text-white/70 font-light">
              From interest to live operation in clear steps
            </p> */}
          </div>
        </div>

        {/* Second Card: Red Glow Background Card with Heading, Accordion and CTA (matching screenshot) */}
        {/* <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 py-12 sm:py-16 md:py-20 px-6 sm:px-12 flex flex-col justify-center items-center text-center">
          {/* Background Image (replacing gradient) */}
          {/* <img
            src={DataCenterImageOrange}
            alt="Redgevity ambient background"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            loading="lazy"
          /> */}

          {/* Heading & Subtitle */}
          {/* <div className="relative z-10 max-w-2xl mx-auto mb-8 sm:mb-10">
            <p className="text-xs sm:text-sm text-white/70 font-light mb-3 tracking-wide">
              Bring Redgevity Master to your location
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              From interest to live operation in clear steps
            </h2>
          </div> */}

          {/* Accordion Steps List */}
          {/* <div className="relative z-10 w-full max-w-xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-10 text-left">
            {ONBOARDING_STEPS.map((step, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={step.num}
                  className="step-anim-item rounded-2xl border border-white/10 bg-[#350b10]/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/20"
                >
                  <button
                    onClick={() => toggleStep(idx)}
                    className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left cursor-pointer transition-colors"
                  >
                    <span className="text-sm sm:text-base font-normal sm:font-medium text-white tracking-normal">
                      {step.title}
                    </span>

                    <div
                      className={`text-white/80 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        isOpen ? 'rotate-180 text-white' : ''
                      }`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M8 3V13M8 13L3.5 8.5M8 13L12.5 8.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Expandable Content */}
                  {/* <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 px-5 sm:px-6 pb-5'
                        : 'grid-rows-[0fr] opacity-0 px-5 sm:px-6 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light pt-2 border-t border-white/10">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div> */}
              {/* ); */}
            {/* })} */}
          {/* </div> */}

          {/* Bottom CTA Button */}
          {/* <div className="relative z-10 flex justify-center">
            <button
              onClick={onOpenModal}
              className="bg-black hover:bg-neutral-900 text-white rounded-full px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-medium transition-all duration-300 shadow-2xl flex items-center gap-2 cursor-pointer group"
            >
              <span>Book a partner call</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}


