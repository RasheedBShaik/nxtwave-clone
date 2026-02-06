"use client";

import { useIsMobileScreen } from "@/hooks";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./Container";
import Offer from "./Offer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Curriculum", href: "#" },
    { name: "Job Support", href: "#" },
    { name: "Reviews", href: "#" },
    { name: "Fee", href: "#" },
    { name: "FAQs", href: "#" },
  ];

  const isMobileScreen = useIsMobileScreen();
  return (
    <header className="w-full">
      {/* The Main Nav Bar Container */}
      <div
        className={`relative z-50 transition-colors duration-500 border-b ${
          isOpen && isMobileScreen
            ? "bg-[#183B56] border-[#183B56]"
            : "bg-white border-gray-200"
        }`}
      >
        <Container>
          <nav className="flex items-center py-6 justify-between px-4">
            {/* LOGO: Switches based on isOpen state */}
            <Link href="/" onClick={() => setIsOpen(false)}>
              <img
                src={
                  isOpen && isMobileScreen
                    ? "/header/Nxtwave_White_logo.svg"
                    : "/header/logo.png"
                }
                alt="Nxtwave Logo"
                className="h-13 transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-10 ml-auto text-gray-600 font-medium items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-purple-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                className="flex items-center gap-1 text-purple-600 font-bold group"
                href="#"
              >
                Login
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isOpen ? "text-white rotate-90" : "text-gray-600 rotate-0"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </nav>
        </Container>
      </div>

      {/* Mobile Dropdown Menu (Slides Down from behind the Nav Bar) */}
      <div
        className={`
          absolute left-0 w-full bg-[#183B56] shadow-2xl transition-all duration-500 ease-in-out md:hidden z-40
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `}
      >
        <div className="flex flex-col items-center py-16 gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-semibold hover:text-purple-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 bg-white text-[#183B56] px-10 py-3 rounded-full font-bold text-lg hover:bg-purple-100 transition-all"
          >
            Login
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Offer Banner */}
      <Offer/>
      
    </header>
  );
};

export default Header;
