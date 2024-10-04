import React from "react";
import PhoneIcon from "./icon/phone";
import EmailIcon from "./icon/email";
import LocationIcon from "./icon/Location";
import clsx from "clsx";
import { clashSans } from "@/font/font";

type Props = {
  red?: true;
};

export default function Contact({ red }: Props) {
  return (
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
          Contactez-nous
        </h2>
        <div className="gap-4 lg:gap-8 grid grid-cols-1 md:grid-cols-2 mb-[56px] w-full">
          <form className="flex flex-col gap-4 bg-pale-pink p-4 lg:p-8 rounded-[16px]">
            <div className="gap-3 grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col gap-2 md:gap-3">
                <label
                  htmlFor="name"
                  className="font-medium text-dark text-sm md:text-base"
                  style={{ fontFamily: clashSans.style.fontFamily }}
                >
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Entrer votre nom"
                  className="bg-white px-2.5 py-2 rounded-[6px] h-[48px] text-sm md:text-base placeholder-input-placeholder"
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                <label
                  htmlFor="email"
                  className="font-medium text-dark text-sm md:text-base"
                  style={{ fontFamily: clashSans.style.fontFamily }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Entrez l'e-mail"
                  className="bg-white px-2.5 py-2 rounded-[6px] h-[48px] text-sm md:text-base placeholder-input-placeholder"
                />
              </div>
            </div>
            <div className="gap-3 grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col gap-2 md:gap-3">
                <label
                  htmlFor="phone"
                  className="font-medium text-dark text-sm md:text-base"
                  style={{ fontFamily: clashSans.style.fontFamily }}
                >
                  Téléphone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Entrez le téléphone"
                  className="bg-white px-2.5 py-2 rounded-[6px] h-[48px] text-sm md:text-base placeholder-input-placeholder"
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                <label
                  htmlFor="vehicle"
                  className="font-medium text-dark text-sm md:text-base"
                  style={{ fontFamily: clashSans.style.fontFamily }}
                >
                  Nombre de véhicules
                </label>
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  placeholder="Sélectionnez le numéro"
                  className="bg-white px-2.5 py-2 rounded-[6px] h-[48px] text-sm md:text-base placeholder-input-placeholder"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <label
                htmlFor="vehicleType"
                className="font-medium text-dark text-sm md:text-base"
                style={{ fontFamily: clashSans.style.fontFamily }}
              >
                Catégorie de véhicules
              </label>
              <input
                type="text"
                id="vehicleType"
                name="vehicleType"
                placeholder="Sélectionnez les véhicules"
                className="bg-white px-2.5 py-2 rounded-[6px] h-[48px] text-sm md:text-base placeholder-input-placeholder"
              />
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <label
                htmlFor="message"
                className="font-medium text-dark text-sm md:text-base"
                style={{ fontFamily: clashSans.style.fontFamily }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Entrez le message..."
                className="bg-white px-2.5 py-2 rounded-[6px] max-w-[100%] h-full max-h-[107px] md:max-h-[73px] text-sm md:text-base placeholder-input-placeholder"
              ></textarea>
            </div>
            <button className="flex justify-center items-center bg-red-700 rounded-full w-full h-[52px] font-medium text-lg text-white">
              Prendre rendez-vous
            </button>
          </form>
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
                Appel
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
                Email
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
                Emplacement
              </h2>
              <p className="text-[14px] text-gray">Texas, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
