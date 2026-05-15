import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/551944440707?text=Hello%2C%20I%27m%20interested%20in%20a%20hair%20transplant%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#1FB855] transition-all group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold hidden sm:inline group-hover:inline transition-all">
        WhatsApp Us
      </span>
    </a>
  );
}
