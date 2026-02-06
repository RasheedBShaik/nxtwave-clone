"use client";

import Achievements from "@/components/Achievements";
import ChatWithUs from "@/components/ChatWithUs";
import Companies from "@/components/Companies";
import Curriculum from "@/components/Curriculum";
import Experiences from "@/components/Experiences";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import GetCertified from "@/components/GetCertified";
import Header from "@/components/Header";
import Hero from "@/components/Hero/Hero";
import Media from "@/components/Media";
import Prefer from "@/components/Prefer";
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
        <TrustedBy />
        <Companies />
        <Prefer />
        <GetCertified />
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
