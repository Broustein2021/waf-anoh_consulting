import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { goToContact } from "@/lib/contact-intent";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy text-navy-fg"
    >
      <img
        src="/images/hero.jpg"
        alt="Équipe WAF & ANOH CONSULTING en réunion avec un client"
        className="absolute inset-0 size-full object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/25 max-md:via-navy/80 max-md:to-navy/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/20" />

      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full text-accent"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 58c180-28 360 22 540 4 190-20 310-44 540-8 120 20 240 38 360 8v28H0V58Z"
          fill="currentColor"
        />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full text-bg"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 28c220 20 400-16 640 0 250 16 380 24 800-16v36H0V28Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative mx-auto flex min-h-[34rem] max-w-6xl flex-col justify-center px-4 pt-16 pb-28 sm:min-h-[38rem] sm:px-6 md:min-h-[42rem] md:pt-24 md:pb-32">
        <p
          className="hero-enter font-sans text-xs font-semibold tracking-[0.22em] text-accent uppercase"
          style={{ animationDelay: "40ms" }}
        >
          {SITE.tagline}
        </p>
        <h1
          className="hero-enter mt-4 max-w-xl font-display text-4xl leading-tight font-semibold text-navy-fg sm:text-5xl md:text-6xl"
          style={{ animationDelay: "120ms" }}
        >
          {SITE.headline}
        </h1>
        <p
          className="hero-enter mt-5 max-w-lg text-base leading-relaxed text-navy-muted sm:text-lg"
          style={{ animationDelay: "200ms" }}
        >
          Suivi comptable, fiscalité, gestion d'entreprise et protection sociale
          (CNPS) — traités avec rigueur, pour bâtir votre activité en toute sérénité.
        </p>
        <div
          className="hero-enter mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "280ms" }}
        >
          <Button size="lg" onClick={() => goToContact()}>
            Prendre rendez-vous
            <ArrowRight />
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <a href="#services">Découvrir nos services</a>
          </Button>
        </div>
        <p
          className="hero-enter mt-8 flex items-center gap-2 text-sm text-navy-fg/80"
          style={{ animationDelay: "340ms" }}
        >
          <ShieldCheck className="size-4 shrink-0 text-accent" />
          Équipe pluridisciplinaire · Conforme CNPS · Prêt pour la FNE
        </p>
      </div>
    </section>
  );
}
