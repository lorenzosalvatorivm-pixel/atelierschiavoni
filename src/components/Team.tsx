"use client";

import Image from "next/image";
import Link from "next/link";

export function Team() {
  return (
    <section
      style={{
        backgroundColor: "#faf9f7",
        padding: "0 2.5rem 7rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Badge */}
        <div style={{ marginBottom: "2rem" }}>
          <span className="badge" style={{ color: "#1a1917" }}>
            Chi siamo
          </span>
        </div>

        {/* Dark image block */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/7",
            backgroundColor: "#1a1917",
            overflow: "hidden",
          }}
        >
          {/* Team photo — replace /images/team.jpg with your actual image */}
          <Image
            src="/images/team.jpg"
            alt="Il team — Atelier Michele Schiavoni Architetti"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center top",
              opacity: 0.55,
            }}
          />

          {/* Dark gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(26,25,23,0.7) 0%, rgba(26,25,23,0.1) 60%)",
              pointerEvents: "none",
            }}
          />

          {/* Content overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              padding: "2.5rem",
            }}
          >
            {/* Left: IL TEAM title */}
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                fontWeight: 700,
                color: "#faf9f7",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                lineHeight: 1,
                margin: 0,
              }}
            >
              IL TEAM
            </h2>

            {/* Right: CTA button */}
            <Link
              href="/team"
              style={{
                display: "inline-block",
                border: "1px solid rgba(250,249,247,0.55)",
                padding: "0.75rem 1.75rem",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.68rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#faf9f7",
                textDecoration: "none",
                fontWeight: 500,
                backdropFilter: "blur(4px)",
                backgroundColor: "rgba(26,25,23,0.3)",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(26,25,23,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(26,25,23,0.3)";
              }}
            >
              Vedi il team completo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
