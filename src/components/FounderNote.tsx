import { site } from "@/config/site";

// Founder-approved draft. The founder may edit the wording in one place: here.
const NOTE =
  "METTCO is new, and I run it personally. When you send a requirement, " +
  "I'm the one who sources it, quotes it, and answers for it. No account " +
  "managers, no queues. If we commit to a price and a date, we keep both. " +
  "That's the whole pitch.";

export default function FounderNote() {
  return (
    <figure className="reveal border border-line bg-graphite-800 p-6 md:p-8">
      <p className="stamp">A note from the founder</p>
      <blockquote className="mt-5 max-w-[52ch] text-base leading-relaxed text-paper">
        {NOTE}
      </blockquote>
      <figcaption className="mt-6 border-t border-line pt-4">
        <p className="font-display text-lg uppercase tracking-wider">{site.founderName}</p>
        <p className="font-mono text-2xs uppercase tracking-widest text-paper-dim">Founder</p>
      </figcaption>
    </figure>
  );
}
