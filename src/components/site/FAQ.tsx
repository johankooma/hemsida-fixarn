import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n";

export const FAQ = () => {
  const { t } = useI18n();
  const faqs = [1, 2, 3, 4, 5, 6].map((n) => ({
    q: t(`faq.q${n}`),
    a: t(`faq.a${n}`),
  }));

  return (
    <section id="faq" className="py-32 border-t border-border">
      <div className="container max-w-5xl">
        <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-ink-soft mb-16">
          {t("faq.section")}
        </p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-ink mb-16 max-w-3xl">
          {t("faq.title")}
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-medium text-ink py-6 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-ink-soft leading-relaxed pb-6">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
