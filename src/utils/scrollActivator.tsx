"use client";

import { useState, useEffect } from "react";

const useScrollActivator = (top: number) => {
  const [isActive, setIsActive] = useState(false);

  const scrollHandler = () => {
    const scrollPosition = window.scrollY;
    if (top <= scrollPosition) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return isActive;
};

export default useScrollActivator;
