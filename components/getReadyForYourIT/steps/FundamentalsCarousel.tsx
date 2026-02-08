"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 450px;
  margin: 40px auto;
  position: relative;
  overflow: hidden; // Keeps the clones hidden
`;

const SliderWrapper = styled(motion.div)`
  display: flex;
  width: 100%;
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: #f1f5f9;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
`;

const Dot = styled.div<{ $active: boolean }>`
  cursor: pointer;
  width: ${(props) => (props.$active ? "24px" : "8px")};
  height: ${(props) => (props.$active ? "6px" : "8px")};
  background-color: ${(props) => (props.$active ? "#64748b" : "#cbd5e1")};
  border-radius: 999px;
  transition: all 0.3s ease;
`;

const FundamentalsCarousel = () => {
  const [index, setIndex] = useState(0);

  const images = [
    { avif: "/fundamentals/website-chat-project-status.avif", fallback: "/fundamentals/website-chat-project-status.jpg", alt: "Chat Project status" },
    { avif: "/fundamentals/certifications.avif", fallback: "/fundamentals/certifications.jpg", alt: "Certifications" },
    { avif: "/fundamentals/food-munch-project-status.avif", fallback: "/fundamentals/food-munch-project-status.jpg", alt: "Food munch project status" },
  ];

  // We add the first image to the end to create a seamless loop
  const slides = [...images, images[0]];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Handle the "jump" back to the start without animation
  useEffect(() => {
    if (index === slides.length - 1) {
      const timeout = setTimeout(() => {
        setIndex(0);
      }, 700); // Matches the duration of the transition
      return () => clearTimeout(timeout);
    }
  }, [index, slides.length]);

  // Calculate which dot is active based on the index
  const activeDot = index % images.length;

  return (
    <Container>
      <SliderWrapper
        initial={false}
        animate={{ x: `-${index * 100}%` }}
        transition={
          index === 0 
            ? { duration: 0 } // No animation when resetting to start
            : { type: "tween", ease: "easeInOut", duration: 0.7 }
        }
      >
        {slides.map((img, i) => (
          <Slide key={i}>
            <picture>
              <source srcSet={img.avif} type="image/avif" />
              <img src={img.fallback} alt={img.alt} />
            </picture>
          </Slide>
        ))}
      </SliderWrapper>

      <DotContainer>
        {images.map((_, i) => (
          <Dot 
            key={i} 
            $active={activeDot === i} 
            onClick={() => setIndex(i)} 
          />
        ))}
      </DotContainer>
    </Container>
  );
};

export default FundamentalsCarousel;