import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0B0F19] text-white selection:bg-cyan-500 selection:text-white font-sans">
      
      {/* --- BACKGROUND EFFECTS (Reference Vibe) --- */}
      {/* Tech Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px] animate-float" />

      {/* --- NAVBAR --- */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-sm border-b border-white/5">
        {/* Top Left Logo Area */}
        <div className="flex items-center gap-3">
          <img 
            src="/soochna.png" 
            alt="Soochna Logo" 
            className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            onError={(e) => { e.target.style.display = 'none'; }} // Fallback if image missing
          />
          <span className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            SOOCHNA
          </span>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          <Link 
            to="/login" 
            className="rounded-full border border-white/10 px-6 py-2 text-sm font-medium text-slate-300 transition-all hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          >
            Log in
          </Link>
          <Link 
            to="/signup" 
            className="group relative overflow-hidden rounded-full bg-cyan-500 px-6 py-2 text-sm font-medium text-black transition-all hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            <span className="relative z-10">Get Started</span>
          </Link>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-16 text-center md:pt-24 pb-32">
        
        {/* Animated Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1.5 text-sm font-medium text-cyan-300 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
          </span>
          Next Gen Campus Intelligence
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 max-w-5xl text-5xl font-black tracking-tight text-white md:text-7xl drop-shadow-2xl">
          MANAGE YOUR CAMPUS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse-slow">
            IN THE FUTURE
          </span>
        </h1>

        <p className="mb-12 max-w-2xl text-lg text-slate-400 md:text-xl leading-relaxed">
          A unified digital ecosystem for Students, Faculty, and Admin. 
          Experience the power of AI-driven management with real-time analytics.
        </p>

        {/* 3D Cards Container */}
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 px-4 perspective-1000 md:grid-cols-3">
          
          {/* Card 1: Student */}
          <div className="group relative transform transition-all duration-500 hover:-translate-y-4 hover:rotate-1">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur transition duration-500 group-hover:opacity-70 group-hover:blur-md"></div>
            <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#0F1623]/90 p-8 backdrop-blur-xl shadow-2xl">
              <div>
                <div className="mb-4 inline-flex rounded-lg bg-cyan-500/10 p-3 text-cyan-400 ring-1 ring-cyan-500/30 group-hover:bg-cyan-500/20">
                   <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">Student Portal</h3>
                <p className="text-slate-400 text-sm">Access marks, track attendance, and manage project submissions in one futuristic dashboard.</p>
              </div>
            </div>
          </div>

          {/* Card 2: Faculty */}
          <div className="group relative transform transition-all duration-500 hover:-translate-y-4 hover:rotate-y-6">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur transition duration-500 group-hover:opacity-70 group-hover:blur-md"></div>
            <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#0F1623]/90 p-8 backdrop-blur-xl shadow-2xl">
              <div>
                <div className="mb-4 inline-flex rounded-lg bg-purple-500/10 p-3 text-purple-400 ring-1 ring-purple-500/30 group-hover:bg-purple-500/20">
                   <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-purple-300 transition-colors">Faculty Hub</h3>
                <p className="text-slate-400 text-sm">Streamline approvals, manage course content, and generate reports with AI assistance.</p>
              </div>
            </div>
          </div>

          {/* Card 3: Admin */}
          <div className="group relative transform transition-all duration-500 hover:-translate-y-4 hover:-rotate-1">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-20 blur transition duration-500 group-hover:opacity-70 group-hover:blur-md"></div>
            <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#0F1623]/90 p-8 backdrop-blur-xl shadow-2xl">
              <div>
                <div className="mb-4 inline-flex rounded-lg bg-blue-500/10 p-3 text-blue-400 ring-1 ring-blue-500/30 group-hover:bg-blue-500/20">
                   <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-300 transition-colors">Admin Control</h3>
                <p className="text-slate-400 text-sm">Centralized control over users, fee structures, and system-wide logs.</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* --- FOOTER (Requested Feature) --- */}
      <footer className="relative z-50 border-t border-white/10 bg-[#0B0F19]/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* LEFT: Logo + Name (As requested) */}
            <div className="flex items-center gap-3">
              <img 
                src="/soochna.jpeg" 
                alt="Soochna Logo" 
                className="h-12 w-12 object-contain drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-widest text-white">SOOCHNA</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-500">Campus Intelligence</span>
              </div>
            </div>

            {/* RIGHT: Copyright/Links (Standard Footer Elements) */}
            <div className="flex flex-col items-center md:items-end gap-2 text-slate-400 text-sm">
              <div className="flex gap-6">
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
              </div>
              <p>&copy; {new Date().getFullYear()} Soochna System. All rights reserved.</p>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;