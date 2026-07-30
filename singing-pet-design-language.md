# Singing.pet — Website Design Language

> Design-language analysis based on the public `singing.pet` website reviewed on 30 July 2026.  
> This document describes the visual system and interaction patterns so they can be used as inspiration for a new, original product. It is not a pixel-for-pixel reproduction.

---

## 1. Design Summary

Singing.pet uses a **playful consumer AI SaaS** design language built around pet entertainment, viral social content, and effortless creation.

The experience combines:

- Bright, saturated purple branding
- Warm yellow highlights
- Large rounded display typography
- Friendly white cards
- Pet-led video imagery
- Social-media interface references
- Simple three-step explanations
- Repeated free-trial calls to action
- Soft shadows and generous rounded corners
- A light, humorous, non-technical tone

The design feels more like a cheerful creator app than a complex AI platform.

### One-line design definition

> A playful, high-energy AI creator interface using bold purple surfaces, sunshine-yellow accents, rounded typography, pet-focused media, and simple conversion-driven SaaS layouts.

---

## 2. Brand Personality

| Attribute | Expression |
|---|---|
| Playful | Bright colors, animated pets, humorous copy |
| Friendly | Rounded shapes, conversational writing, simple language |
| Magical | AI transformation is described as fast and effortless |
| Social-first | Vertical video previews and engagement metrics |
| Accessible | Clear steps, little technical terminology |
| Energetic | Large headings, vibrant contrast, repeated CTAs |
| Trustworthy | Ratings, usage numbers, guarantees, security labels |

### Emotional goal

The user should feel:

1. “This looks fun.”
2. “My pet could become viral.”
3. “This seems very easy.”
4. “I can try it without risk.”

---

## 3. Core Design Principles

### 3.1 Lead with entertainment, not technology

The website sells the emotional result—making a pet talk or sing—before explaining AI mechanics.

Use:

- Funny or surprising outcomes
- Pet expressions
- Social-video examples
- Familiar songs and creator contexts

Avoid:

- Technical model descriptions
- Dense AI terminology
- Enterprise-style diagrams
- Complicated workflow language

### 3.2 Make every action feel easy

The entire journey is reduced to:

> Upload → Choose audio → Generate video

Each step should fit inside one short card with one icon, one title, and one short explanation.

### 3.3 Use strong visual contrast

The interface alternates between:

- Saturated purple hero or CTA surfaces
- White and very light lavender content sections
- Yellow highlights for emphasis
- Dark purple text for readability

### 3.4 Repeat the primary CTA

The free-creation CTA appears after major decision points:

- Navigation
- Hero
- Process explanation
- Feature sections
- Testimonials or social proof
- Pricing
- Final CTA

The wording may change slightly, but the action remains consistent.

---

## 4. Color System

The following values are practical visual approximations for recreating the design direction. They are not claimed to be the website’s exact source-code values.

### Primary palette

| Token | Suggested value | Usage |
|---|---:|---|
| `brand-purple-900` | `#3D087B` | Dark headings, footer depth |
| `brand-purple-800` | `#5411A8` | Main dark-purple surfaces |
| `brand-purple-700` | `#6D20D5` | Primary brand purple |
| `brand-purple-600` | `#7D2BE8` | Buttons, active states |
| `brand-purple-500` | `#9346F4` | Gradients and decorative accents |
| `brand-purple-100` | `#EFE5FF` | Soft section backgrounds |
| `brand-purple-50` | `#F8F4FF` | Page background tint |
| `brand-yellow` | `#FFD84D` | Highlighted words, badges, decorative emphasis |
| `brand-yellow-light` | `#FFF2A8` | Soft highlight backgrounds |
| `white` | `#FFFFFF` | Cards, buttons and clean surfaces |
| `ink` | `#24143A` | Main body text |
| `muted` | `#6F657C` | Secondary copy |
| `border-soft` | `#E8DDF5` | Card borders and dividers |

### Hero gradient

```css
background:
  radial-gradient(circle at 20% 10%, rgba(170, 91, 255, 0.55), transparent 35%),
  linear-gradient(135deg, #5710AE 0%, #7724DB 55%, #4A0A96 100%);
```

### Background texture

Use a very subtle pattern over purple backgrounds:

- Tiny dots
- Music notes
- Paw marks
- Sparkles
- Soft grain
- Low-opacity abstract blobs

Recommended opacity: `3%–8%`.

### Color ratio

A balanced page can use:

- 55% white or near-white
- 30% purple
- 10% soft lavender
- 5% yellow accent

Yellow should remain an accent. Overusing it reduces its impact.

---

## 5. Typography

The visual language uses **rounded, friendly, heavy sans-serif typography**.

### Recommended font pairing

#### Display / headings

Choose one:

- Fredoka
- Baloo 2
- Lilita One
- Nunito ExtraBold
- M PLUS Rounded 1c

Recommended recreation choice:

```css
font-family: "Fredoka", sans-serif;
```

#### Body / interface text

Choose one:

- Inter
- Nunito Sans
- DM Sans
- Manrope

Recommended recreation choice:

```css
font-family: "Inter", sans-serif;
```

### Type scale

| Role | Desktop | Mobile | Weight | Line height |
|---|---:|---:|---:|---:|
| Hero heading | 64–76px | 42–52px | 700–800 | 0.98–1.05 |
| Section heading | 42–52px | 32–38px | 700 | 1.08 |
| Card heading | 21–26px | 20–23px | 650–700 | 1.2 |
| Body large | 18–20px | 17–18px | 400–500 | 1.55 |
| Body | 15–17px | 15–16px | 400 | 1.6 |
| Button | 15–17px | 15–16px | 650–700 | 1 |
| Eyebrow | 13–15px | 13px | 650–700 | 1.2 |

### Heading treatment

Hero headings can mix white and yellow:

```html
<h1>
  Make Your Pet
  <span>Talk & Sing</span>
  Like a Star
</h1>
```

```css
h1 {
  color: #fff;
  letter-spacing: -0.035em;
}

h1 span {
  color: #FFD84D;
}
```

### Copy style

- Short sentences
- Simple vocabulary
- Friendly contractions
- Outcome-focused statements
- Occasional playful phrase
- Minimal punctuation
- No technical jargon in primary sections

---

## 6. Shape Language

### Corner radius

The website relies heavily on soft geometry.

| Component | Radius |
|---|---:|
| Small badge | 999px |
| Button | 12–16px or pill |
| Input | 12–16px |
| Standard card | 20–24px |
| Large media card | 28–36px |
| Modal | 24–32px |
| Pricing card | 24–28px |

### Borders

Use light borders to define cards without making the interface rigid.

```css
border: 1px solid rgba(91, 29, 171, 0.12);
```

Highlighted cards may use:

```css
border: 2px solid #7D2BE8;
```

### Shadows

Shadows should feel soft and slightly playful.

```css
box-shadow:
  0 18px 50px rgba(56, 10, 112, 0.14),
  0 4px 12px rgba(56, 10, 112, 0.08);
```

For floating media:

```css
box-shadow: 0 30px 80px rgba(37, 5, 79, 0.32);
```

Avoid harsh black shadows.

---

## 7. Layout System

### Content width

```css
max-width: 1180px;
margin-inline: auto;
padding-inline: 24px;
```

Large hero layouts may extend to `1240px–1320px`.

### Section spacing

| Context | Desktop | Mobile |
|---|---:|---:|
| Major section | 96–128px | 64–80px |
| Section heading to content | 40–56px | 28–36px |
| Card gap | 20–28px | 16–20px |
| Internal card padding | 24–36px | 20–24px |

### Grid logic

- Hero: `55/45` text-to-media split
- Three-step process: 3 equal columns
- Feature section: 3 × 2 grid
- Audio options: 4 equal cards or tabs
- Pricing: 3 equal cards
- Footer: 4-column layout

### Mobile behavior

- All multi-column sections collapse to one column
- CTA buttons become full width where useful
- Media preview appears below hero copy
- Horizontal song cards can become a swipe carousel
- Navigation becomes a compact drawer
- Pricing highlight remains visually dominant

---

## 8. Navigation

### Structure

Left:

- Logo mark
- Brand name
- Short tagline may appear within the logo lockup

Center:

- Features
- Audio Options
- Songs
- How It Works
- Pricing

Right:

- Language selector
- Sign In
- Primary CTA

### Visual treatment

- White or translucent header over a purple hero
- Compact rounded CTA
- Medium-weight navigation text
- Minimal dividers
- Sticky behavior is appropriate

### Recommended dimensions

```css
height: 72px;
```

Primary navigation CTA:

```css
padding: 12px 20px;
border-radius: 12px;
font-weight: 700;
```

---

## 9. Hero Section

### Purpose

Communicate the outcome immediately:

> Turn a pet photo into a talking or singing social video.

### Composition

#### Left column

- Short logo or eyebrow
- Large three-line headline
- One-sentence value proposition
- Strong primary CTA
- “No credit card required” reassurance

#### Right column

- Vertical social-video card
- Pet close-up
- Social-platform engagement interface
- Creator username and audio label
- Floating metrics or decorative stickers

### Hero visual rules

- Purple full-width background
- White text with yellow highlighted phrase
- Pet image dominates the visual
- Vertical `9:16` media frame
- Media card may be slightly rotated by `1–3deg`
- Decorative sparkles or notes may float around it
- Keep visual energy high but copy density low

### CTA treatment

Primary hero CTA is especially effective as a white button on purple:

```css
background: #FFFFFF;
color: #4D0D98;
border-radius: 14px;
padding: 16px 24px;
font-weight: 750;
```

Add a small play, upload, sparkle, or wand icon.

---

## 10. Social Proof Bar

Place immediately after the hero.

Typical metrics:

- Videos created
- Average rating
- Happy pet owners
- Views generated

### Design

- White or near-white horizontal section
- 3–4 evenly spaced metrics
- Large purple number
- Small muted label
- Thin vertical separators on desktop
- Two-column wrap on mobile

```css
.metric-value {
  font-size: 30px;
  font-weight: 750;
  color: #5C12B2;
}
```

---

## 11. Three-Step Process

### Section formula

Eyebrow:

> Quick & Easy

Heading:

> Three steps to viral content

Supporting line:

> No editing skills required. Just upload, choose, and share.

### Card anatomy

1. Number badge
2. Simple icon or illustration
3. Step title
4. One-line description
5. Small format or benefit label

### Visual treatment

- White cards on a pale lavender background
- Large circular purple number
- Small yellow accent shape
- Equal card heights
- Minimal text
- Optional connector line between cards on desktop

---

## 12. Feature Cards

### Grid

Six cards in a `3 × 2` desktop grid.

### Feature categories

- Realistic lip sync
- Fast generation
- HD social quality
- Works with different pets
- Instant sharing
- Free-to-paid upgrade path

### Card design

- White surface
- Rounded corners
- Purple or lavender icon container
- Bold title
- Short paragraph
- Subtle hover lift

```css
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 45px rgba(71, 18, 136, 0.14);
}
```

### Icon style

Use:

- Rounded filled icons
- Soft 2.5D illustrations
- Friendly line icons with thick strokes
- Purple primary fill and yellow micro-accents

Avoid:

- Thin corporate outline icons
- Highly realistic 3D iconography
- Metallic or dark cyberpunk graphics

---

## 13. Song and Media Cards

Song selection should feel like browsing social content rather than using an audio-production tool.

### Card anatomy

- Pet thumbnail
- Song title
- Artist or category
- Play button
- Optional popularity label
- Rounded image corners

### Layout

- Horizontal carousel on desktop
- Swipeable overflow on mobile
- Large thumbnails
- Short metadata
- Play control always visible

### Image direction

Use:

- Expressive pet faces
- Front-facing photos
- Bright, clean backgrounds
- Close crops
- Humorous costumes or scenarios in moderation

Keep the pet’s face as the focal point.

---

## 14. Audio Option Cards

Four primary methods:

1. Song templates
2. Audio upload
3. Microphone recording
4. Text to speech

### Component pattern

- Icon at top
- Bold label
- One-line explanation
- Entire card clickable
- Selected state uses purple border and pale-purple fill
- Optional arrow or “Try it” affordance

### Selected state

```css
background: #F5EDFF;
border-color: #7D2BE8;
box-shadow: 0 10px 28px rgba(79, 14, 151, 0.10);
```

---

## 15. Pricing Section

### Structure

Three plans:

- Free
- Weekly
- Yearly

The yearly plan is the visual winner.

### Highlight strategy

Use on the recommended plan:

- Purple border
- Slight vertical lift
- “Most Popular” badge
- Yellow savings badge
- Strongest CTA
- Optional soft purple background

### Pricing card anatomy

1. Plan name
2. Price
3. Billing explanation
4. Short suitability statement
5. CTA
6. Feature list
7. Cancellation reassurance

### Feature-list style

Use small circular check icons with controlled spacing.

Avoid excessively long descriptions inside the cards.

### Trust strip

Place above or below the plans:

- Money-back guarantee
- Secure checkout
- Cancel anytime
- Privacy protected

These can use compact icon-and-label items.

---

## 16. FAQ Section

### Layout

- Centered heading
- Short supporting line
- Single-column accordion
- Maximum readable width around `760–860px`

### Accordion style

- White rows
- Soft lavender border
- Large rounded container
- Plus icon changing to minus
- 16–18px question text
- Comfortable answer line height

```css
.faq-item {
  padding: 20px 22px;
  border-bottom: 1px solid #E8DDF5;
}
```

Interaction should be calm and functional, with less decorative styling than the hero.

---

## 17. Footer

### Background

Deep purple.

### Content

- Logo and tagline
- Browse links
- Resource links
- Company links
- Trust or security labels
- Copyright

### Style

- White primary text
- Lavender secondary text
- Yellow used sparingly
- Generous vertical padding
- Clear column spacing
- Compact legal row

```css
background: #3D087B;
color: #FFFFFF;
padding-block: 72px 32px;
```

---

## 18. Buttons

### Primary purple button

```css
.button-primary {
  background: linear-gradient(135deg, #7D2BE8, #5A12B2);
  color: #FFFFFF;
  border: 0;
  border-radius: 14px;
  padding: 15px 22px;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(91, 18, 178, 0.25);
}
```

### White hero button

```css
.button-hero {
  background: #FFFFFF;
  color: #5210A1;
  border-radius: 14px;
  padding: 16px 24px;
  font-weight: 750;
}
```

### Secondary button

```css
.button-secondary {
  background: #F4ECFF;
  color: #5A12B2;
  border: 1px solid #DDC7FA;
  border-radius: 14px;
}
```

### Hover behavior

- Lift by `2px`
- Increase shadow
- Slightly increase brightness
- Keep transition between `160–220ms`

```css
transition:
  transform 180ms ease,
  box-shadow 180ms ease,
  filter 180ms ease;
```

---

## 19. Badges and Micro-elements

Use small pill badges for:

- Most Popular
- Save 89%
- Free to Try
- No Credit Card
- HD Quality
- 1000+ Songs

### Badge style

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 11px;
  border-radius: 999px;
  background: #FFF2A8;
  color: #4B2B00;
  font-size: 13px;
  font-weight: 700;
}
```

Micro-elements can include:

- Sparkles
- Music notes
- Paw prints
- Tiny stars
- Play icons
- Sound-wave shapes

Use them as accents rather than primary content.

---

## 20. Motion Language

Motion should feel lively but not chaotic.

### Recommended effects

- Floating decorative notes
- Gentle pet-card hover
- Small button lift
- Carousel slide transitions
- Number count-up for social proof
- Accordion expand and collapse
- Soft entrance fade with vertical movement
- Tiny sparkle pulse near CTAs

### Motion timing

| Interaction | Duration |
|---|---:|
| Button hover | 160–200ms |
| Card hover | 200–260ms |
| Accordion | 220–320ms |
| Section reveal | 450–650ms |
| Decorative float | 4–7s loop |

### Accessibility

Respect:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 21. Image and Illustration Direction

### Photography

- Pet face centered and clearly visible
- Bright exposure
- High facial detail
- Clean background
- Friendly or funny expression
- Crop optimized for vertical video

### Illustration

A suitable label for the illustration style is:

> Playful rounded 2.5D SaaS illustration

Characteristics:

- Soft volume
- Rounded edges
- Purple-led palette
- Yellow highlights
- Simplified objects
- Friendly iconography
- Minimal realistic texture

### Social-media mockups

Use an original social-video interface inspired by familiar patterns, without reproducing a platform’s protected interface exactly.

Include:

- Username
- Caption
- Audio title
- View count
- Reaction icons
- Vertical video ratio

---

## 22. Copywriting Language

### Voice

- Cheerful
- Direct
- Benefit-led
- Lightly humorous
- Reassuring
- Creator-friendly

### Preferred phrases

- Make your pet the star
- Create in minutes
- No editing skills needed
- Ready to share
- Free to try
- Pick a song
- Let the AI do the magic
- Go viral
- Works with any pet

### Avoid

- “Leverage proprietary neural architecture”
- “Execute multimodal inference”
- Long feature explanations
- Formal corporate phrases
- Fear-based conversion copy

### CTA library

- Create Your Free Video
- Make My Pet Sing
- Start Creating
- Try It Free
- Upload a Pet Photo
- Create Your First Video
- Launch the Creator

---

## 23. Accessibility Rules

The playful appearance should not reduce usability.

### Requirements

- Body text contrast should meet WCAG AA
- Avoid yellow body text on white
- Use yellow mainly over dark purple
- Maintain visible keyboard focus
- Buttons require text, not icon-only meaning
- Pet-video thumbnails need descriptive alt text
- Accordion states must be announced to screen readers
- Form errors must include text explanations
- Minimum touch target: `44 × 44px`
- Do not communicate plan differences by color alone

### Focus style

```css
:focus-visible {
  outline: 3px solid #FFD84D;
  outline-offset: 3px;
}
```

---

## 24. Responsive Design Rules

### Desktop

- Wide hero with side-by-side media
- Feature grids
- Horizontal trust metrics
- Three pricing cards
- Multi-column footer

### Tablet

- Hero can remain split until approximately `900px`
- Feature grid becomes two columns
- Audio cards become two columns
- Pricing may remain three columns only when readable

### Mobile

- Single-column hero
- Headline no larger than `52px`
- Full-width primary CTA
- Swipeable media cards
- Metrics in two columns
- Cards use reduced padding
- Navigation drawer
- Pricing cards stacked with recommended plan first or second
- Footer converted to accordion or stacked groups

---

## 25. Suggested Design Tokens

```css
:root {
  --color-brand-900: #3D087B;
  --color-brand-800: #5411A8;
  --color-brand-700: #6D20D5;
  --color-brand-600: #7D2BE8;
  --color-brand-500: #9346F4;

  --color-brand-100: #EFE5FF;
  --color-brand-50: #F8F4FF;

  --color-accent: #FFD84D;
  --color-accent-soft: #FFF2A8;

  --color-white: #FFFFFF;
  --color-ink: #24143A;
  --color-muted: #6F657C;
  --color-border: #E8DDF5;

  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-pill: 999px;

  --shadow-card: 0 18px 50px rgba(56, 10, 112, 0.14);
  --shadow-floating: 0 30px 80px rgba(37, 5, 79, 0.32);

  --font-display: "Fredoka", sans-serif;
  --font-body: "Inter", sans-serif;

  --container: 1180px;
  --section-space: clamp(72px, 8vw, 120px);
}
```

---

## 26. Reusable Component Inventory

A complete implementation should include:

- Announcement badge
- Responsive navigation
- Language selector
- Primary and secondary buttons
- Hero section
- Vertical social-video card
- Floating stat badges
- Trust metrics row
- Section eyebrow
- Three-step cards
- Feature cards
- Pet category cards
- Song carousel
- Audio method cards
- Testimonial or community card
- Pricing cards
- Trust reassurance strip
- FAQ accordion
- Final CTA banner
- Multi-column footer
- Authentication modal
- Upload dropzone
- Processing state
- Video-result card

---

## 27. Recommended Page Flow

```text
Navigation
↓
Purple hero with vertical pet video
↓
Social proof metrics
↓
Three-step process
↓
Feature grid
↓
Pet or song examples
↓
Audio-option selector
↓
Community or social-proof content
↓
Pricing
↓
FAQ
↓
Final purple CTA
↓
Footer
```

This flow moves the visitor through:

> Excitement → Understanding → Capability → Proof → Price → Reassurance → Action

---

## 28. Do and Don’t Guide

### Do

- Use purple as the main brand anchor
- Highlight only important words in yellow
- Keep cards soft, rounded, and spacious
- Show the product outcome early
- Use real pet faces and vertical media
- Explain the workflow in three steps
- Repeat one clear free-trial CTA
- Keep copy light and conversational
- Use strong mobile layouts

### Don’t

- Turn the interface into a dark AI dashboard
- Use too many accent colors
- Fill cards with long paragraphs
- Hide the product example below the fold
- Use corporate stock photography
- Use thin, cold typography
- Add complex editing controls to marketing pages
- Over-animate every element
- Depend on novelty at the expense of accessibility

---

## 29. Original Recreation Prompt

Use this prompt to direct a designer or AI website builder:

> Design a responsive consumer AI SaaS website for a playful pet-video creation product. Use a vibrant purple brand system with sunshine-yellow highlights, large rounded display typography, white soft-shadow cards, pale lavender section backgrounds, and expressive pet imagery. The hero should combine a bold three-line promise with a vertical social-video preview showing a funny pet. Structure the page around social proof, a three-step workflow, a six-card feature grid, song and audio choices, friendly pricing cards, an FAQ accordion, and repeated free-trial calls to action. Keep the experience joyful, simple, mobile-first, conversion-focused, and original rather than copying any existing brand assets or layouts exactly.

---

## 30. Final Style Label

The closest concise name for this design language is:

> **Playful Purple AI Creator SaaS**

Alternative labels:

- Viral Pet Creator UI
- Playful Consumer AI SaaS
- Rounded Social-Creator Design
- Purple Pop SaaS Style
- Friendly AI Entertainment Interface

---

## Source

- Public website reviewed: `https://singing.pet/`
- Review date: 30 July 2026
- Visual color and font values in this document are practical approximations for design recreation.
