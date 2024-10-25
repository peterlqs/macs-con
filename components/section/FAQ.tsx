import { ArrowRightIcon, DownloadIcon } from "lucide-react";
// import { Button } from "../ui/button";
import { GridBackground } from "../GridBackground";
import { MovingGradient } from "../MovingGradient";
import Image from "next/image";
import { SectionHeader } from "../SectionHeader";
import { ChevronRight } from "lucide-react"
 
import { Button } from "@/components/ui/button"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function FAQ() {
    return (
      <div className="relative w-full section-container flex-auto padding-section flex flex-col pt-[15vh] items-center justify-center  text-center">
        <MovingGradient />
        <GridBackground />
        <SectionHeader
          title="FAQ"
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

<Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
     <AccordionTrigger> What is MACSCON?</AccordionTrigger> 
        <AccordionContent>
        MACSCON 2024 is the first ever student-run conference designed to  connect aspiring tech enthusiasts with industry professionals. It's a  chance to learn new skills, network with experts, and explore the  exciting world of technology.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What is MACSCON?</AccordionTrigger>
        <AccordionContent>
        MACSCON 2024 is the first ever student-run conference designed to  connect aspiring tech enthusiasts with industry professionals. It's a  chance to learn new skills, network with experts, and explore the  exciting world of technology.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What is MACSCON?</AccordionTrigger>
        <AccordionContent>
        MACSCON 2024 is the first ever student-run conference designed to  connect aspiring tech enthusiasts with industry professionals. It's a  chance to learn new skills, network with experts, and explore the  exciting world of technology.
        </AccordionContent>
      </AccordionItem>
    </Accordion>





  </div>
      );
}