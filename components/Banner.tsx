"use client";
import { useState, useEffect } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function Banner() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState(false); // Track if the countdown has expired

  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-12-07T00:00:00");
    const currentTime = new Date();
    const difference = eventDate.getTime() - currentTime.getTime();

    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      setIsExpired(true); // Mark countdown as expired when time is up
    }

    return timeLeft;
  };

  useEffect(() => {
    if (!isExpired) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft, isExpired]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time; // Add leading zero if needed
  };

  if (isExpired) return null; // Hide the banner when time is up

  return (
    <div className="bg-primary px-1 py-1 flex text-center items-center justify-center">
      <span className="text-primary-foreground text-sm italic font-bold uppercase">
        Get ticket now before 7/12 - {formatTime(timeLeft.days)} days left
      </span>
      {/*   Uncomment below to show full countdown */}
      {/*   <span className="text-primary-foreground text-sm italic font-bold uppercase">
        Get ticket now before 7/12 - {formatTime(timeLeft.days)} days{" "}
        {formatTime(timeLeft.hours)} hours {formatTime(timeLeft.minutes)}{" "}
        minutes {formatTime(timeLeft.seconds)} seconds left
      </span> */}
    </div>
  );
}
