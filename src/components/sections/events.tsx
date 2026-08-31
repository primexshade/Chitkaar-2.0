const eventTypes = [
  {
    number: "01",
    title: "Community Events",
    description:
      "Spaces where people can come together, connect, learn, and take meaningful action.",
    tone: "yellow",
  },
  {
    number: "02",
    title: "Awareness & Outreach",
    description:
      "Initiatives that bring important community issues into conversation and encourage participation.",
    tone: "teal",
  },
  {
    number: "03",
    title: "Workshops & Activities",
    description:
      "Practical experiences designed to encourage learning, confidence, creativity, and collaboration.",
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

export function Events() {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="border-t border-border bg-surface py-24 sm:py-28 lg:py-32"
    >
      <div className="chitkaar-container">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-chitkaar-yellow">
              Events
            </p>

            <h2
              id="events-heading"
              className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            >
              Come together. Learn. Take action.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-foreground-muted">
            Chitkaar brings people together through activities and initiatives
            that create opportunities for connection, learning, and community
            action.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {eventTypes.map((eventType) => {
            const tone =
              toneClasses[eventType.tone as keyof typeof toneClasses];

            return (
              <article
                key={eventType.number}
                className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-background p-7 shadow-soft transition-transform duration-200 hover:-translate-y-1 sm:p-8"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${tone.accent}`}
                  aria-hidden="true"
                />

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${tone.number}`}
                >
                  {eventType.number}
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-tight text-foreground">
                  {eventType.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-foreground-muted">
                  {eventType.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-[1.5rem] border border-border bg-background p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-chitkaar-teal">
              Upcoming events
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Event information will appear here.
            </h3>

            <p className="mt-4 text-base leading-7 text-foreground-muted">
              This space is ready for verified Chitkaar events, including
              dates, locations, descriptions, and participation details as they
              become available.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-chitkaar-magenta px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-chitkaar-magenta-dark"
            >
              Stay Connected
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}