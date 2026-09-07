
export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-b from-[#274193] to-[#1a2d66] text-white overflow-hidden px-6 py-12 md:py-20">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        
        {/* Left Column: Copy & CTAs */}
        <div className="space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium tracking-wide backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Nile University Computing Guild
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Shaping the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">Tech Leaders</span>
          </h1>
          
          <p className="text-lg text-slate-200 font-light leading-relaxed">
            Welcome to the Nile University Computing Community. Build real-world projects, master cutting-edge technologies, and collaborate with a network of driven builders, developers, and innovators.
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
              className="w-full sm:w-auto text-center border border-white/30 hover:border-white font-medium bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-lg px-8 py-3.5 transition-all"
            >
              Explore Programs
            </a>
          </div>
        </div>

        {/* Right Column: Interactive/Animated Tech Graphic */}
        <div className="relative flex justify-center items-center w-full max-w-lg lg:max-w-none mx-auto">
          {/* Animated Glow Rings */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-[80px] animate-pulse"></div>
          <div className="absolute w-60 h-60 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-[60px] animate-ping [animation-duration:4s]"></div>

          {/* Abstract Floating UI Wireframe */}
          <div className="relative border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-6 w-full aspect-[4/3] shadow-2xl shadow-black/40 flex flex-col justify-between border-t-white/20">
            
            {/* Top row fake window controls */}
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/70"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400/70"></span>
              <span className="w-3 h-3 rounded-full bg-green-400/70"></span>
            </div>

            {/* Fake Code / Node Grid Graphics */}
            <div className="flex-1 my-6 flex flex-col justify-center space-y-3 font-mono text-xs sm:text-sm text-cyan-300/80">
              <div className="flex items-center gap-2"><span className="text-purple-400">const</span> community = <span className="text-yellow-300">new Community()</span>;</div>
              <div className="pl-4 flex items-center gap-2">community.<span className="text-emerald-400">empower</span>(<span className="text-orange-300">'Nile_Students'</span>);</div>
              <div className="pl-4 text-slate-400">// Connecting network nodes...</div>
              
              <div className="mt-4 grid grid-cols-3 gap-2 pt-2">
                <div className="h-16 border border-white/10 bg-white/5 rounded-lg flex flex-col justify-center items-center">
                  <span className="text-xl">💻</span>
                  <span className="text-[10px] text-slate-300 font-sans mt-1">Code</span>
                </div>
                <div className="h-16 border border-white/10 bg-white/5 rounded-lg flex flex-col justify-center items-center">
                  <span className="text-xl">🛡️</span>
                  <span className="text-[10px] text-slate-300 font-sans mt-1">Cyber</span>
                </div>
                <div className="h-16 border border-white/10 bg-white/5 rounded-lg flex flex-col justify-center items-center">
                  <span className="text-xl">📊</span>
                  <span className="text-[10px] text-slate-300 font-sans mt-1">Data</span>
                </div>
              </div>
            </div>

            {/* Bottom status bar */}
            <div className="flex justify-between items-center text-[11px] text-slate-400 border-t border-white/10 pt-3">
              <span>Status: Online & Building</span>
              <span className="text-emerald-400 font-semibold animate-pulse">● System Stable</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
