import { Reveal } from "@/components/ui/reveal";

const impactAreas = [
  {
    number: "01",
    title: "Education",
    description:
      "Creating opportunities for learning, growth, and greater possibilities.",
    tone: "yellow",
  },
  {
    number: "02",
    title: "Healthcare",
    description:
      "Supporting healthier communities by helping people access care and support.",
    tone: "teal",
  },
  {
    number: "03",
    title: "Livelihood",
    description:
      "Encouraging independence and economic opportunity through meaningful support.",
    tone: "magenta",
  },
  {
    number: "04",
    title: "Community Development",
    description:
      "Working alongside communities to identify needs and turn ideas into action.",
    tone: "yellow",
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

export function Impact() {
  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="border-t border-border bg-surface py-24 sm:py-28 lg:py-32"
    >
      <div className="chitkaar-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-chitkaar-magenta">
              Our Impact
            </p>
            <Reveal>
              <h2
                id="impact-heading"
                className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
              >
                Creating change where it matters.
              </h2>
            </Reveal>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-foreground-muted">
            Chitkaar works across communities to create opportunities,
            strengthen self-reliance, and support people in building a better
            future for themselves and those around them.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {impactAreas.map((area) => {
            const tone = toneClasses[area.tone as keyof typeof toneClasses];

            return (
              <article
                key={area.number}
                className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-background p-7 shadow-soft transition-transform duration-200 hover:-translate-y-1 sm:p-8"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${tone.accent}`}
                  aria-hidden="true"
                />

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${tone.number}`}
                >
                  {area.number}
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-tight text-foreground">
                  {area.title}
                </h3>

                <p className="mt-3 max-w-md text-base leading-7 text-foreground-muted">
                  {area.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-[1.5rem] border border-border bg-background p-7 sm:p-8">
          <p className="max-w-3xl text-base leading-7 text-foreground-muted">
            Real impact is measured through the people who grow, the
            opportunities that open up, and the communities that become more
            confident in shaping their own future.
          </p>
        </div>
      </div>
    </section>
  );
}
