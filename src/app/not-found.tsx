import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grid-texture grid min-h-dvh place-items-center bg-ink px-6">
      <div className="text-center">
        <p className="eyebrow justify-center">
          <span className="h-px w-8 bg-ember" aria-hidden />
          Error 404
        </p>
        <h1 className="mt-6 text-5xl font-semibold text-paper md:text-7xl">
          Page not found.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-steel-lighter">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
          Let&rsquo;s get you back to solid ground.
        </p>
        <div className="mt-10">
          <Button href="/" size="lg">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
