"use client";
import React from "react";
import LocationIcon from "./icon/Location";
import EmailIcon from "./icon/email";
import PhoneIcon from "./icon/phone";
import { clashSans } from "@/font/font";
import Form from "./form";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-light-red py-[48px] md:py-[120px]">
        <div className="flex justify-center gap-8 mx-auto px-2 sm:px-4 max-w-[1320px]">
          <div className="justify-between gap-8 md:gap-x-[53px] grid grid-cols-1 md:grid-cols-2-v2 lg:grid-cols-2-v4 w-full">
            <div className="flex flex-col gap-5 md:gap-8">
              <h2
                className="font-semibold text-[24px] text-dark md:text-[32px] lg:text-[44px]"
                style={{ fontFamily: clashSans.style.fontFamily }}
              >
                {t("contact.title-2")}
              </h2>
              <div className="flex flex-col gap-8">
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
                <div className="flex items-center gap-x-3">
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
                    <p className="text-[14px] text-gray">
                      autosurcongol@gmail.com
                    </p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-center gap-x-3">
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
            <div className="bg-white p-0 md:p-4 lg:p-8 rounded-[16px]">
              <h2
                className="md:block hidden mb-5 font-semibold text-[24px] text-dark"
                style={{ fontFamily: clashSans.style.fontFamily }}
              >
                {t("contact.title-1")}
              </h2>
              <Form />
            </div>
          </div>
        </div>
      </div>
      <div className="py-[48px] md:py-[120px]">
        <div className="mx-auto px-2 sm:px-4 max-w-[1320px]">
          <div className="bg-neutral-200 rounded-[16px] w-full h-[350px] md:h-[640px]"></div>
        </div>
      </div>
    </>
  );
}
