"use client";
import Image from "next/image";
import Navbar from "./navbar";
import ArrowTopRightIcon from "./icon/arrow-top-right";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { clashSans } from "@/font/font";

export default function Header() {
  const pathname = usePathname();

  function getData() {
    return headers.find((header) => {
      if (pathname === header.path) {
        return header;
      }
    });
  }
  return (
    <div
      className={clsx(
        "px-2 sm:px-[10px] py-[26px] xl:p-8 w-dvw h-dvh md:max-h-[848px]",
        getData()?.height
      )}
    >
      <div className="relative mx-auto rounded-[32px] w-full max-w-[1536px] h-full max-h-[800px] overflow-hidden">
        <Image
          src={getData()?.img || "/home.png"}
          alt="Header"
          width={1456}
          height={816}
          className="w-full h-full object-center object-cover"
        />
        <div className="top-0 left-0 absolute flex flex-col bg-black/20 px-[10px] sm:px-[20px] lg:px-[25px] xl:px-[80px] 2xl:px-[108px] w-full h-full">
          <Navbar />
          <div className="flex items-center w-full h-full">
            <div className="flex flex-col">
              {getData()?.title && (
                <h2
                  className="mb-[28px] max-w-[327px] sm:max-w-[824px] font-semibold text-[28px] text-white sm:text-[35px] md:text-[40px] lg:text-[56px] leading-[110%]"
                  style={{
                    fontFamily: clashSans.style.fontFamily,
                  }}
                >
                  {getData()!.title}
                </h2>
              )}
              {getData()?.content && (
                <p className="mb-[56px] max-w-[743px] text-[20px] text-white md:text-2xl">
                  {getData()?.content}
                </p>
              )}
              {getData()?.button && (
                <button className="flex justify-center items-center gap-x-3 bg-red-700 py-2.5 pr-2 pl-6 rounded-full w-fit font-medium text-lg text-white">
                  Découvrez nos produits{" "}
                  <span className="flex justify-center items-center bg-white/80 rounded-full w-[44px] h-[44px]">
                    <span className="flex w-4 h-4">
                      <ArrowTopRightIcon />
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const headers = [
  {
    id: 1,
    path: "/",
    img: "/home.png",
    title:
      "Sécurisez vos véhicules avec nos bandes réfléchissantes de haute qualité",
    content:
      "Accessoires de sécurité routière pour les entreprises de transport.",
    button: "/product",
    height: "max-h-fit",
  },
  {
    id: 2,
    path: "/about",
    img: "/about.png",
    title: "Qui sommes-nous ?",
    height: "max-h-[540px]",
    content:
      "Nous sommes une entreprise spécialisée dans la sécurité routiére. Notre mission est d'aider les gouvernements et les entreprises ä mettre en place des mesures efficaces et pertinentes pour augmenter la sécurité routiére.",
  },
  {
    id: 3,
    path: "/contact",
    img: "/contact.png",
    title: "Nos Equipes a Votre Ecoute",
    height: "max-h-[371px]",
  },
];
