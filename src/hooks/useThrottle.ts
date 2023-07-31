import { useEffect, useRef, useState } from "react";

export const useThrottle = <T>(value: T, interval = 500) => {
  const [throttled, setThrottled] = useState(value);
  const lastUpdated = useRef<number>(0);

  useEffect(() => {
    const now = Date.now();
    if (now >= lastUpdated.current + interval) {
      lastUpdated.current = now;
      setThrottled(value);
    } else {
      const id = window.setTimeout(() => {
        lastUpdated.current = now;
        setThrottled(value);
      }, interval);
      return () => window.clearTimeout(id);
    }
  }, [value, interval]);

  return throttled;
};
