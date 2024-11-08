import { ArrowRightIcon, DownloadIcon } from "lucide-react";
import { Button } from "../ui/button";
import { GridBackground } from "../GridBackground";
import { MovingGradient } from "../MovingGradient";
import Image from "next/image";
import { SectionHeader } from "../SectionHeader";
import React from "react";

interface SponsorSectionProps {
  title: string;
  titleColor: string;
  altText: string;
  images: string[];
}

const SponsorSection: React.FC<SponsorSectionProps> = ({
  title,
  titleColor,
  altText,
  images,
}) => (
  <div>
    <h4
      className={`text-center ${titleColor} text-4xl italic md:text-5xl font-semibold mb-8 md:mb-12`}
    >
      {title}
    </h4>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((imageSrc, index) => (
        <div
          key={index}
          className="bg-black p-6 sm:p-8 md:p-12 rounded-md flex items-center justify-center rounded-tl-large rounded-br-large"
        >
          <Image
            src={imageSrc}
            alt={`${altText} ${index + 1}`}
            className="object-cover"
            width={400}
            height={400}
          />
        </div>
      ))}
    </div>
  </div>
);

export default function Sponsor() {
  return (
    <div
      id="sponsors"
      className="relative w-full section-container flex-auto padding-section flex flex-col pt-[10vh] md: items-center justify-center text-center"
    >
      <MovingGradient />
      {/* <GridBackground/> */}
      <SectionHeader
        title="Sponsor"
        description="Please arrive 15 minutes early to ensure a prompt start. Light refreshments will be provided."
        className="bg-background"
      />

      <div className="space-y-8 md:space-y-24">
        <SponsorSection
          title="UNIVERSITY SPONSORS"
          titleColor="bg-gradient-to-r from-[#A6192E] to-[#d0ccc1] inline-block text-transparent bg-clip-text"
          altText="Event Sponsor"
          images={["/Atlassian.png", "/Atlassian.png", "/Atlassian.png"]}
        />

        <SponsorSection
          title="EVENT SPONSORS"
          titleColor="bg-gradient-to-r from-[#FFA366] via-[#89C5F5] to-[#F83B60] inline-block text-transparent bg-clip-text"
          altText="Event Sponsor"
          images={["/Atlassian.png", "/Atlassian.png", "/Atlassian.png"]}
        />
        <SponsorSection
          title="PLATINUM SPONSOR"
          titleColor="bg-gradient-to-r from-white to-[#95C5F1] inline-block text-transparent bg-clip-text"
          altText="Platinum Sponsor"
          images={["/Atlassian.png", "/Atlassian.png", "/Atlassian.png"]}
        />
        <SponsorSection
          title="GOLD SPONSOR"
          titleColor="bg-gradient-to-r from-[#ECC100] to-[#95C5F1] inline-block text-transparent bg-clip-text"
          altText="Gold Sponsor"
          images={["/Atlassian.png", "/Atlassian.png", "/Atlassian.png"]}
        />
        <SponsorSection
          title="SILVER SPONSOR"
          titleColor="bg-gradient-to-r from-[#8B8B8B] to-[#95C5F1] inline-block text-transparent bg-clip-text"
          altText="Silver Sponsor"
          images={["/Atlassian.png", "/Atlassian.png", "/Atlassian.png"]}
        />
        <SponsorSection
          title="BRONZE SPONSOR"
          titleColor="bg-gradient-to-r from-[#A76700] via-[#9F926F] to-[#95C5F1] inline-block text-transparent bg-clip-text"
          altText="Bronze Sponsor"
          images={["/Atlassian.png", "/Atlassian.png", "/Atlassian.png"]}
        />
      </div>
    </div>
  );
}
