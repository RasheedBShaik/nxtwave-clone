"use client";

import { useEffect, useRef, useState } from 'react';
// ... (keep your existing imports)
import Achievements from '@/components/Achievements';
import ChatWithUs from "@/components/ChatWithUs";
import Companies from '@/components/Companies';
import Curriculum from '@/components/Curriculum';
import Experiences from '@/components/Experiences';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';
import GetCertified from '@/components/GetCertified';
import GetReadyForYourIT from '@/components/getReadyForYourIT/GetReadyForYourIT';
import GetYourDoubtsClarified from '@/components/GetYourDoubtsClarified';
import Header from '@/components/Header';
import Hero from '@/components/Hero/Hero';
import Media from '@/components/Media';
import Prefer from '@/components/Prefer';
import SeniorsGotPlaced from '@/components/seniorsGotPlaced/SeniorsGotPlaced';
import Trainers from '@/components/Trainers';
import TrustedBy from '@/components/TrustedBy';
import Upgrades from '@/components/Upgrades';
import WhyJoin from '@/components/WhyJoin';

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const triggerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // showChat is true once the user reaches the section after Hero
        setShowChat(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* Pass the visibility state */}
        <ChatWithUs show={showChat} />
        
        {/* We attach the ref here: the section immediately after Hero */}
        <div ref={triggerRef}>
          <Upgrades />
        </div>

        <Trainers />
        <SeniorsGotPlaced />
        <GetReadyForYourIT />
        <GetYourDoubtsClarified />
        <TrustedBy />
        <Companies />
        <Prefer />
        {/* from here have pending */}
        <GetCertified />
        <WhyJoin />
        <Achievements />
        <Curriculum />
        <FAQs />
        <Experiences />
        <Media />
      </main>
      <Footer />
    </div>
  );
}