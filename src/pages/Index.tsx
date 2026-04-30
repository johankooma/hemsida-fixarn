import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Stats } from "@/components/site/Stats";
import { Industries } from "@/components/site/Industries";
import { ContactCTA } from "@/components/site/ContactCTA";
import { SiteFooter } from "@/components/site/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Industries />
        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
