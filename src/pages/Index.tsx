import { useI18n } from "@/lib/i18n";
import { LogoHero } from "@/components/site/LogoHero";
import { Pitch } from "@/components/site/Pitch";
import { Capabilities } from "@/components/site/Capabilities";
import { Numbers } from "@/components/site/Numbers";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LangToggle } from "@/components/site/LangToggle";
import { CookieBanner } from "@/components/site/CookieBanner";

const Index = () => {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background">
      <LangToggle />
      <main>
        <LogoHero />
        <Pitch />
        <Capabilities />
        <Numbers />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
      <CookieBanner />
    </div>
  );
};

export default Index;
