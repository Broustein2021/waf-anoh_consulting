import { Handshake, Lock, Scale } from "lucide-react";
import { Reveal } from "@/components/reveal";

const COMMITMENTS = [
  {
    title: "Rigor and professionalism",
    body: "Every filing, statement and deadline is treated with method. Clean books, on time.",
    icon: Scale,
    tone: "navy" as const,
  },
  {
    title: "Availability and closeness",
    body: "A partner you can reach — in Yopougon and on WhatsApp — not a distant back office.",
    icon: Handshake,
    tone: "accent" as const,
  },
  {
    title: "Confidentiality and integrity",
    body: "Your figures, your people, your plans. Handled discreetly, always.",
    icon: Lock,
    tone: "navy" as const,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="overflow-hidden bg-bg py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="absolute -top-6 -left-6 size-28 rounded-full bg-accent/20" aria-hidden />
            <div className="absolute -right-4 -bottom-8 size-36 rounded-full bg-navy/10" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl bg-bg-elevated p-2 shadow-card">
              <img
                src="/images/about.jpg"
                alt="Consultants reviewing financial statements together"
                className="aspect-[4/3] w-full rounded-2xl object-cover outline outline-1 -outline-offset-1 outline-navy/10"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              About us
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              Expertise within your reach
            </h2>
            <p className="mt-5 text-muted">
              WAF & ANOH CONSULTING is an Abidjan firm built around a
              multidisciplinary team. We help entrepreneurs and growing companies
              keep management sound, compliant and high-performing — from the
              first ledger to the year-end statements.
            </p>
            <p className="mt-3 text-muted">
              Based in Yopougon Ananeraie, we stay close to the businesses we
              serve: clear advice, careful filings, and a team you can actually
              reach.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-3">
            {COMMITMENTS.map((item, i) => (
              <Reveal key={item.title} delayMs={i * 70}>
                <article className="flex gap-4 rounded-2xl bg-bg-elevated p-4 shadow-card">
                  <span
                    className={
                      item.tone === "accent"
                        ? "inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent"
                        : "inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-soft text-navy"
                    }
                  >
                    <item.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span>
                    <h3 className="font-sans text-sm font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
