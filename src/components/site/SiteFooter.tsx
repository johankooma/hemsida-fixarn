import logo from "@/assets/kooma-logo.png";
import { useI18n } from "@/lib/i18n";

export const SiteFooter = () => {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <img
              src={logo}
              alt="Kooma Engineering"
              width={180}
              height={40}
              className="h-9 w-auto mb-5"
            />
            <p className="text-sm text-ink-soft max-w-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-ink mb-4">{t("footer.services")}</h3>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li><a href="#vad" className="hover:text-ink">EMC</a></li>
              <li><a href="#vad" className="hover:text-ink">{t("cap.pq.title")}</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-ink mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li><a href="mailto:info@kooma.se" className="hover:text-ink">info@kooma.se</a></li>
              <li><a href="tel:+46705425558" className="hover:text-ink">{t("contact.phoneDirect")}</a></li>
              <li><a href="tel:+46300692010" className="hover:text-ink">{t("contact.phoneSwitchboard")}</a></li>
              <li>{t("contact.location")}</li>
              <li>{t("contact.postal")}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-soft">
          <p>© {new Date().getFullYear()} Kooma Engineering AB. {t("footer.rights")}</p>
          <p>Org.nr 559006-8150</p>
        </div>
      </div>
    </footer>
  );
};
