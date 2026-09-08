import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { NAV } from "@/lib/site";
import { goToContact } from "@/lib/contact-intent";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleNav(href: string) {
    setOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-200",
        scrolled
          ? "border-border bg-bg-elevated/95 shadow-[0_8px_24px_rgb(11_31_77_/_0.06)] backdrop-blur-md"
          : "border-transparent bg-bg-elevated",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#home"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
        >
          <Logo compact />
          <span className="sr-only">WAF & ANOH CONSULTING — Accueil</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(item.href);
              }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            className="hidden sm:inline-flex"
            onClick={() => {
              setOpen(false);
              goToContact();
            }}
          >
            Prendre rendez-vous
          </Button>
          <Button
            size="sm"
            className="sm:hidden"
            onClick={() => {
              setOpen(false);
              goToContact();
            }}
          >
            Contactez-nous
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-navy-soft lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-[4.25rem] bottom-0 z-50 bg-navy lg:hidden",
          "transition-opacity duration-200",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex h-full flex-col gap-1 px-6 py-8" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(item.href);
              }}
              className="rounded-xl px-3 py-3.5 font-display text-2xl text-navy-fg"
            >
              {item.label}
            </a>
          ))}
          <Button
            size="lg"
            className="mt-6 w-full"
            onClick={() => {
              setOpen(false);
              goToContact();
            }}
          >
            Prendre rendez-vous
          </Button>
        </nav>
      </div>
    </header>
  );
}
