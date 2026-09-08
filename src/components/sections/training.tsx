import { GraduationCap, ReceiptText } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { goToContact } from "@/lib/contact-intent";

export function TrainingSection() {
  return (
    <section id="training" className="bg-bg-elevated py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Skills, not just filings
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Our training programs
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Practical sessions for entrepreneurs who must stay compliant — and
            for students and professionals who want to work like the firms do.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-navy text-navy-fg shadow-card">
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-accent-fg">
                  <ReceiptText className="size-5" strokeWidth={1.75} />
                </span>
                <p className="mt-5 font-sans text-xs font-semibold tracking-[0.16em] text-accent uppercase">
                  Mandatory from December 2025
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  FNE — Electronic Standardized Invoice
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-muted">
                  We support entrepreneurs on the official FNE platform: account
                  setup, invoice flow, and the habits that keep you legal once
                  electronic invoicing is required nationwide.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-navy-muted">
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    Create and configure your FNE workspace
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    Issue compliant electronic invoices
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    Stay ready for the December 2025 deadline
                  </li>
                </ul>
                <Button
                  className="mt-7 self-start"
                  onClick={() => goToContact("FNE training")}
                >
                  Join the FNE program
                </Button>
              </div>
            </article>
          </Reveal>

          <Reveal delayMs={80}>
            <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-bg shadow-card">
              <div className="relative h-48 overflow-hidden sm:h-56">
                <img
                  src="/images/training.jpg"
                  alt="Practical accounting training session"
                  className="size-full object-cover outline outline-1 -outline-offset-1 outline-navy/10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-navy-soft text-navy">
                  <GraduationCap className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-navy">
                  Student & professional training
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  Hands-on accounting training for graduating students and
                  working professionals: journals, tax logic, CNPS files and the
                  statements a real firm produces every month.
                </p>
                <Button
                  variant="navy"
                  className="mt-7 self-start"
                  onClick={() => goToContact("Student training")}
                >
                  Ask about a session
                </Button>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
