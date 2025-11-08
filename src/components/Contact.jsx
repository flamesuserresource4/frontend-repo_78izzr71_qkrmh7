import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks, Faizaa! Your message has been sent.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Let’s Connect</h2>
          <p className="mt-3 text-white/70">Got a project or collaboration in mind? I’d love to hear from you.</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <input
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/50 outline-none"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
            />
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <Mail className="h-5 w-5 text-white/70" />
              <input
                className="w-full bg-transparent text-sm text-white placeholder-white/50 outline-none"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={onChange}
                placeholder="Your email"
              />
            </div>
          </div>
          <textarea
            className="mb-4 h-32 w-full rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-white/50 outline-none"
            name="message"
            required
            value={form.message}
            onChange={onChange}
            placeholder="Your message"
          />
          <div className="flex items-center justify-between gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:brightness-110">
              <Send className="h-4 w-4" /> Send Message
            </button>
            {status && <p className="text-sm text-emerald-300">{status}</p>}
          </div>
        </form>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-40 w-full bg-gradient-to-b from-cyan-500/10 to-transparent" />
    </section>
  );
};

export default Contact;
