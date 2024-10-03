"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Pagination, FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function TargetSlider() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={3}
        loop={true}
        freeMode={true}
        spaceBetween={12}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        modules={[Pagination, FreeMode, Autoplay]}
        className={"w-full  custom-swiper target flex items-center"}
      >
        {datas.map((data) => (
          <SwiperSlide
            key={data.id}
            className="flex justify-center items-center"
          >
            <div className="relative rounded-[12px] w-[240px] h-[280px] overflow-hidden">
              <Image
                src={data.img}
                alt={data.title}
                width={240}
                height={280}
                className="object-center object-cover"
              />
              <div className="top-0 left-0 absolute flex justify-center items-end bg-black/20 py-4 w-full h-full">
                <p className="border-slate-50 bg-black/30 backdrop-blur px-3 py-2 border rounded-full">
                  {data.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const datas = [
  {
    id: 1,
    title: "Minibuses",
    img: "/target-1.png",
  },
  {
    id: 2,
    title: "Buses",
    img: "/target-2.png",
  },
  {
    id: 3,
    title: "Coaches",
    img: "/target-1.png",
  },
  {
    id: 4,
    title: "Minibuses",
    img: "/target-1.png",
  },
  {
    id: 5,
    title: "Buses",
    img: "/target-2.png",
  },
];
