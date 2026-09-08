import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy text-navy-fg">
      <svg
        className="pointer-events-none absolute top-0 left-0 w-full text-accent"
        viewBox="0 0 1440 36"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 0h1440v10C1180 34 960 36 720 16 480 -2 240 28 0 12V0Z"
          fill="currentColor"
        />
      </svg>
      <div
        className="pointer-events-none absolute -right-10 -bottom-16 size-40 rounded-full bg-accent"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pt-16 pb-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo inverted />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-muted">
            {SITE.tagline}. Un cabinet abidjanais pour le suivi comptable, la
            fiscalité, la gestion d'entreprise et la CNPS — proche, discret et
            précis.
          </p>
        </div>

        <div>
          <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Liens rapides
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-navy-muted transition-colors hover:text-navy-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-navy-muted">
            {SITE.phones.map((p) => (
              <li key={p.tel} className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                <a href={`tel:${p.tel}`} className="hover:text-navy-fg">
                  {p.display}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-navy-fg">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                {SITE.addressLine}
                <br />
                {SITE.city}
              </span>
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            {[
              { label: "LinkedIn", Icon: Linkedin },
              { label: "Facebook", Icon: Facebook },
              { label: "Instagram", Icon: Instagram },
            ].map(({ label, Icon }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-full bg-navy-fg/10 text-navy-fg transition-colors hover:bg-accent hover:text-accent-fg"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-navy-fg/10 px-4 py-5 pb-24 text-center text-xs text-navy-muted sm:px-6 sm:pb-5">
        © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
