import { MovingGradient } from "../MovingGradient";
import { SectionHeader } from "../SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function About() {
  return (
    <div
      id="about"
      className=" bg-secondary-foreground overflow-hidden padding-section-y z-10 rounded-3xl text-secondary relative w-full section-container "
    >
      <div className="padding-section-x">
        <MovingGradient />
        <div className="absolute inset-0 flex justify-start items-start">
          <div className="-z-10 ml-12 w-60 h-60 bg-primary-purple blur-3xl opacity-50"></div>
        </div>
        <SectionHeader
          title="About"
          description="**Date:** October 25, 2024
                  <br />
                  **Time:** 9:00 AM - 12:00 PM
                  <br />
                  **Location:**  Room 101, Main Building
                  <br />
                  **Note:** Please arrive 15 minutes early to ensure a prompt start.
                  Light refreshments will be provided."
          className="bg-secondary-foreground "
        />
      </div>
      <Carousel
        className="w-full px-2 md:px-0"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/2"
            >
              <div className="relative flex items-center justify-center rounded-tl-3xl rounded-br-3xl">
                <img
                  src="/schedule.png"
                  alt="Schedule"
                  className="rounded-md aspect-[4/3] object-cover rounded-tl-3xl rounded-br-3xl"
                />
                <div className="p-2 max-w-xs absolute bottom-0 left-0 bg-secondary-foreground rounded-tr-xl">
                  <h3 className="font-semibold">Workshop</h3>
                  <p className="text-sm">
                    Lorem ipsum is amazing. That is why we use it and another
                    reason here.
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
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
    </div>
  );
}
