import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ShieldCheck, Cpu, Sliders } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Overview({ onOpenModal }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.overview-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="overview"
      ref={containerRef}
      className="relative text-white py-24 sm:py-32 overflow-hidden border-t border-white/5"
    >
      {/* Subtle radial aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,68,58,0.08),transparent_70%)] pointer-events-none" />


      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Transition Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#14120e]/30 text-[#14120e] text-xs font-mono font-medium mb-5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#14120e]" />
            <span>EXECUTIVE OVERVIEW</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
          No application development. No unnecessary layers. Just infrastructure engineered for uptime.
          </h2>
        </div>

        {/* Platform Statement with [PBM] tag */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg sm:text-2xl text-white font-normal leading-relaxed">
            <span>Enterprise bare metal, cloud infrastructure, network engineering, </span>
            <span className="inline-flex items-center align-middle mx-1">
              {/* <span className="px-2.5 py-0.5 rounded-full bg-[#ff443a]/25 border border-[#ff443a]/50 text-[#ff8b85] text-xs font-bold uppercase tracking-wider shadow-sm shadow-[#ff443a]/30">
                PBM
              </span> */}
            </span>
            <span>cybersecurity, and 24/7 operations — designed, deployed, and managed by infrastructure specialists. </span>
            {/* <span className="text-zinc-400">
              — built on a patented light blend for efficient, repeatable outcomes. Price on request.
            </span> */}
          </p>
        </div>

        {/* 3 Value Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="overview-card group bg-[#160a0c]/85 p-8 rounded-3xl border border-white/10 hover:border-[#ff443a]/40 backdrop-blur-xl transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-[#ff443a]/15 border border-[#ff443a]/30 flex items-center justify-center mb-6 text-[#ff8b85] group-hover:scale-110 transition-transform">
              <Sliders className="w-5 h-5 text-[#ff8b85]" />
            </div>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              <span className="text-white font-semibold block mb-1">Guided sessions</span>
              Red / NIR / Combined designed for{' '}
              <span className="text-white font-semibold">repeatable, measurable outcomes</span> across all wellness goals.
            </p>
          </div>

          <div className="overview-card group bg-[#160a0c]/85 p-8 rounded-3xl border border-white/10 hover:border-[#ff443a]/40 backdrop-blur-xl transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-[#ff443a]/15 border border-[#ff443a]/30 flex items-center justify-center mb-6 text-[#ff8b85] group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5 text-[#ff8b85]" />
            </div>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              <span className="text-white font-semibold block mb-1">Self-guided tablet UX</span>
              With clear safety guidance and contactless check-in for{' '}
              <span className="text-white font-semibold">effortless, staff-light operation</span>.
            </p>
          </div>

          <div className="overview-card group bg-[#160a0c]/85 p-8 rounded-3xl border border-white/10 hover:border-[#ff443a]/40 backdrop-blur-xl transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-[#ff443a]/15 border border-[#ff443a]/30 flex items-center justify-center mb-6 text-[#ff8b85] group-hover:scale-110 transition-transform">
              <Cpu className="w-5 h-5 text-[#ff8b85]" />
            </div>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              <span className="text-white font-semibold block mb-1">IoT Telemetry & Support</span>
              Monitoring, OTA updates, new programs and{' '}
              <span className="text-white font-semibold">continuous remote system health checks</span>.
            </p>
          </div>
        </div> */}

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={onOpenModal}
            className="rgm-btn px-8 py-3.5 text-sm sm:text-base font-semibold text-[#0d0706] bg-white hover:text-white border-0 shadow-2xl shadow-[#ff443a]/25 cursor-pointer group"
          >
            <span className="rgm-btn__bg" />
            <div className="relative z-10 flex items-center gap-2.5">
              <span>Book a partner call</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>
        </div>

        {/* Austrian Heritage & Collaboration Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 pt-8 border-t border-white/10">
          <p className="text-xl sm:text-xl text-black-900 leading-relaxed font-light">
           Most technology providers try to do everything.

Websites. Applications. Mobile apps. Marketing. Hosting.

Geeks on Tap takes a different approach.

We focus exclusively on infrastructure.

We build and operate the physical and virtual systems where your business software lives — from dedicated servers and cloud environments to networks, security boundaries, and 24/7 operations.
          </p>

          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15">
            <span className="text-xs uppercase tracking-wider font-semibold text-white/90">Located In Canada</span>
            {/* <img
              src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a0d7af77ba5b0e5f7b19002_aus.avif"
              alt="Austria Flag"
              className="w-4 h-3 object-cover rounded-xs"
              loading="lazy"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}


