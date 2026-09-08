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
    title: "Création d'entreprise",
    body: "De l'idée à l'entreprise immatriculée, avec la bonne forme juridique et un départ propre.",
    icon: Building2,
  },
  {
    title: "Suivi d'immatriculation jusqu'au DFE",
    body: "Nous suivons le dossier jusqu'à l'obtention de votre certificat de formation d'entreprise (DFE).",
    icon: BadgeCheck,
  },
  {
    title: "Assistance aux crédits bancaires",
    body: "Un dossier qui parle pour vous auprès de la banque : états financiers, prévisions et un récit cohérent.",
    icon: Landmark,
  },
  {
    title: "Établissement des fiches de paie",
    body: "Fiches de paie, charges et dossiers du personnel préparés avec soin, mois après mois.",
    icon: Users,
  },
  {
    title: "États financiers",
    body: "États 301-302, Bilan et DISA préparés aux normes, prêts à être déposés.",
    icon: FileSpreadsheet,
  },
  {
    title: "Modifications d'entreprise",
    body: "Ajout ou retrait d'activité, augmentation de capital, changement de gérant, et autres mises à jour.",
    icon: PenLine,
  },
];

export function AdditionalSection() {
  return (
    <section className="overflow-hidden bg-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase">
            Un accompagnement plus large
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Services complémentaires
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Formalités et dossiers qui bloquent souvent une entreprise en
            croissance — pris en charge de bout en bout, pour que vous puissiez
            retourner à votre métier.
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
