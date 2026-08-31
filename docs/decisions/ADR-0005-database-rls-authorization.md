# ADR-0005: Database, RLS & Authorization Architecture

## Status

Proposed

## Context

Chitkaar 2.0 contains both public information and sensitive
organizational data.

Public information includes:

- Pages
- Programs
- Events
- Stories
- Team members
- Gallery content
- Announcements

Protected information includes:

- Volunteer applications
- Membership applications
- Event registrations
- Contact submissions
- Government identification documents and metadata
- Payment records
- Donation records
- Administrative records
- Audit records
- Organizational configuration

Chitkaar has two administrative levels:

- Super Admin
- Sub Admin

There will initially be one Super Admin.

Sub Admins need enough access to perform operational tasks such as
managing events and appropriate public content, but must not gain access
to protected organizational, financial, authentication, or other
sensitive information.

Frontend visibility cannot be treated as a security boundary.

Authorization therefore needs to exist at multiple layers.

## Decision

Chitkaar 2.0 will use PostgreSQL as the authoritative relational data
store.

Authorization will use defense in depth:

```text
Authenticated Identity
        ↓
Application Role
        ↓
Server-Side Authorization
        ↓
PostgreSQL Row Level Security
        ↓
Protected Record