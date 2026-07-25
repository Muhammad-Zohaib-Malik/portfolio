"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu as MenuIcon, X, Asterisk } from "lucide-react";

import TechStack from "@/components/tech-stack";
import TechnologyEmitter from "@/components/TechnologyEmitter";
import { ProjectsCard } from "@/components/ProjectsCard";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen text-black overflow-x-hidden selection:bg-[#0b6e4f] selection:text-white pb-10">
      
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Right Sidebar Menu */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[85vw] md:w-[50vw] bg-[#053627] text-white/70 shadow-2xl z-[100] flex flex-col px-8 md:px-16 py-8 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="w-full flex justify-between items-center mb-16">
          <div className="font-script text-3xl md:text-4xl select-none text-white">
            Zohaib
          </div>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-white/70 transition-colors p-2 -mr-2"
            aria-label="Close Menu"
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>
        </div>
        
        <nav className="flex flex-col gap-6 md:gap-8 mt-12">
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white hover:text-[#0b6e4f] transition-colors leading-none">WORKS</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)} className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white hover:text-[#0b6e4f] transition-colors leading-none">EXPERIENCE</a>
          <a href="#tech-stack" onClick={() => setIsMenuOpen(false)} className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white hover:text-[#0b6e4f] transition-colors leading-none">STACK</a>
          <a href="#education" onClick={() => setIsMenuOpen(false)} className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white hover:text-[#0b6e4f] transition-colors leading-none">EDUCATION</a>
        </nav>
        
        <div className="w-full flex flex-col justify-end mt-auto pb-4 gap-6">
          <a href="mailto:muhammadzohaibmalik10@gmail.com" className="font-mono text-xs md:text-sm tracking-widest hover:text-white transition-colors lowercase">muhammadzohaibmalik10@gmail.com</a>
          <div className="flex gap-6 font-mono text-xs md:text-sm font-bold uppercase tracking-widest">
            <a href="https://github.com/Muhammad-Zohaib-Malik" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/zohaib-malik-bb7a3131b/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
      
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 md:px-16 py-8 relative z-30">
        <div className="font-script text-4xl md:text-5xl text-black select-none">
          Zohaib
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="text-black hover:text-[#0b6e4f] transition-colors p-2 -mr-2"
          aria-label="Open Menu"
        >
          <MenuIcon className="w-8 h-8 md:w-10 md:h-10" />
        </button>
      </header>

      {/* Hero Section (Split Layout) */}
      <section className="relative w-full min-h-[85vh] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pb-12">
        
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center items-start z-20 mt-12 md:mt-0">
          <p className="font-mono text-sm uppercase tracking-widest text-[#0b6e4f] mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-none mb-6 text-black">
            Hi, I'm <span className="font-script text-[#0b6e4f] font-normal px-2">Zohaib</span>
            <br />
            Backend Developer.
          </h1>
          <p className="font-sans text-lg sm:text-xl text-black/70 mb-10 max-w-2xl leading-relaxed">
            I specialize in building robust APIs, scalable databases, and high-performance server architectures that power modern web applications.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="/zohaib_backend.pdf" target="_blank" rel="noreferrer" className="bg-[#0b6e4f] text-white px-8 py-4 rounded-full font-sans font-bold tracking-widest uppercase hover:bg-black transition-colors text-xs md:text-sm">
              My CV
            </a>
            <div className="flex items-center gap-4 font-mono text-sm font-bold tracking-widest uppercase">
              <a href="https://github.com/Muhammad-Zohaib-Malik" target="_blank" className="hover:text-[#0b6e4f] transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/zohaib-malik-bb7a3131b/" target="_blank" className="hover:text-[#0b6e4f] transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Right: Avatar with Emitter */}
        <div className="flex-1 w-full flex items-center justify-center md:justify-end mt-12 md:mt-0 z-10 relative">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px]">
            <Image
              src="/backend-avatar-fixed.png"
              alt="Zohaib Avatar"
              fill
              className="object-contain mix-blend-darken pointer-events-none relative z-10"
              priority
            />
            {/* The Emitter sits perfectly over the laptop coordinates */}
            <TechnologyEmitter />
          </div>
        </div>
      </section>

      {/* Main Content Flow - Full Width */}
      <div className="w-full flex flex-col space-y-32 py-24">
        
        {/* Tech Stack */}
        <section id="tech-stack" className="w-full px-8 md:px-16 space-y-12">
          <div className="flex flex-col md:flex-row items-baseline gap-4 border-b border-black/10 pb-6">
            <div className="flex items-center gap-3">
              <Asterisk className="w-8 h-8 md:w-10 md:h-10 text-[#0b6e4f] animate-[spin_6s_linear_infinite]" />
              <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tighter text-black uppercase">
                Technology Stack
              </h2>
            </div>
            <span className="font-mono text-sm md:text-base text-black/50 uppercase tracking-widest">/ Tools & Languages</span>
          </div>
          <div className="w-full pt-4">
            <TechStack />
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="w-full px-8 md:px-16 space-y-12">
          <div className="flex flex-col md:flex-row items-baseline gap-4 border-b border-black/10 pb-6">
            <div className="flex items-center gap-3">
              <Asterisk className="w-8 h-8 md:w-10 md:h-10 text-[#0b6e4f] animate-[spin_6s_linear_infinite]" />
              <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tighter text-black uppercase">
                Work Experience
              </h2>
            </div>
            <span className="font-mono text-sm md:text-base text-black/50 uppercase tracking-widest">/ Professional Career</span>
          </div>
          <div className="w-full pt-4">
            <Experience />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="w-full px-8 md:px-16 space-y-12">
          <div className="flex flex-col md:flex-row items-baseline gap-4 border-b border-black/10 pb-6">
            <div className="flex items-center gap-3">
              <Asterisk className="w-8 h-8 md:w-10 md:h-10 text-[#0b6e4f] animate-[spin_6s_linear_infinite]" />
              <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tighter text-black uppercase">
                Selected Works
              </h2>
            </div>
            <span className="font-mono text-sm md:text-base text-black/50 uppercase tracking-widest">/ Featured Projects</span>
          </div>
          <div className="w-full pt-4">
            <ProjectsCard />
          </div>
        </section>

        {/* Education */}
        <section id="education" className="w-full px-8 md:px-16 space-y-12">
          <div className="flex flex-col md:flex-row items-baseline gap-4 border-b border-black/10 pb-6">
            <div className="flex items-center gap-3">
              <Asterisk className="w-8 h-8 md:w-10 md:h-10 text-[#0b6e4f] animate-[spin_6s_linear_infinite]" />
              <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tighter text-black uppercase">
                Education
              </h2>
            </div>
            <span className="font-mono text-sm md:text-base text-black/50 uppercase tracking-widest">/ Academic Background</span>
          </div>
          <div className="w-full pt-4">
            <Education />
          </div>
        </section>
      </div>

      {/* Minimal Footer */}
      <footer className="w-full px-8 md:px-16 pb-12 pt-8 flex flex-col md:flex-row justify-between items-center border-t border-black/10 gap-4">
        <div className="font-script text-3xl text-black">Zohaib</div>
        <p className="font-mono text-xs uppercase tracking-widest text-black/50">
          © {new Date().getFullYear()} Zohaib Malik. All rights reserved.
        </p>
        <div className="flex gap-6 font-mono text-xs font-bold uppercase tracking-widest text-black">
          <a href="https://github.com/Muhammad-Zohaib-Malik" target="_blank" rel="noreferrer" className="hover:text-[#0b6e4f] transition-colors">Github</a>
          <a href="https://www.linkedin.com/in/zohaib-malik-bb7a3131b/" target="_blank" rel="noreferrer" className="hover:text-[#0b6e4f] transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
