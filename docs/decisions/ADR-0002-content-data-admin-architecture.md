# ADR-0002: Content, Data & Admin Architecture

## Status

Proposed

## Context

Chitkaar 2.0 is being developed as the digital home of Chitkaar Welfare
Society.

The website will evolve beyond a static public-facing website and will
require persistent data, administrator-managed content, public forms,
document uploads, applications, event registration, membership, donations,
and a future marketplace.

The system must remain:

- Maintainable
- Accessible
- Secure
- Cost-conscious
- Strongly typed
- Performant
- Easy to operate by Chitkaar administrators
- Capable of growing without unnecessary architectural complexity

The organization requires administrators to manage the website without
requiring developers for routine content operations.

Only verified information should be published as factual Chitkaar
information.

The system must not encourage or permit fabricated:

- Impact statistics
- Testimonials
- Partnerships
- Certifications
- Awards
- Projects
- Financial information
- People
- Quotes
- Achievements

## Decision

Chitkaar 2.0 will evolve into a database-backed, authenticated,
role-based application with administrator-managed content, first-party
public forms, controlled document storage, persistent organizational data,
and a future-ready marketplace boundary.

Implementation will proceed incrementally.

The project will not introduce all backend functionality at once.

## Permission Model

Authorization will follow a least-privilege model.

There will initially be two administrative levels:

- Super Admin
- Sub Admin

There will initially be one Super Admin.

A Sub Admin should only receive permissions required for their operational
responsibilities.

Sub Admins may perform permitted operational tasks such as:

- Creating and editing events
- Closing events
- Managing permitted public content
- Reviewing permitted operational submissions

Sensitive operations must require Super Admin authorization.

The permission model should be extensible so additional administrative
roles can be introduced later without redesigning the entire system.

Permissions must be enforced server-side and must not rely solely on
frontend visibility.

## Persistence

All information required for:

- Administration
- Applications
- Registrations
- Membership
- Donations
- Content management
- Auditability

must be persisted in a proper application data store.

The public website must not depend on browser-local storage as the source
of truth for important organizational data.

## Forms and Validation

Chitkaar will use first-party website forms for its primary workflows.

Initial workflows include:

- Volunteer applications
- Membership applications
- Event registration
- Contact submissions

Public forms must perform validation on both:

- Client side, for user experience
- Server side, for security and data integrity

The server must treat all submitted data as untrusted input.

Forms should provide:

- Clear labels
- Accessible validation
- Useful error messages

## Authentication and Authorization

Public visitors do not require accounts merely to browse the website.

Administrative functionality requires authenticated administrator accounts.

Authentication and authorization are separate concerns.

Authentication establishes identity.

Authorization determines what that identity may access or modify.

Sensitive information must be protected at the server and database layers.

## Content Management

Administrators must eventually be able to manage appropriate public
content including:

- Pages
- Programs
- Events
- Stories
- Team members
- Gallery content
- Announcements

Routine content changes should not require hard-coded application
changes.

Content should support an appropriate lifecycle:

```text
Draft
  ↓
Review
  ↓
Approved
  ↓
Published
  ↓
Archived