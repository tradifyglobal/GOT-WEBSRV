import { motion, useTransform } from 'framer-motion';
import { LayoutGrid, Activity, CircleDot, VolumeX, Sparkles } from 'lucide-react';

export default function DeviceSection({ scrollYProgress }) {
  // 1. Header fades in and slides down above the card as the shrink completes
  const headerOpacity = useTransform(
    scrollYProgress || { get: () => 1 },
    [0.72, 0.84, 1],
    [0, 1, 1]
  );
  const headerY = useTransform(
    scrollYProgress || { get: () => 0 },
    [0.72, 0.84, 1],
    [-24, 0, 0]
  );

  // 2. Features grid fades in and slides up below the card
  const featuresOpacity = useTransform(
    scrollYProgress || { get: () => 1 },
    [0.82, 0.94, 1],
    [0, 1, 1]
  );
  const featuresY = useTransform(
    scrollYProgress || { get: () => 0 },
    [0.82, 0.94, 1],
    [28, 0, 0]
  );

  const features = [
    {
      icon: LayoutGrid,
      text: '4,608 actively cooled dual LEDs for consistent, even output.',
      tag: 'Matrix Array',
    },
    {
      icon: Activity,
      text: '630–1060 nm wavelength range (Red + NIR), scientifically optimized.',
      tag: 'Dual Spectrum',
    },
    {
      icon: CircleDot,
      text: 'Zero-EMF and zero-flicker for a calm, premium experience.',
      tag: 'Zero-EMF',
    },
    {
      icon: VolumeX,
      text: 'Quiet, low-maintenance operation.',
      tag: 'Silent Drive',
    },
  ];

  return (
    <section
      id="device-section"
      className="relative w-full py-16 sm:py-24 text-white min-h-[140vh] flex flex-col justify-between"
    >
      {/* 1. Header Text sitting ABOVE the card (Normal Page Copy) */}
      <motion.div
        style={{
          opacity: headerOpacity,
          y: headerY,
        }}
        className="max-w-3xl mx-auto px-6 text-center mb-8 sm:mb-12 pt-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff443a]/15 border border-[#ff443a]/40 text-[#ff8b85] text-xs font-mono font-medium mb-3 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#ff443a]" />
          <span>HARDWARE ARCHITECTURE</span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-3 drop-shadow-md">
          The Device
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 font-light tracking-wide max-w-xl mx-auto">
          Premium full-body PBM hardware built for continuous professional use.
        </p>
      </motion.div>

      {/* 2. Visual Pocket for the sticky masked card to sit in the viewport */}
      <div className="w-full h-[74vh] max-h-[740px] pointer-events-none" />

      {/* 3. Features Grid sitting BELOW the card (Normal Page Copy) */}
      <motion.div
        style={{
          opacity: featuresOpacity,
          y: featuresY,
        }}
        className="max-w-6xl mx-auto px-6 w-full mt-10 sm:mt-14"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((col, idx) => {
            const Icon = col.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-3xl bg-[#160a0c]/80 backdrop-blur-xl border border-white/10 hover:border-[#ff443a]/40 transition-all duration-300 flex flex-col justify-between shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#ff443a]/25 to-white/5 border border-white/10 flex items-center justify-center text-[#ff8b85] group-hover:scale-110 transition-transform">
                    <Icon className="w-4.5 h-4.5 text-white" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider font-mono text-[#ff8b85] font-semibold block mb-1">
                    {col.tag}
                  </span>
                  <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-light tracking-wide">
                    {col.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}




