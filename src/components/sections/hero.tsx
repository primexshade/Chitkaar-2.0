export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div className="chitkaar-container grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        {/* Hero Content */}
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-chitkaar-teal">
            Chitkaar 2.0
          </p>

          <h1
            id="hero-heading"
            className="max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Creating a more fearless, self-reliant future.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-foreground-muted sm:text-xl">
            We work with communities to uplift women, build confidence, and
            create meaningful change through action.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#get-involved"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-chitkaar-magenta px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-chitkaar-magenta-dark"
            >
              Get Involved
            </a>

            <a
              href="#about"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-muted"
            >
              Learn About Chitkaar
            </a>
          </div>
        </div>

        {/* Replaceable Hero Media */}
        <div
          aria-label="Featured Chitkaar content"
          className="relative flex min-h-[360px] items-center justify-center lg:min-h-[480px]"
        >
          {/* Decorative background accents */}
          <div
            aria-hidden="true"
            className="absolute right-4 top-8 h-40 w-40 rounded-full bg-chitkaar-yellow-soft blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute bottom-6 left-4 h-36 w-36 rounded-full bg-chitkaar-teal-soft blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute right-0 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full bg-chitkaar-magenta-soft blur-3xl"
          />

          {/* Featured Content Card */}
          <div className="relative w-full max-w-lg">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-border bg-surface/70 shadow-soft backdrop-blur-sm">
              {/* Brand accents */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-12 h-20 w-1 rounded-r-full bg-chitkaar-yellow"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-12 right-0 h-20 w-1 rounded-l-full bg-chitkaar-magenta"
              />

              {/* Placeholder Content */}
              <div className="flex h-full flex-col items-center justify-center px-8 text-center sm:px-12">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-chitkaar-teal">
                  Featured
                </p>

                <p className="mt-4 max-w-sm text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Stories, people, and moments that create change.
                </p>

                <p className="mt-4 max-w-sm text-sm leading-6 text-foreground-muted">
                  This space will showcase featured Chitkaar content from the
                  admin dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}