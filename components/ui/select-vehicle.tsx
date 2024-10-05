import { clashSans } from "@/font/font";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ClosedIcon from "../icon/closed";
import ChevronDownDarkIcon from "../icon/chevron-down-dark";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export default function SelectVehicle() {
  const [open, setOpen] = useState(false);
  const [currentData, setCurrentData] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  function handleOpen(e: React.SyntheticEvent) {
    e.preventDefault();
    e.stopPropagation();
    setOpen(!open);
  }
  function handleEmpty(e: React.SyntheticEvent) {
    e.preventDefault();
    e.stopPropagation();
    setCurrentData("");
  }

  function handleSelectData(value: string) {
    setCurrentData(value);
    setOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="relative flex flex-col gap-2 md:gap-3">
      <label
        htmlFor="vehicle"
        className="font-medium text-dark text-sm md:text-base"
        style={{ fontFamily: clashSans.style.fontFamily }}
      >
        {t("contact-us.form.vehicle-number.label")}
      </label>
      <div
        className={clsx(
          "flex items-center bg-white px-2.5 py-2 rounded-[6px] h-[48px] text-sm md:text-base",
          open && "ring-blue-600 ring-2"
        )}
      >
        <div className="flex justify-between items-center gap-x-2 w-full">
          {currentData ? (
            <span className="text-dark">{currentData}</span>
          ) : (
            <span className="text-input-placeholder">
              {t("contact-us.form.vehicle-number.placeholder")}
            </span>
          )}
          <div className="flex items-center gap-x-2">
            {currentData && (
              <span
                onClick={handleEmpty}
                className="flex justify-center items-center hover:bg-zinc-200 p-1 rounded-full w-5 h-5 cursor-pointer"
              >
                <ClosedIcon />
              </span>
            )}
            <span
              className={clsx(
                "flex justify-center items-center mr-1 w-4 h-4 transition duration-300 cursor-pointer",
                open && "rotate-[180deg]"
              )}
              onClick={handleOpen}
            >
              <ChevronDownDarkIcon />
            </span>
          </div>
        </div>
      </div>
      <input
        type="text"
        id="vehicle"
        name="vehicle"
        required
        className="hidden"
        value={currentData}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="top-[90px] left-0 z-30 absolute bg-white shadow shadow-neutral-500/20 p-2 rounded-md w-full"
          >
            <ul className="flex flex-col gap-1">
              {datas.map((data) => (
                <li
                  key={data.id}
                  className="hover:bg-zinc-100 p-2 rounded-md transition duration-300 cursor-pointer"
                  onClick={() => handleSelectData(data.value)}
                >
                  {data.value}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const datas = [
  {
    id: 1,
    value: "1",
  },
  {
    id: 2,
    value: "2",
  },
  {
    id: 3,
    value: "3",
  },
  {
    id: 4,
    value: "4",
  },
  {
    id: 5,
    value: "5",
  },
  {
    id: 6,
    value: "6",
  },
];
