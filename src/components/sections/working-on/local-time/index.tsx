"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Brussels",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const fmt = () => formatter.format(new Date());

function subscribe(callback: () => void) {
  const id = setInterval(callback, 30_000);
  return () => clearInterval(id);
}

export function LocalTime() {
  const time = useSyncExternalStore(subscribe, fmt, () => "");

  return <span>{time && `${time} CET`}</span>;
}
