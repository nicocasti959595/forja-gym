import type { ReactNode } from "react";
import { site } from "@/lib/site";
import Footer from "./Footer";
import { Icon } from "./Icons";

export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="border-b border-line">
        <div className="container-x flex items-center justify-between py-5">
          <a href="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-base font-black text-[#08080a]">
              F
            </span>
            <span className="display text-2xl text-white">
              {site.name}
              <span className="text-accent">.</span>
            </span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
          >
            <Icon name="arrow" className="h-4 w-4 rotate-180" />
            Volver al inicio
          </a>
        </div>
      </header>

      <main className="container-x py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="display text-4xl text-white md:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-muted">Última actualización: {updated}</p>
          <div className="legal mt-10 space-y-6 text-muted">{children}</div>
        </div>
      </main>

      <Footer />
    </>
  );
}
