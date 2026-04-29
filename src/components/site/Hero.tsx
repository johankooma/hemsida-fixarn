import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-measurement.jpg";

export const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Subtle background blob */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-40 -left-40 w-[400px] h-[400px] rounded-full bg-accent/60 blur-3xl"
      />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-8">
              <span className="size-1.5 rounded-full bg-primary" />
              Ingenjörspartner sedan 2008
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-light leading-[0.95] tracking-tight text-ink text-balance mb-8">
              Precision i varje{" "}
              <span className="italic text-primary">mätning</span>.
            </h1>

            <p className="text-lg sm:text-xl text-ink-soft max-w-2xl leading-relaxed mb-10">
              Kooma Engineering är din erfarna partner inom mätteknik,
              tester och validering. Vi hjälper svensk industri att nå
              högre kvalitet — med data du kan lita på.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7 text-base">
                <a href="#kontakt">
                  Boka ett möte
                  <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-7 text-base border-ink/15 hover:bg-surface"
              >
                <a href="#tjanster">Se våra tjänster</a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-strong shadow-elevated">
                <img
                  src={heroImage}
                  alt="Kooma-ingenjör utför precisionsmätning på industrikomponent i mätlabb"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-10 bg-background border border-border shadow-soft rounded-xl px-5 py-4 max-w-[220px]">
                <div className="font-display text-3xl text-ink">±0.001 mm</div>
                <div className="text-xs text-ink-soft mt-1">
                  Mätosäkerhet vid kalibrering
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
