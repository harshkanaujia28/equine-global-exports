import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/brand";

export function WhatsAppFAB() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.62_0.18_150)] text-white shadow-[0_10px_30px_-5px_oklch(0.62_0.18_150/0.5)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
