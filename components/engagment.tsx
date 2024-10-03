import React from "react";
import Image from "next/image";

export default function Engagment() {
  return (
    <div className="py-[48px] md:py-[120px]">
      <div className="flex justify-center gap-8 mx-auto max-w-[1600px]">
        <div className="md:flex gap-2 lg:gap-8 hidden w-full">
          <div className="w-full max-w-[466px] h-[400px]">
            <Image
              src="/engagment.png"
              alt="Engagment"
              width={466}
              height={400}
              className="rounded-tr-xl rounded-br-xl w-full h-full object-center object-cover"
            />
          </div>
          <div className="flex flex-col justify-end gap-2 lg:gap-8 pr-2 sm:pr-4">
            <h2 className="font-semibold text-[24px] text-dark md:text-[32px] lg:text-[44px] leading-[120%]">
              Engagement envers la sécurité routiére{" "}
            </h2>
            <div className="items-start gap-2 lg:gap-8 grid grid-cols-2">
              <div className="w-full h-full">
                <Image
                  src="/engagment-2.png"
                  alt="Engagmanet 2"
                  width={560}
                  height={280}
                  className="rounded-xl w-full h-full object-center object-cover"
                />
              </div>
              <p className="max-w-[370px] text-gray text-lg">
                Nous nous engageons ä fournir des produits de haute qualité qui
                répondent aux normes de sécurité les plus strictes, afin de
                réduire les accidents et sauver des vies.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-[28px] md:hidden w-full">
          <div className="flex flex-col gap-y-[18px] px-2 sm:px-4">
            <h2 className="font-semibold text-[24px] text-dark md:text-[32px] lg:text-[44px] leading-[120%]">
              Engagement envers la sécurité routiére{" "}
            </h2>
            <p className="max-w-[370px] text-base text-gray md:text-lg">
              Nous nous engageons ä fournir des produits de haute qualité qui
              répondent aux normes de sécurité les plus strictes, afin de
              réduire les accidents et sauver des vies.
            </p>
          </div>
          <div className="items-end gap-3 grid grid-cols-2 w-full h-[200px]">
            <div className="w-full h-[260px]">
              <Image
                src="/engagment.png"
                alt="Engagment"
                width={466}
                height={400}
                className="rounded-tr-xl rounded-br-xl w-full h-full object-center object-cover"
              />
            </div>
            <div className="pr-2 sm:pr-4 w-full h-[200px]">
              <Image
                src="/engagment-2.png"
                alt="Engagmanet 2"
                width={560}
                height={280}
                className="rounded-xl w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
