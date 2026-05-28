"use client";

import Image from "next/image";
import Link from "next/link";

const projectCategories = [
  "Istruzione",
  "Landscape",
  "Riqualificazione Urbana",
  "Residenziale",
  "Restauro",
];

// Replace the src values with actual client logo images
const clientLogos = [
  { name: "Cliente 1", src: "/images/logos/cliente-1.svg" },
  { name: "Cliente 2", src: "/images/logos/cliente-2.svg" },
  { name: "Cliente 3", src: "/images/logos/cliente-3.svg" },
  { name: "Cliente 4", src: "/images/logos/cliente-4.svg" },
];

export function Projects() {
  return (
    <>
      {/* ─── Projects — crimson section ──────────────────────────── */}
      <section
        style={{
          backgroundColor: "#8b1a1a",
          padding: "5rem 2.5rem 4rem",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Header row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "2rem",
              marginBottom: "3rem",
              flexWrap: "wrap",
            }}
          >
            {/* Badge */}
            <span
              className="badge"
              style={{ color: "rgba(250,249,247,0.7)", borderColor: "rgba(250,249,247,0.35)" }}
            >
              I nostri progetti
            </span>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.8rem",
                color: "rgba(250,249,247,0.6)",
                maxWidth: "260px",
                lineHeight: 1.7,
                margin: 0,
                textAlign: "right",
              }}
            >
              Ogni progetto dell&apos;atelier rappresenta la sintesi di una
              ricerca collettiva, dove l&apos;architettura si traduce in forma
              tangibile di utilità sociale.
            </p>
          </div>

          {/* Large category list */}
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {projectCategories.map((category, i) => (
              <li
                key={category}
                style={{
                  borderTop: "1px solid rgba(250,249,247,0.15)",
                  padding: "0.1rem 0",
                }}
              >
                <Link
                  href={`/progetti?categoria=${category.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{
                    display: "block",
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                    fontWeight: 600,
                    color: "#faf9f7",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    lineHeight: 1.1,
                    padding: "0.25rem 0",
                    transition: "color 0.25s ease, padding-left 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgba(250,249,247,0.4)";
                    e.currentTarget.style.paddingLeft = "1.5rem";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#faf9f7";
                    e.currentTarget.style.paddingLeft = "0";
                  }}
                >
                  {category}
                </Link>
              </li>
            ))}
            <li style={{ borderTop: "1px solid rgba(250,249,247,0.15)" }} />
          </ul>

          {/* CTA */}
          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <Link
              href="/progetti"
              style={{
                display: "inline-block",
                border: "1px solid rgba(250,249,247,0.5)",
                padding: "0.75rem 2rem",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#faf9f7",
                textDecoration: "none",
                fontWeight: 500,
                transition: "background-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(250,249,247,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Vedi tutti i progetti
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Si sono affidati a noi ───────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#1a1917",
          padding: "3.5rem 2.5rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(212,206,195,0.5)",
              textAlign: "center",
              marginBottom: "2.5rem",
              fontWeight: 500,
            }}
          >
            Si sono affidati a noi
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4rem",
              flexWrap: "wrap",
            }}
          >
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                style={{
                  position: "relative",
                  width: "80px",
                  height: "50px",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.45,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.45")}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
