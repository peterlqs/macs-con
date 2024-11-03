import React from "react";
import Image from "next/image";
import {
  ArrowRightIcon,
  CalendarIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { MapIcon } from "lucide-react";
import { MovingGradient } from "../MovingGradient";
import * as motion from "framer-motion/client";
import { GridBackground } from "../GridBackground";
import { RainbowButton } from "../ui/rainbow-button";

export function Hero() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <div className="relative w-full h-full flex-auto padding-section flex flex-col pt-[5vh] items-center justify-center  text-center">
      <MovingGradient />

      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          {" "}
          <p className="text-sm italic uppercase ">
            <span className="text-primary-blue">MA</span>CS presents
          </p>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={600}
            height={100}
            className="mt-4 mb-6 mx-auto"
          />
        </motion.div>
        <motion.h2
          className="text-3xl max-w-xl mb-6 mx-auto"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          Discover the latest in cybersecurity, connect with industry leaders,
          and showcase your talent.
        </motion.h2>
        <motion.div
          className="flex space-x-4 items-center justify-center mx-auto"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <Button variant={"secondary"}>
            Info <InfoCircledIcon className="ml-2" />
          </Button>
          <RainbowButton className="h-9 py-2 px-6 rounded-md">
            Ticket <ArrowRightIcon className="ml-2" />
          </RainbowButton>
        </motion.div>

        <motion.div
          id="infoBanner"
          className="relative grid grid-cols-2 gap-8 justify-between bg-background px-8 py-2 mt-[15vh] w-auto rounded-3xl"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <div className="flex gap-4">
            <div className="rounded-full border border-muted p-3">
              <CalendarIcon className="h-6 w-6" />
            </div>
            <div className="flex flex-col text-left justify-center">
              <p className="text-lg">Saturday, 7th of December, 2024</p>
              <p className="text-neutral-400 text-sm">10am - 4pm AEDT</p>
            </div>
          </div>{" "}
          <div className="flex gap-4">
            <div className="rounded-full border border-muted p-3">
              <MapIcon className="h-6 w-6" />
            </div>
            <div className="flex flex-col text-left justify-center">
              <p className="text-lg">Ainsworth Building & 4 Research Park Dr</p>
              <p className="text-neutral-400 text-sm">Macquarie Park</p>
            </div>
          </div>{" "}
        </motion.div>
      </motion.div>
    </div>
  );
}
