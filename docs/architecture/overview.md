# Chitkaar 2.0 Architecture

## Status

Accepted

The initial application architecture is defined by
[ADR-0001](../decisions/ADR-0001-application-architecture.md).

## Architecture

Chitkaar 2.0 uses a modular monolith built with Next.js.

The initial infrastructure consists of:

- Next.js
- Supabase PostgreSQL
- Supabase Auth
- Supabase Storage
- Vercel Free

```text
                    CHITKAAR 2.0
                         |
              +----------+----------+
              |                     |
              v                     v
       Public Website          Admin Interface
              |                     |
              +----------+----------+
                         |
                         v
                    Next.js App
                         |
              +----------+----------+
              |          |          |
              v          v          v
          PostgreSQL    Auth      Storage
          Supabase    Supabase    Supabase