import Image from "next/image";

export function GridBackground() {
  return (
    <div className="w-full h-full absolute inset-0 top-0 left-0 -z-10 opacity-5">
      <Image
        src="/grid.svg"
        alt="logo"
        layout="fill"
        objectFit="cover" // Ensures the image covers the area
        objectPosition="center" // Optionally centers the image
        // className="scale-110"
      />
    </div>
  );
}
