import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-surface">
      <div className="container max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-ink-soft mb-8">
          Kontakt
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-ink mb-12">
          Hör av dig.
        </h2>

        <ul className="space-y-5 text-lg">
          <li>
            <a
              href="mailto:info@kooma.se"
              className="inline-flex items-center gap-3 text-ink hover:text-primary transition-colors"
            >
              <Mail className="size-5 text-ink-soft" />
              info@kooma.se
            </a>
          </li>
          <li>
            <a
              href="tel:+4684000000"
              className="inline-flex items-center gap-3 text-ink hover:text-primary transition-colors"
            >
              <Phone className="size-5 text-ink-soft" />
              +46 8 400 00 00
            </a>
          </li>
          <li className="inline-flex items-center gap-3 text-ink-soft">
            <MapPin className="size-5" />
            Stockholm, Sverige
          </li>
        </ul>
      </div>
    </section>
  );
};
