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
            className="bg-background"
        />
      
 <div className="space-y-12">
  {/* Event Sponsors */}
  <div>
    <h1 className="text-center text-3xl font-semibold">EVENT SPONSORS</h1>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mt-4">
      <div className="bg-black p-4 rounded-md">
        <img src="/Atlassian.png" alt="Event Sponsor" className="aspect-video object-cover rounded-tl-3xl rounded-br-3xl" />
      </div>
      <div className="bg-black p-4 rounded-md">
        <img src="/Atlassian.png" alt="Event Sponsor" className="aspect-video object-cover rounded-tl-3xl rounded-br-3xl" />
      </div>
      <div className="bg-black p-4 rounded-md">
        <img src="/Atlassian.png" alt="Event Sponsor" className="aspect-video object-cover rounded-tl-3xl rounded-br-3xl" />
      </div>
    </div>
  </div>

  {/* Platinum Sponsor */}
  <div>
    <h1 className="text-center text-gray-200 text-3xl font-semibold">PLATINUM SPONSOR</h1>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mt-4">
      <div className="bg-black p-4 rounded-md">
        <img src="/Atlassian.png" alt="Platinum Sponsor" className="aspect-video object-cover rounded-tl-3xl rounded-br-3xl" />
      </div>
      <div className="bg-black p-4 rounded-md">
        <img src="/Atlassian.png" alt="Platinum Sponsor" className="aspect-video object-cover rounded-tl-3xl rounded-br-3xl" />
      </div>
      <div className="bg-black p-4 rounded-md">
        <img src="/Atlassian.png" alt="Platinum Sponsor" className="aspect-video object-cover rounded-tl-3xl rounded-br-3xl" />
      </div>
    </div>
  </div>

  {/* Gold Sponsor */}
  <div>
    <h1 className="text-center text-yellow-500 text-3xl font-semibold">GOLD SPONSOR</h1>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mt-4">
      <div className="bg-black p-4 rounded-md">
        <img src="/Atlassian.png" alt="Gold Sponsor" className="aspect-video object-cover rounded-tl-3xl rounded-br-3xl" />
      </div>
      <div className="bg-black p-4 rounded-md">
        <img src="/Atlassian.png" alt="Gold Sponsor" className="aspect-video object-cover rounded-tl-3xl rounded-br-3xl" />
      </div>
      <div className="bg-black p-4 rounded-md">
        <img src="/Atlassian.png" alt="Gold Sponsor" className="aspect-video object-cover rounded-tl-3xl rounded-br-3xl" />
      </div>
    </div>
  </div>

  {/* Silver Sponsor */}
  <div>
    <h1 className="text-center text-gray-300 text-3xl font-semibold">SILVER SPONSOR</h1>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mt-4">
      <div className="bg-black p-4 rounded-md">
        <img src="/Atlassian.png" alt="Silver Sponsor" className="aspect-video object-cover rounded-tl-3xl rounded-br-3xl" />
      </div>
      <div className="bg-black p-4 rounded-md">
        <img src="/Atlassian.png" alt="Silver Sponsor" className="aspect-video object-cover rounded-tl-3xl rounded-br-3xl" />
      </div>
      <div className="bg-black p-4 rounded-md">
        <img src="/Atlassian.png" alt="Silver Sponsor" className="aspect-video object-cover rounded-tl-3xl rounded-br-3xl" />
      </div>
    </div>
  </div>
</div>





        </div>
        
      
    );
  }
  