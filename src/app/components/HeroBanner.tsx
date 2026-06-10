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
    <section id="anasayfa" className="hero-section" style={{ position: "relative", width: "100%", height: "1190px", overflow: "hidden" }}>
      <style>{`
        .hero-section { margin-top: 190px; }
        @media (max-width: 1600px) { .hero-section { margin-top: 150px !important; } }
        @media (max-width: 1400px) { .hero-section { margin-top: 130px !important; } }
        @media (max-width: 1125px) { .hero-section { margin-top: 110px !important; } }
      `}</style>
      {/* Video Background - full cover */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          objectFit: "fill",
        }}
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
