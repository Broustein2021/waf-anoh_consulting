import { Reveal } from "@/components/reveal";

const TESTIMONIALS = [
  {
    quote:
      "Ils ont géré notre DFE et la comptabilité mensuelle dès la première semaine. Je consacre enfin mon temps à la vente, pas à la paperasse.",
    name: "Aya Kouassi",
    role: "Fondatrice, Kouassi Trading",
    photo: "/images/testimonial-1.jpg",
  },
  {
    quote:
      "Paie, CNPS, fiscalité — une équipe, un fil WhatsApp. Sérieux, proches, et ils ne manquent jamais une échéance.",
    name: "Jean-Marc Yao",
    role: "Gérant, BTP Horizon",
    photo: "/images/testimonial-2.jpg",
  },
  {
    quote:
      "La formation FNE était claire et pratique. Nous étions prêts avant l'échéance, sans la panique habituelle.",
    name: "Mariam Traoré",
    role: "Directrice, Clinique Ananeraie",
    photo: "/images/testimonial-3.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Témoignages
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Ce que disent nos clients
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
