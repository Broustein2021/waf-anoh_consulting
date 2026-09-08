import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { AdditionalSection } from "@/components/sections/additional";
import { TrainingSection } from "@/components/sections/training";
import { QuoteSection } from "@/components/sections/quote";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Aller au contenu
      </a>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AdditionalSection />
        <TrainingSection />
        <QuoteSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
      <Toaster position="top-center" richColors />
    </>
  );
}
