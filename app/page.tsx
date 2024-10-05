"use client";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Product from "@/components/product";
import Target from "@/components/target";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { scroller } from "react-scroll";

export default function Home() {
  const path = usePathname();

  useEffect(() => {
    console.log({ path: path.includes("#") });
    if (path.includes("#")) {
      const sectionId = path.split("#")[1];
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [path]);
  return (
    <div className="pt-3">
      <Hero />
      <Product />
      <Target />
      <Contact />
      <Footer />
    </div>
  );
}
