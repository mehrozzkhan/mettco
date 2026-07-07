"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

/** Inline "send a specification" capture — routes into the RFQ flow. */
export function SpecCapture() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const go = () => {
    const q = value.trim();
    router.push(q ? `/request-a-quote?need=${encodeURIComponent(q)}` : "/request-a-quote");
  };

  return (
    <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-line bg-ink-800 p-1.5 pl-5 focus-within:border-azure/50">
      <label htmlFor="spec-capture" className="sr-only">
        What do you need sourced?
      </label>
      <input
        id="spec-capture"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && go()}
        placeholder="e.g. SKF 6205-2RS bearings, 500 pcs"
        className="w-full bg-transparent text-sm text-paper placeholder:text-steel-muted focus:outline-none"
      />
      <button
        type="button"
        onClick={go}
        className="btn-shine grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full bg-azure text-ink transition-colors duration-300 hover:bg-azure-dark"
        aria-label="Send specification"
      >
        <ArrowRight className="h-4 w-4" aria-hidden />
      </button>
    </div>
  );
}
