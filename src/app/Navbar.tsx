"use client";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyles = "text-center text-white relative py-2 text-lg lg:text-base after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 lg:hover:after:w-full";

  return (
    <nav 
      className={`fixed top-0 left-0 w-full h-16 flex items-center z-50 transition-all duration-300 px-4 md:px-8 ${
        isScrolled || isOpen
          ? "bg-[#274193] shadow-md border-none" 
          : "bg-transparent backdrop-blur-sm border-b border-white/10"
      }`}
    >
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center">
          <img 
            src="https://res.cloudinary.com/wapbiprz/image/upload/v1788813676/logo_bnf9yi.svg"
            alt="Logo"
            className="h-10 w-10 md:h-12 md:w-12 cursor-pointer object-contain"
          />
        </div>

        {/* Center/Right: Desktop & Tablet Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <a href="#" className={linkStyles}>Excos</a>
          <a href="#" className={linkStyles}>Community</a>
          <a href="#" className={linkStyles}>Events</a>
          <a href="#" className={linkStyles}>About</a>
          <a href="#" className={linkStyles}>Contact</a>
          
          <a 
            href="#" 
            className="text-center text-white font-medium border border-white/40 hover:border-white rounded-md px-4 py-1.5 transition-colors text-sm lg:text-base whitespace-nowrap"
          >
            Join Community
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button (Hidden on Tablet/Desktop) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-2 z-50"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between relative overflow-hidden">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0 translate-x-2" : ""}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Drawer Overlay Panel (Slides down smoothly) */}
      <div 
        className={`absolute top-16 left-0 w-full bg-[#274193] border-t border-white/10 flex flex-col items-center gap-6 py-8 shadow-xl transition-all duration-300 md:hidden z-40 ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <a href="#" onClick={() => setIsOpen(false)} className={linkStyles}>Excos</a>
        <a href="#" onClick={() => setIsOpen(false)} className={linkStyles}>Community</a>
        <a href="#" onClick={() => setIsOpen(false)} className={linkStyles}>Events</a>
        <a href="#" onClick={() => setIsOpen(false)} className={linkStyles}>About</a>
        <a href="#" onClick={() => setIsOpen(false)} className={linkStyles}>Contact</a>
        
        <a 
          href="#" 
          onClick={() => setIsOpen(false)}
          className="w-4/5 text-center text-white font-medium border border-white rounded-md py-2.5 bg-white/10 hover:bg-white/20 transition-all mt-2"
        >
          Join Community
        </a>
      </div>
    </nav>
  );
}
