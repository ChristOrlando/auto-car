"use client";
import Image from "next/image";
import Navbar from "./navbar";
import ArrowTopRightIcon from "./icon/arrow-top-right";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { clashSans } from "@/font/font";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

export default function Header() {
  const pathname = usePathname();
  const { t } = useTranslation();

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
                  {t(getData()!.title)}
                </h2>
              )}
              {getData()?.content && (
                <p className="mb-[56px] max-w-[743px] text-[20px] text-white md:text-2xl">
                  {getData()?.content && t(getData()?.content || "")}
                </p>
              )}
              {getData()?.button && (
                <Link to="product" smooth={true} duration={500}>
                  <button className="flex justify-center items-center gap-x-3 bg-red-700 py-2.5 pr-2 pl-6 rounded-full w-fit font-medium text-lg text-white">
                    {t("home.header.button")}
                    <span className="flex justify-center items-center bg-white/80 rounded-full w-[44px] h-[44px]">
                      <span className="flex w-4 h-4">
                        <ArrowTopRightIcon />
                      </span>
                    </span>
                  </button>
                </Link>
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
    title: "home.header.title",
    content: "home.header.content",
    button: "/product",
    height: "max-h-fit",
  },
  {
    id: 2,
    path: "/about",
    img: "/about.png",
    title: "about.header.title",
    content: "about.header.content",
    height: "max-h-[540px]",
  },
  {
    id: 3,
    path: "/contact",
    img: "/contact.png",
    title: "contact.header.title",
    height: "max-h-[371px]",
  },
];
