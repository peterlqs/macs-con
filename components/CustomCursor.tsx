"use client";
import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false); // Track visibility for opacity
  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true); // Ensure the cursor is visible when moving
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle cursor visibility when it leaves/re-enters the viewport
  useEffect(() => {
    const handleMouseOut = (event: MouseEvent) => {
      // Check if the mouse has left the viewport
      if (
        !event.relatedTarget &&
        (event.clientY <= 0 ||
          event.clientX <= 0 ||
          event.clientX >= window.innerWidth ||
          event.clientY >= window.innerHeight)
      ) {
        setVisible(false); // Hide the cursor by setting opacity to 0
      }
    };

    const handleMouseEnter = () => {
      setVisible(true); // Show the cursor again by setting opacity to 100%
    };

    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      className={`fixed z-50 top-0 left-0 w-8 h-8  backdrop-invert rounded-full duration-300 ease-out transition-opacity ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "opacity 0.5s ease-in-out", // Custom opacity transition time (0.5s in this case)
      }}
    />
  );
};

export default CustomCursor;
