import { GridBackground } from "../GridBackground";
import Image from "next/image";
import { MovingGradient } from "../MovingGradient";
import { MapIcon } from "lucide-react";
import {
    ArrowRightIcon,
    CalendarIcon,
    InfoCircledIcon,
  } from "@radix-ui/react-icons";
  import * as motion from "framer-motion/client";
export default function COC() {
  return (
      <div className="px-4 md:px-8 py-8">
          <GridBackground />
          <MovingGradient />
          <div className="lg:flex lg:justify-between w-full grid sm:grid-rows-3 gap-4">
              
              <div className="flex gap-4 items-center justify-center lg:row-start-1 sm:col-start-1">
                  <Image
                      src="/logo.svg"
                      alt="Logo"
                      width={150}
                      height={100}
                      className="w-24 md:w-36 lg:w-40"
                  />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  
                  <div className="flex gap-4 items-center">
                      <div className="rounded-full border border-muted p-3">
                          <CalendarIcon className="h-6 w-6 md:h-8 md:w-8" />
                      </div>
                      <div className="flex flex-col text-left justify-center">
                          <p className="text-sm md:text-base lg:text-lg">Saturday, 7th of December, 2024</p>
                          <p className="text-neutral-400 text-xs md:text-sm">10am - 4pm AEDT</p>
                      </div>
                  </div>
                  
                  <div className="flex gap-4 items-center">
                      <div className="rounded-full border border-muted p-3">
                          <MapIcon className="h-6 w-6 md:h-8 md:w-8" />
                      </div>
                      <div className="flex flex-col text-left justify-center">
                          <p className="text-sm md:text-base lg:text-lg">Ainsworth Building & 4 Research Park Dr</p>
                          <p className="text-neutral-400 text-xs md:text-sm">Macquarie Park</p>
                      </div>
                  </div>
                  
              </div>
          </div>
          
          <div className="text-center w-fit mx-auto mt-4 md:mt-6 ">
              <p className="text-xs md:text-sm lg:text-base text-slate-200">
                  © 2024 Macquarie Association of Computing Students
              </p>
              <p className="text-xs md:text-sm lg:text-base text-slate-200">
                  Made with love and inspiration from UTS:CSECCON, BSides2024, and Astronomy Open Night
              </p>
          </div>
      </div>
  );
}
