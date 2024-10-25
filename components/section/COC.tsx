import { ArrowRightIcon, DownloadIcon } from "lucide-react";
import { Button } from "../ui/button";
import { GridBackground } from "../GridBackground";
import { MovingGradient } from "../MovingGradient";
import Image from "next/image";
import { SectionHeader } from "../SectionHeader";
import { RainbowButton } from "../ui/rainbow-button";
export default function COC() {
    return (
      <div className="relative w-full section-container flex-auto padding-section flex flex-col pt-[15vh] items-center justify-center  text-center">
        <MovingGradient />
        <GridBackground />
        <SectionHeader
          title="Code of Conduct"
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
        <div className="relative w-full section-container flex-auto mb-20 items-center justify-center  text-left bg-black rounded-lg outline outline-zinc-800 outline-2 p-8">
        <p className="mb-4">  We have NO TOLERANCE for physical/verbal/sexual harassment of any human!
            Our “Code of Conduct” is “Be Excellent to Each Other” AKA the Golden Rule. Failing that, it is “Do not be an Ass* or we will kick your ass out!”.
            </p>
            
           <p className="mb-4">Why do we have an official anti-harassment policy for BSides Canberra? First, it is necessary (unfortunately). Harassment at events is incredibly common. Second, it sets expectations for behavior at the event. Simply having an anti-harassment policy can prevent harassment all by itself. Third, it encourages people to attend who have had bad experiences at other events. Finally, it gives event staff instructions on how to handle harassment quickly, with the minimum amount of disruption or bad press for the event.
           </p> 

           <p className="mb-4" >
            Harassment includes offensive verbal comments related to gender, sexual orientation, disability, gender identity, age, race, religion, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. Participants asked to stop any harassing behavior are expected to comply immediately.
            </p>

            Asking questions of a speaker during their talk, to get clarity or debate a point is NOT being an ass - heckling or haranguing the speaker IS. Harassment online or in electronic venues will be treated as seriously as physical harassment. If you are not sure, ask, or err on the side of basic decency and common courtesy. If what they are doing would not be acceptable to have done to you, your best friend, your worst enemy, your sister, niece, daughter, brother, nephew, son, mother, father, or any human being, do not let them treat anyone else that way - whether you know them or not. If someone asks you to stop – stop.
        
        </div>
        <div className="flex justify-between items-center w-full   bg-black rounded-lg outline outline-zinc-800 outline-2 p-8 ">
          <span className = "text-xl font-semibold"> GET YOUR TICKET NOW</span>  
        <Button className="w-18 h-12"
        variant={"cta"}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), linear-gradient(to right, #89c5f5, #ffa366, #ae9df5, #f83b60)",
        }}
      >
        BUY NOW
       </Button> </div>
        </div>
        );
    }