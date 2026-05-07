import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ContactCTA = () => {
  return (
    <section id="kontakt" className="py-24 md:py-32 bg-surface">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 md:p-16 lg:p-20 text-primary-foreground shadow-elevated">
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl"
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="text-xs font-mono uppercase tracking-[0.2em] opacity-80 mb-5">
                Nästa steg
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] text-balance mb-6">
                Berätta om ditt projekt — så hör vi av oss inom 24 timmar.
              </h2>
              <p className="text-lg opacity-90 max-w-2xl">
                Inget förpliktande, ingen säljpitch. Bara ett samtal med
                en ingenjör som förstår din utmaning.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full h-14 px-8 text-base bg-background text-ink hover:bg-background/90 shadow-soft"
              >
                <a href="mailto:info@kooma.se">
                  Skicka en förfrågan
                  <ArrowRight className="ml-1" />
                </a>
              </Button>
              <div className="flex flex-col gap-2 mt-4 text-sm">
                <a
                  href="mailto:info@kooma.se"
                  className="inline-flex items-center gap-2 opacity-90 hover:opacity-100"
                >
                  <Mail className="size-4" />
                  info@kooma.se
                </a>
                <a
                  href="tel:+46705425558"
                  className="inline-flex items-center gap-2 opacity-90 hover:opacity-100"
                >
                  <Phone className="size-4" />
                  +46 (0)70 542 55 58
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
