"use client";
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 px-20 py-4 flex items-center ${sticky ? 'bg-[#0b061f] shadow-md' : 'bg-transparent'} transition`}>
      <a href="#" className="text-2xl font-[600] text-[#F9624E]">Portfolio.</a>
      
      <div className="flex items-center gap-12 ml-auto">
        <nav className={`md:flex items-center gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-bg md:bg-transparent ${navOpen ? 'block' : 'hidden md:block'}`}>
        {["home", "about", "services", "portfolio", "contact"].map((s) => (
          <a key={s} href={`#${s}`} className="block px-4 py-2">
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </a>
        ))}
      </nav>
        {/* <Moon className="cursor-pointer text-xl" /> */}
        <Menu className="md:hidden cursor-pointer text-xl" onClick={() => setNavOpen(!navOpen)} />
      </div>
    </header>
  );
}
