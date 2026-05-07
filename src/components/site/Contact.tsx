import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import contactMap from "@/assets/contact-map.jpg";

export const Contact = () => {
  const { t } = useI18n();
  return (
    <section
      id="kontakt"
      className="relative py-32 border-t border-border bg-background text-ink overflow-hidden isolate"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-60 [filter:blur(1.5px)_grayscale(100%)]"
        style={{ backgroundImage: `url(${contactMap})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/20 to-background/60"
      />
      <div className="container max-w-5xl relative">
        <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-ink-soft mb-16">
          {t("contact.section")}
        </p>

        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.02] tracking-tight mb-16 text-balance">
          {t("contact.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl">
          <a
            href="mailto:info@kooma.se"
            className="group border-t border-ink/20 pt-6 flex items-start justify-between hover:border-ink transition-colors"
          >
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-ink-soft mb-2">
                {t("contact.email")}
              </span>
              <span className="text-2xl font-light">info@kooma.se</span>
            </div>
            <ArrowUpRight className="size-5 text-ink-soft group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="tel:+46300692010"
            className="group border-t border-ink/20 pt-6 flex items-start justify-between hover:border-ink transition-colors"
          >
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-ink-soft mb-2">
                {t("contact.phoneSwitchboardLabel")}
              </span>
              <span className="text-2xl font-light">{t("contact.phoneSwitchboard")}</span>
            </div>
            <ArrowUpRight className="size-5 text-ink-soft group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-ink-soft max-w-3xl">
          <div>
            <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-ink-soft/70 mb-1">
              {t("contact.visitingLabel")}
            </span>
            {t("contact.location")}
          </div>
          <div>
            <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-ink-soft/70 mb-1">
              {t("contact.postalLabel")}
            </span>
            {t("contact.postal")}
          </div>
        </div>
      </div>
    </section>
  );
};
