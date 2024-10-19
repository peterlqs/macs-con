import { ArrowRightIcon, DownloadIcon } from "lucide-react";
import { Button } from "../ui/button";
import { GridBackground } from "../GridBackground";
import { MovingGradient } from "../MovingGradient";
import Image from "next/image";
import { SectionHeader } from "../SectionHeader";

export default function Schedule() {
  return (
    <div className="relative w-full section-container flex-auto padding-section flex flex-col pt-[15vh] items-center justify-center  text-center">
      <MovingGradient />
      <GridBackground />
      <SectionHeader
        title="Schedule"
        description="**Date:** October 25, 2024 
          <br />
          **Time:** 9:00 AM - 12:00 PM 
          <br />
          **Location:**  Room 101, Main Building
          <br />
          **Note:** Please arrive 15 minutes early to ensure a prompt start. 
          Light refreshments will be provided."
      />

      <div className="flex flex-col items-center gap-8">
        <div className="relative w-40rem overflow-hidden rounded-md  ">
          <Image
            src="/schedule.png"
            alt="Schedule"
            width={400}
            height={400}
            objectFit="cover"
            objectPosition="center"
            className="rounded-md"
          />
        </div>

        <Button variant="secondary" className="inline-flex w-fit">
          Download
          <DownloadIcon
            className="ml-2"
            size={
              16 // Size in pixels
            }
          />
        </Button>
      </div>
    </div>
  );
}
