export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-border bg-surface py-24 sm:py-28 lg:py-32"
    >
      <div className="chitkaar-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-chitkaar-teal">
            About Chitkaar
          </p>

          <h2
            id="about-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            Change begins when people believe they can create it.
          </h2>
        </div>

        <div className="max-w-2xl">
          <p className="text-lg leading-8 text-foreground-muted sm:text-xl">
            Chitkaar is a youth-led community focused on creating a more
            fearless and self-reliant society.
          </p>

          <p className="mt-6 text-base leading-7 text-foreground-muted">
            We believe meaningful change starts at the community level. By
            creating opportunities, building confidence, and encouraging
            people to take action, we work towards a future where everyone
            has the freedom and support to shape their own path.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-chitkaar-yellow-soft p-5">
              <p className="text-2xl font-bold text-foreground">01</p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                Empower
              </p>
              <p className="mt-1 text-sm leading-6 text-foreground-muted">
                Build confidence and self-reliance.
              </p>
            </div>

            <div className="rounded-2xl bg-chitkaar-teal-soft p-5">
              <p className="text-2xl font-bold text-foreground">02</p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                Connect
              </p>
              <p className="mt-1 text-sm leading-6 text-foreground-muted">
                Bring people and communities together.
              </p>
            </div>

            <div className="rounded-2xl bg-chitkaar-magenta-soft p-5">
              <p className="text-2xl font-bold text-foreground">03</p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                Act
              </p>
              <p className="mt-1 text-sm leading-6 text-foreground-muted">
                Turn ideas into meaningful action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}