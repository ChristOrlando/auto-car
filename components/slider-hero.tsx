"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function SliderHero() {
  const { t } = useTranslation();

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={8}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          480: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          760: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          1320: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
        }}
        modules={[FreeMode, Autoplay]}
        className="w-full h-full"
      >
        {datas.map(({ id, img, content }) => (
          <SwiperSlide
            key={id}
            className="flex justify-center items-center bg-white"
          >
            <div className="relative rounded-[20px] w-full h-[209px] sm:h-[300px] md:h-[416px] overflow-hidden">
              <Image
                src={img}
                alt={`Hero-${id}`}
                width={306}
                height={416}
                className="w-full h-full object-center object-cover"
              />
              <div className="top-0 left-0 absolute flex items-end bg-black/20 mx:px-5 md:py-9 p-2 w-full h-full">
                <p className="font-medium text-sm text-white sm:text-lg">
                  {content && t(content)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

const datas = [
  {
    id: 1,
    img: "/hero-1.png",
    content: "home.hero.slider.item-1",
  },
  {
    id: 2,
    img: "/hero-2.png",
    content: "home.hero.slider.item-2",
  },
  {
    id: 3,
    img: "/hero-3.png",
    content: "home.hero.slider.item-3",
  },
  {
    id: 4,
    img: "/hero-1.png",
    content: "home.hero.slider.item-1",
  },
  {
    id: 5,
    img: "/hero-2.png",
    content: "home.hero.slider.item-2",
  },
  {
    id: 6,
    img: "/hero-3.png",
    content: "home.hero.slider.item-3",
  },
];
