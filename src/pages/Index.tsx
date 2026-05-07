import { LogoHero } from "@/components/site/LogoHero";
import { Pitch } from "@/components/site/Pitch";
import { Capabilities } from "@/components/site/Capabilities";
import { Numbers } from "@/components/site/Numbers";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { SiteFooter } from "@/components/site/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <LogoHero />
        <Pitch />
        <Capabilities />
        <Numbers />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
