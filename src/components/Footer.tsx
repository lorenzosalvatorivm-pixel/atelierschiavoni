"use client";

import Link from "next/link";

const menuLinks = [
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Progetti", href: "/progetti" },
  { label: "Il team", href: "/team" },
  { label: "Certificazioni", href: "/certificazioni" },
  { label: "News e blog", href: "/news" },
  { label: "Contatti", href: "/contatti" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookie" },
  { label: "Politica generale UNI FOR 125:2022", href: "/politica-qualita" },
];

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1a1917",
        color: "#faf9f7",
        padding: "4rem 2.5rem 3rem",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "3rem",
        }}
      >
        {/* Studio info */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.5rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              marginBottom: "1.5rem",
              color: "#faf9f7",
            }}
          >
            ASM
          </div>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.75rem",
              color: "#d4cec3",
              lineHeight: 1.8,
              margin: "0 0 0.5rem",
              fontWeight: 400,
            }}
          >
            Architetto Michele Schiavoni
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.75rem",
              color: "#d4cec3",
              lineHeight: 1.8,
              margin: "0 0 0.5rem",
              fontWeight: 400,
            }}
          >
            Professione organizzata (art. 2229 c.c.)
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.75rem",
              color: "#d4cec3",
              lineHeight: 1.8,
              margin: "0 0 0.5rem",
              fontWeight: 400,
            }}
          >
            P.IVA 01780430434
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.75rem",
              color: "#d4cec3",
              lineHeight: 1.8,
              margin: 0,
              fontWeight: 400,
            }}
          >
            Sede legale: Via Giovanni Falcone n. 89, 62100 Macerata (MC), Italia
          </p>
          <p style={{ margin: "0.5rem 0 0" }}>
            <a
              href="mailto:info@ateliermicheleschiavoniarchitetti.it"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.75rem",
                color: "#d4cec3",
                textDecoration: "none",
              }}
            >
              info@ateliermicheleschiavoniarchitetti.it
            </a>
          </p>
        </div>

        {/* Menu */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "#8b7355",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            Menu
          </p>
          <nav>
            {menuLinks.map((link) => (
              <div key={link.href} style={{ marginBottom: "0.6rem" }}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.8rem",
                    color: "#d4cec3",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#faf9f7")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#d4cec3")}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Legal */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "#8b7355",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              fontWeight: 500,
            }}
          >
            Legale
          </p>
          <nav>
            {legalLinks.map((link) => (
              <div key={link.href} style={{ marginBottom: "0.6rem" }}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.8rem",
                    color: "#d4cec3",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "3rem auto 0",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.65rem",
            color: "rgba(212,206,195,0.5)",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} Atelier Michele Schiavoni Architetti. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
