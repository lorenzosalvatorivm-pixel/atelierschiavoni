import { contact, studio } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-16">
        <div>
          <p className="font-serif text-lg text-stone-900">{studio.name}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-800/50">
            {studio.subtitle}
          </p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-stone-800/60">
          <a href={`mailto:${contact.email}`} className="transition-colors hover:text-stone-900">
            {contact.email}
          </a>
          <p>{contact.address}</p>
        </div>
        <p className="text-xs text-stone-800/40">
          © {year} {studio.name}. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
