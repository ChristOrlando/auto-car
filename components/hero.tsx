"use client";
import React from "react";
import ArrowTopRightIcon from "./icon/arrow-top-right";
import { clashSans } from "@/font/font";
import SliderHero from "./slider-hero";

export default function Hero() {
  return (
    <div className="bg-light-red lg:px-0 py-[48px] lg:py-[120px] pl-0 md:pl-4">
      <div className="flex md:flex-row flex-col justify-center gap-y-8 md:gap-2 mx-auto max-w-[1600px]">
        <div className="flex flex-col ml-0 lg:ml-[60px] xl:ml-[100px] 2xl:ml-[140px] pl-2 sm:pl-4 md:pl-0 lg:min-w-[450px] max-w-[531px] md:max-w-[371px] 2xl:max-w-[531px]">
          <h2
            className="mb-[18px] md:mb-6 font-semibold text-[24px] text-dark md:text-[32px] lg:text-[44px] leading-[120%]"
            style={{
              fontFamily: clashSans.style.fontFamily,
            }}
          >
            L&apos;importance des bandes réfléchissantes
          </h2>
          <p className="mb-8 md:mb-[40px] text-base text-gray md:text-lg">
            « Nous proposons une gamme complète d&apos;accessoires de sécurité
            routière, en mettant l&apos;accent plus particulièrement sur les
            bandes réfléchissantes. Nos bandes sont disponibles en deux
            technologies : HIP (High-Intensity Prismatic) et EGP (Engineering
            Grade Prismatic). »
          </p>
          <button className="flex justify-center items-center gap-x-3 bg-red-700 py-1.5 pr-1.5 pl-6 rounded-full w-fit font-medium text-lg text-white">
            Planifier un rendez-vous
            <span className="flex justify-center items-center bg-white/80 rounded-full w-[44px] h-[44px]">
              <span className="flex w-4 h-4">
                <ArrowTopRightIcon />
              </span>
            </span>
          </button>
        </div>
        <div className="w-full overflow-x-hidden">
          <div className="relative left-[14px] md:left-[40px] w-full">
            <SliderHero />
          </div>
        </div>
      </div>
    </div>
  );
}
