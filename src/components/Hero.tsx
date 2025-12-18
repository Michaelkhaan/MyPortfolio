"use client";

import Image from "next/image";
import React from "react";
import {
  BsCameraVideoFill,
  BsCode,
  BsCodeSlash,
  BsPalette,
} from "react-icons/bs";
import { Facebook, GitHub, Instagram, Linkedin } from "./Icons";

const Hero = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/MyCv.pdf";
    link.download = "MyCv.pdf";
    link.click();
  };

  return (
    <section className="relative bg-white dark:bg-[#0b061f] min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16 overflow-hidden">
      {/* Left content */}
      <div className="max-w-xl z-10">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#0b061f] dark:text-white">
          Hello, I am
        </h3>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
          <span className="text-[#F9624E]">Mekaiel</span>{" "}
          <span className="text-[#0b061f] dark:text-white">Khan</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base w-full max-w-[450px] text-gray-600 dark:text-white">
          I am a Frontend developer specializing in modern web applications using HTML, CSS, JavaScript, and React-based frameworks such as Next.js. Experienced in building responsive, performance-optimized interfaces with a strong emphasis on clean code, scalability, and user experience.
        </p>

        {/* Social icons */}
        <div className="flex space-x-4 mt-6">
          <a
            href="https://www.instagram.com/michaelkhan77/"
            className="border-2 border-primary w-10 h-10 rounded-full
            flex items-center justify-center
            text-[#F9624E] hover:bg-[#F9624E] hover:text-white
            transition"
          >
            <Instagram />
          </a>

          <a
            href="https://www.facebook.com/micheal.khan.108889"
            className="border-2 border-primary w-10 h-10 rounded-full
            flex items-center justify-center
            text-[#F9624E] hover:bg-[#F9624E] hover:text-white
            transition"
          >
            <Facebook />
          </a>

          <a
            href="https://www.linkedin.com/in/michael-khan-b2410022a/"
            className="border-2 border-primary w-10 h-10 rounded-full
            flex items-center justify-center
            text-[#F9624E] hover:bg-[#F9624E] hover:text-white
            transition"
          >
            <Linkedin />
          </a>

          <a
            href="https://github.com/Michaelkhaan"
            className="border-2 border-primary w-10 h-10 rounded-full
            flex items-center justify-center
            text-[#F9624E] hover:bg-[#F9624E] hover:text-white
            transition"
          >
            <GitHub />
          </a>
        </div>

        {/* Button */}
        <button
          onClick={downloadCV}
          className="
            mt-6 px-6 py-3
            bg-[#F9624E] text-white
            rounded-lg shadow
            hover:bg-[#f9624ea1]
          "
        >
          Download CV
        </button>
      </div>

      {/* Rotating professions (unchanged, just hidden on very small screens) */}
      <div className="hidden sm:block absolute top-1/2 right-0 translate-y-[-50%] w-screen h-screen overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[768px] h-full flex justify-center items-center animate-profession">
          {[
            { icon: <BsCode />, label: "Web Developer" },
            { icon: <BsCodeSlash />, label: "E-commerce Developer" },
            { icon: <BsPalette />, label: "Portfolio & Blog" },
            { icon: <BsCameraVideoFill />, label: "Landing Pages" },
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

          <div className="w-[560px] h-[560px] border-[3px] border-main rounded-full absolute z-[-1]" />
        </div>

        <div className="absolute top-0 right-0 w-0 h-0 border-t-[50vh] border-r-[384px] border-b-[50vh] border-l-[384px] border-t-[#F9624E] border-b-[#F9624E] border-r-[#F9624E] border-l-transparent" />
      </div>

      {/* Hero image */}
      <div className="z-10">
        <Image
          src="/heroimage (2).png"
          alt="Hero Image"
          width={500}
          height={600}
          className="object-contain max-w-full h-auto"
          unoptimized
        />
      </div>
    </section>
  );
};

export default Hero;
