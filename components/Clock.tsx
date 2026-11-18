"use client";

import { useEffect, useState } from "react";

// Visitor's local time; rendered only after mount to avoid a server/client mismatch.
export function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }));
    format();
    const id = setInterval(format, 15_000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time ?? "--:--"}</span>;
}
