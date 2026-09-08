import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContactIntent } from "@/lib/contact-intent";
import { SERVICES, SITE, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const service = useContactIntent((s) => s.service);
  const setService = useContactIntent((s) => s.setService);
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (name.length < 2 || phone.length < 8 || !email.includes("@")) {
      toast.error("Veuillez renseigner votre nom, votre téléphone et un e-mail valide.");
      return;
    }
    const lines = [
      `Bonjour ${SITE.name},`,
      "",
      "Je souhaite obtenir des informations sur vos prestations :",
      "",
      `Nom : ${name}`,
      `Téléphone : ${phone}`,
      `E-mail : ${email}`,
      `Service souhaité : ${service || "Pour en discuter"}`,
    ];
    if (message) lines.push(`Message : ${message}`);
    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
    toast.success("Votre message s'ouvre dans WhatsApp — appuyez sur Envoyer pour nous le transmettre.");
  }

  return (
    <section id="contact" className="bg-bg-elevated py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5">
        <Reveal className="min-w-0 lg:col-span-2">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Contactez-nous
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Prendre rendez-vous
          </h2>
          <p className="mt-4 text-muted">
            Dites-nous où en est votre entreprise. Nous revenons vers vous avec
            une prochaine étape claire — souvent le jour même, toujours sur
            WhatsApp si vous préférez.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            {SITE.phones.map((p) => (
              <li key={p.tel} className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Phone className="size-4" />
                </span>
                <a href={`tel:${p.tel}`} className="font-medium text-navy hover:text-accent">
                  {p.display}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-navy-soft text-navy">
                <Mail className="size-4" />
              </span>
              <a href={`mailto:${SITE.email}`} className="font-medium text-navy hover:text-accent">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-navy-soft text-navy">
                <MapPin className="size-4" />
              </span>
              <span className="text-muted">
                <span className="block font-medium text-navy">{SITE.addressLine}</span>
                {SITE.city}
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal className="min-w-0 lg:col-span-3" delayMs={80}>
          <div className="rounded-3xl bg-bg p-6 shadow-card sm:p-8">
            {sent ? (
              <div className="flex min-h-80 flex-col items-center justify-center text-center">
                <CheckCircle2 className="size-12 text-accent" strokeWidth={1.6} />
                <h3 className="mt-4 text-2xl font-semibold text-navy">Merci !</h3>
                <p className="mt-2 max-w-sm text-muted">
                  WhatsApp s'est ouvert avec votre demande complète. Il ne reste
                  qu'à appuyer sur « Envoyer » dans WhatsApp pour nous la
                  transmettre — nous vous répondons très vite.
                </p>
              </div>
            ) : (
              <form className="grid min-w-0 gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
                <div className="grid min-w-0 gap-1.5 sm:col-span-1">
                  <Label htmlFor="contact-name">Nom complet</Label>
                  <Input id="contact-name" name="name" autoComplete="name" required />
                </div>
                <div className="grid min-w-0 gap-1.5">
                  <Label htmlFor="contact-phone">Téléphone</Label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    required
                  />
                </div>
                <div className="grid min-w-0 gap-1.5 sm:col-span-2">
                  <Label htmlFor="contact-email">E-mail</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="grid min-w-0 gap-1.5 sm:col-span-2">
                  <Label htmlFor="contact-service">Service souhaité</Label>
                  <select
                    id="contact-service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={cn(
                      "h-12 w-full appearance-none rounded-xl bg-bg-elevated px-4 text-base text-fg shadow-card outline-none",
                      "transition-[box-shadow] duration-150 focus-visible:shadow-[0_0_0_2px_var(--color-accent)]",
                    )}
                  >
                    <option value="">Choisissez un service…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid min-w-0 gap-1.5 sm:col-span-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Quelques mots sur votre entreprise et votre besoin…"
                  />
                </div>
                <div className="min-w-0 sm:col-span-2">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Envoyer la demande sur WhatsApp
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
