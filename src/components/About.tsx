"use client";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-white dark:bg-[#0b061f] text-[#0b061f] dark:text-white px-8 py-20 flex flex-col md:flex-row justify-center gap-12"
    >
      {/* About Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/portfolioimg.jpg" // Make sure this image exists in your `public` folder
          alt="About Me"
          width={80}
          height={80}
          unoptimized
          className="w-80 h-80 object-cover rounded-xl border-2 border-[#F9624E] shadow-2xl"
        />
      </div>

      {/* About Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold mb-4 text-[#F9624E]">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {"I'm "}
          <span className="font-semibold text-[#F9624E]">Mekaiel Khan</span>, a
          results-driven Front-End Developer with a strong passion for UI/UX
          design and modern web technologies. I specialize in building clean,
          responsive, and user-centric interfaces that deliver seamless digital
          experiences. With a solid foundation in HTML, CSS, JavaScript, and
          React, I focus on writing maintainable code and transforming complex
          ideas into intuitive, high-performing web applications. 
        </p>

        <h3 className="text-xl font-semibold mb-2">Skills:</h3>
        <ul className="grid grid-cols-2 gap-2 text-gray-800 dark:text-gray-300">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Redux",
            "Git",
            "Rest api",
          ].map((skill) => (
            <li key={skill} className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F9624E] rounded-full" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
