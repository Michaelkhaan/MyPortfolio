"use client";

// import Image from "next/image";
import Image from "next/image";
import React from "react";
import {
  BsCameraVideoFill,
  BsCode,
  BsCodeSlash,
  BsPalette,
} from "react-icons/bs";
import { Facebook, Instagram, Linkedin } from "./Icons";

const Hero = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/MyCv.pdf";
    link.download = "MyCv.pdf";
    link.click();
  };
  return (
    <section className="relative bg-white dark:bg-[#0b061f] min-h-screen flex items-center justify-between px-20 py-16 overflow-hidden">
      {/* Left content */}
      <div className="max-w-xl z-10">
        <h3 className="text-2xl font-semibold text-[#0b061f] dark:text-white">
          Hello, I am
        </h3>
        <h1 className="text-5xl font-bold mt-2">
          <span className="text-[#F9624E]">Mekaiel</span>{" "}
          <span className="text-[#0b061f] dark:text-white">Khan</span>
        </h1>
        <p className="mt-4 text-base w-[450px] text-gray-600 dark:text-white">
          {
            "I’m a frontend developer with a passion for crafting beautiful, responsive, and user-friendly websites. I specialize in HTML, CSS, and JavaScript to build clean, interactive web experiences that not only look great but also perform seamlessly across all devices."
          }
        </p>

        {/* Social icons */}
        <div className="flex space-x-4 mt-6">
          <a
            href="#"
            className="group border-2 border-primary w-10 h-10 rounded-full
             flex items-center justify-center
             text-[#F9624E] hover:bg-[#F9624E] hover:text-white
             transition"
          >
            <Instagram />
          </a>

          <a
            href="#"
            className="group border-2 border-primary w-10 h-10 rounded-full
             flex items-center justify-center
             text-[#F9624E]
             hover:bg-[#F9624E] hover:text-white
             transition"
          >
            <Facebook />
          </a>
          <a
            href="#"
            className="group border-2 border-primary w-10 h-10 rounded-full
             flex items-center justify-center
             text-[#F9624E] hover:bg-[#F9624E] hover:text-white
             transition"
          >
            <Linkedin />
          </a>
        </div>

        {/* Button */}
        <button
          onClick={downloadCV}
          className="mt-6 px-6 py-3 bg-[#F9624E] text-white rounded-lg cursor-pointer shadow hover:bg-[#f9624ea1]"
        >
          Download CV
        </button>
      </div>
      {/* Rotating professions */}
      <div className="absolute top-1/2 right-0 translate-y-[-50%] w-screen h-screen overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[768px] h-full flex justify-center items-center animate-profession">
          {/* Professions */}
          {[
            { icon: <BsCode />, label: "Web Developer", i: 0 },
            { icon: <BsCodeSlash />, label: "E-commerce Developer", i: 1 },
            { icon: <BsPalette />, label: "Portfolio & Blog", i: 2 },
            { icon: <BsCameraVideoFill />, label: "Landing Pages", i: 3 },
          ].map((prof, index) => (
            <div
              key={index}
              className="absolute left-0 flex flex-col items-center text-main bg-white dark:bg-[#0b061f] px-4 py-2"
              style={{
                transform: `rotate(${(360 / 4) * index}deg)`,
                transformOrigin: "384px",
              }}
            >
              <div className="text-2xl mb-1 text-[#F9624E]">{prof.icon}</div>
              <h3 className="text-xl font-semibold leading-none text-[#F9624E]">
                {prof.label}
              </h3>
            </div>
          ))}

          {/* Circle */}
          <div className="w-[560px] h-[560px] border-[3px] border-main rounded-full absolute z-[-1]" />
        </div>

        {/* Overlay triangle */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[50vh] border-r-[384px] border-b-[50vh] border-l-[384px] border-t-[#F9624E] border-b-[#F9624E] border-r-[#F9624E] border-l-transparent" />
      </div>

      {/* Hero image */}
      <div className="z-10 hidden md:block shadow-2xs">
        <Image
          src="/heroimage.png"
          alt="Hero Image"
          width={500}
          height={600}
          className="object-contain"
          unoptimized
        />
      </div>
    </section>
  );
};

export default Hero;
