# Vita Talent Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from HireLatam (simplicity, testimonial structure) and Virtual Latinos (process clarity, professional layout) while creating a more elegant, refined execution that establishes Vita Talent's unique identity.

## Core Design Principles
- **Minimal & Clean**: Prioritize clarity over decoration
- **Professional Elegance**: Sophisticated without being corporate
- **Global & Modern**: Contemporary design that reflects international reach
- **Human-Centered**: Warm, approachable, trustworthy tone
- **Balanced**: Equal visual weight for clients and candidates

## Typography System
**Primary Font**: Inter or similar (Open Sans, Lato as alternatives)
- Hero Headline: 3.5rem (56px), bold, tight line-height
- Section Titles: 2.5rem (40px), semibold
- Subheadings: 1.5rem (24px), medium
- Body Text: 1.125rem (18px), regular, generous line-height (1.7)
- Small Text: 0.875rem (14px), medium

## Layout & Spacing System
**Tailwind Spacing Units**: Consistently use 4, 8, 12, 16, 20, 24 (p-4, p-8, p-12, p-16, p-20, p-24)
- Section vertical padding: py-16 (mobile), py-24 (desktop)
- Component spacing: gap-8 for grids, gap-6 for cards
- Container: max-w-7xl for full sections, max-w-4xl for content-focused areas
- Consistent 16-24px gutters throughout

## Component Library

### Hero Section
- Full-width background (subtle gradient or texture referencing global theme)
- Centered layout with tree logo prominent above company name
- Vita Talent wordmark with slogan directly beneath
- Subheading emphasizing global empowerment message
- Two primary CTAs side-by-side: "Hire Talent" and "Join as Candidate" with blurred backgrounds when over imagery
- Trusted company logo strip below (4-6 placeholder logos, grayscale)
- Height: 85vh on desktop, natural height on mobile

### Why Global Section
- Two-column layout: Left (60%) text content, Right (40%) visual
- Elegant paragraph copy explaining global approach
- Animated world map OR subtle continent highlights (dots/pulses showing regions: Africa, Latin America, Asia)
- Clean background, generous whitespace

### Workflow/Process Section
- Horizontal 5-step process flow on desktop, vertical stack on mobile
- Each step: Custom icon (circular container) → Number → Title → Short description
- Subtle connecting lines/arrows between steps
- Steps: 1) Understanding needs, 2) Global sourcing, 3) Screening, 4) Matching, 5) Ongoing support
- Icons: Simple line-style, consistent stroke weight

### Testimonials Section
**Layout Structure**:
- Top Section: Video testimonials (3 client + 3 candidate) in 2x3 grid or carousel
- Video cards with play button overlay, person name/role beneath
- Middle Section: Written testimonials in 3-column grid (desktop), stacked (mobile)
- Each card: Quote text, name, role, company/location
- Bottom: "Read more on [Google Reviews Icon] or [Trustpilot Icon]" with actual hyperlinks

### Care Section
- Centered content with max-width constraint
- Large heading + empathetic subtext (3-4 lines)
- Supporting illustration: balanced scale, handshake, or team collaboration visual
- Balanced layout showing equal care for both sides (visual metaphor)

### Meet the Team
- Grid layout: 3-4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Team member cards: Professional photo (square or circular), name, role description
- Consistent card treatment with subtle hover state
- Clean spacing between cards (gap-8)

### Call to Action Section
- Two prominent contact pathways side-by-side
- "Hire Talent" and "Join as Candidate" as primary actions
- Brief descriptive text above each CTA
- Form elements (when clicked): Clean, minimal input fields with proper labels

### Footer
- Simple navigation links: Home · About · Process · Testimonials · Contact
- Social links if applicable
- Copyright and company information
- Minimal height, aligned left or centered

## Interaction Design
- Smooth scroll transitions (scroll-behavior: smooth)
- Subtle hover effects on cards: slight lift (translateY(-4px)), shadow increase
- Button hovers: slight scale or opacity shift
- Minimal animations: Avoid flashy transitions, use subtle fades/slides on scroll
- Video testimonials: Click to play, simple overlay controls

## Responsive Breakpoints
- Mobile: < 768px (stack all columns, larger touch targets)
- Tablet: 768px - 1024px (2-column layouts where appropriate)
- Desktop: > 1024px (full multi-column layouts)

## Images Section
**Hero Background**: Subtle, professional background image or gradient representing global connectivity (world map texture, abstract connections, or professional office environment) - not overpowering, allows text to remain highly legible

**Why Global Visual**: Animated world map showing highlighted regions (Africa, Latin America, Asia) with subtle pulse/glow effects

**Care Section**: Warm, professional illustration of partnership/balance (handshake, balanced scale with human elements, or diverse team collaboration)

**Team Photos**: Professional headshots in consistent style (square or circular crops, uniform sizing)

**Company Logos**: Client trust indicators in hero section (grayscale, uniform height)

**Large Hero Image**: Yes - full-width hero section with background image/gradient, text and CTAs overlaid with subtle backdrop blur for buttons

## Accessibility & Quality Standards
- High contrast between dark green accents and backgrounds
- Touch targets minimum 44x44px
- Semantic HTML throughout
- Alt text for all images
- Keyboard navigation support
- Clear focus states for interactive elements