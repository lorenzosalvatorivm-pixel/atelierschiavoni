import { contact } from "@/lib/data";

export function Contact() {
  return (
    <section id="contatti" className="border-t border-stone-200 bg-stone-900 py-24 text-stone-100 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-100/40">Contatti</p>
            <h2 className="mt-4 font-serif text-3xl text-stone-50 lg:text-4xl">
              Parliamo del tuo progetto
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-stone-100/60">
              Raccontaci la tua idea: ti risponderemo entro due giorni lavorativi per fissare un
              primo incontro in studio o in videoconferenza.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-100/40">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 block font-serif text-xl text-stone-50 transition-colors hover:text-accent"
              >
                {contact.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-100/40">Telefono</p>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="mt-2 block font-serif text-xl text-stone-50 transition-colors hover:text-accent"
              >
                {contact.phone}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-100/40">Indirizzo</p>
              <p className="mt-2 font-serif text-xl text-stone-50">{contact.address}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-100/40">Orari</p>
              <p className="mt-2 text-sm text-stone-100/60">{contact.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
