import Image from "next/image";

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: "600px",
        backgroundColor: "#1a1917",
        overflow: "hidden",
      }}
    >
      {/* Hero image - replace /images/hero.jpg with your actual image */}
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
  <source
    src="https://www.ateliermicheleschiavoniarchitetti.it/wp-content/uploads/2025/11/atelier_michele_schiavoni_architetti.mp4_video_home-1080p.mp4"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
      
        

      {/* Subtle bottom gradient for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(26,25,23,0.15) 0%, rgba(26,25,23,0) 40%, rgba(26,25,23,0.4) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Optional minimal bottom caption */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "2.5rem",
          right: "2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            color: "rgba(250,249,247,0.55)",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Macerata — Italia
        </p>
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "0.9rem",
            color: "rgba(250,249,247,0.55)",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          Architettura che dialoga con il luogo
        </p>
      </div>
    </section>
  );
}
