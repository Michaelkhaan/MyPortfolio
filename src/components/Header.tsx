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
    <header
      className={`
        fixed w-full top-0 z-50
        px-4 lg:px-20 py-4
        flex items-center justify-between
        transition
        ${sticky ? "bg-[#0b061f] shadow-md" : "bg-transparent"}
      `}
    >
      <a
        href="#"
        className="text-lg lg:text-2xl font-[600] text-[#F9624E]"
      >
        Portfolio.
      </a>

      <div className="flex items-center gap-12 ml-auto">
        {/* NAV */}
        <nav
          className={`
            md:flex md:items-center md:gap-8
            absolute md:static top-full left-0
            w-full md:w-auto
            transition-all
            ${
              navOpen
                ? "block bg-[#0b061f] shadow-lg"
                : "hidden md:block"
            }
          `}
        >
          {["home", "about", "services", "portfolio", "contact"].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              onClick={() => setNavOpen(false)}
              className="block px-6 py-4 md:px-0 md:py-0 text-white md:text-inherit hover:text-[#ada8a8] hover:font-bold transition ease-in-out duration-300">
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </nav>

        {/* MENU ICON */}
        <Menu
          className="md:hidden cursor-pointer text-xl text-white"
          onClick={() => setNavOpen(!navOpen)}
        />
      </div>
    </header>
  );
}
