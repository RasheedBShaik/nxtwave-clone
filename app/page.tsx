"use client";

import Achievements from "@/components/Achievements";
import ChatWithUs from "@/components/ChatWithUs";
import Companies from "@/components/Companies";
import Curriculum from "@/components/Curriculum";
import Experiences from "@/components/Experiences";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import GetCertified from "@/components/GetCertified";
import GetReadyForIT from "@/components/GetReadyForIT";
import GetYourDoubtsClarified from "@/components/GetYourDoubtsClarified";
import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import Media from "@/components/Media";
import Prefer from "@/components/Prefer";
import SeniorsGotPlaced from "@/components/SeniorsGotPlaced";
import Trainers from "@/components/Trainers";
import TrustedBy from "@/components/TrustedBy";
import Upgrades from "@/components/Upgrades";
import WhyJoin from "@/components/WhyJoin";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero/>
        <Upgrades />
        <Trainers />
        <SeniorsGotPlaced/>
        <GetReadyForIT/>
        <GetYourDoubtsClarified/>
        <TrustedBy/>
        <Companies />
        <Prefer />
        <GetCertified/>
        <WhyJoin />
        <Achievements />
        <Curriculum />
        <FAQs />
        <Experiences />
        <Media />
        <ChatWithUs />
      </main>
      <Footer />
    </div>
  );
}
