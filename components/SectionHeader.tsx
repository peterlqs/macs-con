import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  const parsedDescription = parseDescription(description); // Parse description before rendering

  return (
    <div className="grid grid-cols-2 gap-8 mb-16 w-full">
      <SectionTitle title={title} />
      <SectionDescription description={parsedDescription} />
    </div>
  );
}

const SectionTitle = ({ title }: { title: string }) => (
  <div className="relative inline-flex w-fit h-fit overflow-hidden p-[2px] rounded-tl-3xl rounded-br-3xl">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#89c5f5_0%,#ffa366_25%,#ae9df5_50%,#f83b60_75%,#89c5f5_100%)]" />
    <div
      id="headerTitle"
      className="px-4 py-2 backdrop-blur-3xl inline-flex w-fit rounded-tl-3xl rounded-br-3xl bg-background"
    >
      <h2 className="text-3xl italic font-extrabold">{title}</h2>
    </div>
  </div>
);

const SectionDescription = ({ description }: { description: string }) => (
  <div className="w-full flex justify-end">
    <p
      className="text-left max-w-[40ch] w-full"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </div>
);

// Function to parse the description string
const parseDescription = (desc: string) => {
  return desc
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/<br>/g, "<br />");
};
