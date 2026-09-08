import { create } from "zustand";

type ContactIntent = {
  service: string;
  setService: (service: string) => void;
};

export const useContactIntent = create<ContactIntent>((set) => ({
  service: "",
  setService: (service) => set({ service }),
}));

export function goToContact(service?: string) {
  if (service) useContactIntent.getState().setService(service);
  scrollToContact();
}

export function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  const name = document.getElementById("contact-name") as HTMLInputElement | null;
  window.setTimeout(() => name?.focus(), 400);
}
