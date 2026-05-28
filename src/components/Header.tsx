"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Progetti", href: "/progetti" },
  { label: "Il team", href: "/team" },
  { label: "Certificazioni", href: "/certificazioni" },
  { label: "News e blog", href: "/news" },
  { label: "Contatti", href: "/contatti" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: "#1c1c1c",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2.5rem",
          height: "64px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              color: "#faf9f7",
              fontSize: "1.625rem",
              fontWeight: 500,
              letterSpacing: "0.25em",
              lineHeight: 1,
            }}
          >
            ASM
          </span>
        </Link>

        {/* Menu toggle */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Apri menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#faf9f7",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            fontWeight: 500,
            padding: "0.5rem 0",
          }}
        >
          MENU
        </button>
      </header>

      {/* Fullscreen overlay navigation */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          backgroundColor: "#1a1917",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0 2.5rem",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.35s ease",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Chiudi menu"
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "2.5rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#faf9f7",
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            fontWeight: 500,
          }}
        >
          CHIUDI
        </button>

        {/* Nav links */}
        <nav style={{ marginTop: "-2rem" }}>
          {navLinks.map((link, i) => (
            <div
              key={link.href}
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s ease ${i * 0.06 + 0.1}s, transform 0.4s ease ${i * 0.06 + 0.1}s`,
              }}
            >
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  fontFamily: "var(--font-cormorant)",
                  color: "#faf9f7",
                  fontSize: "clamp(2rem, 6vw, 4rem)",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                  lineHeight: 1.25,
                  textDecoration: "none",
                  marginBottom: "0.15em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8b7355")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#faf9f7")}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Bottom info */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "2.5rem",
            right: "2.5rem",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "#d4cec3",
              fontSize: "0.7rem",
              letterSpacing: "0.05em",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Via Giovanni Falcone n. 89<br />
            62100 Macerata (MC), Italia<br />
            info@ateliermicheleschiavoniarchitetti.it
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              color: "#d4cec3",
              fontSize: "0.7rem",
              letterSpacing: "0.05em",
              margin: 0,
            }}
          >
            P.IVA 01780430434
          </p>
        </div>
      </div>
    </>
  );
}
