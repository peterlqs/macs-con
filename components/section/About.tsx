import { MovingGradient } from "../MovingGradient";
import { SectionHeader } from "../SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function About() {
  const activities = [
    {
      title: "Hands-on Workshops",
      description:
        "Dive into practical sessions and enhance your skills with the latest tech.",
    },
    {
      title: "Dynamic Talks",
      description:
        "Hear from industry leaders and gain insights into the future of computing and technology.",
    },
    {
      title: "Student Showcases",
      description:
        "Be inspired by the innovative projects from both undergraduate and postgraduate students.",
    },

    {
      title: "Industry networking session with catering!",
      description: "🍕 Pizza included.",
    },
    {
      title: "CTF Competition",
      description:
        "Run by MQCybersec x SecDim with over $500 worth of prizes! 😱",
    },
    {
      title: "And much more!",
      description: "Stay tuned for more updates!",
    },
  ];

  const getGradientByIndex = (index: number) => {
    const gradients = [
      "from-primary to-blue-50",
      "from-primary to-red-50",
      "from-primary to-purple-50",
      "from-primary to-orange-50",
    ];
    return gradients[index % gradients.length];
  };

  //                   <br/> This event will feature a variety of activities including short talks and interactive workshops from industry leaders, industry stalls, a <q>make your own portfolio</q> workshop, and inspiring student and staff demonstrations. You'll also have the chance to say hello to the amazing student societies from the Faculty of Science and Engineering! <br/>

  return (
    <div
      id="about"
      // className=" bg-secondary-foreground overflow-hidden padding-section-y z-10 rounded-3xl text-secondary relative w-full section-container "
      className=" bg-secondary-foreground overflow-hidden padding-section section-container z-10 rounded-3xl text-secondary relative w-full section-container "
    >
      {/* <MovingGradient /> */}
      <div className="absolute inset-0 flex justify-start items-start">
        <div className="-z-10 ml-12 w-60 h-60 bg-primary-purple blur-3xl opacity-30"></div>
      </div>
      <SectionHeader
        title="About"
        description="
                  Join us for our first ever MACSCON - a technology convention created by students, for students! Our mission is to connect aspiring tech enthusiasts to industry professionals in an exciting and engaging environment. <br/>


                  <br/> Whether you're eager to learn new skills, ready to connect with industry or just want to come and say hello to your fellow MACS members, MACSCON promises a day full of fun and inspiration!"
        className="bg-secondary-foreground "
      />
      {/* <Carousel
        className="w-full px-2 md:px-0"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/2"
            >
              <div className="relative flex items-center justify-center rounded-tl-3xl rounded-br-3xl">
                <img
                  src="/schedule.png"
                  alt="Schedule"
                  className="rounded-md aspect-[4/3] object-cover rounded-tl-3xl rounded-br-3xl"
                />
                <div className="p-2 max-w-xs absolute bottom-0 left-0 bg-secondary-foreground rounded-tr-xl">
                  <h3 className="font-semibold">Workshop</h3>
                  <p className="text-sm">
                    Lorem ipsum is amazing. That is why we use it and another
                    reason here.
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex gap-2 justify-center mt-4">
          <CarouselPrevious className="bg-primary-foreground text-white" />
          <CarouselNext className="bg-primary-foreground text-white" />
        </div>
      </Carousel> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 justify-center">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`bg-gradient-to-b from-white ${getGradientByIndex(
              index
            )} rounded-lg border border-neutral-400 p-6 flex flex-col items-start h-48`}
          >
            <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
            <p className="text-gray-700">{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
