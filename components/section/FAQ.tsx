import { MovingGradient } from "../MovingGradient";
import { SectionHeader } from "../SectionHeader";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div
      id="faq"
      className="relative w-full section-container flex-auto padding-section flex flex-col  items-center justify-center  text-center"
    >
      <MovingGradient />
      {/* <GridBackground/> */}
      <SectionHeader
        title="FAQ"
        description=""
        className="bg-background"
      />

      <Accordion type="single" collapsible className="w-full space-y-8 ">
        <AccordionItem value="item-1">
          <AccordionTrigger> When and where is the conference taking place? </AccordionTrigger>
          <AccordionContent>
            This conference is taking place on Saturday 7th of December at Macquarie University Wallamuttgal Campus in North Ryde.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" >
          <AccordionTrigger>How do I register for the conference?</AccordionTrigger>
          <AccordionContent>
            You can grab your tickets through <br />
            Humanatix here:  <a href="https://events.humanitix.com/macscon-2024" className="text-primary-blue">https://events.humanitix.com/macscon-2024 </a>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Can I attend the conference virtually? </AccordionTrigger>
          <AccordionContent>
            This conference has multiple in-person opportunities that cannot be translated online meaning there will be no virtual attendance.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger> Can I come late/leave early?</AccordionTrigger>
          <AccordionContent>
            Registration will be open from 9.30am-10.15am for a prompt start. If you would like to leave early, you are more than welcome to.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger> Can I bring a friend?</AccordionTrigger>
          <AccordionContent>
          You are more than welcome to purchase a ticket for a friend. For fairness, anyone without a ticket will be asked to leave the event.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Do I have to wear my lanyard and badge?</AccordionTrigger>
          <AccordionContent>
          Yes! You must wear your lanyard and badge while you are at the conference. If you are seen without one, you may be asked to leave the conference. 
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger> What is included in my ticket?  </AccordionTrigger>
          <AccordionContent>
          All access to workshops, short talks, Capture the Flag Competition, an exclusive MACSCON lanyard, provided catering and so much more!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger> Are there discounts for group registrations or students?  </AccordionTrigger>
          <AccordionContent>
            All group registrations can be found here: <a href="https://events.humanitix.com/macscon-2024" className="text-primary-blue"> https://events.humanitix.com/macscon-2024.</a><br />
            All student tickets have been set to a discounted price.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
          <AccordionTrigger> Will session recordings be available after the conference?  </AccordionTrigger>
          <AccordionContent>
          Unfortunately with the way our university is set up, we are unable to record any of the short talks or workshops.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10">
          <AccordionTrigger> Will photos/videos be taken? </AccordionTrigger>
          <AccordionContent>
            Yes, there will be active photographers taking photos around the event. If you do not want to be photographed, please let us know at registration so we can give you a yellow sticker to put on your badge.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-11">
          <AccordionTrigger> Is parking available at the venue? </AccordionTrigger>
          <AccordionContent>
          Yes! If you grab your ticket by the 28th of November, you can fill out the parking registration to get free parking. Tickets purchased after this time will not be eligible for free parking. <br />
          
          <br />Free parking will only be available in the South 2 carpark which can be found here: <br /> <a href="https://www.mq.edu.au/__data/assets/pdf_file/0006/1182678/Campus-Map_parking.pdf" className="text-primary-blue">https://www.mq.edu.au/__data/assets/pdf_file/0006/1182678/Campus-Map_parking.pdf</a>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-12">
          <AccordionTrigger>Is the venue wheelchair accessible? </AccordionTrigger>
          <AccordionContent>
          Yes! The university is incredibly accessible and all buildings have elevators needed to get to each floor.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-13">
          <AccordionTrigger> Will meals be provided, and are there vegetarian/vegan options? </AccordionTrigger>
          <AccordionContent>
          Yes, your ticket includes catering during our networking event. We have worked with our sponsor to adhere to as many dietary requirements as possible but please note we may not be able to fill all. <br />
          
          <br/>Alternate food vendors can be found at Macquarie Shopping Centre a 5 min walk away or in the Central Courtyard on campus.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-14">
          <AccordionTrigger> Is there an emergency number I can call during the conference?  </AccordionTrigger>
          <AccordionContent>
          If you need assistance during the conference, please talk to one of our volunteers who will be wearing all black and a blue badge. Alternateively, you can call (02) 9850 7112 for Macquarie University security. In cases of emergency, please contact (02) 9850 9999 which will put you on a three way call with NSW Emergency Services and Campus Security. <br />

          <br /> Read more here: <a href= "https://www.mq.edu.au/about/campus-services/security"   className="text-primary-blue" > https://www.mq.edu.au/about/campus-services/security </a>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-15">
          <AccordionTrigger> Where can I find the conference schedule?</AccordionTrigger>
          <AccordionContent>
            The conference schedule will be posted soon! We will announce it once we have all speakers and activities confirmed on our social media platforms (Instagram, Facebook, Discord & LinkedIn) so please give us a follow there!
          </AccordionContent>
        </AccordionItem>

       

      </Accordion>
    </div>
  );
}
