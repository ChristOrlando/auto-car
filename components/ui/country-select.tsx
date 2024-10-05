import React, {
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChevronDownIcon from "../icon/chevron-down";
import Image from "next/image";
import clsx from "clsx";
import { Language } from "../navbar";
import i18n from "@/i18n";

type Props = {
  setLanguage: Dispatch<SetStateAction<Language>>;
  language: string;
};

export default function CountrySelect({
  setLanguage,
  language,
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
    <>
      <div className="relative" ref={ref}>
        <div
          className="flex items-center gap-x-1 cursor-pointer"
          onClick={handleOpen}
        >
          <span className="flex w-6 h-6">
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
              "flex items-center w-4 h-4",
              open && "rotate-[180deg]"
            )}
          >
            <ChevronDownIcon />
          </span>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="top-7 left-0 z-40 absolute bg-white shadow shadow-neutral-500/20 p-1 rounded-md"
            >
              <ul className="flex flex-col gap-y-1">
                <li
                  className={clsx(
                    "hover:bg-neutral-100/20 px-3 py-1 rounded-md cursor-pointer",

                    language === "fr" && "bg-neutral-50 hover:bg-neutral-50"
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
                    "hover:bg-neutral-100/20 px-3 py-1 rounded-md cursor-pointer",
                    language === "en" && "bg-neutral-50 hover:bg-neutral-50"
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
    </>
  );
}
