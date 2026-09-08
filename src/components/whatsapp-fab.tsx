import { whatsappHref } from "@/lib/site";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12.04 2C6.5 2 2.02 6.37 2.02 11.78c0 1.73.46 3.41 1.34 4.9L2 22l5.5-1.43a10.2 10.2 0 0 0 4.54 1.09h.04c5.54 0 10.02-4.37 10.02-9.78C22.1 6.37 17.58 2 12.04 2Zm5.83 13.9c-.24.68-1.4 1.3-1.94 1.34-.5.04-1.12.06-1.81-.11-.42-.1-.95-.31-1.64-.6-2.89-1.24-4.77-4.13-4.92-4.32-.14-.2-1.18-1.56-1.18-2.97 0-1.4.74-2.1 1-2.38.24-.26.64-.38.86-.38h.62c.2 0 .46-.02.7.54.26.58.88 2.14.96 2.3.08.16.12.34.02.54-.1.2-.16.34-.32.52-.16.18-.33.4-.47.54-.16.16-.32.32-.14.62.18.3.8 1.32 1.72 2.14 1.18 1.06 2.18 1.38 2.5 1.54.3.14.48.12.66-.08.18-.2.78-.9.98-1.2.2-.32.42-.26.7-.16.28.1 1.78.84 2.08.98.3.16.5.22.58.34.08.12.08.7-.16 1.38Z" />
    </svg>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={whatsappHref(
        "Bonjour, je viens de votre site et je souhaiterais avoir de plus amples informations sur vos prestations.",
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed right-4 bottom-4 z-30 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-fg shadow-float transition-transform duration-150 hover:scale-105 active:scale-95 sm:right-6 sm:bottom-6"
    >
      <WhatsAppGlyph className="size-7" />
    </a>
  );
}
