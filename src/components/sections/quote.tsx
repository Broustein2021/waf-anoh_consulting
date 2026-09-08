import { Reveal } from "@/components/reveal";

export function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-fg sm:py-24">
      <div
        className="pointer-events-none absolute -top-24 -left-16 size-72 rounded-full bg-accent/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 -bottom-28 size-80 rounded-full bg-accent/25"
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute top-0 left-0 w-full text-accent/35"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 0h1440v20c-240 48-480 48-720 12S240 0 0 28V0Z" fill="currentColor" />
      </svg>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span
            className="block font-display text-6xl leading-none text-accent sm:text-7xl"
            aria-hidden="true"
          >
            “
          </span>
          <blockquote className="mt-2 font-display text-2xl leading-snug font-medium text-balance sm:text-3xl md:text-4xl">
            WAF&ANOH CONSULTING puts its expertise at your service to help you
            build, manage and grow your business with complete peace of mind
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
