"use client";
import Image from "next/image";

export default function HeroSlider() {
  return (
    <div className="gap-2.5 md:gap-8 grid grid-cols-3-v5 sm:grid-cols-3-v4 md:grid-cols-3-v2 w-full max-w-[932px] overflow-hidden">
      {datas.map(({ id, img, content }) => (
        <div
          key={id}
          className="relative rounded-[20px] w-full md:!w-[306px] h-[209px] sm:h-[300px] md:h-[416px] overflow-hidden"
        >
          <Image
            src={img}
            alt={`Hero-${id}`}
            width={306}
            height={416}
            className="w-full h-full object-center object-cover"
          />
          <div className="top-0 left-0 absolute flex items-end bg-black/20 mx:px-5 md:py-9 p-2 w-full h-full">
            <p className="font-medium text-sm text-white sm:text-lg">
              {content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const datas = [
  {
    id: 1,
    img: "/hero-1.png",
    content:
      "HIP (prismatique à haute intensité) et EGP (prismatique de qualité technique).",
  },
  {
    id: 2,
    img: "/hero-2.png",
    content:
      "Aujourd’hui, la plupart des routes non éclairées la nuit sont des zones sujettes.",
  },
  {
    id: 3,
    img: "/hero-3.png",
    content:
      "Les snps HIP offrent une réflexion plus intense. Idéal pour les zones à haut risque.",
  },
];
