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
        <div className="px-8">
        <GridBackground />
        <MovingGradient />
        <div className="flex justify-between w-full">
        <div className="flex gap-4 items-center">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={150}
            height={100}
            className="mt-4 mb-6"
          />
        </div>
      
        <div className="flex gap-8 ">
          <div className="flex gap-4 ">
            <div className="rounded-full border border-muted p-3">
              <CalendarIcon className="h-6 w-6" />
            </div>
            <div className="flex flex-col text-left justify-center">
              <p className="text-lg">Saturday, 7th of December, 2024</p>
              <p className="text-neutral-400 text-sm">10am - 4pm AEDT</p>
            </div>
          </div>
      
          <div className="flex gap-4">
            <div className="rounded-full border border-muted p-3">
              <MapIcon className="h-6 w-6" />
            </div>
            <div className="flex flex-col text-left justify-center">
              <p className="text-lg">Ainsworth Building & 4 Research Park Dr</p>
              <p className="text-neutral-400 text-sm">Macquarie Park</p>
            </div>
          </div>
          </div>
        </div>
        <p className="text-center w-fit mx-auto rounded-full mt-12  text-slate-200">
          © 2024 Macquarie Association of Computing Students
        </p>
         <p className="text-center mb-4 w-fit mx-auto rounded-full  text-slate-200" >
         Made with love and inspiration from UTS:CSECCON, BSides2024 and Astronomy Open Night

         </p>
      </div>
      
    );
}