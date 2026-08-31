const programs = [
  {
    number: "01",
    title: "Women’s Empowerment",
    description:
      "Creating opportunities that help women build confidence, independence, and the ability to shape their own future.",
    tone: "yellow",
  },
  {
    number: "02",
    title: "Youth & Community",
    description:
      "Bringing young people and communities together to learn, collaborate, and turn ideas into meaningful action.",
    tone: "teal",
  },
  {
    number: "03",
    title: "Social Impact",
    description:
      "Supporting initiatives that address real community needs and create lasting, positive change.",
    tone: "magenta",
  },
];

const toneClasses = {
  yellow: {
    badge: "bg-chitkaar-yellow-soft text-foreground",
    accent: "bg-chitkaar-yellow",
  },
  teal: {
    badge: "bg-chitkaar-teal-soft text-foreground",
    accent: "bg-chitkaar-teal",
  },
  magenta: {
    badge: "bg-chitkaar-magenta-soft text-foreground",
    accent: "bg-chitkaar-magenta",
  },
} as const;

export function Programs() {
  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="border-t border-border bg-background py-24 sm:py-28 lg:py-32"
    >
      <div className="chitkaar-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-chitkaar-teal">
              What We Do
            </p>

            <h2
              id="programs-heading"
              className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            >
              Turning purpose into action.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-foreground-muted">
            Our work focuses on creating practical opportunities for people
            and communities to grow, connect, and make a difference.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => {
            const tone = toneClasses[program.tone as keyof typeof toneClasses];

            return (
              <article
                key={program.number}
                className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-surface p-7 shadow-soft transition-transform duration-200 hover:-translate-y-1 sm:p-8"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${tone.accent}`}
                  aria-hidden="true"
                />

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${tone.badge}`}
                >
                  {program.number}
                </div>

                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-foreground">
                  {program.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-foreground-muted">
                  {program.description}
                </p>

                <a
                  href="#get-involved"
                  className="mt-8 inline-flex items-center text-sm font-semibold text-chitkaar-magenta transition-colors duration-200 hover:text-chitkaar-magenta-dark"
                >
                  Learn more
                  <span
                    aria-hidden="true"
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}