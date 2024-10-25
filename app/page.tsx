import Image from "next/image";
import { Hero } from "@/components/section/Hero";
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import Schedule from "@/components/section/Schedule";
import About from "@/components/section/About";
import Marquee from "@/components/ui/marquee";
import { MarqueeSection } from "@/components/section/MarqueeSection";
import Speaker from "@/components/section/Speakers"
import Sponsor from "@/components/section/Sponsor";
import FAQ from "@/components/section/FAQ";
import COC from "@/components/section/COC";
import Footer from "@/components/section/Footer"
export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full h-full">
        <div className="relative flex flex-col min-h-svh w-full h-svh">
          <Banner />
          <Navbar />
          <Hero />
          <About />
          <Schedule />
          <MarqueeSection />
          <Speaker />
          <Sponsor />
          <FAQ/>
          <COC/>
          <Footer/>
        </div>
      </main>
    </div>
  );
}
