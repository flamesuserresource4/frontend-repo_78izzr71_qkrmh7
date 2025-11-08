import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/70" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-32 md:pt-40">
        <span className="mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
          SIJA • Information Systems, Networks & Applications
        </span>
        <h1 className="text-center text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">a High School Student</span>
          <br className="hidden sm:block" />
          passionate about building modern tech
        </h1>
        <p className="mt-6 max-w-2xl text-center text-base text-white/80 md:text-lg">
          I major in SIJA where I explore networks, backend fundamentals, and interactive web apps. I love turning ideas into
          polished, playful experiences.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <Rocket className="h-4 w-4" /> Explore Projects
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-200 backdrop-blur transition hover:bg-emerald-400/20 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
    </section>
  );
};

export default Hero;
