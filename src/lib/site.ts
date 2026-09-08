export const SITE = {
  name: "WAF & ANOH CONSULTING",
  shortName: "WAF & ANOH",
  tagline: "Expertise à votre portée",
  headline: "Votre partenaire de confiance pour la performance de votre entreprise",
  email: "contact@waf-anohconsulting.ci",
  addressLine: "Yopougon Ananeraie, COOPEC",
  city: "Abidjan, Côte d'Ivoire",
  phones: [
    { display: "07 68 90 07 50", tel: "+2250768900750", digits: "0768900750" },
    { display: "07 99 14 05 74", tel: "+2250799140574", digits: "0799140574" },
  ],
  whatsapp: "2250768900750",
} as const;

export const NAV = [
  { href: "#home", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#training", label: "Formations" },
  { href: "#contact", label: "Contact" },
] as const;

export const SERVICES = [
  "Suivi comptable",
  "Fiscalité",
  "Gestion d'entreprise",
  "Protection sociale (CNPS)",
  "Création d'entreprise",
  "Formation FNE",
  "Stage étudiant",
  "Autre",
] as const;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id.replace(/^#/, ""));
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}