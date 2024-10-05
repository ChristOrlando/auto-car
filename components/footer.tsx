"use client";
import React from "react";
import Logo from "./icon/logo";
import FacebookIcon from "./icon/facebook";
import XIcon from "./icon/x";
import GmailIcon from "./icon/gmail";
import LinkedinIcon from "./icon/linkedin";
import InstagramIcon from "./icon/instagram";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-dark pt-[52px] md:pt-[80px] pb-[32px] md:pb-[40px]">
      <div className="flex flex-col items-center mx-auto px-2 sm:px-4 w-full max-w-[1320px]">
        <span className="flex mb-[40px] md:mb-[60px] w-[180px] h-[86px]">
          <Logo />
        </span>
        <div className="flex md:flex-row flex-col justify-between items-center gap-y-6 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-bold-gray w-full">
          <div className="flex items-center gap-3">
            <span className="flex justify-center items-center hover:bg-red-700 border border-red-700 rounded-full w-[36px] h-[36px] transition duration-300 cursor-pointer group">
              <span className="flex w-5 h-5">
                <FacebookIcon />
              </span>
            </span>
            <span className="flex justify-center items-center hover:bg-red-700 border border-red-700 rounded-full w-[36px] h-[36px] transition duration-300 cursor-pointer group">
              <span className="flex w-5 h-5">
                <LinkedinIcon />
              </span>
            </span>
            <span className="flex justify-center items-center hover:bg-red-700 border border-red-700 rounded-full w-[36px] h-[36px] transition duration-300 cursor-pointer group">
              <span className="flex w-5 h-5">
                <InstagramIcon />
              </span>
            </span>
            <span className="flex justify-center items-center hover:bg-red-700 border border-red-700 rounded-full w-[36px] h-[36px] transition duration-300 cursor-pointer group">
              <span className="flex w-5 h-5">
                <GmailIcon />
              </span>
            </span>
            <span className="flex justify-center items-center hover:bg-red-700 border border-red-700 rounded-full w-[36px] h-[36px] transition duration-300 cursor-pointer group">
              <span className="flex w-5 h-5">
                <XIcon />
              </span>
            </span>
          </div>
          <div className="flex sm:flex-row flex-col gap-x-5 gap-y-3 text-neutral-100">
            <div className="flex gap-x-5">
              <p className="text-center">{t("footer.item-1")}</p>
              <p className="text-center">{t("footer.item-2")}</p>
            </div>
            <p className="text-center">{t("footer.item-3")}</p>
          </div>
        </div>
        <p className="text-center text-neutral-100">
          &copy;
          {t("footer.item-4")}
        </p>
      </div>
    </footer>
  );
}
