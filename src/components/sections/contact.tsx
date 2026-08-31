const contactOptions = [
  {
    number: "01",
    title: "Join Chitkaar",
    description:
      "Interested in becoming part of the community? Reach out and start the conversation.",
    tone: "yellow",
  },
  {
    number: "02",
    title: "Volunteer",
    description:
      "Have time, skills, or ideas to contribute? We'd love to hear how you want to help.",
    tone: "teal",
  },
  {
    number: "03",
    title: "Partner With Us",
    description:
      "If you represent an organization or community interested in working together, get in touch.",
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

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border bg-surface py-24 sm:py-28 lg:py-32"
    >
      <div className="chitkaar-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-chitkaar-teal">
              Contact
            </p>

            <h2
              id="contact-heading"
              className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            >
              Let&apos;s start a conversation.
            </h2>

            <p className="mt-5 text-lg leading-8 text-foreground-muted">
              Whether you want to join, volunteer, collaborate, or simply learn
              more about Chitkaar, we&apos;d love to hear from you.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-border bg-background p-6 sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-chitkaar-magenta">
                Contact details
              </p>

              <p className="mt-3 text-base leading-7 text-foreground-muted">
                Official contact information will be added here once verified.
              </p>
            </div>
          </div>

          <div>
            <div className="grid gap-5">
              {contactOptions.map((option) => {
                const tone =
                  toneClasses[option.tone as keyof typeof toneClasses];

                return (
                  <article
                    key={option.number}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-background p-7 shadow-soft transition-transform duration-200 hover:-translate-y-1 sm:p-8"
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

                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                      {option.title}
                    </h3>

                    <p className="mt-3 text-base leading-7 text-foreground-muted">
                      {option.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-5 rounded-[1.5rem] bg-chitkaar-magenta p-7 text-white sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/75">
                Stay connected
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Your interest matters.
              </h3>

              <p className="mt-3 max-w-xl text-base leading-7 text-white/80">
                Verified contact channels will be connected here so visitors
                can reach the right people at Chitkaar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}