import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="flex min-h-[70vh] items-center justify-center px-5 py-24">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-chitkaar-teal">
              Chitkaar 2.0
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-chitkaar-black sm:text-5xl lg:text-6xl">
              Creating a more fearless, self-reliant future.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-foreground-muted">
              A youth-led community working to uplift women and create
              meaningful change in society.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}