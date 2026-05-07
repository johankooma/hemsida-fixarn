import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

type Consent = "pending" | "all" | "necessary";

const STORAGE_KEY = "cookie-consent";

export const CookieBanner = () => {
  const { t, lang } = useI18n();
  const [consent, setConsent] = useState<Consent>("pending");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Consent | null;
    if (stored === "all" || stored === "necessary") {
      setConsent(stored);
    } else {
      setConsent("pending");
      // Small delay to avoid CLS on initial load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (value: Consent) => {
    localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    setVisible(false);
  };

  if (!visible || consent !== "pending") return null;

  const policyUrl = lang === "sv" ? "/integritetspolicy" : "/privacy-policy";

  return (
    <div
      role="dialog"
      aria-label={t("cookie.aria")}
      className="fixed bottom-0 inset-x-0 z-50 animate-in slide-in-from-bottom-4 fade-in duration-500"
    >
      <div className="container pb-4 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 rounded-2xl border border-border bg-background/95 backdrop-blur-md shadow-elevated px-5 py-4 sm:px-6 sm:py-5">
          <p className="text-sm text-ink-soft leading-relaxed flex-1">
            {t("cookie.text")}{" "}
            <a
              href={policyUrl}
              className="underline underline-offset-2 text-ink hover:text-primary transition-colors"
            >
              {t("cookie.link")}
            </a>
            .
          </p>
          <div className="flex items-center gap-2 shrink-0 self-stretch sm:self-auto">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full flex-1 sm:flex-none"
              onClick={() => handleAccept("necessary")}
            >
              {t("cookie.reject")}
            </Button>
            <Button
              size="sm"
              className="rounded-full flex-1 sm:flex-none"
              onClick={() => handleAccept("all")}
            >
              {t("cookie.accept")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
