"use client";
import { useState } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "923369999190";

export default function Contact() {
  const [form, setForm] = useState({name:"",email:"",subject:"",message:""});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({...form,[e.target.name]:e.target.value});
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); const text=`New portfolio enquiry\n\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`; window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,"_blank"); };

  return <section id="contact" className="section-space bg-[#121826] text-white">
    <div className="container-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
      <div><span className="eyebrow">Get in touch</span><h2 className="mt-5 max-w-lg text-4xl font-black tracking-[-.045em] sm:text-5xl">Have a project in mind? <span className="text-[#ff674f]">Let&apos;s build it.</span></h2><p className="mt-5 max-w-md text-sm leading-7 text-white/55">Tell me what you&apos;re building, what you need and where you want to go. I&apos;ll get back to you through WhatsApp.</p>
        <div className="mt-8 space-y-3"><div className="flex items-center gap-3 text-sm text-white/75"><span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-[#ff674f]"><MessageCircle size={17}/></span> WhatsApp</div><div className="flex items-center gap-3 text-sm text-white/75"><span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-[#ff674f]"><Mail size={17}/></span> Available for freelance work</div></div>
      </div>
      <form onSubmit={handleSubmit} className="rounded-[28px] border border-white/10 bg-white/[.045] p-5 sm:p-7">
        <div className="grid gap-4 sm:grid-cols-2"><input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#ff674f]"/><input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email address" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#ff674f]"/></div>
        <input name="subject" value={form.subject} onChange={handleChange} placeholder="Project subject" className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#ff674f]"/>
        <textarea required name="message" value={form.message} onChange={handleChange} rows={6} placeholder="Tell me a little about your project..." className="mt-4 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-[#ff674f]"/>
        <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ff674f] px-5 py-3 text-sm font-black text-white transition hover:bg-white hover:text-[#121826]">Send via WhatsApp <ArrowUpRight size={16}/></button>
      </form>
    </div>
  </section>;
}
