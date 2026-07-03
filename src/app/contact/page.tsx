import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach METTCO — ${company.address}. Email ${company.email} or send a message through our contact form.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk supply."
        lead="Quotes, partnerships, sourcing questions or anything in between — a real person reads every message."
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.8fr]">
          <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <a
                href={`mailto:${company.email}`}
                className="group flex items-start gap-5 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-azure/40 hover:shadow-elevated"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-paper-warm text-navy transition-colors duration-300 group-hover:bg-azure group-hover:text-white">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold">Email</span>
                  <span className="mt-1 block text-sm text-steel-light">{company.email}</span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.08}>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="group flex items-start gap-5 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:border-azure/40 hover:shadow-elevated"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-paper-warm text-navy transition-colors duration-300 group-hover:bg-azure group-hover:text-white">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold">Phone</span>
                  <span className="mt-1 block text-sm text-steel-light">{company.phone}</span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="flex items-start gap-5 rounded-2xl border border-line bg-white p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-paper-warm text-navy">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold">Office</span>
                  <span className="mt-1 block text-sm text-steel-light">{company.address}</span>
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <QuoteForm compact />
          </Reveal>
        </div>
      </section>
    </>
  );
}
