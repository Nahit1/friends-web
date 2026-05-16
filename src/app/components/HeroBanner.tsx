"use client";

import { useEffect } from "react";

export default function HeroBanner() {
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = prev;
    });
  }, []);

  return (
    <section id="anasayfa" style={{ position: "relative", width: "100%", height: "1190px", marginTop: "190px", overflow: "hidden" }}>
      {/* Video Background - full cover */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
