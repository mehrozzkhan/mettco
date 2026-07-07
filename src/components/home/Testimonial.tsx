import { Quote } from "lucide-react";
import { testimonial } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

/* One rich quote card — placeholder content lives in site.ts */
export function Testimonial() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <figure className="glass-blur relative mx-auto max-w-4xl overflow-hidden rounded-2xl p-10 md:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] bg-[radial-gradient(closest-side,rgba(255,90,31,0.1),transparent_72%)]"
            />
            <Quote className="h-8 w-8 text-azure" aria-hidden />
            <blockquote className="relative mt-6">
              <p className="text-xl font-medium leading-relaxed text-paper md:text-2xl md:leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </blockquote>
            <figcaption className="relative mt-8 flex items-center gap-4 border-t border-line pt-6">
              <span
                aria-hidden
                className="grid h-11 w-11 place-items-center rounded-full bg-azure/10 font-mono text-sm font-semibold text-azure"
              >
                {testimonial.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold text-paper">
                  {testimonial.name}
                </p>
                <p className="font-mono text-2xs uppercase tracking-[0.16em] text-steel-muted">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
