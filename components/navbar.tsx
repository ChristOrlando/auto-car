"use client";
import Link from "next/link";
import Logo from "./icon/logo";
import CountrySelect from "./ui/country-select";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import MenuIcon from "./icon/menu";
import { useState, useEffect } from "react";
import LogoRedIcon from "./icon/logo-red";
import ClosedIcon from "./icon/closed";
import CountrySelectLarge from "./ui/country-select-large";
import { useTranslation } from "react-i18next";
import { urls } from "@/data/db";

export type Language = "fr" | "en";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const { t } = useTranslation();

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Nettoyage lors du démontage du composant
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

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
              <ul className="flex flex-col flex-1 p-6 w-full text-[#4A4C56] text-lg overflow-y-auto">
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
                      {title && t(title)}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col px-6">
                <CountrySelectLarge
                  setLanguage={setLanguage}
                  language={language}
                />
                <button className="flex justify-center items-center bg-red-700 mt-5 mb-6 rounded-full w-full h-[52px] font-medium text-lg text-white">
                  {t("nav-button")}
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
                  {title && t(title)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-x-[10px] xl:gap-x-[15px]">
            <CountrySelect setLanguage={setLanguage} language={language} />
            <Link
              href="/"
              className="flex justify-center items-center bg-red-700 rounded-full w-[173px] h-[46px] font-medium text-lg text-white"
            >
              {t("nav.button")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
