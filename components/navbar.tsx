"use client";
import Link from "next/link";
import Logo from "./icon/logo";
import CountrySelect from "./ui/country-select";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import MenuIcon from "./icon/menu";
import { useState } from "react";
import LogoRedIcon from "./icon/logo-red";
import ClosedIcon from "./icon/closed";
import { urls } from "@/data/db";
import EnglandFlagIcon from "./icon/england-flag";
import ChevronDownDarkIcon from "./icon/chevron-down-dark";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <nav className="py-4 h-[112px]">
      <div className="flex justify-between items-center gap-x-4">
        <Link href="/" className="flex w-[180px] h-[86px]">
          <Logo />
        </Link>
        <div className="flex items-center lg:hidden">
          <span className="block w-8 h-8 cursor-pointer" onClick={handleOpen}>
            <MenuIcon />
          </span>
          {open && (
            <div className="top-0 left-0 z-20 fixed flex flex-col bg-white w-dvw h-dvh">
              <div className="flex justify-between items-center border-[#4A4C56] px-6 py-3 border-b w-full h-[72px]">
                <Link href="/" className="w-[72px] h-[34.5px]">
                  <LogoRedIcon />
                </Link>
                <span onClick={handleClose} className="w-6 h-6 cursor-pointer">
                  <ClosedIcon />
                </span>
              </div>
              <ul className="flex flex-col flex-1 p-6 w-full text-[#4A4C56] text-lg">
                {urls.map(({ id, title, path }) => (
                  <li key={id}>
                    <Link
                      href={path}
                      className={clsx(
                        "flex border-[#D2D2D5] py-5 border-b",
                        pathname === path && "font-bold"
                      )}
                      onClick={handleClose}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col px-6">
                <div className="relative border-[#D2D2D5] pb-5 border-b">
                  <button className="flex justify-between items-center border-[#B1B1B1] px-6 py-3 border rounded-full w-full font-medium text-lg text-white">
                    <span className="block w-6 h-[18px]">
                      <EnglandFlagIcon />
                    </span>
                    <span className="block w-6 h-6">
                      <ChevronDownDarkIcon />
                    </span>
                  </button>
                </div>
                <button className="flex justify-center items-center bg-red-700 mt-5 mb-6 rounded-full w-full h-[52px] font-medium text-lg text-white">
                  Obtenir un devis
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="lg:flex items-center gap-x-[40px] xl:gap-x-[45px] 2xl:gap-x-[120px] hidden">
          <ul className="flex items-center gap-x-[20px] xl:gap-x-[24px] text-lg text-white">
            {urls.map(({ id, title, path }) => (
              <li key={id}>
                <Link
                  href={path}
                  className={clsx(pathname === path && "font-bold")}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-x-[10px] xl:gap-x-[15px]">
            <CountrySelect />
            <Link
              href="/"
              className="flex justify-center items-center bg-red-700 rounded-full w-[173px] h-[46px] font-medium text-lg text-white"
            >
              Obtenir un devis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
