"use client";
import React from "react";
import { FC } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Contact from "./Contact";

const Skills: FC = () => {
  const languages = [
    { name: "HTML", img: "/html.png" },
    { name: "CSS", img: "/css.png" },
    { name: "TAILWIND", img: "/tailwind.png" },
    { name: "JAVASCRIPT", img: "/js.png" },
    { name: "REACT.JS", img: "/react.png" },
    { name: "NEXT.JS", img: "/next.png" },
  ];

  return (
    <>
      <div className="mt-20">
        <div className="flex justify-end sm:mx-44 mx-12 border-b-8 border-[#7733FF] pb-2">
          <h1 className="text-white text-2xl">Skills</h1>
        </div>
        <div className="flex justify-center pt-12 text-2xl text-white font-semibold">
          <h1>Languages</h1>
        </div>
        <div className="sm:hidden ">
          {/* <div className="flex justify-between   ">
            <div className="swiper-button-prev flex items-center">
              <FaChevronLeft className="text-white text-3xl" />
            </div>
            <div className="swiper-button-next">
              <FaChevronRight className="text-white text-3xl" />
            </div>
          </div> */}
          <Swiper
            loop={true}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Navigation]}
          >
            {languages.map((language) => (
              <SwiperSlide key={language.name} className="mySwiper">
                <div className="">
                  <div className="flex justify-center mt-8">
                    <div className="">
                      <div className="rounded-lg overflow-hidden w-44 h-44 flex items-center justify-center shadow-custom">
                        <img
                          src={language.img}
                          alt={language.name}
                          width={100}
                          height={100}
                        />
                      </div>
                      <p className="text-white text-xl font-semibold mt-8 text-center">
                        {language.name}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Display images in a single line on full screen */}
        <div className="hidden sm:flex justify-center mt-8">
          {languages.map((language) => (
            <div key={language.name} className="mx-4">
              <div className="rounded-lg overflow-hidden w-44 h-44 flex items-center justify-center shadow-custom">
                <img
                  src={language.img}
                  alt={language.name}
                  width={100}
                  height={100}
                />
              </div>
              <p className="text-white text-xl font-semibold mt-8 text-center">
                {language.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <Contact/> */}
      <Contact/>
    </>
  );
};

export default Skills;
