import { cn } from "@/lib/utils";
import Marquee from "../ui/marquee";
const allText = ["tech", "code", "learn", "macs", "workshop"];

export function MarqueeSection() {
  return (
    <div className="relative p-[2px]  inline-flex w-screen overflow-clip">
      <span className="absolute -z-10 inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#89c5f5_0%,#ffa366_25%,#ae9df5_50%,#f83b60_75%,#89c5f5_100%)]" />
      <div className="h-fit overflow-hidden">
        <div className="flex flex-row bg-black">
          <Marquee pauseOnHover className="[--duration:20s]">
            {allText.map((text, index) => (
              <div
                key={index}
                className="text-7xl italic uppercase font-bold mr-8"
              >
                {text}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
