import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { GrowLine, SplitWords } from "@/components/motion/TextReveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal y={12}>
        <p className={cn("eyebrow", align === "center" && "justify-center")}>
          <GrowLine className="h-px w-8 bg-azure" />
          {eyebrow}
        </p>
      </Reveal>
      <h2
        className={cn(
          "mt-5 text-3xl font-semibold leading-[1.08] md:text-5xl",
          dark && "text-paper"
        )}
      >
        <SplitWords text={title} delay={0.1} stagger={0.045} />
      </h2>
      {lead && (
        <Reveal delay={0.25} y={16}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed md:text-lg",
              dark ? "text-steel-lighter" : "text-steel-light"
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
