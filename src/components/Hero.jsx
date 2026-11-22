import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PARTNER_LOGOS } from '../data/commercialData';
import { DiaTextReveal } from './ui/dia-text-reveal';
// import { DiaTextReveal } from './ui/DiaTextReveal';
// import { DiaTextReveal } from "@/components/ui/dia-text-reveal"

export default function Hero({ onOpenModal }) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const badgeRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const marqueeRef = useRef(null);
  const blurOverlayRef = useRef(null);

  const headlineText = 'Geeks On Tap';

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = headlineRef.current?.querySelectorAll('.hero-char');

      // 1. Initial State: Background blur active, elements hidden
      gsap.set(blurOverlayRef.current, {
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        opacity: 1,
      });

      gsap.set(badgeRef.current, {
        opacity: 0,
        y: -12,
      });

      if (chars && chars.length) {
        gsap.set(chars, {
          opacity: 0,
          color: '#3d161a',
          scale: 0.88,
          filter: 'blur(8px)',
        });
      }

      gsap.set(subtitleRef.current, {
        opacity: 0,
        y: 14,
      });

      gsap.set(ctaRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(marqueeRef.current, {
        opacity: 0,
      });

      // Strict Sequential Order:
      // Step 1: Digital badge appears
      // Step 2: "Redgevity Master" headline types out char-by-char with color transition
      // Step 3: ONLY AFTER typewriter finishes, CTA block + subtitle fadeInUp
      // Step 4: ONLY AFTER CTA completes, the background blur clears
      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      })
      .to(chars, {
        opacity: 1,
        color: '#ffffff',
        scale: 1,
        filter: 'blur(0px)',
        stagger: 0.055,
        duration: 0.18,
        ease: 'power2.out',
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      }, '-=0.15')
      .to(marqueeRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.3')
      .to(blurOverlayRef.current, {
        backdropFilter: 'blur(0px)',
        WebkitBackdropFilter: 'blur(0px)',
        opacity: 0,
        duration: 1.2,
        ease: 'power2.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[96vh] flex flex-col justify-between pt-24 pb-8 overflow-hidden"
    >
      {/* Initial load backdrop blur overlay (clears strictly after typewriter + CTA) */}
      {/* <div
        ref={blurOverlayRef}
        className="fixed inset-0 pointer-events-none z-30 bg-black/35"
      /> */}

      {/* Hero Content (Layered over the shared video background) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center my-auto flex flex-col items-center pt-8 sm:pt-14">

        {/* Master Headline with Typewriter Span Split */}
        <h1
  className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-sans font-medium tracking-tight text-white mb-6 drop-shadow-2xl select-none"
>
  <DiaTextReveal
    // repeat
    textColor='white'
    repeatDelay={1.2}
     colors={["#22d3ee", "#818cf8", "#f472b6", "#34d399"]}
    text={["Geeks On Tap"]}
  />
</h1>
        {/* <h1
          ref={headlineRef}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-sans font-medium tracking-tight text-white mb-6 drop-shadow-2xl select-none"
        >
          {headlineText.split('').map((char, index) => (
            <span
              key={index}
              className="hero-char inline-block will-change-transform will-change-[color,opacity,filter]"
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1> */}

        {/* CTA Button & Subcopy */}
        <div ref={ctaRef} className="flex flex-col items-center gap-3 pt-5">
          <button
            onClick={onOpenModal}
            className="rgm-btn px-8 py-3.5 text-sm sm:text-base font-semibold text-[#0d0706] bg-white hover:text-white border-0 shadow-2xl shadow-[#ff443a]/25 cursor-pointer group"
          >
            <span className="rgm-btn__bg" />
            <div className="relative z-10 flex items-center gap-2.5">
              <span>Book a partner call</span>
              <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>

          <p className="text-xs sm:text-sm text-zinc-800 font-light mt-1">
            Infrastructure that keeps your business running.
          </p>
        </div>
      </div>

      {/* Bottom Partner Logo Marquee Strip */}
      <div ref={marqueeRef} className="w-full pt-8">
        <div className="w-[50vw] mx-auto overflow-hidden border-t border-white/10 py-2 [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]">
          <div className="flex animate-marquee gap-14 sm:gap-20 items-center">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="h-15 sm:h-15 w-auto object-contain brightness-0 invert"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



