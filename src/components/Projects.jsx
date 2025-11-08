import React from 'react';
import { Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Personal Portfolio',
    desc: 'A responsive portfolio showcasing my skills in web development and networking.',
    tags: ['React', 'Tailwind', 'Spline'],
    live: '#',
    code: '#'
  },
  {
    title: 'Network Lab',
    desc: 'Small experiments setting up LANs, IP addressing, and basic routing.',
    tags: ['Networking', 'Subnetting'],
    live: '#',
    code: '#'
  },
  {
    title: 'UI Components',
    desc: 'Reusable, accessible components for building websites faster.',
    tags: ['React', 'Design'],
    live: '#',
    code: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Projects</h2>
          <p className="mt-3 text-slate-600">A few things I’ve worked on and explored.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="mb-3 h-36 w-full rounded-lg bg-gradient-to-br from-cyan-100 to-emerald-100" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.live} className="inline-flex items-center gap-1 rounded-md bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:brightness-110">
                  <Globe className="h-4 w-4" /> Live
                </a>
                <a href={p.code} className="inline-flex items-center gap-1 rounded-md border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
