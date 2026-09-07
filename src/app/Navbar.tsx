import { useEffect, useState } from "react";
       
export default function NavBar() {

       const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkStyles = "text-center text-white relative py-2 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="fixed top-0 left-0 w-full h-16 flex justify-center items-center z-50 transition-all duration-300 px-4 ${
      isScrolled 
        ? 'bg-[#274193] shadow-md backdrop-blur-none border-none' 
        : 'bg-transparent backdrop-blur-sm border-b border-white/10'
    }`}"
    >

      <div className="flex justify-center items-center gap-10 md:gap-16">
        {/* Left Side Links */}
        <a href="#" className={linkStyles}>Excos</a>
        <a href="#" className={linkStyles}>Community</a>
        <a href="#" className={linkStyles}>Events</a>

        {/* Center Logo */}
        <img 
          src="https://res.cloudinary.com/wapbiprz/image/upload/v1788813676/logo_bnf9yi.svg"
          alt="Logo"
          className="h-12 w-12 cursor-pointer object-contain"
        />

        {/* Right Side Links */}
        <a href="#" className={linkStyles}>About</a>
        <a href="#" className={linkStyles}>Contact</a>

        {/* Call to Action Button */}
        <a 
          href="#" 
          className="text-center text-white font-medium border border-white/40 hover:border-white rounded-md px-4 py-1.5 transition-colors"
        >
          Join Community
        </a>
      </div>
    </nav>
  );
}
