// import { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import gsap from 'gsap';
// import { LOCATION_CATEGORIES } from '../data/commercialData';

// export default function AdaptedToLocation({ onOpenModal }) {
//   const [activeCategory, setActiveCategory] = useState(0);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from('.location-card-anim', {
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 75%',
//         },
//         opacity: 0,
//         y: 35,
//         duration: 0.8,
//         ease: 'power3.out',
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-[#fcf9f2] text-[#2c2416] py-24 sm:py-32 overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Location Spotlight Visual Card with Overlaid Heading & Tabs */}
//         <div className="location-card-anim relative rounded-3xl overflow-hidden border border-black/10 bg-black shadow-2xl">
//           <div className="relative h-[380px] sm:h-[480px] md:h-[540px] w-full overflow-hidden">
//             {/* Animated Image Transition */}
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={activeCategory}
//                 src={LOCATION_CATEGORIES[activeCategory].image}
//                 alt={LOCATION_CATEGORIES[activeCategory].name}
//                 initial={{ opacity: 0, y: 4 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -4 }}
//                 transition={{ duration: 0.2 }}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </AnimatePresence>

//             {/* Gradient Vignette for Text & Tab Contrast */}
//             {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70 pointer-events-none" /> */}

//             {/* Overlaid Heading (Single Line across breakpoints) */}
//             <div className="absolute align-center justify-center top-8 sm:top-12 md:top-14 left-0 right-0 z-10 px-6 text-center pointer-events-none">
//               <h2 className="text-xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white whitespace-nowrap drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
//                 One system — adapted to your location
//               </h2>
//             </div>

//             {/* Overlaid Location Filter Tabs at Bottom */}
//             <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-20 flex justify-center px-4 overflow-x-auto scrollbar-none">
//               <div className="inline-flex bg-black/50 backdrop-blur-md p-1.5 rounded-full border border-white/15 gap-1 shadow-xl max-w-full overflow-x-auto scrollbar-none">
//                 {LOCATION_CATEGORIES.map((cat, idx) => {
//                   const isActive = activeCategory === idx;
//                   return (
//                     <button
//                       key={cat.id}
//                       onClick={() => setActiveCategory(idx)}
//                       className="relative px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap focus:outline-none"
//                     >
//                       {isActive && (
//                         <motion.div
//                           layoutId="location-tab-indicator"
//                           className="absolute inset-0 bg-white rounded-full shadow-md"
//                           transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                         />
//                       )}
//                       <span
//                         className={`relative z-10 transition-colors duration-200 ${
//                           isActive ? 'text-slate-900' : 'text-white/70 hover:text-white'
//                         }`}
//                       >
//                         {cat.name}
//                       </span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action Banner (Direct on cream background, no boxed chrome) */}
//         <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
//           <div>
//             <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-[#2c2416] leading-snug">
//               Align Redgevity Master with your business and guest journey
//             </h3>
//             <p className="text-xs sm:text-sm text-[#8a8378] mt-1 font-light">
//               Custom branding, signature wavelengths, and dedicated space planning.
//             </p>
//           </div>

//           <button
//             onClick={onOpenModal}
//             className="bg-[#0d0706] hover:bg-black text-white rounded-full px-7 py-3.5 text-sm font-semibold shadow-xl cursor-pointer group flex items-center gap-3 transition-all flex-shrink-0"
//           >
//             <span>Discover possibilities</span>
//             <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
//               <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 20 18" fill="none">
//                 <path
//                   d="M1 9L19 9M19 9L11.35 17M19 9L11.35 1"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { LOCATION_CATEGORIES } from '../data/commercialData';

export default function AdaptedToLocation({ onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.location-card-anim', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#fcf9f2] text-[#2c2416]  overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Location Spotlight Visual Card with Overlaid Heading & Tabs */}
        <div className="location-card-anim relative rounded-3xl overflow-hidden border border-black/10 bg-black shadow-2xl">
          <div className="relative h-[380px] sm:h-[480px] md:h-[650px] w-full overflow-hidden">
            
            {/* Animated Image Transition */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeCategory}
                src={LOCATION_CATEGORIES[activeCategory].image}
                alt={LOCATION_CATEGORIES[activeCategory].name}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </AnimatePresence>

            {/* Smooth White Flash Overlay Triggered on Tab Change */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`flash-${activeCategory}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.25, 0] }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="absolute inset-0 bg-white pointer-events-none z-10 mix-blend-overlay"
              />
            </AnimatePresence>

            {/* Overlaid Heading */}
            <div className="absolute inset-0 flex items-center justify-center z-20 px-6 text-center pointer-events-none">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-sans font-medium tracking-tight text-white whitespace-nowrap drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
                More than a server. An operating infrastructure.
              </h2>
            </div>

            {/* Overlaid Location Filter Tabs at Bottom */}
            <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-20 flex justify-center px-4 overflow-x-auto scrollbar-none">
              <div className="inline-flex bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/20 gap-1 shadow-2xl max-w-full overflow-x-auto scrollbar-none">
                {LOCATION_CATEGORIES.map((cat, idx) => {
                  const isActive = activeCategory === idx;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(idx)}
                      className="relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap focus:outline-none select-none"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="location-tab-indicator"
                          className="absolute inset-0 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 35,
                            mass: 0.8,
                          }}
                        />
                      )}
                      <span
                        className={`relative z-10 transition-colors duration-200 ${
                          isActive
                            ? 'text-slate-950 font-bold'
                            : 'text-white/70 hover:text-white'
                        }`}
                      >
                        {cat.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-[#2c2416] leading-snug">
              Align Redgevity Master with your business and guest journey
            </h3>
            <p className="text-xs sm:text-sm text-[#8a8378] mt-1 font-light">
              Custom branding, signature wavelengths, and dedicated space planning.
            </p>
          </div>

          <button
            onClick={onOpenModal}
            className="rgm-btn rgm-btn-dark px-7 sm:px-8 py-3.5 text-sm sm:text-base font-semibold shadow-xl cursor-pointer group flex-shrink-0"
          >
            <span className="rgm-btn__bg" />
            <div className="relative z-10 flex items-center gap-3">
              <span>Discover possibilities</span>
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
      </div>
    </section>
  );
}