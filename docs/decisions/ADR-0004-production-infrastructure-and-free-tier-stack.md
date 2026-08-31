# ADR-0004: Production Infrastructure and Free-Tier Stack

## Status

Proposed

## Context

Chitkaar 2.0 is evolving from a public website into a production
organizational platform.

The platform will eventually support:

- Public content
- Programs
- Events
- Stories
- Team information
- Gallery/media
- Announcements
- Volunteer applications
- Membership applications
- Event registration
- Contact submissions
- Administrative workflows
- Government identification documents
- Membership fees
- Donations
- UPI
- Bank transfer
- QR-based payments
- Future payment gateway integration
- Future marketplace functionality

The organization wants the initial production infrastructure to operate
at a target cost of ₹0 per month.

The architecture must therefore balance:

- Security
- Privacy
- Maintainability
- Performance
- Accessibility
- Data ownership
- Migration capability
- Strong typing
- Administrative authorization

Free-tier infrastructure is an initial cost strategy, not a permanent
guarantee. Provider pricing, limits, availability, and terms may change.

## Decision

Chitkaar 2.0 will use a managed-service architecture centered around
Next.js and PostgreSQL.

The initial infrastructure direction is:

```text
Next.js
   ↓
Production Hosting
   ↓
Supabase PostgreSQL
   ↓
Supabase Auth
   ↓
PostgreSQL RLS
   ↓
Supabase Storage