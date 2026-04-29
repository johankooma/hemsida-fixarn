import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/kooma-logo.png";

const nav = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Branscher", href: "#branscher" },
  { label: "Om oss", href: "#om" },
  { label: "Kontakt", href: "#kontakt" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#" aria-label="Kooma Engineering — startsida" className="flex items-center">
          <img
            src={logo}
            alt="Kooma Engineering"
            width={180}
            height={40}
            className="h-9 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#kontakt">Kontakta oss</a>
          </Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink py-2"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="rounded-full mt-2">
              <a href="#kontakt" onClick={() => setOpen(false)}>
                Kontakta oss
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
