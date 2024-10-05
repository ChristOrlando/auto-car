"use client";
import React, { useState } from "react";
import ArrowTopRightIcon from "./icon/arrow-top-right";
import TargetSlider from "./target-slider";
import { clashSans } from "@/font/font";
import clsx from "clsx";
import { otherVehicle, personalVehicle, transportVehicle } from "@/data/db";
import { useTranslation } from "react-i18next";

type Props = {
  title: string;
  setState: React.Dispatch<
    React.SetStateAction<{
      first: boolean;
      second: boolean;
      third: boolean;
    }>
  >;
  tab: string;
  state: boolean;
  data: {
    id: number;
    title: string;
    img: string;
  }[];
};

function Tab({ title, tab, state, setState, data }: Props) {
  function handleState() {
    switch (tab) {
      case "1":
        setState({
          first: true,
          second: false,
          third: false,
        });
        break;
      case "2":
        setState({
          first: false,
          second: true,
          third: false,
        });
        break;
      default:
        setState({
          first: false,
          second: false,
          third: true,
        });
    }
  }
  return (
    <div className="flex flex-col gap-[14.5px] border-medium-red pb-2 border-b w-full h-auto">
      <div className="flex justify-between items-center pr-2 sm:pr-4 md:pr-0">
        <h2
          className="font-medium text-[18px] text-red-700 lg:text-[24x] xl:text-[32px]"
          style={{ fontFamily: clashSans.style.fontFamily }}
        >
          {title}
        </h2>
        <span
          onClick={handleState}
          className={clsx(
            "flex justify-center items-center bg-fade-red rounded-full w-[30px] h-[30px] transition duration-300 cursor-pointer",
            state ? "rotate-0" : "rotate-90"
          )}
        >
          <span className="flex w-4 h-4">
            <ArrowTopRightIcon />
          </span>
        </span>
      </div>
      <div
        className={clsx(
          "relative w-full transition duration-300",
          state ? "block" : "hidden"
        )}
      >
        <TargetSlider datas={data} />
      </div>
    </div>
  );
}

export default function Target() {
  const { t } = useTranslation();
  const [state, setState] = useState({
    first: true,
    second: false,
    third: false,
  });
  return (
    <div className="bg-light-red py-[45px] md:py-[120px]" id="target">
      <div className="flex flex-col items-center mx-auto pr-0 md:pr-4 pl-2 md:pl-4 w-full max-w-[1320px]">
        <div className="justify-center gap-8 md:gap-4 xl:gap-[54px] grid grid-cols-1 md:grid-cols-2-v7 lg:grid-cols-2-v4 w-full">
          <div className="flex flex-col gap-y-[18px] md:gap-y-6 pr-2 sm:pr-4 md:pr-0 fit">
            <h2
              className="font-semibold text-[24px] text-dark md:text-[32px] lg:text-[44px] leading-[120%]"
              style={{ fontFamily: clashSans.style.fontFamily }}
            >
              {t("home.target.title")}
            </h2>
            <p className="max-w-[428px] text-base text-gray md:text-lg">
              {t("home.target.content")}
            </p>
          </div>
          <div className="flex flex-col gap-y-5 w-full overflow-x-hidden">
            {/* First */}
            <Tab
              title={t("home.target.tabs.tab-1.title")}
              tab="1"
              setState={setState}
              state={state.first}
              data={personalVehicle}
            />
            {/* Second */}
            <Tab
              title={t("home.target.tabs.tab-2.title")}
              tab="2"
              setState={setState}
              state={state.second}
              data={transportVehicle}
            />
            {/* THIRD */}
            <Tab
              title={t("home.target.tabs.tab-3.title")}
              tab="3"
              setState={setState}
              state={state.third}
              data={otherVehicle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
