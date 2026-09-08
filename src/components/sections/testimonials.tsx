import { Reveal } from "@/components/reveal";

const TESTIMONIALS = [
  {
    quote:
      "They handled our DFE and the monthly accounts from the first week. I finally spend my time on sales, not paperwork.",
    name: "Aya Kouassi",
    role: "Founder, Kouassi Trading",
    photo: "/images/testimonial-1.jpg",
  },
  {
    quote:
      "Payroll, CNPS, tax — one team, one WhatsApp thread. Reliable, close, and they never miss a deadline.",
    name: "Jean-Marc Yao",
    role: "Manager, BTP Horizon",
    photo: "/images/testimonial-2.jpg",
  },
  {
    quote:
      "The FNE training was clear and practical. We were ready before the deadline, without the usual panic.",
    name: "Mariam Traoré",
    role: "Director, Clinique Ananeraie",
    photo: "/images/testimonial-3.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Clients
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            What our clients say
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name} delayMs={i * 80}>
              <figure className="flex h-full flex-col rounded-3xl bg-bg-elevated p-6 shadow-card">
                <blockquote className="flex-1 text-sm leading-relaxed text-muted sm:text-base">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="size-12 rounded-full object-cover outline outline-1 -outline-offset-1 outline-navy/10"
                  />
                  <span>
                    <span className="block font-sans text-sm font-semibold text-navy">
                      {item.name}
                    </span>
                    <span className="block text-xs text-muted">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
