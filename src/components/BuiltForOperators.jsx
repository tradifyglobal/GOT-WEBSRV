import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OPERATOR_VALUES } from '../data/commercialData';
import { DiaTextReveal } from './ui/dia-text-reveal';

gsap.registerPlugin(ScrollTrigger);

export default function BuiltForOperators() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.operator-item',
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'opacity,transform',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#fcf9f2] text-[#2c2416] py-14 sm:py-20 "
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* <h2 data-grad className="text-4xl sm:text-5xl font-sans font-medium tracking-tight mb-3"> */}
          <DiaTextReveal
                className="text-7xl font-sans font-medium tracking-tight"
                colors={["#22d3ee", "#818cf8", "#f472b6", "#34d399"]}
                text="Built for Infrastructure"
              />
            {/* Built for operators */}
          {/* </h2> */}
          <p className="text-base sm:text-lg text-[#5c4929] font-medium pt-5">
           Reliability, control, security, scalability.
          </p>
        </div>

        {/* 4-Point Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {OPERATOR_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="operator-item  p-8 sm:p-10  rounded-3xl "
            >
              <div className="flex items-center mb-4">
                <h3 className="text-lg sm:text-xl font-sans justify-between font-medium text-[#2c2416]">
                  {val.title} <span className="font-medium text-zinc-500">
                {val.desc}
              </span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
