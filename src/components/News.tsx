import Image from "next/image";
import Link from "next/link";

// Replace with your actual blog posts (e.g. fetched from CMS/API)
const posts = [
  {
    slug: "minimalismo-caldo-come-rendere-accogliente-una-casa-moderna",
    title:
      "Minimalismo caldo: come rendere accogliente una casa moderna senza rinunciare all'essenziale",
    excerpt:
      "L'evoluzione del design contemporaneo sta superando il rigore del minimalismo tradizionale per abbracciare il concetto di 'warm minimalism'.",
    image: "/images/news-1.jpg",
    category: "Interior Design",
    date: "2024",
  },
  {
    slug: "minimalismo-caldo-variante-2",
    title:
      "Minimalismo caldo: come rendere accogliente una casa moderna senza rinunciare all'essenziale",
    excerpt:
      "L'evoluzione del design contemporaneo sta superando il rigore del minimalismo tradizionale per abbracciare il concetto di 'warm minimalism'.",
    image: "/images/news-2.jpg",
    category: "Architettura",
    date: "2024",
  },
];

export function News() {
  return (
    <section
      style={{
        backgroundColor: "#faf9f7",
        padding: "0 2.5rem 5rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Badge */}
        <div style={{ marginBottom: "2.5rem" }}>
          <span className="badge" style={{ color: "#1a1917" }}>
            News e blog
          </span>
        </div>

        {/* Two-card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          {posts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/news/${post.slug}`}
                style={{ display: "block", textDecoration: "none" }}
              >
                {/* Image */}
                <div
                  className="img-hover"
                  style={{
                    position: "relative",
                    aspectRatio: "16/9",
                    backgroundColor: "#1a1917",
                    marginBottom: "1.25rem",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover", opacity: 0.85 }}
                  />
                </div>

                {/* Category label */}
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#8b7355",
                    margin: "0 0 0.6rem",
                    fontWeight: 500,
                  }}
                >
                  {post.category}
                </p>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#1a1917",
                    lineHeight: 1.5,
                    margin: "0 0 0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                  }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "0.8rem",
                    color: "#2c2a26",
                    lineHeight: 1.7,
                    margin: 0,
                    opacity: 0.75,
                  }}
                >
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link
            href="/news"
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
            Tutti gli articoli →
          </Link>
        </div>
      </div>
    </section>
  );
}
