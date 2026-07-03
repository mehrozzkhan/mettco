import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

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
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className={cn("eyebrow", align === "center" && "justify-center")}>
        <span className="h-px w-8 bg-ember" aria-hidden />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-5 text-3xl font-semibold leading-[1.08] md:text-5xl",
          dark && "text-paper"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            dark ? "text-steel-lighter" : "text-steel-light"
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
