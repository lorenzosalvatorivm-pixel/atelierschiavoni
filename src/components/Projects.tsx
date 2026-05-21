import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="progetti" className="border-t border-stone-200 bg-stone-100 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-800/50">Portfolio</p>
            <h2 className="mt-4 font-serif text-3xl text-stone-900 lg:text-4xl">
              Progetti selezionati
            </h2>
          </div>
          <p className="max-w-xs text-sm text-stone-800/60">
            Una selezione di interventi recenti. Ogni progetto racconta una storia unica.
          </p>
        </div>

        <ul className="divide-y divide-stone-200">
          {projects.map((project) => (
            <li key={project.id}>
              <article className="group grid gap-4 py-10 transition-colors hover:bg-stone-50/50 sm:grid-cols-12 sm:gap-8 sm:px-4 lg:py-12">
                <span className="font-serif text-sm text-stone-800/40 sm:col-span-1">
                  {project.id}
                </span>
                <div className="sm:col-span-5">
                  <h3 className="font-serif text-xl text-stone-900 transition-colors group-hover:text-accent lg:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-stone-800/50">
                    {project.category} · {project.year}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-stone-800/60 sm:col-span-6">
                  {project.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
