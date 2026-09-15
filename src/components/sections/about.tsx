import { useEffect, useState, type PointerEvent } from "react";
import { ChevronLeft, ChevronRight, Handshake, Lock, Scale } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const ABOUT_PHOTOS = [
  { src: "/images/cabinet.jpg", alt: "Photographie du cabinet WAF & ANOH CONSULTING" },
  { src: "/images/franck.jpg", alt: "Photographie du cabinet WAF & ANOH CONSULTING" },
];

const COMMITMENTS = [
  {
    title: "Rigueur & professionnalisme",
    body: "Chaque dossier, chaque état financier et chaque échéance est traité avec méthode. Des comptes sains, dans les temps.",
    icon: Scale,
    tone: "navy" as const,
  },
  {
    title: "Disponibilité & proximité",
    body: "Un partenaire facile à joindre — à Yopougon et sur WhatsApp — pas un back-office lointain.",
    icon: Handshake,
    tone: "accent" as const,
  },
  {
    title: "Confidentialité & intégrité",
    body: "Vos chiffres, vos équipes, vos projets. Traités avec discrétion, toujours.",
    icon: Lock,
    tone: "navy" as const,
  },
];

function PhotoCarousel({ photos }: { photos: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const count = photos.length;

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => window.clearInterval(timer);
  }, [count]);

  function go(dir: number) {
    setIndex((i) => (i + dir + count) % count);
  }

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    if ((e.target as HTMLElement).closest("button")) return;
    setDragStart(e.clientX);
  }

  function onPointerUp(e: PointerEvent<HTMLDivElement>) {
    if (dragStart === null) return;
    const delta = e.clientX - dragStart;
    if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
    setDragStart(null);
  }

  return (
    <div className="relative">
      <div className="absolute -top-6 -left-6 size-28 rounded-full bg-accent/20" aria-hidden />
      <div className="absolute -right-4 -bottom-8 size-36 rounded-full bg-navy/10" aria-hidden />
      <div className="relative overflow-hidden rounded-3xl bg-bg-elevated p-2 shadow-card">
        <div
          className="relative aspect-[4/3] w-full touch-pan-y overflow-hidden rounded-2xl outline outline-1 -outline-offset-1 outline-navy/10"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          {photos.map((photo, i) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              aria-hidden={i !== index}
              className={cn(
                "h-full w-full object-cover transition-opacity duration-700",
                i === index ? "relative opacity-100" : "absolute inset-0 opacity-0",
              )}
            />
          ))}

          {count > 1 && (
            <>
              <button
                type="button"
                aria-label="Photo précédente"
                onClick={() => go(-1)}
                className="absolute top-1/2 left-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-navy/40 text-navy-fg backdrop-blur-sm transition-colors duration-150 hover:bg-navy/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Photo suivante"
                onClick={() => go(1)}
                className="absolute top-1/2 right-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-navy/40 text-navy-fg backdrop-blur-sm transition-colors duration-150 hover:bg-navy/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}
        </div>

        {count > 1 && (
          <div className="mt-3 flex items-center justify-center gap-2" aria-hidden>
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                aria-label={`Photo ${i + 1} sur ${count}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "size-2 rounded-full transition-colors duration-200",
                  i === index ? "bg-accent" : "bg-navy/20 hover:bg-navy/40",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="overflow-hidden bg-bg py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <PhotoCarousel photos={ABOUT_PHOTOS} />
        </Reveal>

        <div>
          <Reveal>
            <p className="font-sans text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              À propos de nous
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              L'expertise à votre portée
            </h2>
            <p className="mt-5 text-muted">
              WAF & ANOH CONSULTING est un cabinet abidjanais bâti autour d'une
              équipe pluridisciplinaire. Nous accompagnons les entrepreneurs et
              les entreprises en croissance pour garder une gestion saine, conforme
              et performante — du premier journal à la clôture d'exercice.
            </p>
            <p className="mt-3 text-muted">
              Installés à Yopougon Ananeraie, nous restons proches des entreprises
              que nous servons : des conseils clairs, des dossiers soignés, et une
              équipe réellement joignable.
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