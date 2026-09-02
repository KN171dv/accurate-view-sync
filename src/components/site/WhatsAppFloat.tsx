import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="shadow-ember fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand transition-transform duration-300 hover:scale-110 md:bottom-8 md:right-8"
    >
      <MessageCircle size={24} className="text-primary-foreground" />
    </a>
  );
}
