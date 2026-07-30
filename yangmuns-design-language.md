# Yang Muns Website — Design Language

**Website reviewed:** https://www.yangmuns.com/  
**Review date:** 30 July 2026  
**Document type:** Visual design system and implementation reference  

> This document describes the observable design language of the live website. Color values, font matches, spacing values, and motion timings are practical visual estimates rather than exported source tokens. Use them as a recreation guide, not as a claim of exact proprietary values.

---

## 1. Design Direction

Yang Muns uses a **cinematic spiritual-wellness landing-page aesthetic** built around calmness, warmth, nature, traditional wisdom, and emotional reassurance.

The design combines:

- Earth-toned cinematic landscapes
- Soft sunset light and atmospheric haze
- Large editorial headlines
- Elegant italic serif accents
- Restrained sans-serif body typography
- Rounded product and content cards
- Soft glass-like navigation and overlays
- White or cream call-to-action buttons
- Gentle, spacious sales-page storytelling

The overall result feels less like a conventional online course platform and more like a **premium guided retreat presented as a digital product**.

### Core visual keywords

`calm` · `ancient wisdom` · `cinematic` · `earthy` · `spiritual` · `gentle` · `editorial` · `organic` · `premium` · `quiet confidence`

### Emotional objective

The interface should make visitors feel:

1. Safe rather than pressured
2. Calm rather than stimulated
3. Guided rather than sold to
4. Hopeful rather than inadequate
5. Connected to nature and timeless wisdom

---

## 2. Brand Personality

| Attribute | Expression in the interface |
|---|---|
| Calm | Slow visual rhythm, muted colors, generous space |
| Wise | Traditional teacher imagery, serif accents, reflective language |
| Gentle | Rounded shapes, soft contrast, supportive copy |
| Premium | Cinematic photography, minimal palette, editorial composition |
| Accessible | Simple benefits, short daily commitment, repeated clear CTAs |
| Transformational | Journey structure, weekly stages, before/after emotional framing |

### Brand voice

The writing is quiet, empathetic, and reassuring. It avoids aggressive performance language and instead uses phrases based on balance, release, restoration, and gradual transformation.

Preferred voice characteristics:

- Short, emotionally resonant sentences
- Calm declarative statements
- Gentle second-person language
- Nature and balance metaphors
- Minimal jargon
- Low-pressure reassurance

Example tone pattern:

> You are not broken. You are simply out of balance.

Avoid:

- Loud urgency
- Excessive exclamation marks
- Fear-based scarcity
- Corporate terminology
- Hyper-technical explanations
- Neon or overly energetic visual language

---

## 3. Color System

The palette is derived from sunset landscapes, warm earth, muted vegetation, mist, and dark natural shadows.

### Primary palette

| Token | Approximate value | Usage |
|---|---:|---|
| `--color-earth-deep` | `#49382E` | Dark panels, navigation, strong text on light surfaces |
| `--color-bark` | `#624A39` | Secondary dark surfaces and borders |
| `--color-clay` | `#9A6947` | Warm section accents, image overlays |
| `--color-sand` | `#C7A173` | Decorative gradients and highlighted details |
| `--color-sunset` | `#D79B62` | Warm atmospheric accents |
| `--color-mist` | `#E5D8C5` | Soft cards, outlines, subtle backgrounds |
| `--color-cream` | `#F4F0E8` | Primary light background and button fill |
| `--color-white` | `#FFFFFF` | Hero text, cards, CTA surfaces |
| `--color-forest` | `#294236` | CTA text, dark green accents, trust details |
| `--color-ink` | `#25221F` | Main body copy on light backgrounds |

### Supporting natural accents

| Token | Approximate value | Suggested usage |
|---|---:|---|
| `--color-moss` | `#66705A` | Week labels, icons, small highlights |
| `--color-sage` | `#9EA58B` | Soft card backgrounds and dividers |
| `--color-dusk` | `#75616A` | Testimonial or FAQ accents |
| `--color-gold-muted` | `#B99A62` | Price, value, or premium detail |

### Gradient recipes

#### Hero atmosphere

```css
background:
  linear-gradient(180deg, rgba(35, 29, 25, 0.12) 0%, rgba(45, 31, 25, 0.30) 100%),
  linear-gradient(90deg, #9f734f 0%, #c89462 48%, #7b5d49 100%);
```

#### Image readability overlay

```css
background: linear-gradient(
  180deg,
  rgba(24, 20, 17, 0.04) 0%,
  rgba(24, 20, 17, 0.20) 58%,
  rgba(24, 20, 17, 0.66) 100%
);
```

#### Soft cream section

```css
background: linear-gradient(180deg, #f5f1e9 0%, #ebe2d3 100%);
```

### Color rules

- Use warm neutrals as the dominant environment.
- Keep saturation moderate or low.
- Reserve pure white for high-contrast hero text and CTAs.
- Use dark forest green sparingly to communicate trust and calm.
- Do not introduce bright blues, neon greens, vivid purples, or high-energy startup gradients.
- Photography should carry most of the color; interface chrome should remain quiet.

---

## 4. Typography

The visual identity relies on a two-family editorial pairing:

1. A clean modern sans serif for clarity and structure
2. A refined high-contrast serif, often italic, for spiritual or personal emphasis

### Practical font pairing

These are close implementation matches:

```css
--font-sans: "Inter", "Manrope", "Helvetica Neue", Arial, sans-serif;
--font-serif: "Cormorant Garamond", "DM Serif Display", Georgia, serif;
```

A strong recreation pairing is:

- **Primary:** Inter
- **Editorial accent:** Cormorant Garamond Italic

### Type scale

| Role | Desktop | Mobile | Weight | Line height |
|---|---:|---:|---:|---:|
| Display hero | 68–88px | 42–54px | 400–500 | 0.95–1.05 |
| Section title | 44–58px | 32–40px | 400–500 | 1.05–1.15 |
| Card title | 24–32px | 22–28px | 500–600 | 1.15–1.25 |
| Body large | 18–21px | 17–19px | 400 | 1.55–1.7 |
| Body | 15–18px | 15–17px | 400 | 1.55–1.7 |
| Label | 12–14px | 12–13px | 500–600 | 1.2–1.4 |
| Price | 38–52px | 34–44px | 400–500 | 1.0 |

### Headline construction

Use sans serif for the factual promise and serif italic for the human or spiritual phrase.

```html
<h1>
  30-Day Healing Journey —
  <em>Yang Mun</em>
</h1>
```

```css
h1 em {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
}
```

### Letter spacing

- Hero display: `-0.035em` to `-0.02em`
- Section titles: `-0.025em`
- Body: `-0.01em` to `0`
- Eyebrows and small labels: `0.04em` to `0.12em`
- FAQ title may use deliberately expanded tracking as a decorative editorial device, but this should be used only once.

### Typography rules

- Keep line lengths between 45 and 70 characters for body copy.
- Use sentence case rather than all caps for most headings.
- Use serif italic as an accent, not for long paragraphs.
- Avoid heavy black weights; medium weight is usually enough.
- Let typography feel airy rather than compressed.

---

## 5. Photography and Art Direction

Photography is the primary emotional layer of the website.

### Subject matter

- Elder teacher or monk-like guide
- Forest paths
- Mountain silhouettes
- Sunset and sunrise
- Mist, haze, and soft backlight
- Quiet walking, sitting, reflecting, or teaching
- Tea, food rituals, journals, meditation, and breathwork

### Visual treatment

- Warm golden-hour grading
- Low-to-medium contrast
- Soft blacks instead of crushed blacks
- Slightly desaturated greens
- Brown, amber, olive, and cream dominance
- Atmospheric depth through mist or distance
- Minimal modern objects in frame
- Natural textures such as wood, stone, foliage, and fabric

### Composition rules

- Give the subject substantial negative space.
- Favor centered or gently off-center compositions.
- Place text over visually quiet landscape areas.
- Use portrait images for program cards and teacher profiles.
- Use wide cinematic images for hero and closing CTA sections.
- Round image corners rather than using hard rectangles.

### Recommended image ratio system

| Image purpose | Ratio |
|---|---:|
| Hero background | `16:9` or wider |
| Product cover | `4:5` |
| Weekly journey card | `4:5` or `3:4` |
| Benefit card | `1:1` |
| Teacher portrait | `4:5` |
| Closing CTA | `16:9` |

### Image prompts for matching assets

```text
Cinematic spiritual wellness photography, an elderly Eastern wisdom teacher
walking slowly along a forest path at sunrise, warm amber light, soft mist,
muted earth tones, natural linen clothing, contemplative mood, gentle film grain,
premium editorial composition, realistic, no text, no modern city elements.
```

```text
Quiet mountain landscape at sunset, layered silhouettes, warm brown and muted
orange palette, atmospheric haze, minimal composition, premium wellness brand,
soft cinematic light, ample negative space for website headline.
```

---

## 6. Layout System

The site follows a long-form conversion landing-page structure with a calm editorial rhythm.

### Container widths

```css
--container-wide: 1280px;
--container-default: 1120px;
--container-reading: 760px;
--container-narrow: 620px;
```

### Grid

- Desktop: 12-column grid
- Tablet: 8-column grid
- Mobile: single-column flow
- Standard gap: `24px–32px`
- Large editorial gap: `48px–72px`

### Section spacing

| Context | Desktop | Mobile |
|---|---:|---:|
| Hero vertical padding | 120–180px | 92–120px |
| Major section padding | 104–144px | 72–96px |
| Compact conversion section | 72–96px | 56–72px |
| Card internal padding | 24–36px | 20–28px |

### Spacing scale

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
--space-10: 128px;
```

### Page rhythm

Alternate between:

1. Large immersive image-led sections
2. Light cream editorial sections
3. Focused card-based explanations
4. Conversion moments with a single dominant CTA

The page should not feel like a dense dashboard. Each section should communicate one emotional or commercial idea.

---

## 7. Shape Language

The interface uses soft, organic geometry rather than sharp technical framing.

### Corner radii

```css
--radius-sm: 12px;
--radius-md: 20px;
--radius-lg: 28px;
--radius-xl: 36px;
--radius-pill: 999px;
```

### Common shapes

- Pill-shaped navigation container
- Fully rounded CTA buttons
- Portrait cards with 24–32px corners
- Soft bordered content panels
- Organic decorative blobs or landscape curves
- Circular or rounded arrow controls for sliders

### Border treatment

```css
border: 1px solid rgba(72, 56, 45, 0.14);
```

Borders should be subtle and warm. Avoid cool gray outlines.

---

## 8. Navigation

The navigation appears as a compact floating pill rather than a full-width corporate header.

### Desktop characteristics

- Centered or upper-right floating capsule
- Translucent dark-earth background
- Soft backdrop blur
- Small white or cream text
- Minimal number of links
- No oversized logo treatment

```css
.nav-shell {
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 12px 20px;
  border-radius: 999px;
  background: rgba(48, 45, 43, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(14px);
  box-shadow: 0 12px 40px rgba(24, 18, 15, 0.16);
}
```

### Mobile navigation

- Keep the header lightweight.
- Use a compact menu button inside a translucent circle or pill.
- Avoid occupying more than 64–72px of vertical space.
- Preserve the hero image as the dominant first impression.

---

## 9. Buttons and Calls to Action

Buttons are soft, rounded, calm, and high contrast.

### Primary CTA

```css
.btn-primary {
  min-height: 52px;
  padding: 14px 28px;
  border: 1px solid rgba(41, 66, 54, 0.16);
  border-radius: 999px;
  background: #ffffff;
  color: #294236;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(35, 28, 23, 0.16);
}
```

### Secondary CTA

```css
.btn-secondary {
  min-height: 48px;
  padding: 12px 24px;
  border: 1px solid rgba(244, 240, 232, 0.48);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #f4f0e8;
  backdrop-filter: blur(10px);
}
```

### Hover behavior

- Move upward by no more than `2px`.
- Increase shadow gently.
- Use a 180–240ms transition.
- Avoid dramatic scaling, glow, or color flashing.

```css
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 36px rgba(35, 28, 23, 0.20);
}
```

### CTA copy style

Recommended:

- Start My Journey
- Get Instant Access
- Begin Your Healing Journey
- Explore the 30-Day Program

Avoid:

- Buy Now!!!
- Hurry Up
- Claim This Crazy Offer
- Transform Instantly

---

## 10. Card System

### Product card

Used to present the healing journey or digital product.

- Portrait image
- Warm border or cream frame
- Rounded corners
- Bottom-aligned title overlay where appropriate
- Soft shadow
- Minimal metadata

### Journey week card

Each week card combines:

- Week number or label
- Cinematic image
- Short transformation title
- One supporting paragraph
- Natural emoji or minimal organic icon

Recommended layout:

```text
[ Week label ]
[ Image        ]
[ Title        ]
[ Description  ]
```

### Benefit card

- Cream or white surface
- Small natural image or line icon
- One concise title
- Two to three lines of supporting copy
- No excessive badges

### Testimonial card

- Large quotation with comfortable line height
- Name and age as small attribution
- Warm neutral background
- Optional carousel arrows
- Keep one primary testimonial visible at a time on mobile

### Value-stack card

Where price anchoring is needed:

- Use small muted value labels
- Separate modules with whitespace rather than heavy borders
- Keep the final price prominent but not flashy
- Place the risk-free guarantee immediately below the CTA

---

## 11. Section Patterns

### 11.1 Hero

**Structure:**

1. Social-proof eyebrow
2. Large headline
3. Short promise paragraph
4. Three concise benefit checks
5. Product cover or guide portrait
6. Primary CTA
7. Price and previous price
8. Low-friction note: one-time payment, instant access, self-paced

**Visual behavior:**

- Full-screen or near-full-screen cinematic background
- Dark translucent overlay for readability
- White headline
- Serif italic accent for the name or emotional phrase
- Product card framed in cream

### 11.2 Problem reframing

Use a compassionate statement rather than a harsh pain-point section.

Example pattern:

> You are not broken; you are simply out of balance.

This section should have a narrow text column and generous whitespace.

### 11.3 Transformation timeline

A four-week journey is presented as a sequential transformation.

- Clear week labels
- One emotional outcome per stage
- Alternating or horizontally scrollable cards
- Natural thematic icons such as leaf, water, moon, and sun

### 11.4 Deliverables/value stack

Present program inclusions as tangible components:

- Weekly masterclass
- Daily action cards
- Guided meditations
- Calm audio sessions
- Food rituals or recipe book
- Journal or reflection prompts

The design should make the digital program feel concrete without becoming visually busy.

### 11.5 Guide introduction

Use a portrait-led two-column section:

- Large rounded portrait
- Editorial title
- Short biography
- Authority communicated through years of practice and philosophy
- No badge-heavy credential wall

### 11.6 Social proof

- Human, reflective testimonials
- Calm slider controls
- No star-rating clutter unless the platform requires it
- Focus on emotional outcomes such as sleep, steadiness, and quietness

### 11.7 FAQ

- Accordion rows with soft separators
- Large editorial heading
- Consider wide tracking only for the main FAQ heading
- Answers should be short, practical, and reassuring

### 11.8 Final CTA

Return to immersive nature imagery and restate the invitation.

- One emotional headline
- One paragraph
- One CTA
- One price or access note
- Minimal footer transition

---

## 12. Icons and Decorative Elements

### Icon style

- Thin-line icons
- Rounded terminals
- Organic or symbolic forms
- Natural motifs: leaf, moon, sun, water, tea, breath, journal
- Size range: `20–28px`

### Emoji usage

The site uses occasional nature-related emoji as friendly semantic markers. This can work in titles such as weekly stages, but it should remain limited.

Recommended maximum:

- One emoji per card title
- No emoji inside primary navigation
- No decorative emoji chains

### Decorative motifs

- Blurred sunset circles
- Organic landscape curves
- Soft translucent blobs
- Film-grain texture at very low opacity
- Subtle vignette over large imagery

Do not use:

- Sharp geometric grids
- Neon glows
- 3D tech icons
- Cartoon illustrations
- Loud gradient mesh backgrounds

---

## 13. Motion Language

Motion should feel meditative and nearly invisible.

### Recommended animations

| Element | Motion |
|---|---|
| Hero content | Fade in + 16–24px upward movement |
| Product card | Slow scale from 0.98 to 1 |
| Section content | Staggered fade, 80–120ms between items |
| Image cards | Gentle 1.02 hover zoom |
| Testimonials | Soft crossfade or horizontal slide |
| Accordion | Smooth height and opacity transition |
| Navigation | Fade/blur transition on page load |

### Timing

```css
--duration-fast: 180ms;
--duration-base: 280ms;
--duration-slow: 600ms;
--ease-calm: cubic-bezier(0.22, 1, 0.36, 1);
```

### Motion rules

- Avoid bouncy spring motion.
- Avoid infinite floating elements.
- Do not animate every object.
- Respect `prefers-reduced-motion`.
- Use scrolling effects sparingly; readability is more important than spectacle.

---

## 14. Responsive Behavior

### Desktop

- Large cinematic hero
- Two-column content blocks
- Four-card weekly journey grid or carousel
- Generous horizontal breathing room

### Tablet

- Reduce headline size by about 20–25%.
- Convert four-column grids to two columns.
- Keep portrait image and copy side by side where space permits.

### Mobile

- Use a single-column narrative.
- Center hero copy and CTA where appropriate.
- Keep button width close to full, but retain side margins.
- Use horizontal snap scrolling for week or testimonial cards.
- Place product imagery before or immediately after the core promise.
- Reduce decorative layers that interfere with text.
- Maintain at least 20px page padding.

```css
.page-shell {
  padding-inline: clamp(20px, 4vw, 48px);
}
```

### Mobile type guidance

```css
.hero-title {
  font-size: clamp(44px, 10vw, 84px);
  line-height: 0.98;
}
```

---

## 15. Accessibility Standards

The visual mood must not reduce usability.

- Maintain WCAG AA contrast for all body text.
- Do not place thin white text over detailed imagery without an overlay.
- Minimum body text size: `16px` on mobile.
- Minimum interactive target: `44 × 44px`.
- Add visible keyboard focus rings.
- Provide meaningful alternative text for all teacher, program, and nature images.
- Do not rely on color alone to show selected weeks or accordion state.
- Keep paragraphs concise for older audiences.
- Provide reduced-motion behavior.
- Use actual heading order rather than styling paragraphs as headings.

Recommended focus treatment:

```css
:focus-visible {
  outline: 3px solid rgba(185, 154, 98, 0.85);
  outline-offset: 4px;
}
```

---

## 16. Conversion Design Principles

The page blends soft emotional design with direct-response structure.

### Observed conversion pattern

1. Establish social proof
2. Present the transformation
3. Show the product visually
4. Reduce perceived effort
5. Explain the weekly journey
6. Make deliverables tangible
7. Introduce the guide
8. Add testimonials
9. Answer objections
10. Repeat the CTA

### Important reusable principles

- Repeat the primary CTA after each major decision section.
- Keep the core price consistent throughout the page.
- Pair the CTA with a low-friction note.
- Use a guarantee directly below a purchase CTA.
- Reframe the visitor's problem compassionately.
- Make the time commitment explicit.
- Use real, concrete program components rather than vague promises.

### UX cautions when recreating

- Avoid duplicating the same content multiple times unnecessarily.
- Keep testimonial carousels from repeating identical entries.
- Maintain consistent social-proof numbers across sections.
- Ensure the old price, current price, taxes, and payment terms are unambiguous.
- Use one canonical CTA label where possible.

---

## 17. Design Tokens

```css
:root {
  /* Colors */
  --color-earth-deep: #49382e;
  --color-bark: #624a39;
  --color-clay: #9a6947;
  --color-sand: #c7a173;
  --color-sunset: #d79b62;
  --color-mist: #e5d8c5;
  --color-cream: #f4f0e8;
  --color-white: #ffffff;
  --color-forest: #294236;
  --color-ink: #25221f;
  --color-moss: #66705a;
  --color-sage: #9ea58b;
  --color-gold-muted: #b99a62;

  /* Type */
  --font-sans: "Inter", "Manrope", "Helvetica Neue", Arial, sans-serif;
  --font-serif: "Cormorant Garamond", "DM Serif Display", Georgia, serif;

  /* Radius */
  --radius-sm: 12px;
  --radius-md: 20px;
  --radius-lg: 28px;
  --radius-xl: 36px;
  --radius-pill: 999px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 96px;
  --space-10: 128px;

  /* Shadows */
  --shadow-card: 0 18px 55px rgba(42, 31, 24, 0.14);
  --shadow-button: 0 10px 30px rgba(35, 28, 23, 0.16);

  /* Motion */
  --duration-fast: 180ms;
  --duration-base: 280ms;
  --duration-slow: 600ms;
  --ease-calm: cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

## 18. Tailwind Theme Example

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        earth: {
          deep: "#49382E",
          bark: "#624A39",
          clay: "#9A6947",
          sand: "#C7A173",
          sunset: "#D79B62",
          mist: "#E5D8C5",
          cream: "#F4F0E8",
          forest: "#294236",
          ink: "#25221F",
          moss: "#66705A",
          sage: "#9EA58B",
          gold: "#B99A62",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        editorial: ["Cormorant Garamond", "serif"],
      },
      borderRadius: {
        card: "28px",
        panel: "36px",
      },
      boxShadow: {
        card: "0 18px 55px rgba(42, 31, 24, 0.14)",
        button: "0 10px 30px rgba(35, 28, 23, 0.16)",
      },
    },
  },
};
```

---

## 19. Suggested Component Inventory

```text
SiteHeader
FloatingNavigation
HeroSection
SocialProofPill
EditorialHeadline
ProgramCoverCard
PriceBlock
PrimaryCTA
ProblemReframeSection
TransformationIntro
WeekJourneyGrid
WeekJourneyCard
ProgramInclusionsGrid
InclusionCard
GuideProfileSection
ValueStackSection
GuaranteeNotice
BenefitTriptych
TestimonialCarousel
TestimonialCard
FAQAccordion
FinalJourneyCTA
SocialFooter
```

---

## 20. Do and Do Not

### Do

- Use warm, cinematic nature imagery.
- Combine modern sans-serif type with elegant serif italics.
- Use cream, clay, brown, forest green, and muted gold.
- Keep CTAs pill-shaped and high contrast.
- Build a slow, spacious vertical rhythm.
- Present transformation as a gentle journey.
- Use soft shadows and warm borders.
- Keep copy emotionally supportive and easy to scan.

### Do not

- Use bright SaaS blue or neon gradients.
- Use heavy black typography everywhere.
- Pack many competing cards above the fold.
- Add loud countdown timers or flashing scarcity labels.
- Use cartoonish wellness icons.
- Overuse glassmorphism.
- Use aggressive parallax or bouncy animations.
- Fill every section with decorative elements.

---

## 21. One-Line Style Prompt

> Create a premium cinematic spiritual-wellness landing page with warm sunset landscapes, muted earth tones, oversized modern sans-serif headings, elegant italic serif accents, rounded portrait cards, soft cream surfaces, pill-shaped white CTAs, generous editorial spacing, and calm meditative motion.

---

## 22. Compact AI Website Prompt

```text
Design a long-form, conversion-focused spiritual wellness website inspired by a
premium guided retreat. Use a cinematic warm-earth palette with brown, clay,
sand, cream, muted gold, forest green, and white. The hero should feature a
serene mountain or forest sunset, a calm elderly wisdom teacher, a rounded
program-cover card, large white editorial typography, and one elegant italic
serif phrase. Use pill-shaped white CTAs, soft shadows, translucent dark-earth
navigation, rounded image cards, spacious section padding, four journey-stage
cards, program inclusion cards, a guide profile, testimonials, FAQ accordion,
and an immersive final CTA. The tone must feel gentle, reassuring, wise, and
premium—not like a loud SaaS landing page. Prioritize mobile readability,
accessibility, subtle motion, and a single clear conversion path.
```

---

## 23. Final Design Summary

The Yang Muns design language is best described as **cinematic editorial wellness**. Its strongest qualities come from the relationship between warm natural photography, quiet typography, soft organic shapes, and a direct but compassionate conversion structure.

To reproduce the feeling successfully, prioritize these five elements:

1. Cinematic sunset and nature imagery
2. Earthy low-saturation color grading
3. Sans-serif plus italic-serif typography
4. Rounded, soft, restrained interface components
5. Spacious storytelling with repeated gentle CTAs

The design should always feel like an invitation to slow down—not another interface demanding attention.
