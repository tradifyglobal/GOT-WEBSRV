import React from 'react';
import HeroDeviceExperience from '../components/HeroDeviceExperience';
import MoreThanADevice from '../components/MoreThanADevice';
import BuiltForOperators from '../components/BuiltForOperators';
import AdaptedToLocation from '../components/AdaptedToLocation';
import LiveOperations from '../components/LiveOperations';
import OnboardingSteps from '../components/OnboardingSteps';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';

export default function HomePage({ onOpenModal }) {
  return (
    <main className="w-full">
      {/* 1. Unified Hero -> Overview -> DeviceSection Scroll Experience */}
      <HeroDeviceExperience onOpenModal={onOpenModal} />

      {/* 2. More Than a Device (System, Support, Ecosystem) */}
      <MoreThanADevice onOpenModal={onOpenModal} />

      {/* 3. Built for Operators (4-point value grid) */}
      <BuiltForOperators />

      {/* 4. One System, Adapted to Your Location */}
      <AdaptedToLocation onOpenModal={onOpenModal} />

      {/* 5. Live Operations Stats, Telemetry & Partner Network Strip */}
      <LiveOperations onOpenModal={onOpenModal} />

      {/* 6. Step-by-Step Onboarding Process Accordion */}
      <OnboardingSteps onOpenModal={onOpenModal} />

      {/* 7. Operator Testimonials Carousel */}
      {/* <Testimonials /> */}

      {/* 8. FAQ Accordion */}
      <FaqSection />
    </main>
  );
}
