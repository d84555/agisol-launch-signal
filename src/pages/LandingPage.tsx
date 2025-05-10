
import React from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/landing/HeroSection';
import WaitlistTeaser from '@/components/landing/WaitlistTeaser';
import HowItWorks from '@/components/landing/HowItWorks';
import Footer from '@/components/landing/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <WaitlistTeaser />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
