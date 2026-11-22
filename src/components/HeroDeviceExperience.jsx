import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './Hero';
import Overview from './Overview';
import DeviceSection from './DeviceSection';

const TOTAL_FRAMES = 240;

const getFrameSrc = (index) => {
  const frameNum = Math.min(Math.max(1, index + 1), TOTAL_FRAMES);
  return `/video-frames/ezgif-frame-${String(frameNum).padStart(3, '0')}.jpg`;
};

export default function HeroDeviceExperience({ onOpenModal }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const [initialScale, setInitialScale] = useState(1.6);

  // Compute dynamic initial scale so the fixed card fills 100vw/100vh on any screen size
  useEffect(() => {
    const calculateScale = () => {
      const cardW = Math.min(1240, window.innerWidth * 0.92);
      const cardH = Math.min(760, window.innerHeight * 0.78);
      const scaleX = window.innerWidth / cardW;
      const scaleY = window.innerHeight / cardH;
      // Multiply by 1.02 for full bleed coverage with zero gap
      setInitialScale(Math.max(scaleX, scaleY) * 1.02);
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  // Draw image with object-fit: cover logic onto canvas
  const drawImageCover = useCallback((ctx, img, canvas) => {
    if (!ctx || !img || !img.complete || img.naturalWidth === 0) return;
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const nw = iw * scale;
    const nh = ih * scale;
    const cx = (cw - nw) / 2;
    const cy = (ch - nh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, cx, cy, nw, nh);
  }, []);

  // Find closest loaded frame if requested frame is still downloading
  const findClosestLoadedFrame = useCallback((targetIndex) => {
    const images = imagesRef.current;
    if (images[targetIndex] && images[targetIndex].complete && images[targetIndex].naturalWidth > 0) {
      return images[targetIndex];
    }
    // Search backward first, then forward
    for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
      const prev = targetIndex - offset;
      if (prev >= 0 && images[prev]?.complete && images[prev]?.naturalWidth > 0) {
        return images[prev];
      }
      const next = targetIndex + offset;
      if (next < TOTAL_FRAMES && images[next]?.complete && images[next]?.naturalWidth > 0) {
        return images[next];
      }
    }
    return null;
  }, []);

  // Render a specific frame index
  const renderFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = findClosestLoadedFrame(index);
    if (img) {
      drawImageCover(ctx, img, canvas);
    }
  }, [findClosestLoadedFrame, drawImageCover]);

  // Adjust canvas pixel dimensions for retina clarity
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  // Preload frames progressively
  useEffect(() => {
    const images = new Array(TOTAL_FRAMES);
    imagesRef.current = images;

    // 1. Prioritize loading the initial frame (frame 0)
    const firstImg = new Image();
    firstImg.src = getFrameSrc(0);
    firstImg.onload = () => {
      images[0] = firstImg;
      resizeCanvas();
      renderFrame(0);
      ScrollTrigger.refresh();
    };
    images[0] = firstImg;

    // 2. Preload remaining frames in background
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        images[i] = img;
        if (currentFrameRef.current === i) {
          renderFrame(i);
        }
      };
      images[i] = img;
    }

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [renderFrame, resizeCanvas]);

  // 1. Single unified scroll progress across Hero -> Overview -> DeviceSection
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 2. Frame sequence scrubbing via useMotionValueEvent spanning the full scroll track
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(latest * TOTAL_FRAMES))
    );
    if (frameIndex !== currentFrameRef.current) {
      currentFrameRef.current = frameIndex;
      renderFrame(frameIndex);
    }
  });

  // 3. Numeric transforms only (avoiding string interpolation bugs)
  // Phase 1 (0.0 to 0.65): Full-bleed background for Hero & Overview
  // Phase 2 (0.65 to 0.85): Smoothly shrinks into luxury rounded card
  // Phase 3 (0.85 to 1.0): Settled card as Device copy & features present
  const cardScale = useTransform(
    scrollYProgress,
    [0, 0.65, 0.85, 1],
    [initialScale, initialScale, 1, 1]
  );

  const cardRadius = useTransform(
    scrollYProgress,
    [0, 0.65, 0.85, 1],
    [0, 0, 40, 40]
  );

  const cardBorderAlpha = useTransform(
    scrollYProgress,
    [0, 0.65, 0.85, 1],
    [0, 0, 0.14, 0.14]
  );

  return (
    <section
      ref={containerRef}
      id="hero-device-experience"
      className="relative w-full bg-[#fcf9f2] text-white"
      style={{ height: '560vh' }}
    >
      {/* Persistent Sticky Background Layer holding the SINGLE canvas frame sequence */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pointer-events-none z-0">
        {/* Ambient lighting glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(255,68,58,0.12),transparent_70%)] pointer-events-none" />

        {/* The Transforming Card Wrapper (Numeric scale & borderRadius) */}
        <motion.div
          style={{
            scale: cardScale,
            borderRadius: cardRadius,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: useTransform(
              cardBorderAlpha,
              (a) => `rgba(255, 255, 255, ${a})`
            ),
          }}
          className="relative w-[92vw] max-w-[1240px] h-[78vh] max-h-[760px] overflow-hidden bg-[#160a0c] will-change-transform"
        >
          {/* Hardware-Accelerated 60/120fps Frame Sequence Canvas */}
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover scale-[1.02]"
          />
        </motion.div>
      </div>

      {/* Foreground In-Flow Content Stack (Layered visually above the canvas) */}
      <div className="relative z-10 -mt-[100vh]">
        {/* 1. Hero Content Area */}
        <Hero onOpenModal={onOpenModal} />

        {/* 2. Overview Content Area */}
        <Overview onOpenModal={onOpenModal} />

        {/* 3. Device Section Content Area (Header above card, Features below card) */}
        {/* <DeviceSection scrollYProgress={scrollYProgress} /> */}
      </div>
    </section>
  );
}

