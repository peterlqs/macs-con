"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
// import { ChevronDownIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button";
import { CircleArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "[&[data-state=open]]:outline [&[data-state=open]]:outline-2 [&[data-state=open]]:outline-neutral-500 outline-zinc-800 outline-1 rounded-tl-3xl rounded-br-3xl h-fit ",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex bg-black rounded-tl-3xl rounded-br-3xl outline outline-zinc-800 outline-1 [&[data-state=open]]:rounded-br-none">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 px-4 font-medium transition-all  [&[data-state=open]>svg]:-rotate-90 md:text-2xl text-lg  rounded-none text-left",
        className
      )}
      {...props}
    >
      {children}

      <CircleArrowDown
        color="#fff"
        strokeWidth={1}
        className="md:h-12 md:w-12 ml-2 h-8 w-8 shrink-0 text-muted-foreground transition-transform duration-200 "
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden bg-black rounded-br-3xl text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-left p-4   "
    {...props}
  >
    <div className={cn("", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
