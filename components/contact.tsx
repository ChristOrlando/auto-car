"use client";
import React from "react";
import PhoneIcon from "./icon/phone";
import EmailIcon from "./icon/email";
import LocationIcon from "./icon/Location";
import clsx from "clsx";
import { clashSans } from "@/font/font";
import { Element } from "react-scroll";
import Form from "./form";
import { useTranslation } from "react-i18next";

type Props = {
  red?: true;
};

export default function Contact({ red }: Props) {
  const { t } = useTranslation();
  return (
    <Element name="contact">
      <div
        className={clsx(
          "py-[45px] md:py-[120px]",
          red ? "bg-light-red" : "bg-white"
        )}
      >
        <div className="flex flex-col items-center mx-auto px-2 sm:px-4 w-full max-w-[1320px]">
          <h2
            className="mb-8 md:mb-[40px] font-semibold text-[24px] text-dark md:text-[32px] lg:text-[44px]"
            style={{ fontFamily: clashSans.style.fontFamily }}
          >
            {t("contact-us.title")}
          </h2>
          <div className="gap-4 lg:gap-8 grid grid-cols-1 md:grid-cols-2 mb-[56px] w-full">
            <Form />
            <div className="bg-slate-200 rounded-[16px] w-full h-[350px] md:h-full overflow-hidden"></div>
          </div>
          <div className="flex md:flex-row flex-col justify-start md:justify-between lg:justify-center items-start md:items-center gap-x-4 gap-y-5 md:gap-y-0 lg:gap-x-[208px] w-full">
            {/* Phone */}
            <div className="flex items-center gap-x-3">
              <span className="flex justify-center items-center bg-fade-red rounded-full w-[44px] h-[44px]">
                <span className="flex w-6 h-6">
                  <PhoneIcon />
                </span>
              </span>
              <div className="flex flex-col gap-x-1">
                <h2
                  className="font-medium text-[20px] text-red-700"
                  style={{ fontFamily: clashSans.style.fontFamily }}
                >
                  {t("contact-us.contact.call")}
                </h2>
                <p className="text-[14px] text-gray">084112244556</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex gap-x-3">
              <span className="flex justify-center items-center bg-fade-red rounded-full w-[44px] h-[44px]">
                <span className="flex w-6 h-6">
                  <EmailIcon />
                </span>
              </span>
              <div className="flex flex-col gap-x-1">
                <h2
                  className="font-medium text-[20px] text-red-700"
                  style={{ fontFamily: clashSans.style.fontFamily }}
                >
                  {t("contact-us.contact.email")}
                </h2>
                <p className="text-[14px] text-gray">autosurcongol@gmail.com</p>
              </div>
            </div>
            {/* Location */}
            <div className="flex gap-x-3">
              <span className="flex justify-center items-center bg-fade-red rounded-full w-[44px] h-[44px]">
                <span className="flex w-6 h-6">
                  <LocationIcon />
                </span>
              </span>
              <div className="flex flex-col gap-x-1">
                <h2
                  className="font-medium text-[20px] text-red-700"
                  style={{ fontFamily: clashSans.style.fontFamily }}
                >
                  {t("contact-us.contact.location")}
                </h2>
                <p className="text-[14px] text-gray">Texas, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
