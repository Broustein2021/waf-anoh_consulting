import {
  BadgeCheck,
  Building2,
  FileSpreadsheet,
  PenLine,
  Landmark,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { goToContact } from "@/lib/contact-intent";

const ITEMS = [
  {
    title: "Business creation",
    body: "From the idea to a registered company, with the right legal form and a clean start.",
    icon: Building2,
  },
  {
    title: "Registration follow-up until DFE",
    body: "We stay with the file until the Business Formation Certificate (DFE) is in your hands.",
    icon: BadgeCheck,
  },
  {
    title: "Bank loan assistance",
    body: "A file that reads clearly for the bank: statements, forecasts and a coherent story.",
    icon: Landmark,
  },
  {
    title: "Payroll preparation",
    body: "Payslips, charges and employee records prepared carefully, month after month.",
    icon: Users,
  },
  {
    title: "Financial statements",
    body: "Statement 301-302, Balance Sheet and DISA prepared to standard, ready for filing.",
    icon: FileSpreadsheet,
  },
  {
    title: "Business modifications",
    body: "Adding or removing an activity, capital increase, change of manager, and similar updates.",
    icon: PenLine,
  },
];

export function AdditionalSection() {
  return (
    <section className="overflow-hidden bg-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Further support
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Additional services
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Formalities and files that often stall a growing company — handled
            end to end, so you can get back to the work itself.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <li key={item.title}>
              <Reveal delayMs={(i % 2) * 60}>
                <button
                  type="button"
                  onClick={() => goToContact(item.title)}
                  className="flex w-full items-start gap-4 rounded-2xl bg-bg-elevated p-5 text-left shadow-card transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-navy text-navy-fg">
                    <item.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block font-sans font-semibold text-navy">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{item.body}</span>
                  </span>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
