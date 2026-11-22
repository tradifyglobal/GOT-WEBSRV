import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DIRECTORY_LOCATIONS, PARTNER_LOGOS } from '../data/commercialData';
import { DiaTextReveal } from './ui/dia-text-reveal';
import infracture from "../../public/images/infracture-img.webp"

gsap.registerPlugin(ScrollTrigger);

const BG_IMAGE =
  'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a4e0244dffce3c34b8cfd53_rgm-lir-img__02.avif';

const LEFT_COLUMN_CARDS = [
  {
    name: 'NETWORK',
    sessions: '99% Availability',
  },
  {
    type: 'NOC RESPONSE',
    name: '<15 MIN',
    sessions: ' Critical Incident',
    // growth: '4 %',
  },
  {
    type: 'Facilities',
    name: 'Tier III+',
    sessions: 'Data center infrastructure',
    // growth: '12 %',
  },
];

const RIGHT_COLUMN_CARDS = [
  {
    type: 'stat',
    name: '24/7',
    sessions: 'Managed monitoring',
    // growth: '24 %',
  },
  {
    type: 'stat',
    name: 'ACTIVE',
    sessions: 'Cloud Compute',
    // growth: '100 %',
  },
  {
    type: 'stat',
    name: 'ACTIVE',
    sessions: 'Network Security',
    // growth: '50 %',
  },
];

function StatCard({ item }) {
  if (item.type === 'launch') {
    return (
      <div className="bg-transparent backdrop-blur-xl border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[22px] p-4 flex flex-col justify-center min-h-[110px] sm:min-h-[120px] transition-transform hover:scale-[1.02]">
        <p className="text-xs sm:text-sm text-[#1a150e] font-medium leading-snug">
          {item.text}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-transparent backdrop-blur-xl border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-[22px] p-4 flex flex-col justify-between min-h-[110px] sm:min-h-[120px] transition-transform hover:scale-[1.02]">
      <h4 className="font-sans font-medium text-xs sm:text-sm text-[#1a150e] leading-snug">
        {item.name}
      </h4>
      <div className="mt-2">
        <div className="flex items-baseline gap-1">
          <span className="text-base sm:text-lg font-bold text-[#1a150e]">
            {item.sessions}
          </span>
          {/* <span className="text-[11px] text-[#6b6255] font-normal">Sessions</span> */}
        </div>
        <div className="mt-0.5 flex items-center gap-1 text-[11px] font-semibold text-[#52b000]">
          <span>{item.growth}</span>
          <svg
            className="w-3 h-3 inline-block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function LiveOperations({ onOpenModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const sectionRef = useRef(null);

  const filteredLocations = DIRECTORY_LOCATIONS.filter(
    (loc) =>
      loc.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.locName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.address?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stats-card-anim',
        { opacity: 0, y: 35 },
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
      className="bg-[#fcf9f2] text-[#2c2416] py-16 sm:py-24 overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto mb-25">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-tight mb-3 text-[#2c2416]">
            <DiaTextReveal
              className="text-5xl font-medium tracking-tight"
              colors={["#22d3ee", "#818cf8", "#f472b6", "#34d399"]}
              text="Infrastructure that performs in the real world."
            />
          </h2>
          <span className="text-4xl text-zinc-500 font-medium tracking-tight">
            less than 15 Min Critical Incident NOC Response. <br />
            99.995% Network Availability SLA.
          </span>
        </div>
        {/* TOP ROW: Biogena Collaboration & Live Ticker Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
          {/* Top Left: Biogena Showcase Card */}
          <div className="stats-card-anim lg:col-span-7 bg-[#f2ece2]/80 backdrop-blur-sm rounded-[28px] p-6 sm:p-7 border border-[#e5ded0] relative overflow-hidden flex flex-col justify-between shadow-sm h-[330px] sm:h-[350px] md:h-[360px]">
            {/* Soft Floating Coral Blur Overlay */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-[#ff7a59]/30 via-[#ff2a5f]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-4">
                <img
                  src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/69fb389d27529641305d54dc_logo-biogen.svg"
                  alt="Biogena Logo"
                  className="h-6 w-auto opacity-0"
                />
              </div>

              <h3 className="text-[11px] font-semibold text-[#8c8273] uppercase tracking-wider mb-2">
                Cooperation with Biogena Group™
              </h3>

              <p className="text-xs sm:text-[13px] text-[#443c30] leading-relaxed mb-4 font-normal">
                <strong className="text-[#1a150e]">
                 From physical hardware to cloud environments, Geeks on Tap manages the infrastructure layer that keeps your business systems running.
                </strong>
               We provision, configure, secure, monitor, and maintain mission-critical infrastructure across dedicated servers, virtualized environments, enterprise networks, and cloud tenancy.
               Our focus is infrastructure — the hardware, virtualization, networking, security, and systems operations underneath the software your business depends on.
              </p>
            </div>

            {/* <div className="relative z-10 pt-3 border-t border-[#e2d9ca] text-[11px] text-[#8c8273] leading-relaxed">
              Biogena Plazas serve as a high-velocity environment for testing
              programs and experience — while Luminous Labs operates
              independently.
            </div> */}
          </div>

          {/* Top Right: Live Location Ticker Dual Vertical Scrolling Cards */}
          <div className="stats-card-anim lg:col-span-5 rounded-[28px] border border-[#e5ded0] relative overflow-hidden h-[330px] sm:h-[350px] md:h-[360px] shadow-sm">
            {/* Background Image with subtle warm blur */}
            <img
              src={BG_IMAGE}
              alt="Live operations background glow"
              className="absolute inset-0 w-full h-full object-cover filter blur-[6px] scale-110 pointer-events-none"
            />
            <div className="absolute inset-0 bg-[#fcf9f2]/10 backdrop-blur-[2px] pointer-events-none" />

            {/* Top & Bottom Fade Out Gradient Mask */}
            {/* <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-[#fcf9f2]/80 via-transparent to-[#fcf9f2]/80" /> */}

            {/* Dual Column Vertical Marquee */}
            <div className="relative z-10 grid grid-cols-2 gap-3 p-3 sm:p-3.5 h-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]">
              {/* Left Column: Top to Bottom */}
              <div className="overflow-hidden h-full">
                <div className="flex flex-col gap-3 vertical-marquee-down hover:[animation-play-state:paused]">
                  {[
                    ...LEFT_COLUMN_CARDS,
                    ...LEFT_COLUMN_CARDS,
                  ].map((item, idx) => (
                    <StatCard key={`left-${idx}`} item={item} />
                  ))}
                </div>
              </div>

              {/* Right Column: Bottom to Up */}
              <div className="overflow-hidden h-full">
                <div className="flex flex-col gap-3 vertical-marquee-up hover:[animation-play-state:paused]">
                  {[
                    ...RIGHT_COLUMN_CARDS,
                    ...RIGHT_COLUMN_CARDS,
                  ].map((item, idx) => (
                    <StatCard key={`right-${idx}`} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Product Image Card & Vertical Location Directory */}
        <div className=" mb-5">
          {/* Bottom Left: High-Contrast Product Showcase */}
          <div className="stats-card-anim lg:col-span-7 bg-[#ded5c6] rounded-[32px] overflow-hidden border border-[#d6ccbc] relative h-[380px] sm:h-[460px] shadow-sm">
            <img
              src={infracture}
              alt="Redgevity Master at live location"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right: Vertical Searchable Location Directory */}
          {/* <div className="stats-card-anim lg:col-span-5 bg-[#f2ece2]/80 backdrop-blur-sm rounded-[32px] p-6 sm:p-7 border border-[#e5ded0] flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-base font-semibold text-[#1a150e] mb-4">
                Explore Redgevity Master at live locations
              </h3> */}

              {/* Location Rows */}
              {/* <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1 scrollbar-none">
                {filteredLocations.map((loc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#e5ddd0]/50 border border-[#dad1c3] hover:bg-[#ded5c6] transition-colors"
                  >
                    <span className="text-xs font-semibold text-[#2c2416] truncate max-w-[200px]">
                      {loc.name}
                    </span>
                    <span className="text-[11px] text-[#8c8273]">
                      {loc.locName || loc.city}
                    </span>
                  </div>
                ))}

                {filteredLocations.length === 0 && (
                  <div className="text-center py-8 text-xs text-[#8c8273]">
                    No locations match "{searchQuery}"
                  </div>
                )}
              </div>
            </div> */}

            {/* Bottom Search Bar Input */}
            {/* <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-full text-xs bg-[#e5ddd0]/70 border border-[#d3caa] text-[#2c2416] placeholder-[#8c8273] focus:outline-none focus:border-[#a39785]"
              />
              <svg
                className="w-3.5 h-3.5 text-[#8c8273] absolute left-3.5 top-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div> */}
        </div>

        {/* PARTNERS LOGO STRIP & CTA BANNER */}
        <div className="stats-card-anim bg-[#f2ece2] rounded-[32px] sm:rounded-[36px] p-8 sm:p-10 md:p-12 border border-[#e5ded0] relative overflow-hidden shadow-sm">
          {/* Horizontal Logo Marquee */}
          <div className="overflow-hidden w-full mb-10 sm:mb-14 [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]">
            <div className="horizontal-marquee items-center gap-16 sm:gap-24">
              {[
                ...PARTNER_LOGOS,
                ...PARTNER_LOGOS,
                ...PARTNER_LOGOS,
              ].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex items-center justify-center h-12 sm:h-14 "
                >
                  <img
                    src={logo.src || logo.url}
                    alt={logo.name || `Partner logo ${idx}`}
                    className="max-h-9 sm:max-h-11 md:max-h-12 w-auto object-contain brightness-95 contrast-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Row matching reference screenshot */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-1 sm:px-4 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-[#2c2416] tracking-tight">
              Join our partnership network, let&apos;s discuss the opportunities
            </h3>

            <button
              onClick={onOpenModal}
              className="rgm-btn rgm-btn-dark px-7 sm:px-8 py-3.5 text-sm sm:text-base font-semibold shadow-xl cursor-pointer whitespace-nowrap group flex-shrink-0"
            >
              <span className="rgm-btn__bg" />
              <div className="relative z-10 flex items-center gap-3">
                <span>Book a partner call</span>
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
      </div>

      <style>{`
        @keyframes verticalMarqueeUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes verticalMarqueeDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        @keyframes horizontalMarqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .vertical-marquee-up {
          animation: verticalMarqueeUp 22s linear infinite;
        }

        .vertical-marquee-down {
          animation: verticalMarqueeDown 22s linear infinite;
        }

        .horizontal-marquee {
          display: flex;
          width: max-content;
          animation: horizontalMarqueeLeft 45s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .vertical-marquee-up,
          .vertical-marquee-down,
          .horizontal-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}