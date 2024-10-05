"use client";
import React from "react";
import Image from "next/image";
import { clashSans } from "@/font/font";
import { useTranslation } from "react-i18next";

export default function Goals() {
  const { t } = useTranslation();
  return (
    <div className="bg-light-red py-[48px] md:py-[120px]">
      <div className="flex justify-center gap-8 mx-auto px-2 sm:px-4 max-w-[1320px]">
        <div className="items-center gap-8 md:gap-4 lg:gap-8 xl:gap-x-[106px] grid grid-cols-1 md:grid-cols-2-v2 w-full">
          <div className="flex flex-col w-full">
            <h2
              className="mb-[18px] md:mb-6 font-semibold text-[24px] text-dark md:text-[32px] lg:text-[48px] leading-[120%]"
              style={{ fontFamily: clashSans.style.fontFamily }}
            >
              {t("about.goals.title")}
            </h2>
            <p className="mb-8 md:mb-[40px] max-w-[370px] lg:max-w-[446px] text-base text-gray md:text-lg">
              {t("about.goals.content")}
            </p>
          </div>
          <div className="relative flex items-center w-full max-w-[768px] h-fit md:h-[400px]">
            <div className="w-full h-full">
              <Image
                src="/goal.png"
                alt="Goals"
                width={768}
                height={400}
                className="rounded-[16px] w-full h-fit md:h-full object-center object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
