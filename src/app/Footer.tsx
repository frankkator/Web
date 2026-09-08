import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const linkStyles = "text-slate-300 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 lg:hover:after:w-full";

  return (
    <footer className="bg-[#274193] text-white border-t border-white/10 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start mb-12">
        
        {/* Column 1: Chapter Details & Logo */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/wapbiprz/image/upload/v1788813676/logo_bnf9yi.svg"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-lg tracking-wide uppercase">Computing Community</span>
          </div>
          <p className="text-sm text-slate-300 font-light leading-relaxed max-w-sm">
            Nile University of Nigeria,<br />
            Plot 681, Cadastral Zone C-OO,<br />
            Research & Institution Area, Jabi,<br />
            Abuja, FCT, Nigeria.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col space-y-4 md:items-center">
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase text-sm mb-3 md:text-center">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-sm md:items-center">
              <a href="#" className={linkStyles}>Excos</a>
              <a href="#" className={linkStyles}>Community</a>
              <a href="#" className={linkStyles}>Events</a>
              <a href="#" className={linkStyles}>About</a>
              <a href="#" className={linkStyles}>Contact</a>
            </div>
          </div>
        </div>

        {/* Column 3: Community Note or Call Out */}
        <div className="space-y-4 lg:pl-12">
          <h4 className="font-semibold text-white tracking-wider uppercase text-sm">Empowering Innovators</h4>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            Building software, securing systems, and managing data for a brighter tech horizon in Nigeria and across Africa.
          </p>
        </div>

      </div>

      {/* Bottom Bar: Copyright & Credits */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p className="text-center sm:text-left">
          &copy; {currentYear} Nile University Computing Community. All rights reserved.
        </p>
        <p className="text-center sm:text-right font-mono tracking-tight">
          Designed & Developed by the <span className="text-white font-sans font-medium">Computing Guild</span>
        </p>
      </div>
    </footer>
  );
}
