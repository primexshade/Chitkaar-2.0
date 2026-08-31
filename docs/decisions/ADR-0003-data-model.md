# ADR-0003: Chitkaar 2.0 Data Model

## Status

Proposed

## Context

Chitkaar 2.0 is evolving from a public-facing website into a
database-backed organizational platform.

The application will need to persist organizational content,
applications, registrations, administrative information, financial
records, uploaded documents, and eventually marketplace data.

The data model must support:

- Maintainability
- Strong typing
- Clear separation of concerns
- Secure handling of sensitive information
- Role-based administration
- Administrative review workflows
- Content publishing workflows
- First-party website forms
- Future extensibility
- Free-tier-conscious infrastructure
- Migration to a larger infrastructure when required

The model must not introduce unnecessary complexity or create
functionality for requirements that are not yet real.

The architecture must also preserve the authenticity requirements
defined in the Product Vision. Data that represents Chitkaar publicly
must be based on verified organizational information.

---

## Decision

Chitkaar 2.0 will use a relational data model organized around
separate business domains.

The primary domains are:

1. Identity and Administration
2. Public Content
3. Applications and Participation
4. Documents
5. Financial Records
6. Future Marketplace

The domains will remain logically separated even when they are
implemented within the same database service.

Sensitive personal information and private documents will have
stronger access controls than ordinary public content.

Administrative authorization will be enforced server-side.

The initial data model will be designed so that the production
database provider can be selected independently from the logical
schema.

---

# 1. Identity and Administration

## Admin User

Represents an authenticated administrator who can access the
administrative system.

Conceptual fields:

- id
- name
- email
- role_id
- status
- created_at
- updated_at
- last_login_at

Admin users are separate from public users and applicants.

A person submitting a volunteer or membership application does not
automatically receive an administrative account.

---

## Role

Represents an administrative access level.

Initial roles:

- Super Admin
- Sub Admin

The system should allow additional roles or permission groups in the
future without requiring a fundamental data-model redesign.

---

## Permission

Represents an individual administrative capability.

Examples include:

- manage_events
- manage_programs
- manage_stories
- manage_gallery
- manage_team
- review_volunteers
- review_memberships
- manage_registrations
- manage_donations
- manage_financial_configuration
- manage_admins
- access_sensitive_documents
- publish_content

Permissions should be evaluated server-side.

Frontend controls may hide unavailable actions, but frontend visibility
must never be treated as authorization.

---

## Audit Log

Records important administrative actions.

Conceptual fields:

- id
- admin_user_id
- action
- resource_type
- resource_id
- metadata
- created_at

Examples:

- Event created
- Event closed
- Story edited
- Content published
- Application reviewed
- Document accessed
- Admin permission changed
- Financial configuration changed

Audit records should be append-oriented and should not be casually
editable through the normal administration interface.

---

# 2. Public Content

Public content represents information that can eventually be managed
through the administrative interface.

## Page

Represents a managed website page.

Conceptual fields:

- id
- title
- slug
- content
- status
- created_by
- updated_by
- published_at
- created_at
- updated_at

---

## Program

Represents a Chitkaar program or area of work.

Conceptual fields:

- id
- title
- slug
- description
- content
- status
- created_by
- updated_by
- published_at
- created_at
- updated_at

Programs may eventually be associated with stories, gallery media,
events, or other content.

---

## Event

Represents an organizational event.

Conceptual fields:

- id
- title
- slug
- description
- content
- location
- start_at
- end_at
- registration_status
- publication_status
- capacity
- created_by
- updated_by
- published_at
- closed_at
- created_at
- updated_at

The model must support:

- Draft events
- Published events
- Registration
- Event closure
- Archived events

Event closure must be distinct from deletion.

Historical registration records should not disappear simply because
an event is closed.

---

## Story

Represents an approved Chitkaar story or impact narrative.

Conceptual fields:

- id
- title
- slug
- summary
- content
- status
- created_by
- updated_by
- published_at
- created_at
- updated_at

Stories must only contain verified information.

---

## Team Member

Represents a person publicly presented as part of Chitkaar.

Conceptual fields:

- id
- name
- role
- biography
- photo_media_id
- display_order
- status
- created_at
- updated_at

No person should be published as a team member without verified
organizational approval.

---

## Gallery Media

Represents public-facing media.

Conceptual fields:

- id
- file_reference
- title
- alt_text
- caption
- media_type
- status
- uploaded_by
- created_at
- updated_at

Gallery media is public content and must remain conceptually separate
from private application documents.

---

## Announcement

Represents temporary or important organizational communication.

Conceptual fields:

- id
- title
- content
- status
- starts_at
- ends_at
- created_by
- updated_by
- created_at
- updated_at

---

# 3. Content Lifecycle

Managed content should support a controlled lifecycle.

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