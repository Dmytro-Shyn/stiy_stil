"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 120,
      duration: 800,
      easing: "ease-out-quad",
    });

    AOS.refresh();
  }, []);
  return null; // нічого не рендеримо
}
