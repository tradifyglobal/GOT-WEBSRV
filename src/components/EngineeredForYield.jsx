import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function EngineeredForYield({ onOpenModal }) {
  const [calcMode, setCalcMode] = useState('week'); // 'week' | 'day'
  const [sessionsCount, setSessionsCount] = useState(25); // sessions per period
  const sectionRef = useRef(null);

  // Total investment to recover: 24,999 EUR
  // Average net revenue per session: ~45 EUR (between 30 - 60 EUR)
  // Target sessions = ~400 sessions
  const totalBreakevenSessions = 400;

  const calculatedTime =
    calcMode === 'week'
      ? Math.max(1, Math.round(totalBreakevenSessions / sessionsCount))
      : Math.max(1, Math.round(totalBreakevenSessions / sessionsCount));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.yield-card-anim', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleModeChange = (mode) => {
    setCalcMode(mode);
    if (mode === 'week') {
      setSessionsCount(25);
    } else {
      setSessionsCount(5);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#faf8f5] text-[#2c2416] py-24 sm:py-32 border-t border-[#e8dfcf] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#808080] font-bold mb-2">
            Luminous Labs
          </p>
          <h2 data-grad className="text-4xl sm:text-6xl font-medium tracking-tight">
            Engineered for Yield
          </h2>
        </div>

        {/* Main ROI Logic & Pricing Card */}
        <div className="yield-card-anim bg-white rounded-3xl p-8 sm:p-12 border border-[#e8dfcf] shadow-xl mb-12">
          {/* Top 4 Operational Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 border-b border-[#f0f0f0] mb-10">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#faf8f5] border border-[#f0f0f0]">
              <img
                src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a58c4466aab72c25e1d2ffd_rgm-icn__01.svg"
                alt=""
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-xs font-semibold text-[#2c2416]">No expert staff needed</span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#faf8f5] border border-[#f0f0f0]">
              <img
                src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a58c3e3bf5c2c0490107a8d_rgm-icn__04.svg"
                alt=""
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-xs font-semibold text-[#2c2416]">Full self-service UX</span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#faf8f5] border border-[#f0f0f0]">
              <img
                src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a58c3e3b59b9cd153c8b6fb_rgm-icn__03.svg"
                alt=""
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-xs font-semibold text-[#2c2416]">Custom protocols</span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#faf8f5] border border-[#f0f0f0]">
              <img
                src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a58c4546d386973d54d4ea0_rgm-icn__02.svg"
                alt=""
                className="w-6 h-6 flex-shrink-0"
              />
              <span className="text-xs font-semibold text-[#2c2416]">Touch-less technology</span>
            </div>
          </div>

          {/* Interactive Calculator Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            {/* Left: Breakeven Parameters */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b08c4f] block mb-1">
                  Financial Model
                </span>
                <h3 className="text-2xl font-bold text-[#2c2416]">
                  Breakeven Logic Model
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8dfcf]">
                  <div className="text-xl font-bold text-[#2c2416]">€30–60</div>
                  <div className="text-xs text-[#808080]">Revenue per session</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8dfcf]">
                  <div className="text-xl font-bold text-[#2c2416]">10–15 min</div>
                  <div className="text-xs text-[#808080]">Session duration</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#f2ece2] border border-[#e8dfcf] text-xs text-[#5c4929]">
                <span className="font-bold text-[#2c2416]">Capital Recovery: </span>
                ~400 sessions until complete equipment breakeven.
              </div>
            </div>

            {/* Right: Dynamic Interactive Simulation */}
            <div className="lg:col-span-6 bg-[#2c2416] text-white p-6 sm:p-8 rounded-3xl border border-[#443722] shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                  Payback Horizon
                </span>
                {/* Mode Switcher */}
                <div className="inline-flex bg-black/40 p-1 rounded-full border border-white/10 text-xs">
                  <button
                    onClick={() => handleModeChange('week')}
                    className={`px-3 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                      calcMode === 'week' ? 'bg-[#ff443a] text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Week
                  </button>
                  <button
                    onClick={() => handleModeChange('day')}
                    className={`px-3 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                      calcMode === 'day' ? 'bg-[#ff443a] text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Day
                  </button>
                </div>
              </div>

              {/* Big Weeks/Days Output */}
              <div className="flex items-baseline gap-3 mb-6">
                <div className="text-5xl sm:text-6xl font-bold tracking-tight text-[#ff8b85]">
                  {calculatedTime}
                </div>
                <div className="text-xl sm:text-2xl text-white/70 font-light capitalize">
                  {calcMode === 'week' ? 'Weeks' : 'Days'}
                </div>
              </div>

              {/* Interactive Sessions Slider */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs text-white/80">
                  <span>Throughput Target:</span>
                  <span className="font-mono font-bold text-[#ff8b85]">
                    {sessionsCount} sessions / {calcMode}
                  </span>
                </div>
                <input
                  type="range"
                  min={calcMode === 'week' ? 5 : 1}
                  max={calcMode === 'week' ? 80 : 20}
                  value={sessionsCount}
                  onChange={(e) => setSessionsCount(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#ff443a]"
                />
                <div className="flex justify-between text-[10px] text-white/40 font-mono">
                  <span>Min ({calcMode === 'week' ? '5/wk' : '1/day'})</span>
                  <span>Max ({calcMode === 'week' ? '80/wk' : '20/day'})</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Service Fee Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-[#f0f0f0]">
            <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e8dfcf] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#808080] tracking-wider block mb-1">
                  Starting Price
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#2c2416]">
                  24.999€
                </div>
                <p className="text-xs text-[#808080] mt-1">Commercial-ready base setup</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-[#b08c4f] bg-[#f2ece2] px-2.5 py-1 rounded-full">
                  Purchase or Lease
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e8dfcf] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#808080] tracking-wider block mb-1">
                  Service Fee
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#2c2416]">
                  49€<span className="text-sm font-normal text-[#808080]"> / month</span>
                </div>
                <p className="text-xs text-[#808080] mt-1">IoT-Connectivity fee of net</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-[#22c55e] bg-[#22c55e]/15 px-2.5 py-1 rounded-full">
                  Updates Included
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto rgm-btn rgm-btn-dark px-8 py-3.5 text-base font-semibold shadow-xl cursor-pointer group"
          >
            <span className="rgm-btn__bg" />
            <div className="relative z-10 flex items-center justify-center gap-3">
              <span>Book a partner call</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>

          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-[#2c2416] bg-white border border-[#e8dfcf] rounded-full hover:bg-[#f2ece2] shadow-sm transition-all cursor-pointer"
          >
            Request personalized ROI offer
          </button>
        </div>
      </div>
    </section>
  );
}
