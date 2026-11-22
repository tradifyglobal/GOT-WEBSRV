import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useLenisScroll() {
  useEffect(() => {
    // Initialize Lenis with ultra-smooth momentum physics
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      infinite: false,
      autoRaf: false,
    });

    // Expose lenis instance to window for global scrollTo triggers
    window.lenis = lenis;

    // Wire Lenis with GSAP ScrollTrigger
    const handleScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on('scroll', handleScroll);

    // Sync Lenis RAF with GSAP's high-precision ticker
    const updateLenisTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenisTicker);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after initial mount and layout stabilization
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      lenis.off('scroll', handleScroll);
      gsap.ticker.remove(updateLenisTicker);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);
}

