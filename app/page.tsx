import Image from "next/image";
import { Hero } from "@/components/section/Hero";
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import Schedule from "@/components/section/Schedule";
import About from "@/components/section/About";
import Marquee from "@/components/ui/marquee";
import { MarqueeSection } from "@/components/section/MarqueeSection";
import * as motion from "framer-motion/client";
import { GridBackground } from "@/components/GridBackground";

import Speaker from "@/components/section/Speakers";
import Sponsor from "@/components/section/Sponsor";
import FAQ from "@/components/section/FAQ";
import COC from "@/components/section/COC";
import Footer from "@/components/section/Footer";
export default function Home() {
  const slideInVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
        <div className="w-full h-svh">
          <GridBackground />
          <motion.div
            initial="hidden"
            className="w-full"
            animate="visible"
            variants={slideInVariants}
          >
            <Banner />
            <Navbar />
          </motion.div>
          <Hero />
          <About />
          <Schedule />
          <MarqueeSection />
          <Speaker />
          <Sponsor />
          <MarqueeSection />
          <FAQ />
          <COC />
          <Footer />
        </div>
        <About />
        <Schedule />
        <MarqueeSection />
      </main>
    </div>
  );
}
