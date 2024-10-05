import React, {
  useState,
  useEffect,
  useRef,
  SetStateAction,
  Dispatch,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import ChevronDownDarkIcon from "../icon/chevron-down-dark";
import { Language } from "../navbar";
import i18n from "@/i18n";

type Props = {
  setLanguage: Dispatch<SetStateAction<Language>>;
  language: string;
};

export default function CountrySelectLarge({
  language,
  setLanguage,
}: Props): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOpen = (): void => {
    setOpen(!open);
  };

  const handleLanguage = async (lang: Language) => {
    await i18n.changeLanguage(language);
    setLanguage(lang);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleResize = (): void => {
      if (window.innerWidth < 760) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <div className="relative border-[#D2D2D5] pb-5 border-b">
        <button
          onClick={handleOpen}
          className="flex justify-between items-center border-[#B1B1B1] px-6 py-3 border rounded-full w-full font-medium text-lg text-white"
        >
          <span className="flex justify-center items-center w-6 h-[18px]">
            {language === "en" ? (
              <span className="block w-6 h-6">
                <Image
                  src="/france.svg"
                  alt="France flag"
                  width={24}
                  height={24}
                  className="w-full h-full object-center object-contain"
                />
              </span>
            ) : (
              <span className="block w-6 h-6">
                <Image
                  src="/england.svg"
                  alt="England flag"
                  width={24}
                  height={24}
                  className="w-full h-full object-center object-contain"
                />
              </span>
            )}
          </span>
          <span
            className={clsx(
              "flex justify-center items-center w-4 h-4",
              open && "rotate-[180deg]"
            )}
          >
            <ChevronDownDarkIcon />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bottom-24 left-0 z-30 absolute bg-neutral-200 p-1 rounded-md w-full"
          >
            <ul className="flex flex-col gap-y-1">
              <li
                className={clsx(
                  "hover:bg-gray/5 px-3 py-1 rounded-md cursor-pointer",
                  language === "fr" && "bg-gray/10"
                )}
                onClick={() => handleLanguage("fr")}
              >
                <span className="block w-6 h-6">
                  <Image
                    src="/england.svg"
                    alt="England flag"
                    width={24}
                    height={24}
                    className="w-full h-full object-center object-contain"
                  />
                </span>
              </li>
              <li
                className={clsx(
                  "hover:bg-gray/5 px-3 py-1 rounded-md cursor-pointer",
                  language === "en" && "bg-gray/10"
                )}
                onClick={() => handleLanguage("en")}
              >
                <span className="block w-6 h-6">
                  <Image
                    src="/france.svg"
                    alt="France flag"
                    width={24}
                    height={24}
                    className="w-full h-full object-center object-contain"
                  />
                </span>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
