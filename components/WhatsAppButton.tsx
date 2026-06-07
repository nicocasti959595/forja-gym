import { site, waLink } from "@/lib/site";
import { Icon } from "./Icons";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink(`Hola ${site.name}! Quiero más información.`)}
      target="_blank"
      rel="noopener"
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-4 font-semibold text-[#08080a] shadow-lg transition-transform hover:scale-105"
      style={{ animation: "pulse-ring 2.4s infinite" }}
    >
      <Icon name="whatsapp" className="h-7 w-7" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm transition-all duration-300 group-hover:max-w-[10rem] sm:block">
        Escribinos
      </span>
    </a>
  );
}
