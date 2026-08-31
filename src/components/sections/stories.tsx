import { Reveal } from "@/components/ui/reveal";
const storyThemes = [
  {
    number: "01",
    title: "People",
    description:
      "Real people and the experiences that make community-led change meaningful.",
    tone: "yellow",
  },
  {
    number: "02",
    title: "Community",
    description:
      "Moments of connection, participation, and collective action from Chitkaar&apos;s work.",
    tone: "teal",
  },
  {
    number: "03",
    title: "Change",
    description:
      "Stories that show how ideas, opportunities, and action can create meaningful progress.",
    tone: "magenta",
  },
];

const toneClasses = {
  yellow: {
    number: "bg-chitkaar-yellow-soft text-foreground",
    accent: "bg-chitkaar-yellow",
  },
  teal: {
    number: "bg-chitkaar-teal-soft text-foreground",
    accent: "bg-chitkaar-teal",
  },
  magenta: {
    number: "bg-chitkaar-magenta-soft text-foreground",
    accent: "bg-chitkaar-magenta",
  },
} as const;

export function Stories() {
  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="border-t border-border bg-background py-24 sm:py-28 lg:py-32"
    >
      <div className="chitkaar-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-chitkaar-magenta">
              Stories &amp; Gallery
            </p>
            <Reveal>
            <h2
              id="stories-heading"
              className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            >
              Show the people behind the change.
            </h2>
            </Reveal>
          </div>

          <p className="max-w-xl text-base leading-7 text-foreground-muted">
            Chitkaar&apos;s story is best told through the people, communities, and
            moments that make the work real.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {storyThemes.map((theme) => {
            const tone = toneClasses[theme.tone as keyof typeof toneClasses];

            return (
              <article
                key={theme.number}
                className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-soft transition-transform duration-200 hover:-translate-y-1"
              >
                <div
                  className={`h-1 ${tone.accent}`}
                  aria-hidden="true"
                />

                <div className="aspect-[4/3] bg-surface-muted">
                  <div className="flex h-full items-center justify-center px-8 text-center">
                    <p className="text-sm font-medium text-foreground-muted">
                      Real Chitkaar photography will appear here.
                    </p>
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${tone.number}`}
                  >
                    {theme.number}
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold tracking-tight text-foreground">
                    {theme.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-foreground-muted">
                    {theme.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-[1.5rem] bg-chitkaar-teal p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
            Coming soon
          </p>

          <h3 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Real stories. Real people. Real moments.
          </h3>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
            This space is ready to become a living record of Chitkaar&apos;s work,
            using authentic photography and verified stories from the
            community.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-chitkaar-teal transition-colors duration-200 hover:bg-white/90"
          >
            Share Your Story
          </a>
        </div>
      </div>
    </section>
  );
}