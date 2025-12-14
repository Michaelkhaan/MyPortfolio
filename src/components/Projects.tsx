"use client";
import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  { title: "Corbett Valley", image: "/corbettvalley.png", link: "https://corbettvalley.com/", description: "Corbett Valley Resort is a peaceful riverside retreat near Jim Corbett National Park, offering scenic views, comfortable stays, and nature-filled experiences like jungle safaris and birdwatching." },
  { title: "Polar Pro", image: "/polarpro.png", link: "https://www.polarpro.com/", description:"PolarPro.com is a creative gear brand founded in 2011, specializing in high-performance filters, lenses, and accessories for filmmakers, photographers, drone pilots, and mobile creators ." },
  { title: "Neeca", image: "/neeca.png", link: "https://neers.com.pk/", description: "Neers offers a wide range of high-quality ceiling, pedestal, and bracket fans, combining modern design with reliable performance—perfect for homes, offices, and industrial use." },
  { title: "Foodile", image: "/foodile.png", link: "https://foodil.co/", description: "Foodil is a global food export platform offering a wide range of Korean food products with fast, secure, and hassle-free international shipping." },
  { title: "Maaoz", image: "/moaaz.png", link: "https://maaozofficialstore.shop/", description: "Maaoz Official Store offers a curated collection of high-quality bags designed for style, durability, and everyday use." },
  { title: "Scotani", image: "/scotani.png", link: "https://scotani.com/", description: "Scotani is an AI-powered platform that enables creators to design, manufacture, and sell custom products globally through advanced tools and a connected factory network." },
  { title: "Twala Meals", image: "/twala.png", link: "https://twalameals.com/", description: "Twala Meals is a food service platform offering freshly prepared meals made with quality ingredients for convenient everyday dining." },
  { title: "Rogueframes", image: "/rogue.png", link: "https://rogueframes.com/", description: "Rogueframes is an AI-powered creative platform that provides unlimited access to premium AI tools for generating videos, photos, illustrations, and digital art." },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-16 bg-white dark:bg-[#0b061f] text-[#0b061f] dark:text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Latest <span className="text-[#F9624E]">Projects</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-md group"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={0}
              height={0}
              unoptimized
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#F9624E] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-8">
              <h4 className="text-lg font-bold mb-1">{project.title}</h4>
              <p className="text-xs mb-2">
                {project.description}
              </p>
              <a
                href={project.link}
                className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full"
              >
                <FiExternalLink size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
