import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container flex min-h-[70svh] flex-col justify-center py-24">
      <p className="font-mono text-sm text-signal">404</p>
      <h1 className="mt-3 max-w-[18ch] font-display text-4xl uppercase leading-tight tracking-wide md:text-6xl">
        That page isn&apos;t in the manifest.
      </h1>
      <p className="mt-5 max-w-[50ch] text-base text-paper-dim">
        The address may be from the old site. Start from the home page or send a requirement
        directly.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-ghost">
          Home
        </Link>
        <Link href="/rfq" className="btn-signal">
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
