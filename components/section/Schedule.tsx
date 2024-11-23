import { ArrowRightIcon, DownloadIcon } from "lucide-react";
import { Button } from "../ui/button";
import { GridBackground } from "../GridBackground";
import { MovingGradient } from "../MovingGradient";
import Image from "next/image";
import { SectionHeader } from "../SectionHeader";
import ComingSoon from "../ComingSoon";

export default function Schedule() {
  return (
    <div
      id="schedule"
      className="relative w-full section-container flex-auto padding-section flex flex-col  items-center justify-center  text-center"
    >
      <MovingGradient />
      {/* <GridBackground/> */}
      <SectionHeader
        title="Schedule"
        description=""
        className="bg-background"
      />
      <ComingSoon />

      {/* <div className="flex flex-col items-center gap-8">
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
      </div> */}
    </div>
  );
}
