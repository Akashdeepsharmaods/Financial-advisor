'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProofBar from '@/components/SocialProofBar';
import CoreServices from '@/components/CoreServices';
import WealthCalculator from '@/components/WealthCalculator';
import ProcessTimeline from '@/components/ProcessTimeline';
import TrackRecord from '@/components/TrackRecord';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import BookingSuite from '@/components/BookingSuite';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';
import NdaModal from '@/components/NdaModal';

export default function Home() {
  const [ndaOpen, setNdaOpen] = useState(false);
  const [selectedObjective, setSelectedObjective] = useState<string>('HNW Portfolio Optimization & Alpha');

  const handleSelectService = (objective: string) => {
    setSelectedObjective(objective);
    const consultation = document.getElementById('consultation');
    if (consultation) {
      consultation.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAcceptNda = () => {
    setNdaOpen(false);
    const consultation = document.getElementById('consultation');
    if (consultation) {
      consultation.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar onOpenNda={() => setNdaOpen(true)} />
      
      <main className="min-h-screen">
        <Hero />
        <SocialProofBar />
        <CoreServices onSelectService={handleSelectService} />
        <WealthCalculator />
        <ProcessTimeline />
        <TrackRecord onOpenNda={() => setNdaOpen(true)} />
        <CaseStudies />
        <Testimonials />
        <BookingSuite initialObjective={selectedObjective} />
        <FaqSection />
      </main>

      <Footer onOpenNda={() => setNdaOpen(true)} />
      <MobileStickyBar />

      <NdaModal
        isOpen={ndaOpen}
        onClose={() => setNdaOpen(false)}
        onAccept={handleAcceptNda}
      />
    </>
  );
}
