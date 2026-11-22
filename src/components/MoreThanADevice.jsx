import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MORE_THAN_DEVICE } from '../data/commercialData';
import { DiaTextReveal } from './ui/dia-text-reveal';

export default function MoreThanADevice({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState(0);
  const pinWrapperRef = useRef(null);
  const trackRef = useRef(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState(0);

  // Dynamic translate distance calculation: actual row width minus viewport width
  // At scrollYProgress = 0, Card 1 starts at left padding, Card 2 peeks in from right, Card 3 is off-screen.
  // At scrollYProgress = 1 (translateX = -maxTranslate), Card 3 is fully visible at right padding, leaving zero trailing empty space.
  const calculateDistance = useCallback(() => {
    if (trackRef.current) {
      const scrollW = trackRef.current.scrollWidth;
      const viewportW = window.innerWidth;
      const viewportH = window.innerHeight;
      const distance = Math.max(0, scrollW - viewportW);
      setMaxTranslate(distance);
      setWrapperHeight(viewportH + distance);
      ScrollTrigger.refresh();
    }
  }, []);

  useEffect(() => {
    calculateDistance();
    window.addEventListener('resize', calculateDistance);
    const timeout = setTimeout(calculateDistance, 150);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', calculateDistance);
    };
  }, [calculateDistance]);

  // Framer Motion useScroll bound to the pinned horizontal track depth
  const { scrollYProgress } = useScroll({
    target: pinWrapperRef,
    offset: ['start start', 'end end'],
  });

  // Smooth horizontal translation across scroll
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);

  // Per-card scroll-progress-driven micro-animations
  const card1Opacity = useTransform(scrollYProgress, [0, 0.35], [1, 1]);
  const card1Scale = useTransform(scrollYProgress, [0, 0.35], [1, 1]);

  const card2Opacity = useTransform(scrollYProgress, [0.05, 0.45], [0.7, 1]);
  const card2Scale = useTransform(scrollYProgress, [0.05, 0.45], [0.96, 1]);

  const card3Opacity = useTransform(scrollYProgress, [0.38, 0.85], [0.7, 1]);
  const card3Scale = useTransform(scrollYProgress, [0.38, 0.85], [0.96, 1]);

  const cardAnimations = [
    { opacity: card1Opacity, scale: card1Scale },
    { opacity: card2Opacity, scale: card2Scale },
    { opacity: card3Opacity, scale: card3Scale },
  ];

  return (
    <section className="relative z-10 bg-[#fcf9f2] text-[#2c2416]">
      {/* 1. Desktop Pinned Horizontal Scroll Section */}
      <div
        ref={pinWrapperRef}
        style={{ height: wrapperHeight ? `${wrapperHeight}px` : '220vh' }}
        className="hidden md:block relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-between pt-12 lg:pt-10 pb-10 lg:pb-14">
          {/* Static Pinned Section Header (Fixed in place at top of sticky viewport) */}
          <div className="max-w-6xl w-full mx-auto px-8 lg:px-16 text-center flex-shrink-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-tight mb-3 text-[#2c2416]">
             <DiaTextReveal
                className="text-4xl font-medium tracking-tight"
                colors={["#22d3ee", "#818cf8", "#f472b6", "#34d399"]}
                text="Enterprise-grade compute, networking, security, and cloud infrastructure built for continuous operation."
              />
            </h2>
          </div>

          {/* Horizontal Track Wrapper (Translates horizontally below fixed header) */}
          <div className="w-full overflow-visible flex items-center my-auto pt-10">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex flex-row flex-nowrap gap-10 lg:gap-5 pl-8 lg:pl-16 xl:pl-20 pr-8 lg:pr-16 xl:pr-20 will-change-transform items-start"
            >
              {MORE_THAN_DEVICE.map((item, index) => {
                const anim = cardAnimations[index] || cardAnimations[0];
                return (
                  <motion.div
                    key={item.id}
                    style={{
                      opacity: anim.opacity,
                      scale: anim.scale,
                    }}
                    className="flex-shrink-0 w-[60vw] pl-50 max-w-[980px] min-w-[480px] flex flex-col justify-start group will-change-transform"
                  >
                    {/* Headline Block (Equal height across columns for perfect baseline alignment) */}
                    <div className="min-h-[56px] lg:min-h-[64px] mb-2 flex flex-col justify-start">
                      <h3 className="text-lg sm:text-xl lg:text-2xl leading-snug">
                        <span className="font-bold font-sans text-[#2c2416]">{item.tag}. </span>
                        <span className="text-[#808080] font-sans font-normal text-sm sm:text-base lg:text-lg block sm:inline mt-1 sm:mt-0">
                          {item.headline}
                        </span>
                      </h3>
                    </div>

                    {/* Feature Visual Panel (Consistent fixed height across all columns) */}
                    <div className="relative h-56 sm:h-64 lg:h-72 w-full rounded-2xl overflow-hidden bg-[#f5efe4] border border-[#e8dfcf]/60 my-4 flex items-center justify-center p-6 group-hover:bg-[#f0e8dc] transition-colors flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.tag}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a3407446100555314046985_rgm-sl-1.avif';
                          calculateDistance();
                        }}
                        onLoad={calculateDistance}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Bullets List (Directly on page background) */}
                    <ul className="space-y-2.5 mt-2">
                      {item.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#443722] leading-relaxed font-light"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff443a] mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. Mobile View (Header + Tabs Fallback UX) */}
      <div className="md:hidden px-6 pt-16 pb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-3 text-[#2c2416]">
            <span>More than a device. </span>
            <span data-grad className="font-semibold block sm:inline">
              Integrated hardware, software, and smart updates
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-[#786036] font-light max-w-md mx-auto">
            An all-in-one ecosystem delivering automated guidance, remote intelligence, and tailored protocol scaling.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-2 pb-4 mb-6 scrollbar-none">
          {MORE_THAN_DEVICE.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === idx
                  ? 'bg-[#2c2416] text-white shadow-md'
                  : 'bg-white border border-[#e8dfcf] text-[#5c4929]'
              }`}
            >
              {item.tag}
            </button>
          ))}
        </div>

        {/* Active Item for Mobile */}
        <div className="bg-transparent">
          <h3 className="text-lg font-bold text-[#2c2416] mb-2 leading-snug">
            <span className="font-bold">{MORE_THAN_DEVICE[activeTab].tag}. </span>
            <span className="text-[#808080] font-normal text-sm block mt-1">
              {MORE_THAN_DEVICE[activeTab].headline}
            </span>
          </h3>

          <div className="relative h-52 rounded-2xl overflow-hidden bg-[#f5efe4] border border-[#e8dfcf]/60 my-4 flex items-center justify-center p-4">
            <img
              src={MORE_THAN_DEVICE[activeTab].image}
              alt={MORE_THAN_DEVICE[activeTab].tag}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a3407446100555314046985_rgm-sl-1.avif';
              }}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </div>

          <ul className="space-y-2.5 mt-4">
            {MORE_THAN_DEVICE[activeTab].bullets.map((bullet, bIdx) => (
              <li key={bIdx} className="flex items-start gap-2 text-xs text-[#443722]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff443a] mt-1.5 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3. In-flow Bottom CTA Button (Scrolls normally after pin ends) */}
      <div className="max-w-6xl mx-auto px-6 pt-12 sm:pt-16 pb-24 sm:pb-32 text-center">
        <button
          onClick={onOpenModal}
          className="rgm-btn rgm-btn-dark px-8 py-3.5 text-base font-semibold shadow-xl cursor-pointer group"
        >
          <span className="rgm-btn__bg" />
          <div className="relative z-10 flex items-center gap-3">
            <span>Experience the Master system</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 20 18" fill="none">
                <path
                  d="M1 9L19 9M19 9L11.35 17M19 9L11.35 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}


