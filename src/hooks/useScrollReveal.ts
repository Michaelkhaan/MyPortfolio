"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function useScrollReveal() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2000,
      delay: 200,
      reset: false,
    });

    sr.reveal(".hero-reveal", { origin: "top" });
    sr.reveal(".about-reveal", { origin: "left" });
    sr.reveal(".services-reveal", { origin: "bottom" });
    sr.reveal(".projects-reveal", { origin: "top" });
    sr.reveal(".contact-reveal", { origin: "bottom" });
  }, []);
}
