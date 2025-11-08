import React from 'react';
import { User, FolderGit2, Info, Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white backdrop-blur">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-900">SI</span>
          <span>SIJA Student</span>
        </a>
        <div className="hidden items-center gap-1 sm:flex">
          <a href="#about" className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10"><Info className="h-4 w-4"/> About</a>
          <a href="#projects" className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10"><FolderGit2 className="h-4 w-4"/> Projects</a>
          <a href="#contact" className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10"><Mail className="h-4 w-4"/> Contact</a>
        </div>
        <a href="#about" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow">
          <User className="h-4 w-4"/> About Me
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
