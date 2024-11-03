"use client";

import * as motion from "framer-motion/client";
import { useEffect, useState } from "react";

function getRandomOffset(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function MovingGradient() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const gradientConfigs = [
    {
      className:
        " absolute left-[5%] top-[5%] blur-[1000px] opacity-10 bg-primary-purple h-80 w-80",
      animate: {
        x: [0, getRandomOffset(20, 70), 0],
        y: [0, getRandomOffset(20, 70), 0],
      },
    },
    {
      className:
        " absolute right-[5%] top-[10%] blur-[1000px] opacity-10 bg-primary-red h-80 w-80",
      animate: {
        x: [0, -getRandomOffset(20, 70), 0],
        y: [0, getRandomOffset(20, 70), 0],
      },
    },
    {
      className:
        "absolute left-[10%] bottom-[2%] blur-[1000px] opacity-10 bg-primary-orange h-80 w-80",
      animate: {
        x: [0, getRandomOffset(20, 70), 0],
        y: [0, -getRandomOffset(20, 70), 0],
      },
    },
    {
      className:
        "absolute right-[15%] bottom-[0%] blur-[1000px] opacity-10 bg-primary-blue h-80 w-80",
      animate: {
        x: [0, -getRandomOffset(20, 70), 0],
        y: [0, -getRandomOffset(20, 70), 0],
      },
    },
  ];

  return (
    <div className="-z-10 absolute inset-0 brightness-50 sm:brightness-100">
      {isDesktop &&
        gradientConfigs.map((config, index) => (
          <motion.div
            key={index}
            className={config.className}
            animate={config.animate}
            transition={{ duration: 5, repeat: Infinity }}
          />
        ))}
      {!isDesktop &&
        gradientConfigs.map((config, index) => (
          <div key={index} className={config.className} />
        ))}
    </div>
  );
}
