import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "light";
  size?: "md" | "lg";
  withArrow?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = true,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 ease-out-expo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure",
        size === "md" ? "px-6 py-3 text-sm" : "px-8 py-4 text-base",
        variant === "primary" &&
          "btn-shine bg-azure text-white hover:bg-azure-dark hover:shadow-elevated",
        variant === "outline" &&
          "border border-line-dark/60 text-paper hover:border-azure hover:text-azure",
        variant === "ghost" &&
          "text-navy hover:text-azure",
        variant === "light" &&
          "bg-white text-navy shadow-elevated hover:shadow-deep",
        className
      )}
    >
      {children}
      {withArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      )}
    </Link>
  );
}
