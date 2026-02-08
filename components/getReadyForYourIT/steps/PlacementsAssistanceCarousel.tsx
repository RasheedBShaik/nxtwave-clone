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

const PlacementsAssistanceCarousel = () => {
  const [index, setIndex] = useState(0);

  const images = [
      {
        img: "placementAssistance/placement-dashboard.png",
        alt: "placement dashboard",
      },
    {
      img: "placementAssistance/mock-interview.png",
      alt: "mock interview",
    },
  ];

  // Add first image again for seamless loop
  const slides = [...images, images[0]];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (index === slides.length - 1) {
      const timeout = setTimeout(() => {
        setIndex(0);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [index, slides.length]);

  const activeDot = index % images.length;

  return (
    <Container>
      <SliderWrapper
        initial={false}
        animate={{ x: `-${index * 100}%` }}
        transition={
          index === 0
            ? { duration: 0 }
            : { type: "tween", ease: "easeInOut", duration: 0.7 }
        }
      >
        {slides.map((img, i) => (
          <Slide key={i}>
            <img src={img.img} alt={img.alt} />
          </Slide>
        ))}
      </SliderWrapper>

      <DotContainer>
        {images.map((_, i) => (
          <Dot key={i} $active={activeDot === i} onClick={() => setIndex(i)} />
        ))}
      </DotContainer>
    </Container>
  );
};

export default PlacementsAssistanceCarousel
