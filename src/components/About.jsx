import React from 'react';
import { Cpu, Network, Code2 } from 'lucide-react';

const skills = [
  {
    icon: Cpu,
    title: 'Systems',
    text: 'Operating systems basics, virtualization, and hardware-software integration.'
  },
  {
    icon: Network,
    title: 'Networking',
    text: 'IP addressing, subnetting, routing fundamentals, and network troubleshooting.'
  },
  {
    icon: Code2,
    title: 'Applications',
    text: 'Web development with HTML, CSS, JavaScript, React, and Python fundamentals.'
  }
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About Me</h2>
          <p className="mt-3 text-slate-600">
            I’m a SIJA student who enjoys learning by building — from small utilities to interactive websites.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
