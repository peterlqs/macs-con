import { ArrowRightIcon, DownloadIcon } from "lucide-react";
import { Button } from "../ui/button";
import { GridBackground } from "../GridBackground";
import { MovingGradient } from "../MovingGradient";
import Image from "next/image";
import { SectionHeader } from "../SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import EmblaCarousel from "../test";
import { EmblaOptionsType } from "embla-carousel";

export default function Schedule() {
  return (
    <div className="relative w-full section-container flex-auto padding-section flex flex-col pt-[15vh] items-center justify-center  text-center">
      <MovingGradient />
      <GridBackground />
      <SectionHeader
        title="Speakers"
        description="**Date:** October 25, 2024 
          <br />
          **Time:** 9:00 AM - 12:00 PM 
          <br />
          **Location:**  Room 101, Main Building
          <br />
          **Note:** Please arrive 15 minutes early to ensure a prompt start. 
          Light refreshments will be provided."
        className="bg-background"
      />
  <Carousel
        className="w-full "
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
          
      <CarouselItem
        key={index}
         className="pl-5 md:basis-1/4 lg:basis-1/4"
        >
           <div className="relative flex flex-col items-center justify-center bg-black rounded-tl-3xl rounded-br-3xl  p-4">
              <img
                src="/speakers.png"
                alt="Speakers"
                className="aspect-video"
              />
              <div className=" max-w-xs mt-6 rounded-tr-xl text-left "> 
                <h1 className="font-bold text-2xl mb-2">Alex Johnson</h1>
                <h2 className="text-muted-foreground text-lg mb-4  ">Lead UX Designer at Acme Corp</h2>
                <p className="text-sm">
                  Alex is a passionate UX designer with 10 years of experience crafting intuitive and user-centered designs. He specializes in designing mobile-first experiences and has a deep understanding of user research and usability testing.
                </p>
              </div>
            </div>
      </CarouselItem>

          ))}
        </CarouselContent>
        <div className="flex gap-2 justify-center mt-4">
          <CarouselPrevious className="bg-primary-foreground text-white" />
          <CarouselNext className="bg-primary-foreground text-white" />
        </div>
      </Carousel>

      
      </div>
  );
}
