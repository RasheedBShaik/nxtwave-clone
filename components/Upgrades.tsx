"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Container from "./Container";

const upgradesData = [
  {
    title: "Live Sessions (Monday-Friday)",
    desc: "To learn coding best practices, get interview tips, discuss doubts and more from experts.",
    img: "upgrades/upgrades-live-streaming.png",
  },
  {
    title: "Dedicated Success Coach for Every Student",
    desc: "To guide you and ensure a smooth learning journey",
    img: "upgrades/upgrades-personal-success-coach.png",
  },
  {
    title: "Placement Success Manager",
    desc: "To give feedback on your interview performance and boost your confidence",
    img: "upgrades/upgrades-placements-success-manager.png",
  },
  {
    title: "Mega Offline Placement Drives",
    desc: "Once in every 3 months",
    img: "upgrades/upgrades-offline-drives.png",
  },
  {
    title: "AI-Powered Mock Interviews",
    desc: "Practice with realistic mock interviews and get tailored feedback immediately",
    img: "upgrades/upgrades-mock-interviews.png",
  },
  {
    title: "Masterclasses by Industry Experts",
    desc: "To keep you updated with the latest trends and industry-aligned",
    img: "upgrades/upgrades-masterclasses.png",
  },
  {
    title: "Mentorship from Successful Seniorss",
    desc: "Alumni from 2000+ companies to make your placement preparation flawless",
    img: "upgrades/upgrades-mentorship.png",
  },
  {
    title: "Effortless Revision with NxtBytes",
    desc: "Where you master key concepts through engaging reels and quizzes",
    img: "upgrades/upgrades-nxt-bytes.png",
  },
];

const Upgrades = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[#f6f9fb]">
    <Container>
      <div className="relative py-12 px-4 lg:px-0 ">
        <label className="border absolute left-10 top-5 xl:top-10 xl:-left-10 w-20 py-1 text-white font-bold rounded-2xl text-center  bg-[#f97316]">NEW</label>
        <h1 className="flex flex-col justify-center items-center gap-2 font-bold text-xl md:text-3xl lg:text-5xl text-center">
          The All New Intensive 3.0 Upgrades to{" "}
          <span className="">Supercharge Your Career</span>

          <svg
            viewBox="0 0 52 6"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full max-w-125 h-3 fill-current text-[#7c3aed] mt-2"
          >
            <path d="M47.2602 1.64763C46.1596 1.49108 45.0581 1.3694 43.9571 1.23222C43.5939 1.18528 43.2279 1.17702 42.8642 1.14945C42.0747 1.08903 41.2852 1.03247 40.4957 0.972053C40.0566 0.938906 39.6158 0.901848 39.1767 0.872573C39.0485 0.865808 38.9222 0.859078 38.7939 0.856185C38.5072 0.849718 38.2202 0.851007 37.9334 0.848413C36.6298 0.819016 35.3242 0.797304 34.0206 0.767907C33.7094 0.760887 33.3996 0.769422 33.0882 0.770147C32.3181 0.772151 31.5497 0.77806 30.7815 0.780106C29.9132 0.783771 29.0471 0.771993 28.1783 0.798891C26.7731 0.836941 25.3698 0.878901 23.9647 0.916951C23.1506 0.94121 22.3389 0.946161 21.5243 0.993655C20.1219 1.07826 18.7215 1.15901 17.3192 1.23974C16.5538 1.28447 15.7867 1.31754 15.0207 1.38938C13.57 1.52326 12.1194 1.65328 10.6687 1.78716C9.89319 1.85878 9.11824 1.90716 8.34361 2.0253C6.89665 2.24449 5.45157 2.46372 4.00461 2.68292C3.69212 2.73011 3.37962 2.77732 3.06713 2.82451C2.44214 2.9189 1.81952 3.07532 1.19563 3.2046C1.15576 3.21532 1.11776 3.22609 1.07797 3.23294C1.00344 3.27388 0.935665 3.34983 0.878424 3.46089C0.793549 3.62557 0.741147 3.85686 0.73582 4.09307C0.730493 4.32928 0.772416 4.5627 0.849693 4.73491C0.91986 4.88759 1.045 5.02988 1.15503 5.00524C1.9079 4.84788 2.65906 4.68272 3.41285 4.56799C4.11168 4.46365 4.8087 4.35539 5.50753 4.25105C6.26887 4.13649 7.03021 4.02192 7.79155 3.90737C8.09839 3.86005 8.40557 3.79725 8.71386 3.76933C9.89975 3.66047 11.0856 3.55548 12.2714 3.45049C13.0109 3.38193 13.7504 3.31726 14.4899 3.24871C14.7944 3.2207 15.101 3.18499 15.4072 3.16478C16.5809 3.09439 17.7563 3.0318 18.9298 2.96916C19.6423 2.93098 20.3529 2.88887 21.0653 2.8507C21.3054 2.83674 21.5436 2.81889 21.7834 2.81267C23.0507 2.77926 24.3178 2.74971 25.585 2.72018C26.2932 2.70128 26.9994 2.68621 27.7077 2.66731C27.9588 2.66135 28.2121 2.6477 28.4631 2.64949C29.7691 2.65182 31.0752 2.65415 32.3813 2.65648C33.1967 2.6555 34.0101 2.65834 34.825 2.68059C36.2114 2.7196 37.5979 2.75474 38.9824 2.79371C39.2559 2.79988 39.5289 2.8293 39.802 2.85483C40.5669 2.91857 41.3299 2.98227 42.0948 3.04601C42.6675 3.09379 43.2402 3.14158 43.8148 3.18941C44.2217 3.22183 44.6259 3.29292 45.0324 3.34858C46.2273 3.50726 47.4221 3.67369 48.6148 3.85168C48.9176 3.89725 49.2203 3.95056 49.523 4.00387C49.8483 4.0577 50.1735 4.1154 50.4963 4.1963C50.5469 4.21293 50.5955 4.23341 50.6459 4.25779C50.773 4.3149 50.896 4.30218 51.0141 4.16924C51.1226 4.04383 51.2067 3.83264 51.2461 3.58945C51.3256 3.07983 51.187 2.53043 50.9412 2.38154C50.7251 2.25269 50.4999 2.19724 50.2764 2.14571C50.1225 2.11125 49.9704 2.07295 49.8164 2.03848C49.5217 1.96984 49.2243 1.93213 48.9292 1.87898C48.3746 1.78124 47.8173 1.71832 47.2604 1.6399L47.2602 1.64763Z" />
          </svg>
        </h1>

        <motion.div
          layout
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden"
        >
          <AnimatePresence>
            {upgradesData.slice(0, open ? upgradesData.length : 4).map((item, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="flex gap-4 p-4 rounded-lg"
              >
                <img
                  className="w-24 h-24 object-cover"
                  src={item.img}
                  alt={item.title}
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <button
          onClick={() => setOpen(!open)}
          className="mt-4 text-blue-500 text-center w-full text-2xl px-4 py-2 rounded"
        >
          {open ? "Hide All Upgrades" : "Show All Upgrades"}
        </button>
      </div>
    </Container>
    </section>
  );
};

export default Upgrades;
