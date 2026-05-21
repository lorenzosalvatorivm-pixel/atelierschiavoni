import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="servizi" className="border-t border-stone-200 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.35em] text-stone-800/50">Servizi</p>
        <h2 className="mt-4 max-w-lg font-serif text-3xl text-stone-900 lg:text-4xl">
          Dalla prima idea alla consegna dell&apos;opera
        </h2>

        <ul className="mt-16 grid gap-px bg-stone-200 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.title} className="bg-stone-50 p-8 lg:p-10">
              <h3 className="font-serif text-xl text-stone-900">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-800/60">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
