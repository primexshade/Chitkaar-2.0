const teamMembers = [
  {
    id: "founder-lead",
    name: "Team Member",
    role: "Founder / Lead",
    initials: "TM",
  },
  {
    id: "core-team-1",
    name: "Team Member",
    role: "Core Team",
    initials: "TM",
  },
  {
    id: "core-team-2",
    name: "Team Member",
    role: "Core Team",
    initials: "TM",
  },
];

export function Team() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="border-t border-border bg-surface py-24 sm:py-28 lg:py-32"
    >
      <div className="chitkaar-container">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-chitkaar-magenta">
            The People
          </p>

          <h2
            id="team-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            Meet the people behind Chitkaar.
          </h2>

          <p className="mt-5 text-lg leading-8 text-foreground-muted">
            A passionate team working together to create meaningful,
            community-led change.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="group overflow-hidden rounded-[1.5rem] border border-border bg-background shadow-soft transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-chitkaar-teal-soft">
                <div
                  aria-hidden="true"
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-surface text-2xl font-bold text-chitkaar-teal shadow-soft"
                >
                  {member.initials}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-chitkaar-magenta">
                  {member.role}
                </p>

                <p className="mt-4 text-sm leading-6 text-foreground-muted">
                  Team profile coming soon.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}