"use client";

export default function HeroBanner() {
  return (
    <section id="anasayfa" style={{ position: "relative", width: "100%", height: "1190px", overflow: "hidden" }}>
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
