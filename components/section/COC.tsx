import { MovingGradient } from "../MovingGradient";
import { SectionHeader } from "../SectionHeader";
import { Button } from "../ui/button";
export default function COC() {
  return (
    <div className="relative w-full section-container flex-auto padding-section flex flex-col  items-center justify-center  text-center">
      <MovingGradient />
      {/* <GridBackground/> */}
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
        <p className="mb-4">
          {" "}
          At MACSCON (and MACS in general), our rules are simple: Don’t create problems, and there won’t be a problem. 
          We have a ZERO TOLERANCE policy for harassment of any kind including verbal, physical and sexual harassment to any person.
        </p>
        <p className="mb-4">
        Harassment includes offensive verbal comments related to gender, sexual orientation, disability, gender identity, age, race, religion, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.
        </p>
        <p className="mb-4">
        Participants asked to stop any harassing behaviour(s) are expected to comply immediately. This policy applies to both physical and online interactions.
        </p>
        <p className="mb-4">
        Any patron displaying unlawful and/or disruptive behaviour will be asked to leave immediately. If this is not followed, patrons exhibiting this behaviour will be kicked out and banned from any future MACS events as well as reported to Macquarie University and further authorities if need be.
        </p>
        <p>
        Any prohibited, unwelcome or unprofessional behaviour that is witnessed or suspected, should be reported immediately to a volunteer who can be discerned by their BLUE badge.
        Thank you for helping us create a safe and welcoming environment for everyone!
        </p>
      </div>
      {/* <div className="flex justify-between items-center w-full   bg-black rounded-lg outline outline-zinc-800 outline-2 p-8 ">
        <span className="text-3xl italic font-semibold">
          {" "}
          GET YOUR TICKET NOW
        </span>
        <Button
          // className="w-18 h-12"
          className="text-2xl p-8"
          variant={"cta"}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), linear-gradient(to right, #89c5f5, #ffa366, #ae9df5, #f83b60)",
          }}
        >
          BUY NOW
        </Button>{" "}
      </div> */}
      <div className="relative h-fit overflow-hidden p-[2px] rounded-lg w-full ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#89c5f5_0%,#ffa366_25%,#ae9df5_50%,#f83b60_75%,#89c5f5_100%)]" />
        <div
          id="headerTitle"
          className={`px-4 backdrop-blur-3xl rounded-lg w-full bg-black flex justify-between items-center p-8`}
        >
          <span className="text-3xl italic font-semibold">
            {" "}
            GET YOUR TICKET NOW
          </span>
          <Button
            // className="w-18 h-12"
            className="text-2xl p-8"
            variant={"cta"}
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), linear-gradient(to right, #89c5f5, #ffa366, #ae9df5, #f83b60)",
            }}
          >
            BUY NOW
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
