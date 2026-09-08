"use client";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules'; // Optional: for smoother slide changes

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

// A lightweight, reliable typewriter component for React
function Typewriter({ text, speed = 40, delay = 0 }: { text: string; speed?: number; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("");

  useState(() => {
    let isMounted = true;
    setDisplayedText(""); // Clear previous text instantly on index change
    
    const timeoutId = setTimeout(() => {
      let currentIdx = 0;
      const intervalId = setInterval(() => {
        if (!isMounted) return;
        if (currentIdx < text.length) {
          setDisplayedText((prev) => prev + text.charAt(currentIdx));
          currentIdx++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, delay);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  });

  return <span>{displayedText}</span>;
}

export default function HeroSection() {
  // Track the active slide index to force re-render the typewriter strings
  const [activeIndex, setActiveIndex] = useState(0);

  // Mock data filled out to show how it displays nicely
  const slides = [
    {
      src: "https://res.cloudinary.com/wapbiprz/image/upload/v1788863225/president_nmk4gq.jpg",
      name: "Zikora Fortune Nwafor",
      role: "Prresident",
      bio: "Paassionate about building active student communities.",
    },
    {
      src: "https://res.cloudinary.com/wapbiprz/image/upload/v1788863426/vp_fagxgq.jpg",
      name: "Abdullah Ali Ahmad",
      role: "Viice President",
      bio: "Addvocating for student welfare and academic excellence.",
    },
    {
      src: "https://res.cloudinary.com/wapbiprz/image/upload/v1788863354/sg_dckzis.jpg",
      name: "Sheila Jato",
      role: "Seecretary General",
      bio: "Keeeping the engines running smoothly.",
    },
    {
      src: "https://res.cloudinary.com/wapbiprz/image/upload/v1788863325/fc_dbh7eo.jpg",
      name: "Amira Ibrahim",
      role: "Fiinancial Secretary",
      bio: "Maaking the important financial decisions."      
    },
    {
      src: "https://res.cloudinary.com/wapbiprz/image/upload/v1788863226/pro_lpeoyg.jpg",
      name: "Elvis Francis",
      role: "Puublic Relations Officer",
      bio: "Appplying creativity to communication."
    },
    {
      src: "https://res.cloudinary.com/wapbiprz/image/upload/v1788863325/dtd_xyfpy5.jpg",
      name: "Ivoke Kamsi",
      role: "Diirector of Training & Development (DTD)",
      bio: "Drriving technical growth and leading coding workshops for Nile computing students"
    },
    {
      src: "https://res.cloudinary.com/wapbiprz/image/upload/v1788863229/provost_zundzb.jpg",
      name: "Zubaida Abdulazeez",
      role: "Prrovost",
      bio: "Maanaging the day-to-day operations of NACOS Nile."
    },
    {
      src: "https://res.cloudinary.com/wapbiprz/image/upload/v1788863394/socials_yjggw8.jpg",
      name: "Saidat Ahmed",
      role: "Diirector of Socials",
      bio: "Prrioritizing social activities and events."
    },
    {
      src: "https://res.cloudinary.com/wapbiprz/image/upload/v1788863443/welfare_tfs2tw.jpg",
      name: "	Danielle Ekunwe",
      role: "Diirector of Welfare",
      bio: "Yoour well-being is my priority."
    }
  ];

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-b from-[#274193] to-[#1a2d66] text-white overflow-hidden px-6 py-12 md:py-20 mt-4">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Left Column: Copy & CTAs */}
        <div className="space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium tracking-wide backdrop-blur-sm font-bold ">
            Nile University Faculty of Computing
          </div>
          
          <h1 className="text-xl sm:text-5xl md:text-4xl font-extrabold tracking-tight leading-[1.1]">
            Welcome Students to  <span className="text-cyan-400 text-2xl">Nile University Faculty of Computing Community</span>
          </h1>
          
          <p className="text-lg text-slate-200 font-light leading-relaxed">
            Join us in fostering a vibrant community of students, where collaboration, innovation, and growth thrive. Explore events, connect with peers, and be part of a journey that shapes the future of computing at NACOS.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a 
              href="#" 
              className="w-full sm:w-auto text-center bg-white text-[#274193] font-semibold hover:bg-slate-100 rounded-lg px-8 py-3.5 shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5"
            >
              Join Community
            </a>
            <a 
              href="#" 
              className="w-full sm:w-auto text-center border border-white/30 hover:border-white font-medium bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg px-8 py-3.5 transition-all hover:-translate-y-0.5"
            >
              Explore Events
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Swiper Card */}
        <div className="relative flex justify-center items-center w-full max-w-lg lg:max-w-none mx-auto">
          <div className="relative border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-4 w-full aspect-[4/3] shadow-2xl shadow-black/40 flex flex-col justify-between border-t-white/20 overflow-hidden">
            
            <Swiper 
              modules={[EffectFade, Autoplay]}
              effect={'fade'}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className='w-full h-full rounded-xl overflow-hidden'
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative w-full h-full">
                  {slide.src && (
                    <img 
                      src={slide.src} 
                      alt={slide.name} 
                      className="w-full h-full object-cover brightness-[0.65]" 
                    />
                  )}
                  
                  {/* Text Overlay container */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent p-6 flex flex-col justify-end min-h-[50%]">
                    {/* Only type the text if this specific slide is active */}
                    {activeIndex === index ? (
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white min-h-[28px]">
                          <Typewriter text={slide.name} speed={50} />
                        </h3>
                        <p className="text-sm font-medium text-cyan-300 min-h-[20px]">
                          <Typewriter text={slide.role} speed={40} delay={400} />
                        </p>
                        <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed pt-1 min-h-[40px]">
                          <Typewriter text={slide.bio} speed={20} delay={900} />
                        </p>
                      </div>
                    ) : (
                      // Fallback placeholders to avoid structural jumps
                      <div className="space-y-1 opacity-0">
                        <h3 className="text-xl font-bold">{slide.name}</h3>
                        <p className="text-sm">{slide.role}</p>
                        <p className="text-xs sm:text-sm">{slide.bio}</p>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>

      </div>
    </section>
  );
}
