import { useEffect, useState } from "react";

export const useHeight = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const updateHeight = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  });

  return height
};