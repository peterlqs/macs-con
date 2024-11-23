"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function Navbar() {
  const navLinks = [
    { label: "about", href: "#about" },
    { label: "schedule", href: "#schedule" },
    { label: "sponsors", href: "#sponsors" },
    { label: "faq", href: "#faq" },
    { label: "code of conduct", href: "#coc" },
  ];

  function scrollToSection(id: string) {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      const element = document.querySelector(id);
      if (element) {
        const offset = 64; // Adjust this value as needed
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };
  }

  return (
    <header className="sticky section-container z-50 bg-background bg-opacity-45 backdrop-blur-xl top-0 border-b flex justify-between w-full shrink-0 items-center padding-section-x py-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6 mt-[10svh]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                // href={link.href}
                className="italic text-base font-bold group uppercase inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2  transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50   dark:hover:text-gray-50  dark:focus:text-gray-50 "
                prefetch={false}
                onClick={scrollToSection(link.href)}
                href={""}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <Image src="/logo.svg" alt="Acme Inc" width={120} height={40} />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className=" hidden lg:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            // href={link.href}
            className="italic text-base font-bold group uppercase inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2  transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50  dark:focus:text-gray-50 "
            prefetch={false}
            onClick={scrollToSection(link.href)}
            href={""}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Button
        variant={"cta"}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), linear-gradient(to right, #89c5f5, #ffa366, #ae9df5, #f83b60)",
        }}
      >
        TICKETS
        <ArrowRightIcon className="w-4 h-4 ml-2" />
      </Button>

      {/* <div
        className="absolute bottom-0 left-0 right-0 h-[1px] "
        style={{
          backgroundImage:
            "linear-gradient(to right, #89c5f5, #ffa366, #ae9df5, #f83b60)",
        }}
      /> */}
    </header>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
