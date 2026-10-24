"use client";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = ["home", "about", "services", "portfolio", "contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`container-shell flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all ${scrolled ? "border-black/10 bg-white/90 shadow-lg" : "border-black/5 bg-white/70"}`}>
        <a href="#home" className="flex items-center gap-2 font-black tracking-tight text-[#121826]">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#ff674f] text-sm text-white">M</span>
          <span>Mekaiel<span className="text-[#ff674f]">.</span></span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link}`} className="nav-link text-[12px] font-bold uppercase tracking-wider text-[#687082] hover:text-[#121826]">
              {link}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden items-center gap-1 rounded-full bg-[#121826] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#ff674f] sm:flex">
          Let&apos;s talk <ArrowUpRight size={14} />
        </a>

        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-xl bg-[#121826] text-white md:hidden">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="container-shell mt-2 rounded-2xl border border-black/10 bg-white p-3 shadow-xl md:hidden">
          {links.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-bold text-[#121826] hover:bg-[#f6f4ef]">
              {link[0].toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
