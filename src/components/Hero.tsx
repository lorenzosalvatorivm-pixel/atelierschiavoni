import { studio } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end pb-20 pt-32 lg:pb-28 lg:pt-40">
      <div
        className="absolute inset-0 bg-gradient-to-b from-stone-200/40 via-stone-100/20 to-stone-50"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1917' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-stone-800/50">
          Dal {studio.founded}
        </p>
        <h1 className="max-w-4xl font-serif text-4xl leading-[1.1] text-stone-900 sm:text-5xl lg:text-7xl">
          {studio.tagline}
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-stone-800/70 lg:text-lg">
          {studio.description}
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#progetti"
            className="inline-flex items-center border border-stone-900 bg-stone-900 px-8 py-3 text-xs uppercase tracking-[0.2em] text-stone-50 transition-colors hover:bg-transparent hover:text-stone-900"
          >
            I nostri progetti
          </a>
          <a
            href="#contatti"
            className="inline-flex items-center border border-stone-300 px-8 py-3 text-xs uppercase tracking-[0.2em] text-stone-800 transition-colors hover:border-stone-900"
          >
            Contattaci
          </a>
        </div>
      </div>
    </section>
  );
}
