import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Contact = () => {
  const { t } = useI18n();
  return (
    <section
      id="kontakt"
      className="py-32 border-t border-border bg-ink text-background"
    >
      <div className="container max-w-5xl">
        <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-background/50 mb-16">
          {t("contact.section")}
        </p>

        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.02] tracking-tight mb-16 text-balance">
          {t("contact.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl">
          <a
            href="mailto:info@kooma.se"
            className="group border-t border-background/20 pt-6 flex items-start justify-between hover:border-background transition-colors"
          >
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-background/50 mb-2">
                {t("contact.email")}
              </span>
              <span className="text-2xl font-light">info@kooma.se</span>
            </div>
            <ArrowUpRight className="size-5 text-background/60 group-hover:text-background group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="tel:+46300692010"
            className="group border-t border-background/20 pt-6 flex items-start justify-between hover:border-background transition-colors"
          >
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-background/50 mb-2">
                {t("contact.phoneSwitchboardLabel")}
              </span>
              <span className="text-2xl font-light">{t("contact.phoneSwitchboard")}</span>
            </div>
            <ArrowUpRight className="size-5 text-background/60 group-hover:text-background group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-background/50 max-w-3xl">
          <div>
            <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-background/40 mb-1">
              {t("contact.visitingLabel")}
            </span>
            {t("contact.location")}
          </div>
          <div>
            <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-background/40 mb-1">
              {t("contact.postalLabel")}
            </span>
            {t("contact.postal")}
          </div>
        </div>
      </div>
    </section>
  );
};
