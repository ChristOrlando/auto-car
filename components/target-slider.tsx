"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";
import { clashSans } from "@/font/font";
import { useTranslation } from "react-i18next";

type Props = {
  datas: {
    id: number;
    title: string;
    img: string;
  }[];
};

export default function TargetSlider({ datas }: Props) {
  const { t } = useTranslation();

  return (
    <div className="w-[764px] md:w-full">
      <Swiper
        slidesPerView={3}
        loop={true}
        freeMode={true}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        modules={[Pagination, FreeMode, Autoplay]}
        className={
          "w-full h-[285px] lg:h-[345px] custom-swiper target flex items-center"
        }
      >
        {datas.map((data) => (
          <SwiperSlide
            key={data.id}
            className="flex justify-center items-center"
          >
            <div className="relative bg-zinc-100 rounded-[12px] w-full h-[240px] lg:h-[300px] overflow-hidden">
              <Image
                src={data.img}
                alt={data.title}
                width={240}
                height={280}
                className="w-full h-full object-center object-scale-down"
              />
              <div className="top-0 left-0 absolute flex justify-center items-end py-4 p-2 w-full h-full">
                <p
                  className="border-slate-50/60 bg-black/30 backdrop-blur-sm px-2 py-1 border rounded-full text-center text-sm text-white"
                  style={{ fontFamily: clashSans.style.fontFamily }}
                >
                  {data.title && t(data.title)}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
