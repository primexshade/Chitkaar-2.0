const involvementOptions = [
  {
    number: "01",
    title: "Join Us",
    description:
      "Become part of a community of people who believe in creating meaningful change through action.",
    href: "#contact",
    tone: "yellow",
  },
  {
    number: "02",
    title: "Volunteer",
    description:
      "Bring your time, skills, and energy to support Chitkaar's work and community initiatives.",
    href: "#contact",
    tone: "teal",
  },
  {
    number: "03",
    title: "Support Our Work",
    description:
      "Help Chitkaar continue creating opportunities and supporting communities through your contribution.",
    href: "#donate",
    tone: "magenta",
  },
  {
    number: "04",
    title: "Attend & Participate",
    description:
      "Take part in Chitkaar events and activities, connect with others, and be part of the movement.",
    href: "#events",
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

export function GetInvolved() {
  return (
    <section
      id="get-involved"
      aria-labelledby="get-involved-heading"
      className="border-t border-border bg-background py-24 sm:py-28 lg:py-32"
    >
      <div className="chitkaar-container">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-chitkaar-teal">
            Get Involved
          </p>

          <h2
            id="get-involved-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            There is a place for you in the work.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground-muted">
            Change becomes possible when people choose to participate. Find a
            way to contribute that feels right for you.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {involvementOptions.map((option) => {
            const tone =
              toneClasses[option.tone as keyof typeof toneClasses];

            return (
              <article
                key={option.number}
                className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-surface p-7 shadow-soft transition-transform duration-200 hover:-translate-y-1 sm:p-8"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${tone.accent}`}
                  aria-hidden="true"
                />

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${tone.number}`}
                >
                  {option.number}
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-tight text-foreground">
                  {option.title}
                </h3>

                <p className="mt-3 max-w-md text-base leading-7 text-foreground-muted">
                  {option.description}
                </p>

                <a
                  href={option.href}
                  className="mt-7 inline-flex items-center text-sm font-semibold text-chitkaar-magenta transition-colors duration-200 hover:text-chitkaar-magenta-dark"
                >
                  Get started
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

        <div className="mt-10 rounded-[1.5rem] bg-chitkaar-magenta p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
            Be part of Chitkaar
          </p>

          <h3 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Small actions can become meaningful change.
          </h3>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
            Whether you contribute your time, your skills, your support, or
            simply your presence, your participation helps strengthen a
            community-led movement.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-chitkaar-magenta transition-colors duration-200 hover:bg-white/90"
          >
            Connect with Chitkaar
          </a>
        </div>
      </div>
    </section>
  );
}