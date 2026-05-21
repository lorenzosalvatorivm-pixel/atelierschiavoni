import { studio } from "@/lib/data";

export function About() {
  return (
    <section id="studio" className="border-t border-stone-200 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-800/50">Lo studio</p>
            <h2 className="mt-4 font-serif text-3xl text-stone-900 lg:text-4xl">
              Progettare con rigore e sensibilità
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-stone-800/70">
            <p>
              <strong className="font-medium text-stone-900">{studio.name}</strong> opera
              nell&apos;ambito dell&apos;architettura contemporanea, unendo ricerca formale e
              sostenibilità. Il team coordina ogni fase — dalla concept alla realizzazione —
              garantendo coerenza tra idea progettuale e cantiere.
            </p>
            <p>
              Collaboriamo con artigiani, ingegneri e paesaggisti per costruire spazi duraturi,
              capaci di invecchiare con eleganza e di valorizzare il patrimonio esistente.
            </p>
            <dl className="grid grid-cols-2 gap-8 border-t border-stone-200 pt-8">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-stone-800/50">Fondazione</dt>
                <dd className="mt-2 font-serif text-2xl text-stone-900">{studio.founded}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-stone-800/50">Sede</dt>
                <dd className="mt-2 font-serif text-2xl text-stone-900">{studio.location}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
