"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import HeroBhargaviCard from "./hero-cards/HeroBhargavi";
import HeroCompaniesCard from "./hero-cards/HeroCompaniesCard";
import HeroDeviCard from "./hero-cards/HeroDeviCard";
import HeroDoubtsCard from "./hero-cards/HeroDoubtsCard";
import HeroOnlineLabsCard from "./hero-cards/HeroOnlineLabsCard";
import HeroSaiCard from "./hero-cards/HeroSaiCard";
import HeroSuryaCard from "./hero-cards/HeroSuryaCard";

// Import your cards here...

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
  position: relative; /* Container is the anchor */
`;

const CardWindow = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
`;

const Dot = styled.div<{ $active: boolean }>`
  cursor: pointer;
  width: ${(props) => (props.$active ? "24px" : "8px")};
  height: ${(props) => (props.$active ? "6px" : "8px")};
  background-color: ${(props) => (props.$active ? "#64748b" : "#cbd5e1")};
  border-radius: 999px; /* Keeps edges rounded regardless of shape */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Essential to keep circles and pills on the same line */
  gap: 10px;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  z-index: 20;
`;
const Herocardcarousel = () => {
  const [index, setIndex] = useState(0);

  const cards = [
    <HeroCompaniesCard key="1" />,
    <HeroSuryaCard key="2" />,
    <HeroDoubtsCard key="3" />,
    <HeroBhargaviCard key="4" />,
    <HeroOnlineLabsCard key="5" />,
    <HeroDeviCard key="6" />,
    <HeroSaiCard key="7" />,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [cards.length]);

  return (
    <Container className="mt-10">
      <CardWindow>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {cards[index]}
          </motion.div>
        </AnimatePresence>

        {/* Dots are now INSIDE the CardWindow at the bottom */}
        <DotContainer>
          {cards.map((_, i) => (
            <Dot 
              key={i} 
              $active={index === i} 
              onClick={() => setIndex(i)} 
            />
          ))}
        </DotContainer>
      </CardWindow>
    </Container>
  );
};

export default Herocardcarousel;