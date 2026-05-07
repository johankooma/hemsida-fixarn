import { ChevronDown } from "lucide-react";
import logo from "@/assets/kooma-logo.png";
import { useI18n } from "@/lib/i18n";

export const LogoHero = () => {
  const { t } = useI18n();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.4em] text-ink-soft">
        {t("hero.kicker")}
      </div>

      <img
        src={logo}
        alt="Kooma Engineering"
        width={520}
        height={140}
        className="w-[58vw] max-w-[480px] min-w-[220px] h-auto"
      />

      <div className="mt-10 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.35em] text-ink-soft">
        <span>{t("hero.tag1")}</span>
        <span className="size-1 rounded-full bg-ink-soft/50" />
        <span>{t("hero.tag2")}</span>
        <span className="size-1 rounded-full bg-ink-soft/50" />
        <span>{t("hero.tag3")}</span>
      </div>

      <a
        href="#manifest"
        aria-label={t("hero.scroll")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink-soft animate-bounce"
      >
        <ChevronDown className="size-5" />
      </a>
    </section>
  );
};
