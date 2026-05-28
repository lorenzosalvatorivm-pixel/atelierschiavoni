import Image from "next/image";

const certifications = [
  { code: "ISO 9001", description: "Sistema di gestione per la qualità" },
  { code: "ISO 14001", description: "Sistema di gestione ambientale" },
  { code: "UNI 11", description: "Qualificazione professionale" },
  { code: "BIM manager", description: "Gestione Building Information Modeling" },
  { code: "BIM specialist", description: "Specializzazione BIM" },
];

export function Services() {
  return (
    <section
      style={{
        backgroundColor: "#faf9f7",
        padding: "7rem 2.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Badge */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="badge" style={{ color: "#1a1917" }}>
            Certificazioni
          </span>
        </div>

        {/* Two column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "center",
          }}
        >
          {/* Text — left */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "0.9rem",
                lineHeight: 1.9,
                color: "#2c2a26",
                marginBottom: "2.5rem",
              }}
            >
              L&apos;atelier{" "}
              <strong style={{ fontWeight: 500 }}>
                Michele Schiavoni Architetti
              </strong>{" "}
              opera con un approccio che coniuga qualità, sostenibilità e
              innovazione rigorosa. Le certificazioni dello studio ne attestano
              la conformità e l&apos;attenzione ai processi progettuali di
              eccellenza.
            </p>

            {/* Certification list */}
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {certifications.map((cert, i) => (
                <li
                  key={cert.code}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1rem",
                    padding: "0.9rem 0",
                    borderTop: i === 0 ? "1px solid #e8e4dd" : undefined,
                    borderBottom: "1px solid #e8e4dd",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#1a1917",
                      minWidth: "130px",
                      flexShrink: 0,
                    }}
                  >
                    {cert.code}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "0.78rem",
                      color: "#8b7355",
                      lineHeight: 1.5,
                    }}
                  >
                    {cert.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image grid — right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            {/* Replace these with actual certificate images */}
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                style={{
                  position: "relative",
                  aspectRatio: "3/4",
                  backgroundColor: "#e8e4dd",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={`/images/cert-${n}.jpg`}
                  alt={`Certificazione ${n}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
