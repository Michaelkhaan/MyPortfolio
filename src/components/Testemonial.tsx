"use client";
import React, { useRef} from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "./Icons";

const testimonials = [
  {
    name: "Becky",
    image: "/test1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim officia consequuntur dolores.",
  },
  {
    name: "King",
    image: "/test-2.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim officia consequuntur dolores.",
  },
  {
    name: "Ronda",
    image: "/test-3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim officia consequuntur dolores.",
  },
];

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="flex flex-col items-center w-full px-4 py-20 bg-white dark:bg-[#0b061f] text-[#0b061f] dark:text-white relative">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="text-[#F9624E]">Testimonial</span>
      </h2>

      {/* Arrows Outside */}
      {/* <div className="flex justify-between items-center w-full max-w-6xl px-8 mb-4"> */}
    <div className="flex items-center w-full mb-4 md:px-40">
            <button
          ref={prevRef}
          className=""
        >
          <ArrowLeft className=""/>
        </button>
        
      {/* </div> */}

      <div className="w-[80%] mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
  // Safely check if navigation module is enabled
  if (
    swiper.params.navigation &&
    typeof swiper.params.navigation !== "boolean"
  ) {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  }
}}

          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          className="pb-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center bg-white dark:bg-[#141126] rounded-3xl shadow-md px-10 py-12 border-t-8 border-b-8 border-[#F9624E]">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={140}
                  height={140}
                  className="rounded-full object-cover border-[5px] border-white dark:border-[#141126] outline-[5px] outline-[#F9624E]"
                />
                <h3 className="text-2xl font-semibold mt-6 mb-4">{t.name}</h3>
                <p className="text-center text-sm md:text-base max-w-3xl">{t.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper-pagination-bullet {
            background: rgba(0, 0, 0, 0.8);
          }
          .swiper-pagination-bullet-active {
            background: #f9624e;
          }
        `}</style>
      </div>
      <button
          ref={nextRef}
          className=""
        >
          <ArrowRight />
        </button>
</div>
    </div>
  );
};

export default Testimonial;
