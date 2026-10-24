"use client";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";
import { Facebook, GitHub, Instagram, Linkedin } from "./Icons";

export default function Hero() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/MyCV2.pdf";
    link.download = "Mekaiel-Khan-CV.pdf";
    link.click();
  };

  return (
    <section id="home" className="relative overflow-hidden border-b border-black/5 bg-[#f6f4ef] pt-10">
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#ff674f]/10 blur-3xl" />
      <div className="container-shell grid min-h-[680px] items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <span className="eyebrow">Frontend developer · Pakistan</span>
          <h1 className="mt-5 max-w-2xl text-[clamp(42px,6vw,76px)] font-black leading-[.96] tracking-[-.055em] text-[#121826]">
            I build clean interfaces that <span className="text-[#ff674f]">feel alive.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#687082]">
            I&apos;m Mekaiel Khan, a frontend developer focused on React, Next.js and responsive digital experiences that are fast, polished and easy to use.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full bg-[#121826] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#ff674f]">
              View selected work <ArrowUpRight size={16} />
            </a>
            <button onClick={downloadCV} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-bold text-[#121826] transition hover:-translate-y-0.5 hover:border-[#ff674f]">
              Download CV <ArrowDownRight size={16} />
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[{href:"https://www.instagram.com/michaelkhan77/", icon:<Instagram/>}, {href:"https://www.facebook.com/micheal.khan.108889", icon:<Facebook/>}, {href:"https://www.linkedin.com/in/michael-khan-b2410022a/", icon:<Linkedin/>}, {href:"https://github.com/Michaelkhaan", icon:<GitHub/>}].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white text-[#121826] transition hover:border-[#ff674f] hover:bg-[#ff674f] hover:text-white">
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[430px]">
          <div className="absolute -left-4 top-10 hidden rounded-2xl border border-black/10 bg-white p-3 shadow-xl sm:block float-slow">
            <div className="flex items-center gap-2 text-xs font-bold text-[#121826]"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Available for projects</div>
          </div>
          <div className="relative overflow-hidden rounded-[34px] border border-black/10 bg-[#121826] p-3 soft-shadow">
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-[26px] bg-[#e9e6df]">
              <Image src="/heroimage (2).png" alt="Mekaiel Khan" fill priority className="object-cover object-center" sizes="(max-width: 768px) 90vw, 430px" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-[#121826]/85 p-4 text-white backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div><p className="text-[10px] uppercase tracking-[.18em] text-white/50">Specialized in</p><p className="mt-1 text-sm font-bold">React · Next.js · UI</p></div>
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-[#ff674f]"><Check size={17}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-3 rounded-2xl bg-[#ff674f] px-4 py-3 text-white shadow-xl">
            <p className="text-[10px] uppercase tracking-widest text-white/70">Currently</p>
            <p className="text-sm font-black">Building for web</p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-black/5 bg-white py-3">
        <div className="marquee flex min-w-max items-center gap-8 text-[11px] font-black uppercase tracking-[.2em] text-[#8a91a0]">
          {Array.from({length: 2}).flatMap((_, group) => ["React", "Next.js", "JavaScript", "Tailwind CSS", "Responsive UI", "REST APIs", "Frontend Development"].map((item) => <span key={`${group}-${item}`} className="flex items-center gap-8"><span>{item}</span><b className="text-[#ff674f]">✦</b></span>))}
        </div>
      </div>
    </section>
  );
}
