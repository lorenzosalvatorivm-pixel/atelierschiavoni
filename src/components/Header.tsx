"use client";

import { useState } from "react";
import { navLinks, studio } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-20 lg:px-8">
        <a href="#" className="group">
          <span className="font-serif text-lg tracking-wide text-stone-900 transition-colors group-hover:text-accent lg:text-xl">
            {studio.name}
          </span>
          <span className="mt-0.5 block text-[10px] uppercase tracking-[0.25em] text-stone-800/60">
            {studio.subtitle}
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-stone-800/70 transition-colors hover:text-stone-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-stone-900 transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-stone-900 transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 bg-stone-900 transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-stone-200 bg-stone-50 px-6 py-8 md:hidden">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-[0.2em] text-stone-800"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
