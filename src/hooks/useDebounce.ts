import { useEffect, useState } from "react";

export function useDebounce<T>(value:T, delay:number):T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (!value) {
      setDebouncedValue(value);
    } else {
      timer = setTimeout(() => {
        setDebouncedValue(value);
        // console.log("я тут");
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}