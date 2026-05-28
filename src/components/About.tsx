import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <>
      {/* ─── Intro paragraph ──────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#faf9f7",
          padding: "6rem 2.5rem",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              fontWeight: 400,
              lineHeight: 1.85,
              color: "#1a1917",
              margin: 0,
            }}
          >
            L&apos;atelier{" "}
            <strong style={{ fontWeight: 500 }}>
              &quot; Michele Schiavoni architetti &quot;
            </strong>{" "}
            inizia a muovere i primi passi nel 2013, quando il suo fondatore,
            Michele Schiavoni lascia Roma per tornare a Macerata, con la
            convinzione che la provincia sia fonte di maggiori opportunità e con
            lo scopo di riqualificare gli ambienti urbani, migliorando gli spazi
            dell&apos;abitare. Questo al fine di incentivare buone pratiche per
            il ripopolamento delle &quot;aree interne&quot;.
          </p>
        </div>
      </section>

      {/* ─── L'Atelier section ────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#faf9f7",
          padding: "0 2.5rem 7rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Badge */}
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="badge" style={{ color: "#1a1917" }}>
              L&apos;Atelier
            </span>
          </div>

          {/* Two column: text left, image right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
            }}
          >
            {/* Text */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-sans), system-ui, sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.9,
                  color: "#2c2a26",
                  margin: 0,
                }}
              >
                L&apos;atelier vede l&apos;architettura come un&apos;arte
                sociale, che agisce come strumento di miglioramento collettivo.
                L&apos;obiettivo è creare spazi che migliorino la qualità della
                vita e favoriscano l&apos;inclusione sociale, in chiave
                contemporanea, grazie ad un team dinamico che si scambia
                continuamente dati, notizie ed informazioni.
              </p>
              <div style={{ marginTop: "2.5rem" }}>
                <Link
                  href="/chi-siamo"
                  className="link-underline"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#8b7355",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  Scopri di più →
                </Link>
              </div>
            </div>

            {/* Image */}
            <div
              className="img-hover"
              style={{
                position: "relative",
                aspectRatio: "4/3",
                backgroundColor: "#e8e4dd",
              }}
            >
              {/* Replace /images/atelier.jpg with your actual image */}
              <Image
                src="/studio.jpg"
                alt="Atelier Michele Schiavoni — interno studio"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
