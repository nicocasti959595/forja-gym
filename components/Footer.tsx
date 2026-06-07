import { nav, site } from "@/lib/site";
import { Icon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-base font-black text-[#08080a]">
              F
            </span>
            <span className="display text-2xl text-white">
              {site.name}
              <span className="text-accent">.</span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {site.tagline}. Gimnasio premium en {site.city}. Entrená sin
            permanencia, con un equipo que te acompaña.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Instagram de FORJA"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name="instagram" className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp de FORJA"
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Navegación
          </h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Horarios
          </h3>
          <ul className="mt-4 space-y-2.5">
            {site.hours.map((h) => (
              <li key={h.d} className="text-sm text-muted">
                <span className="text-white/80">{h.d}:</span> {h.h}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">{site.address}</p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-muted sm:flex-row">
          <p>
            © {2026} {site.fullName}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a href="/privacidad" className="transition-colors hover:text-white">
              Privacidad
            </a>
            <a href="/terminos" className="transition-colors hover:text-white">
              Términos
            </a>
            <span className="hidden text-line sm:inline">·</span>
            <span>
              Desarrollado por{" "}
              <a
                href="https://ideawebx.com"
                target="_blank"
                rel="noopener"
                className="font-medium text-accent transition-colors hover:text-accent-soft"
              >
                IdeaWebX
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
