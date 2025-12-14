"use client";
import React from "react";
import {
  BiCodeAlt,
  // BiBarChartAlt,
  // BiPaint,
} from "react-icons/bi";
import { Portfolio, Shopping } from "./Icons";

const services = [
  {
    icon: <BiCodeAlt className="text-7xl text-[#F9624E]" />,
    title: "Web Development",
    description:
      "I build fast, responsive, and user-friendly websites using modern technologies to ensure a seamless experience across all devices.",
  },
  {
    icon: <Shopping />,
    title: "E-commerce Frontend",
    description:
      "I create responsive and user-friendly e-commerce interfaces that offer seamless browsing, smooth shopping, and hassle-free checkout experiences.",
  },
  {
    icon: <Portfolio />,
    title: "Portfolio or Blog",
    description:
      "I design and develop modern, responsive portfolio and blog websites that showcase content beautifully, load fast, and offer a smooth, user-friendly experience.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-[#0b061f]">
      <h2 className="text-center text-4xl font-bold mb-20 text-[#0b061f] dark:text-white">
        My <span className="text-[#F9624E]">Services</span>
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 px-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-1 min-w-[300px] max-w-sm bg-white dark:bg-[#141126] text-center rounded-2xl px-6 py-10 shadow-md border-t-[6px] border-b-[6px] border-[#F9624E] transition duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl"
          >
            {service.icon}
            <h3 className="text-2xl font-semibold mt-4 mb-3 hover:text-[#F9624E] transition-colors">
              {service.title}
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
              {service.description}
            </p>
            <a
              href="#"
              className="inline-block px-5 py-2 bg-[#F9624E] text-white rounded-md hover:bg-[#f9624ea1] transition"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
