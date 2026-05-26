"use client";

import { useEffect, useState } from "react";

const fmt = () =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Brussels",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());

export function LocalTime() {
  const [time, setTime] = useState<string>(fmt);

  useEffect(() => {
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time} CET</span>;
}
