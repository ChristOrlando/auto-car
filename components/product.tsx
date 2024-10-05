"use client";
import { ProductType, products, productType } from "@/data/db";
import Image from "next/image";
import React, { useState } from "react";
import ResizeIcon from "./icon/resize";
import ArrowTopRightIcon from "./icon/arrow-top-right";
import DimensionIcon from "./icon/dimension";
import TimesIcon from "./icon/times";
import AttachmentIcon from "./icon/attachment";
import VerifyIcon from "./icon/verify";
import { clashSans, poppins } from "@/font/font";
import clsx from "clsx";
import { Element, Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

type Props = {
  title: string;
  width?: string;
  length?: string;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<ProductType[]>>;
};

function SmallDimension({ title, width, length, state }: Props) {
  const [open, setOpen] = useState(state);
  return (
    <div className="gap-[11px] grid grid-cols-2-v3 pb-3 border-border-red border-b">
      <div className="flex justify-center items-center bg-fade-red rounded-full w-[28px] h-[28px]">
        <span className="block w-4 h-4">
          <ResizeIcon />
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-5">
          <h3
            className="font-medium text-dark text-lg"
            style={{ fontFamily: clashSans.style.fontFamily }}
          >
            {title}
          </h3>
          <span
            onClick={() => setOpen(!open)}
            className={clsx(
              "flex justify-center items-center rounded-full w-[30px] h-[30px] transition duration-300 cursor-pointer",
              open
                ? "bg-fade-red border border-fade-red"
                : "border border-border-red  rotate-90"
            )}
          >
            <span className="flex w-4 h-4">
              <ArrowTopRightIcon />
            </span>
          </span>
        </div>
        <div
          className={clsx(
            "transition-all duration-300",
            open ? "h-auto" : "h-0"
          )}
        >
          <div
            className={clsx(
              "flex flex-col gap-y-3 transition-all duration-200",
              open ? "visible" : "hidden"
            )}
          >
            <p className="text-[16px] text-gray">
              <span className="font-bold text-[15px] text-dark">
                {t(
                  "home.product.product-cards.product-card-1.technic.small-dimension.width.title"
                )}{" "}
              </span>
              <span style={{ fontFamily: poppins.style.fontFamily }}>
                {width}
              </span>
            </p>
            <p className="text-[16px] text-gray">
              <span className="font-bold text-[15px] text-dark">
                {t(
                  "home.product.product-cards.product-card-1.technic.small-dimension.lenght.title"
                )}{" "}
              </span>
              <span style={{ fontFamily: poppins.style.fontFamily }}>
                {length}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LargeDimension({ title, state }: Props) {
  const [open, setOpen] = useState(state);
  return (
    <div
      className="gap-[11px] grid grid-cols-2-v3 py-4 border-border-red border-b"
      id="product"
    >
      <div className="flex justify-center items-center bg-fade-red rounded-full w-[28px] h-[28px]">
        <span className="block w-4 h-4">
          <DimensionIcon />
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h3
            className="font-medium text-dark text-lg"
            style={{ fontFamily: clashSans.style.fontFamily }}
          >
            {title}
          </h3>
          <span
            onClick={() => setOpen(!open)}
            className={clsx(
              "flex justify-center items-center border rounded-full w-[30px] h-[30px] transition duration-300 cursor-pointer",
              open
                ? "bg-fade-red border-fade-red"
                : "border border-border-red  rotate-90"
            )}
          >
            <span className="flex w-4 h-4">
              <ArrowTopRightIcon />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Attachment({ title, state }: Props) {
  const [open, setOpen] = useState(state);

  return (
    <div className="gap-[11px] grid grid-cols-2-v3 py-4 border-border-red border-b">
      <div className="flex justify-center items-center bg-fade-red rounded-full w-[28px] h-[28px]">
        <span className="block w-4 h-4">
          <AttachmentIcon />
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h3
            className="font-medium text-dark text-lg"
            style={{ fontFamily: clashSans.style.fontFamily }}
          >
            {title}
          </h3>
          <span
            onClick={() => setOpen(!open)}
            className={clsx(
              "flex justify-center items-center border rounded-full w-[30px] h-[30px] transition duration-300 cursor-pointer",
              open
                ? "bg-fade-red border-fade-red"
                : "border border-border-red  rotate-90"
            )}
          >
            <span className="flex w-4 h-4">
              <ArrowTopRightIcon />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Product() {
  const [datas, setDatas] = useState<ProductType[]>(products);
  const { t } = useTranslation();
  return (
    <Element name="product">
      <div className="px-2 sm:px-4 py-[45px] md:py-[120px]" id="product">
        <div className="flex flex-col items-center mx-auto w-full max-w-[1320px]">
          <h2
            className="mb-[18px] md:mb-6 font-semibold text-[24px] text-dark md:text-[32px] lg:text-[44px]"
            style={{ fontFamily: clashSans.style.fontFamily }}
          >
            {t("home.product.title")}
          </h2>
          <p className="md:mb-6 max-w-[586px] text-base text-center text-gray sm:text-lg mv-8">
            {t("home.product.content")}
          </p>
          <div className="gap-[20px] lg:gap-8 grid grid-cols-1 md:grid-cols-2 mb-[32px] md:mb-[48px] w-full">
            {productType.map(({ id, title, content }) => (
              <div
                key={id}
                className="bg-dark-gray p-5 border border-border rounded-[12px] w-full min-h-[182px]"
              >
                <h2
                  className="mb-[18px] pb-2.5 border-border-red border-b font-medium text-base text-bold-gray lg:text-lg"
                  style={{ fontFamily: clashSans.style.fontFamily }}
                >
                  {title && t(title)}
                </h2>
                <ul className="flex flex-col gap-y-4">
                  {content.map((value, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-x-[11px] font-medium text-gray text-sm lg:text-lg"
                    >
                      <span className="block bg-red-700 rounded-full w-[14px] h-[14px]" />
                      {value && t(value)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="gap-[20px] lg:gap-8 grid grid-cols-1 md:grid-cols-2 mb-[32px] md:mb-[48px] w-full">
            {datas.map(
              ({
                id,
                img,
                title,
                subtitle,
                first,
                second,
                third,
                fourth,
                fifth,
                sixth,
              }) => (
                <div key={id} className="flex flex-col">
                  <div className="flex flex-col justify-center items-center gap-y-5 bg-dark-gray mb-[36px] p-5 border border-border rounded-[12px] w-full h-full">
                    <Image
                      src={img}
                      alt={title}
                      width={378}
                      height={258}
                      className="object-center object-contain"
                    />
                    <h2
                      className="font-semibold text-center text-lg lg:text-[24px]"
                      style={{ fontFamily: clashSans.style.fontFamily }}
                    >
                      {title && t(title)}
                    </h2>
                  </div>
                  <div className="px-5">
                    <h2
                      className="border-medium-red mb-6 pb-2 border-b font-semibold text-dark text-lg"
                      style={{ fontFamily: clashSans.style.fontFamily }}
                    >
                      {subtitle && t(subtitle)}
                    </h2>
                    <div className="flex flex-col gap-y-[18px] mb-[22px]">
                      {/* FIRST */}
                      <SmallDimension
                        title={first.title && t(first.title)}
                        width={first.width && t(first.width)}
                        length={first.length && t(first.length)}
                        state={first.state}
                        setState={setDatas}
                      />
                      {/* SECOND */}
                      <LargeDimension
                        title={second.title && t(second.title)}
                        state={second.state}
                        setState={setDatas}
                      />
                      {/* THIRD */}
                      <div className="gap-[11px] grid grid-cols-2-v3 py-4 border-border-red border-b">
                        <div className="flex justify-center items-center bg-fade-red rounded-full w-[28px] h-[28px]">
                          <span className="block w-4 h-4">
                            <VerifyIcon />
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex justify-between items-center">
                            <h3
                              className="font-medium text-dark text-lg"
                              style={{ fontFamily: clashSans.style.fontFamily }}
                            >
                              {third.title && t(third.title)}
                            </h3>
                            <p
                              className="text-[16px] text-gray"
                              style={{ fontFamily: poppins.style.fontFamily }}
                            >
                              {third.value && t(third.value)}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* FOURTH */}
                      <Attachment
                        title={fourth.title && t(fourth.title)}
                        state={fourth.state}
                        setState={setDatas}
                      />
                      {/* FIFTH */}
                      <div className="gap-[11px] grid grid-cols-2-v3 py-4 border-border-red border-b">
                        <div className="flex justify-center items-center bg-fade-red rounded-full w-[28px] h-[28px]">
                          <span className="block w-4 h-4">
                            <TimesIcon />
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex justify-between items-center">
                            <h3
                              className="font-medium text-dark text-lg"
                              style={{ fontFamily: clashSans.style.fontFamily }}
                            >
                              {fifth.title && t(fifth.title)}
                            </h3>
                            <p
                              className="text-[16px] text-gray"
                              style={{ fontFamily: poppins.style.fontFamily }}
                            >
                              {fifth.value && t(fifth.value)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-6">
                      <h2
                        className="border-medium-red pb-2 border-b font-semibold text-dark text-lg"
                        style={{ fontFamily: clashSans.style.fontFamily }}
                      >
                        {t(sixth.title)}
                      </h2>
                      <ul className="flex flex-col gap-y-4">
                        {sixth.content.map((value, index) => (
                          <li
                            key={index}
                            className="items-center gap-x-[11px] grid grid-cols-2-v6 text-gray text-lg"
                          >
                            <span className="block bg-pale-red rounded-full w-[14px] h-[14px]" />
                            {value && t(value)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex justify-center items-center bg-red-700 rounded-full w-full max-w-full sm:max-w-[400px] h-[52px] font-medium text-lg text-white cursor-pointer"
          >
            {t("home.product.button")}
          </Link>
        </div>
      </div>
    </Element>
  );
}
