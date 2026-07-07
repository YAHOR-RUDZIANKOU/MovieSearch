import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    let timer;
    if (!value) {
      setDebouncedValue("");
    } else {
      timer = setTimeout(() => {
        setDebouncedValue(value);
        console.log("я тут");
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}