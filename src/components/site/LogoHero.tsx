import { ChevronDown } from "lucide-react";
import logo from "@/assets/kooma-logo.png";

export const LogoHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <img
        src={logo}
        alt="Kooma Engineering"
        width={520}
        height={140}
        className="w-[60vw] max-w-[520px] min-w-[220px] h-auto"
      />
      <a
        href="#pitch"
        aria-label="Scrolla ner"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink-soft animate-bounce"
      >
        <ChevronDown className="size-6" />
      </a>
    </section>
  );
};
