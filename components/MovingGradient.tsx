import * as motion from "framer-motion/client";

function getRandomOffset(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function MovingGradient() {
  const gradientConfigs = [
    {
      className:
        "absolute left-[5%] top-[20%] blur-[1000px] opacity-10 bg-primary-purple h-80 w-80",
      animate: {
        x: [0, getRandomOffset(20, 70), 0],
        y: [0, getRandomOffset(20, 70), 0],
      },
    },
    {
      className:
        "absolute right-[5%] top-[10%] blur-[1000px] opacity-10 bg-primary-red h-80 w-80",
      animate: {
        x: [0, -getRandomOffset(20, 70), 0],
        y: [0, getRandomOffset(20, 70), 0],
      },
    },
    {
      className:
        "absolute left-[10%] bottom-[5%] blur-[1000px] opacity-10 bg-primary-orange h-80 w-80",
      animate: {
        x: [0, getRandomOffset(20, 70), 0],
        y: [0, -getRandomOffset(20, 70), 0],
      },
    },
    {
      className:
        "absolute right-[5%] bottom-[10%] blur-[1000px] opacity-10 bg-primary-blue h-80 w-80",
      animate: {
        x: [0, -getRandomOffset(20, 70), 0],
        y: [0, -getRandomOffset(20, 70), 0],
      },
    },
  ];

  return (
    <div className="-z-10">
      {gradientConfigs.map((config, index) => (
        <motion.div
          key={index}
          className={config.className}
          animate={config.animate}
          transition={{ duration: 5, repeat: Infinity }}
        />
      ))}
    </div>
  );
}
