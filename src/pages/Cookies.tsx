import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "@/lib/i18n";

const Cookies = () => {
  const { lang } = useI18n();

  useEffect(() => {
    document.title =
      lang === "sv"
        ? "Cookies & integritet – Kooma Engineering"
        : "Cookies & privacy – Kooma Engineering";
  }, [lang]);

  const resetConsent = () => {
    localStorage.removeItem("cookie-consent");
    window.location.reload();
  };

  return (
    <main className="container max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
      <Link
        to="/"
        className="text-sm text-ink-soft hover:text-primary underline underline-offset-2"
      >
        ← {lang === "sv" ? "Tillbaka till startsidan" : "Back to home"}
      </Link>

      {lang === "sv" ? (
        <article className="prose prose-neutral mt-8 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Cookies & personuppgifter
          </h1>
          <p className="text-ink-soft leading-relaxed">
            Den här sidan beskriver vilka cookies vi använder på
            kooma.se, varför vi använder dem, hur länge de lagras och hur
            du återkallar ditt samtycke.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Cookies vi använder</h2>
            <ul className="list-disc pl-6 space-y-2 text-ink-soft">
              <li>
                <strong className="text-ink">Nödvändiga cookies</strong> –
                krävs för att webbplatsen ska fungera, t.ex. för att komma
                ihåg ditt språkval och ditt cookie-samtycke. Lagras lokalt
                i din webbläsare (localStorage) tills du själv rensar
                dem.
              </li>
              <li>
                <strong className="text-ink">Analyscookies</strong> –
                används endast om du samtycker. Hjälper oss förstå hur
                besökare hittar och använder sidan så att vi kan förbättra
                innehåll och prestanda. Lagras i upp till 24 månader.
              </li>
            </ul>
            <p className="text-ink-soft">
              Vi använder inga marknadsförings- eller spårningscookies
              från tredje part i reklamsyfte.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Syfte</h2>
            <p className="text-ink-soft">
              Vi använder cookies för att webbplatsen ska fungera korrekt,
              komma ihåg dina inställningar och – om du samtycker – för
              att samla in anonym statistik som hjälper oss att förbättra
              webbplatsen.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Lagringstid</h2>
            <p className="text-ink-soft">
              Nödvändiga cookies lagras tills du rensar webbläsarens
              lagring. Analyscookies lagras i upp till 24 månader, eller
              tills du återkallar samtycket.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Återkalla samtycke</h2>
            <p className="text-ink-soft">
              Du kan när som helst återkalla ditt samtycke. Klicka på
              knappen nedan så återställs ditt val och cookie-rutan visas
              igen vid nästa besök på startsidan.
            </p>
            <button
              onClick={resetConsent}
              className="inline-flex items-center rounded-full border border-border bg-background px-5 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              Återkalla cookie-samtycke
            </button>
            <p className="text-ink-soft text-sm">
              Du kan även radera cookies direkt via inställningarna i din
              webbläsare.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Personuppgiftsansvarig</h2>
            <p className="text-ink-soft">
              Kooma Engineering AB (org.nr 559006-8150)
              <br />
              Gårdstensvägen 101, 424 61 Angered, Göteborg
              <br />
              E-post:{" "}
              <a
                href="mailto:info@kooma.se"
                className="underline underline-offset-2 hover:text-primary"
              >
                info@kooma.se
              </a>
            </p>
            <p className="text-ink-soft">
              Har du frågor om hur vi behandlar dina personuppgifter, eller
              vill du utöva dina rättigheter enligt GDPR (registerutdrag,
              rättelse eller radering), är du välkommen att kontakta oss
              på adressen ovan.
            </p>
          </section>
        </article>
      ) : (
        <article className="prose prose-neutral mt-8 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Cookies & privacy
          </h1>
          <p className="text-ink-soft leading-relaxed">
            This page describes which cookies we use on kooma.se, why we
            use them, how long they are stored and how you can withdraw
            your consent.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Cookies we use</h2>
            <ul className="list-disc pl-6 space-y-2 text-ink-soft">
              <li>
                <strong className="text-ink">Necessary cookies</strong> –
                required for the site to work, e.g. to remember your
                language and cookie choice. Stored locally in your
                browser (localStorage) until you clear them.
              </li>
              <li>
                <strong className="text-ink">Analytics cookies</strong> –
                only set if you consent. Helps us understand how visitors
                find and use the site so we can improve content and
                performance. Stored for up to 24 months.
              </li>
            </ul>
            <p className="text-ink-soft">
              We do not use any third-party marketing or advertising
              trackers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Purpose</h2>
            <p className="text-ink-soft">
              We use cookies so the site works correctly, to remember
              your preferences and – with your consent – to collect
              anonymous statistics that help us improve the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Storage duration</h2>
            <p className="text-ink-soft">
              Necessary cookies are stored until you clear your browser
              storage. Analytics cookies are stored for up to 24 months,
              or until you withdraw consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Withdraw consent</h2>
            <p className="text-ink-soft">
              You can withdraw your consent at any time. Click the button
              below to reset your choice — the cookie banner will appear
              again on your next visit to the start page.
            </p>
            <button
              onClick={resetConsent}
              className="inline-flex items-center rounded-full border border-border bg-background px-5 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              Withdraw cookie consent
            </button>
            <p className="text-ink-soft text-sm">
              You can also delete cookies directly from your browser
              settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Data controller</h2>
            <p className="text-ink-soft">
              Kooma Engineering AB (reg. no. 559006-8150)
              <br />
              Gårdstensvägen 101, 424 61 Angered, Gothenburg, Sweden
              <br />
              Email:{" "}
              <a
                href="mailto:info@kooma.se"
                className="underline underline-offset-2 hover:text-primary"
              >
                info@kooma.se
              </a>
            </p>
            <p className="text-ink-soft">
              For questions about how we process your personal data, or
              to exercise your rights under the GDPR (access,
              rectification or erasure), please contact us at the address
              above.
            </p>
          </section>
        </article>
      )}
    </main>
  );
};

export default Cookies;
