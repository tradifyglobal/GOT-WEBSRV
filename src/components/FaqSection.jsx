import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FAQ_ITEMS } from '../data/commercialData';
import { DiaTextReveal } from './ui/dia-text-reveal';

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  const categories = ['All'];

  const filteredFaqs =
    activeCategory === 'All'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-anim-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        opacity: 0,
        y: 25,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#fcf9f2] text-[#2c2416] py-24 sm:py-32 "
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <p className="text-xs uppercase tracking-widest text-[#808080] font-bold mb-2">
            Questions & Answers
          </p> */}
          <h2 className="text-3xl sm:text-5xl font-sans font-medium tracking-tight text-[#2c2416]">
            <DiaTextReveal
              className="text-7xl font-sans font-medium tracking-tight"
              colors={["#22d3ee", "#818cf8", "#f472b6", "#34d399"]}
              text="We're here to answer all your questions"
            />
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#2c2416] text-white shadow-sm'
                  : 'bg-white border border-[#e8dfcf] text-[#5c4929] hover:bg-[#f2ece2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="faq-anim-item rounded-2xl bg-white border border-[#e8dfcf] overflow-hidden shadow-xs hover:border-[#b08c4f] transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#2c2416] pr-4">
                    {faq.question}
                  </span>

                  <div
                    className={`w-7 h-7 rounded-full bg-[#faf8f5] border border-[#e8dfcf] flex items-center justify-center text-[#2c2416] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#2c2416] text-white' : ''
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 18 21" fill="none">
                      <path
                        d="M9 1.5L9 19.5M9 19.5L1 11.85M9 19.5L17 11.85"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {/* Expandable Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 px-5 sm:px-6 pb-6' : 'grid-rows-[0fr] opacity-0 px-5 sm:px-6 pb-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="text-xs sm:text-sm text-[#5c4929] leading-relaxed font-light pt-3 border-t border-[#f0f0f0] whitespace-pre-line space-y-3">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
