import { BookOpen, Landmark, LineChart, Shield } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { goToContact } from "@/lib/contact-intent";

const CORE = [
  {
    title: "Accounting follow-up",
    body: "Day-to-day bookkeeping, journals and monthly closing, so you always know where the company stands.",
    icon: BookOpen,
  },
  {
    title: "Taxation",
    body: "Declarations, filings and a lawful reading of your tax position — no surprises at deadline.",
    icon: Landmark,
  },
  {
    title: "Business management",
    body: "Cash-flow visibility, dashboards and advice to steer the company with a cooler head.",
    icon: LineChart,
  },
  {
    title: "Social welfare (CNPS)",
    body: "Registration, contributions and employee files kept compliant with CNPS rules.",
    icon: Shield,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-bg-elevated py-20 sm:py-24">
      <div
        className="pointer-events-none absolute top-16 -right-20 size-64 rounded-full bg-accent/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-10 -left-16 size-52 rounded-full bg-navy/8"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            What we do
          </p>
          <h2 className="mt-3 max-w-lg text-3xl font-semibold text-navy sm:text-4xl">
            Our core services
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Four pillars for companies that want their numbers right, their
            filings on time, and a partner who stays close.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CORE.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 70}>
              <article className="flex h-full flex-col rounded-3xl bg-bg p-6 shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-card-hover">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-accent text-accent-fg">
                  <item.icon className="size-6" strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 font-sans text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.body}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-6 self-start"
                  onClick={() => goToContact(item.title)}
                >
                  Request this service
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
