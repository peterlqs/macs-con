import Image from "next/image";
import { Hero } from "@/components/section/Hero";
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import Schedule from "@/components/section/Schedule";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full h-full">
        <div className="relative flex flex-col min-h-svh w-full h-svh">
          <Banner />
          <Navbar />
          <Hero />
          <Schedule />
        </div>
      </main>
    </div>
  );
}
