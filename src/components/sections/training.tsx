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
            Des compétences, pas seulement des formalités
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Nos programmes de formation
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Des sessions pratiques pour les entrepreneurs qui doivent rester
            conformes — et pour les étudiants et professionnels qui veulent
            travailler comme les cabinets.
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
                  Obligatoire dès décembre 2025
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  FNE — Facture Normalisée Électronique
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-muted">
                  Nous accompagnons les entrepreneurs sur la plateforme FNE de
                  l'État : création de compte, flux de facturation, et les bons
                  réflexes pour rester en règle dès que la facturation électronique
                  devient obligatoire sur tout le territoire.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-navy-muted">
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    Créer et configurer votre espace FNE
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    Émettre des factures électroniques conformes
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    Être prêt pour l'échéance de décembre 2025
                  </li>
                </ul>
                <Button
                  className="mt-7 self-start"
                  onClick={() => goToContact("Formation FNE")}
                >
                  Rejoindre le programme FNE
                </Button>
              </div>
            </article>
          </Reveal>

          <Reveal delayMs={80}>
            <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-bg shadow-card">
              <div className="relative h-48 overflow-hidden sm:h-56">
                <img
                  src="/images/training.jpg"
                  alt="Session pratique de formation en comptabilité"
                  className="size-full object-cover outline outline-1 -outline-offset-1 outline-navy/10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-navy-soft text-navy">
                  <GraduationCap className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-navy">
                  Stages étudiants & professionnels
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  Des formations pratiques en comptabilité pour les étudiants en
                  fin de cycle et les professionnels en activité : journaux,
                  logique fiscale, dossiers CNPS et les états financiers qu'un
                  vrai cabinet produit chaque mois.
                </p>
                <Button
                  variant="navy"
                  className="mt-7 self-start"
                  onClick={() => goToContact("Stage étudiant")}
                >
                  Se renseigner sur une session
                </Button>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
