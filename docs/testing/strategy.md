# Testing Strategy

## Goal

Chitkaar 2.0 should be tested as a production website, not simply checked
for whether it compiles.

Testing must cover functionality, UX, accessibility, responsiveness,
performance, and visual consistency.

## Test Layers

### Static Checks

Every meaningful change should pass:

- TypeScript
- ESLint
- Production build

### Unit Tests

Test isolated:

- Utilities
- Hooks
- Business logic
- Reusable components where appropriate

### Integration Tests

Test interactions between systems.

Examples:

- Event → registration
- Volunteer → submission
- CMS → page
- Donation → UPI information
- Gallery → content

### End-to-End Tests

Critical user journeys should be tested from the perspective of a visitor.

Examples:

#### Volunteer

Homepage
→ Join Us
→ Volunteer
→ Form
→ Submit

#### Event

Homepage
→ Events
→ Event
→ Register
→ Confirmation

#### Donation

Homepage
→ Donate
→ Donation information
→ UPI flow

## Responsive Testing

The website should be tested across:

- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop

## Accessibility

Check:

- Keyboard navigation
- Focus states
- Screen reader compatibility
- Semantic HTML
- Form labels
- Image alt text
- Color contrast
- Reduced motion

## Performance

Monitor:

- Core Web Vitals
- Image optimization
- JavaScript bundle size
- Font loading
- Layout shifts
- Animation performance

Rich visuals must not come at the expense of usability.

## Visual QA

Important pages should be reviewed visually after major UI changes.

Check:

- Spacing
- Typography
- Responsive behavior
- Image cropping
- Animation
- Component consistency
- Navigation
- CTA visibility

## Regression Testing

Existing functionality must be re-tested after major redesign work.

The redesign must not accidentally break:

- Event registration
- Volunteer functionality
- Donations
- Contact forms
- CMS content
- Admin functionality

## Definition of Done

A feature is considered complete when:

- It works.
- It is responsive.
- It is accessible.
- It passes automated checks.
- It has no known critical regression.
- Its UI matches the design system.
- It has appropriate documentation.