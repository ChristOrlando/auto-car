import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Product from "@/components/product";
import Target from "@/components/target";

export default function Home() {
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
