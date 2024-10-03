import React from "react";
import ArrowTopRightIcon from "./icon/arrow-top-right";
import TargetSlider from "./target-slider";

export default function Target() {
  return (
    <div className="bg-light-red py-[45px] md:py-[120px]">
      <div className="flex flex-col items-center mx-auto pr-0 md:pr-4 pl-2 md:pl-4 w-full max-w-[1320px]">
        <div className="justify-center gap-8 md:gap-4 xl:gap-[54px] grid grid-cols-1 md:grid-cols-2-v7 lg:grid-cols-2-v4 w-full">
          <div className="flex flex-col gap-y-[18px] md:gap-y-6 pr-2 sm:pr-4 md:pr-0 fit">
            <h2 className="font-semibold text-[24px] text-dark md:text-[32px] lg:text-[44px] leading-[120%]">
              Qui est concerné?
            </h2>
            <p className="max-w-[428px] text-base text-gray md:text-lg">
              Tous les véhicules d&apos;entreprise, d&apos;organisations à but
              lucratif ou non, ainsi que toute autre entité collective doivent
              être équipés de nos bandes réfléchissantes. Cela concerne les
              types de véhicules suivants.
            </p>
          </div>
          <div className="flex flex-col gap-y-5 w-full overflow-x-hidden">
            {/* First */}
            <div className="flex flex-col gap-[14.5px] border-medium-red pb-2 border-b w-full">
              <div className="flex justify-between items-center pr-2 sm:pr-4 md:pr-0">
                <h2 className="font-medium text-[18px] text-red-700 lg:text-[24x] xl:text-[32px]">
                  Véhicules de transport de personnel
                </h2>
                <span className="flex justify-center items-center bg-fade-red rounded-full w-[30px] h-[30px]">
                  <span className="flex w-4 h-4">
                    <ArrowTopRightIcon />
                  </span>
                </span>
              </div>
              <div className="relative w-full">
                <TargetSlider />
              </div>
            </div>
            {/* Second */}
            <div className="flex flex-col gap-[14.5px] border-pale pb-4 border-b w-full">
              <div className="flex justify-between items-center pr-2 sm:pr-4 md:pr-0">
                <h2 className="font-medium text-[18px] text-dark-blue lg:text-[24px] xl:text-[32px] leading-[120%]">
                  Véhicules de transport de marchandises ou de matériaux
                </h2>
                <span className="flex justify-center items-center bg-fade-red rounded-full w-[30px] h-[30px] rotate-90">
                  <span className="flex w-4 h-4">
                    <ArrowTopRightIcon />
                  </span>
                </span>
              </div>
            </div>
            {/* THIRD */}
            <div className="flex flex-col gap-[14.5px] border-pale pb-4 border-b w-full">
              <div className="flex justify-between items-center pr-2 sm:pr-4 md:pr-0">
                <h2 className="font-medium text-[18px] text-dark-blue lg:text-[24px] xl:text-[32px] leading-[120%]">
                  Autres types de véhicules concernés
                </h2>
                <span className="flex justify-center items-center bg-fade-red rounded-full w-[30px] h-[30px] rotate-90">
                  <span className="flex w-4 h-4">
                    <ArrowTopRightIcon />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
