"use client";

import Link from "next/link";

export function Contact() {
  return (
    <section
      style={{
        backgroundColor: "#faf9f7",
        borderTop: "1px solid #e8e4dd",
        padding: "5rem 2.5rem 6rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Large display CTA */}
        <Link
          href="/progetti"
          style={{
            display: "block",
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(3rem, 10vw, 8rem)",
            fontWeight: 700,
            color: "#1a1917",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            lineHeight: 1,
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#8b1a1a")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#1a1917")}
        >
          Guarda i Progetti
        </Link>

        {/* Divider */}
        <div
          style={{
            width: "1px",
            height: "5rem",
            backgroundColor: "#d4cec3",
            margin: "4rem auto 4rem",
          }}
        />

        {/* Contact info grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {/* Address */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.62rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#8b7355",
                marginBottom: "0.75rem",
                fontWeight: 500,
              }}
            >
              Sede
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.8rem",
                color: "#2c2a26",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Via Giovanni Falcone n. 89<br />
              62100 Macerata (MC), Italia
            </p>
          </div>

          {/* Email */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.62rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#8b7355",
                marginBottom: "0.75rem",
                fontWeight: 500,
              }}
            >
              Email
            </p>
            <a
              href="mailto:info@ateliermicheleschiavoniarchitetti.it"
              className="link-underline"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.8rem",
                color: "#2c2a26",
                textDecoration: "none",
              }}
            >
              info@atelier<br />micheleschiavoni<br />architetti.it
            </a>
          </div>

          {/* Phone */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.62rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#8b7355",
                marginBottom: "0.75rem",
                fontWeight: 500,
              }}
            >
              Telefono
            </p>
            <a
              href="tel:+390733403434"
              className="link-underline"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.8rem",
                color: "#2c2a26",
                textDecoration: "none",
              }}
            >
              +39 0733 403434
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
