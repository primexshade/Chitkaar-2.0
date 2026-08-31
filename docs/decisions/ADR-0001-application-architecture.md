# ADR-0001: Chitkaar 2.0 Application Architecture

## Status

Accepted

## Context

Chitkaar 2.0 is the digital home of Chitkaar Welfare Society.

The product vision requires a public website that communicates Chitkaar's
mission and enables visitors to discover, understand, trust, explore, connect,
and act.

The platform will eventually support:

- Programs
- Impact areas
- Events
- Event registration
- Volunteer applications
- Membership applications
- Stories
- Gallery
- Team
- Contact and partnership enquiries
- Donations
- Media management
- Future marketplace functionality

Content must be manageable by Chitkaar administrators.

Visitor submissions must be handled through first-party forms on the Chitkaar
website rather than relying on external form products.

The project should initially operate using free-tier infrastructure wherever
practical. Architecture should remain maintainable and should not introduce
complexity without a corresponding product requirement.

## Decision

Chitkaar 2.0 will use a modular monolith architecture built around Next.js.

The initial infrastructure direction is:

- Next.js for the public website, server-side application logic, and admin
  application.
- Supabase PostgreSQL for persistent application data.
- Supabase Auth for administrator authentication.
- Supabase Storage for media and uploaded files.
- Vercel Free for application deployment.

The public website and administration interface will remain part of the same
application while maintaining clear internal feature boundaries.

The application will use the database as the source of truth for dynamic
content and submitted data.

Dynamic content will include, where appropriate:

- Programs
- Impact areas
- Events
- Event registrations
- Volunteer applications
- Membership applications
- Stories
- Gallery items
- Team members
- Contact enquiries
- Donations
- Media metadata
- Site configuration

Application logic will remain in code rather than being unnecessarily
represented as database content.

## Forms

Chitkaar will use first-party website forms for visitor interactions.

Examples include:

- Volunteer applications
- Membership applications
- Event registrations
- Contact enquiries
- Partnership enquiries

Forms will be validated on the server and persisted in PostgreSQL.

Administrators will manage submitted records through the admin interface.

## Administration

Chitkaar administrators will manage the organization's content and
submissions through an authenticated admin interface.

The initial authorization model will support an administrator role while
keeping the design extensible for future role-based permissions.

## Donations

The donation data model will remain payment-provider-neutral until the
organization's exact donation and payment requirements are finalized.

No payment provider will be introduced solely to complete the initial
architecture.

## Media

Images and other uploaded files will be stored in object storage rather than
inside PostgreSQL.

Supabase Storage is the initial storage direction, with database records used
for relevant metadata and relationships.

## Deployment

The initial deployment strategy is a free-tier-first architecture:

Application:
Vercel Free

Database:
Supabase Free PostgreSQL

Authentication:
Supabase Auth

Media:
Supabase Storage Free

The architecture should allow individual infrastructure components to be
upgraded independently if Chitkaar's usage eventually exceeds free-tier
limits.

A custom domain, payment-provider transaction fees, or other external costs
are not considered hosting infrastructure and may be introduced when
required.

## Alternatives Considered

### Separate frontend and backend services

Rejected for the initial system because they would introduce additional
deployment, networking, and maintenance complexity without a demonstrated
requirement.

### Microservices

Rejected.

Chitkaar does not currently require independently deployable services, and
introducing microservices would add unnecessary operational complexity.

### Fully static website

Rejected because events, applications, registrations, content management,
administration, and other data require persistence.

### External form providers

Rejected as the primary architecture because Chitkaar requires first-party
forms and centralized management of submissions.

### Self-hosted infrastructure

Not selected for the initial deployment because it introduces unnecessary
DevOps and operational overhead for a project that can initially operate on
managed free-tier infrastructure.

## Consequences

### Positive

- Simple initial deployment model.
- Low or zero infrastructure cost within applicable free tiers.
- Strong integration with Next.js.
- Persistent PostgreSQL data.
- Built-in authentication and storage options.
- First-party forms remain under Chitkaar's control.
- Clear path toward an admin-managed platform.
- Individual infrastructure components can be upgraded independently.
- Avoids premature microservice complexity.

### Negative

- Free-tier infrastructure has usage limits.
- The project becomes dependent on managed infrastructure providers.
- Supabase and Vercel pricing and limits may change.
- A growing application will eventually require capacity and operational
  decisions.

These trade-offs are accepted because the initial goal is a maintainable,
cost-conscious platform rather than premature infrastructure scaling.

## Security Considerations

- Administrative functionality must require authentication.
- Authorization must be enforced server-side.
- Public forms must validate and sanitize submitted data.
- Sensitive credentials must never be exposed to the client.
- Database access policies must prevent unauthorized modification of
  administrative data.
- Uploaded media must be validated.
- Secrets must be stored through deployment environment configuration.
- Personal information collected through forms must be handled according to
  applicable privacy requirements.

## Future Evolution

This architecture is intentionally designed to evolve.

If Chitkaar grows significantly, individual components may be upgraded or
replaced without requiring the entire application to be rewritten.

Potential future additions include:

- Granular admin roles
- Advanced reporting
- Notification infrastructure
- Payment processing
- Search
- Marketplace functionality
- Additional storage or compute capacity

Any major architectural change should be documented through a new ADR.
