import { ArrowRightIcon, DownloadIcon } from "lucide-react";
import { Button } from "../ui/button";
import { GridBackground } from "../GridBackground";
import { MovingGradient } from "../MovingGradient";
import Image from "next/image";
import { SectionHeader } from "../SectionHeader";
export default function Sponsor() {
    return (
      <div className="relative w-full section-container flex-auto padding-section flex flex-col pt-[15vh] items-center justify-center  text-center">
        <MovingGradient />
        <GridBackground />
        <SectionHeader
          title="Sponsor"
          description="
            Please arrive 15 minutes early to ensure a prompt start. 
            Light refreshments will be provided."
        />
        </div>
        
      
    );
  }
  