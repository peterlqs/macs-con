"use client";

import {
  ArrowRightIcon,
  CalendarIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import * as motion from "framer-motion/client";
import { MapIcon } from "lucide-react";
import Image from "next/image";
import { MovingGradient } from "../MovingGradient";
import { Button } from "../ui/button";
import { RainbowButton } from "../ui/rainbow-button";
import Link from "next/link";
import { scrollToSection } from "../Navbar";

export function Hero() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <div className="w-full h-full flex-auto padding-section flex flex-col pt-[10svh] md:pt-[10svh] items-center justify-center  text-center">
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
          className="text-3xl max-w-[500px] mb-6 mx-auto"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          Discover the latest in technology, meet industry, showcase your talent
          and get inspired!
        </motion.h2>
        <motion.div
          className="flex space-x-4 items-center justify-center mx-auto"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <Button
            variant={"secondary"}
            className="z-50"
            onClick={scrollToSection("#about")}
          >
            Info <InfoCircledIcon className="ml-2" />
          </Button>
          <Link href="https://events.humanitix.com/macscon-2024">
            <RainbowButton className="h-9 py-2 px-6 rounded-md">
              Tickets <ArrowRightIcon className="ml-2" />
            </RainbowButton>
          </Link>
        </motion.div>

        <motion.div
          id="infoBanner"
          className="relative z-20 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-between bg-background px-4 md:px-8 py-4 md:py-2 mt-[15vh] w-auto rounded-3xl"
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <div className="flex gap-4">
            <div className="rounded-full h-fit border border-muted p-3">
              <CalendarIcon className="h-6 w-6" />
            </div>
            <div className="flex flex-col text-left justify-center">
              <p className="text-lg">Saturday, 7th of December, 2024</p>
              <p className="text-neutral-400 text-sm">10am - 4pm AEDT</p>
            </div>
          </div>{" "}
          <div className="flex gap-4">
            <div className="rounded-full h-fit border border-muted p-3">
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
