import Contact from "@/components/contact";
import Engagment from "@/components/engagment";
import Footer from "@/components/footer";
import Goals from "@/components/goals";
import React from "react";

export default function About() {
  return (
    <div className="pt-3">
      <Goals />
      <Engagment />
      <Contact red />
      <Footer />
    </div>
  );
}
