# WigglePet Website Design Language

> Source website: https://wigglepet.app/  
> Analysis date: 30 July 2026  
> Document type: Visual design-language and reusable UI direction  
> Important: Exact font families, CSS values, gradients, shadows, and spacing tokens are not publicly documented. Values marked as “recommended approximation” are visually matched recreation guidance rather than confirmed source-code values.

---

## 1. Design Language Summary

### Recommended Style Name

**Playful Dark AI Product Landing Page**

Alternative names:

- Pet-Tech Neon SaaS
- Dark Playful AI App Marketing
- Consumer AI Entertainment Landing Page
- Neon Purple Mobile-App Showcase
- Friendly Futuristic Pet Creator Brand

### One-Line Design Description

A dark, mobile-app-focused AI landing page that combines deep navy surfaces, energetic purple gradients, bold rounded typography, clean white content sections, and highly visual pet-generated media to make advanced AI feel entertaining, friendly, and easy to use.

### Core Design Formula

```text
Dark cinematic hero
+ bright purple conversion accents
+ playful pet imagery
+ simple app-store actions
+ alternating light and dark sections
+ large rounded cards
+ concise benefit-led copy
= WigglePet design language
```

---

## 2. Brand Personality

The visual identity communicates the following traits:

| Trait | How It Appears Visually |
|---|---|
| Playful | Pet imagery, entertaining scenarios, expressive copy, colorful AI outputs |
| Futuristic | Dark surfaces, neon purple gradients, AI-focused messaging |
| Friendly | Rounded typography, simple language, soft cards, approachable interface |
| Creator-focused | Vertical video previews, social-media-ready examples, visual galleries |
| Energetic | Bright gradients, movement-led media, bold highlighted words |
| Accessible | Short explanations, clear store buttons, easy three-step workflows |
| Premium but casual | Dark cinematic presentation without corporate stiffness |

### Emotional Goal

The website should make users think:

> “This looks fun, modern, easy, and powerful. I can turn my pet into entertaining content without learning AI tools or video editing.”

---

## 3. Visual Principles

### 3.1 Entertainment Before Technical Complexity

The website sells outcomes such as dancing, singing, talking, and stylized pet content rather than explaining model architecture or generation pipelines.

### 3.2 Show the Product Through Results

AI-generated pet photos and videos are the primary evidence. Product explanation supports the media instead of replacing it.

### 3.3 Dark-to-Light Contrast Rhythm

The page uses a cinematic dark opening and introduces lighter sections to prevent visual fatigue and create strong content separation.

### 3.4 One Main Accent Family

Purple, violet, and magenta carry the conversion hierarchy. Other colors mainly come from generated pet media.

### 3.5 Rounded, Consumer-Friendly UI

Buttons, cards, preview frames, mobile screens, and badges use soft corners rather than sharp enterprise-style geometry.

### 3.6 Mobile App as the Hero Product

The website is not presented like a browser SaaS dashboard. App-store buttons, phone-shaped media, vertical video examples, and short-form content language keep the mobile product central.

---

## 4. Color System

The following palette is a recommended visual approximation.

### 4.1 Primary Palette

| Token | Recommended Approximation | Usage |
|---|---:|---|
| `--color-bg-deep` | `#071421` | Main hero, navbar, dark sections |
| `--color-bg-deeper` | `#030A12` | Footer, overlays, high-contrast areas |
| `--color-surface-dark` | `#0D1E2E` | Dark cards, media shells, navigation surfaces |
| `--color-surface-dark-alt` | `#12263A` | Hover surfaces and elevated dark panels |
| `--color-primary` | `#A12BFF` | Primary CTA, highlighted text, active controls |
| `--color-primary-deep` | `#7A1CE6` | Gradient starting point and pressed states |
| `--color-primary-bright` | `#C044FF` | Gradient ending point and glow accents |
| `--color-magenta` | `#E548C6` | Secondary gradient accent |
| `--color-white` | `#FFFFFF` | Main text on dark backgrounds |
| `--color-page-light` | `#FAFAFC` | Light page sections |
| `--color-text-dark` | `#111827` | Main text on light sections |
| `--color-text-muted-dark` | `#9BA8B7` | Supporting copy on dark backgrounds |
| `--color-text-muted-light` | `#667085` | Supporting copy on light backgrounds |
| `--color-border-dark` | `rgba(255,255,255,0.10)` | Dark card and navigation borders |
| `--color-border-light` | `#E6E8EE` | Light section cards and separators |

### 4.2 Signature Gradient

```css
background: linear-gradient(
  135deg,
  #7A1CE6 0%,
  #A12BFF 50%,
  #E548C6 100%
);
```

Use this gradient for:

- Primary CTA buttons
- Selected states
- Important headline phrases
- Small icon containers
- Subtle ambient glows
- Download or conversion highlights

Do not use it as the background of every card. Its scarcity creates hierarchy.

### 4.3 Background Gradient

```css
background:
  radial-gradient(circle at 75% 25%, rgba(161, 43, 255, 0.16), transparent 34%),
  radial-gradient(circle at 15% 70%, rgba(229, 72, 198, 0.08), transparent 30%),
  #071421;
```

This gives the hero depth without creating visual noise.

### 4.4 Color Ratio

A balanced page should approximately use:

```text
60% deep navy / dark surfaces
25% white or near-white sections
10% neutral gray
5% purple-magenta accent
```

Generated pet media can introduce additional color, but the interface should remain disciplined.

---

## 5. Typography

### 5.1 Typographic Character

The site visually favors:

- Bold geometric or neo-grotesk sans-serif headings
- Rounded, friendly letterforms
- High contrast between headings and supporting copy
- Short line lengths
- Strong emphasis through weight and gradient color
- Minimal use of uppercase

### 5.2 Recommended Font Stack

Because the exact website font should be verified from source code before production, use one of these close recreation options:

```css
font-family: Inter, Manrope, "SF Pro Display", "Segoe UI", sans-serif;
```

Best recreation pairing:

- **Headings:** Manrope 700–800
- **Body:** Inter 400–500
- **Buttons and labels:** Inter 600–700

Single-family alternative:

- Inter for the complete website

### 5.3 Type Scale

| Role | Desktop | Mobile | Weight | Line Height |
|---|---:|---:|---:|---:|
| Hero heading | 56–72px | 38–48px | 750–800 | 0.98–1.08 |
| Section heading | 40–52px | 30–38px | 700–800 | 1.05–1.15 |
| Subsection heading | 26–34px | 23–28px | 700 | 1.15–1.25 |
| Card title | 18–24px | 18–22px | 650–750 | 1.2–1.3 |
| Hero supporting copy | 18–21px | 16–18px | 400–500 | 1.55–1.7 |
| Body copy | 16–18px | 15–17px | 400 | 1.55–1.75 |
| Small label | 13–15px | 12–14px | 600–700 | 1.3–1.5 |
| Button text | 14–16px | 14–16px | 600–700 | 1 |

### 5.4 Headline Construction

Recommended pattern:

```text
Clear product category
+ emotional or outcome-focused phrase
+ selective purple gradient emphasis
```

Example:

```html
<h1>
  AI Pet Video & Photo Generator
  <span class="gradient-text">for Viral Pet Content</span>
</h1>
```

### 5.5 Text Width

- Hero headline: `max-width: 650px`
- Hero paragraph: `max-width: 560px`
- Centered section introduction: `max-width: 720px`
- Long explanatory text: `max-width: 760px`

Avoid full-width paragraphs.

---

## 6. Logo and Brand Mark

The logo uses a minimalist white line icon that combines:

- A capital “W”
- A pet silhouette
- A curled tail
- A pointed animal head
- A single circular eye

### Logo Behavior

On dark backgrounds:

```text
White icon + white wordmark
```

On light backgrounds:

```text
Deep navy icon + deep navy wordmark
```

### Clear Space

Use clear space equal to at least half the icon height on every side.

### Minimum Size

- Full wordmark: minimum 110px wide
- Standalone icon: minimum 24px
- Navbar icon: 30–36px

Do not place the logo over visually busy pet imagery without a solid or blurred dark backing layer.

---

## 7. Layout System

### 7.1 Container

```css
.site-container {
  width: min(100% - 40px, 1200px);
  margin-inline: auto;
}
```

Recommended breakpoints:

```text
Mobile: 0–639px
Tablet: 640–899px
Desktop: 900–1199px
Wide desktop: 1200px+
```

### 7.2 Grid

Desktop:

- 12-column system
- Hero commonly uses a 6/6 or 7/5 split
- Card grids use 3 columns
- Example media grids can use 3 or 4 columns
- Text-and-media sections use 5/7 or 6/6 splits

Tablet:

- 2-column card grids
- Stacked hero or 5/7 composition depending on width

Mobile:

- Single-column
- Text first, product media second
- Buttons full-width or vertically stacked

### 7.3 Vertical Spacing

| Area | Desktop | Mobile |
|---|---:|---:|
| Navbar height | 72–82px | 64–72px |
| Hero top/bottom padding | 90–130px | 60–84px |
| Standard section padding | 96–128px | 64–80px |
| Compact section padding | 64–80px | 48–64px |
| Heading to paragraph | 18–24px | 14–20px |
| Intro to card grid | 44–64px | 32–44px |
| Card gap | 24–32px | 16–22px |

### 7.4 Section Rhythm

Recommended page rhythm:

```text
Dark hero
→ light explanation
→ dark product capability section
→ light feature/card section
→ dark or neutral gallery
→ light style comparison
→ purple/dark final CTA
→ dark footer
```

This rhythm creates contrast while preserving brand consistency.

---

## 8. Navigation

### Desktop Navigation

The navigation is visually restrained:

- Logo on the left
- A small number of links on the right
- Language selector
- Download or conversion action
- Transparent or deep-navy background
- Minimal border treatment

### Recommended Navbar Specs

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  min-height: 76px;
  background: rgba(7, 20, 33, 0.82);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
```

### Link Styling

- White or soft gray
- 14–15px
- Medium weight
- Purple on hover
- No heavy underlines
- Use a subtle animated opacity or color shift

### Mobile Navigation

- Logo left
- Compact menu or language action right
- Full-screen or dropdown dark panel
- Store buttons inside the mobile menu
- Large tap targets: minimum 44px

---

## 9. Hero Section

### 9.1 Composition

The hero should use a two-column layout:

**Left side**

- Main product category headline
- Short supporting line
- One paragraph explaining the use case
- App Store and Google Play buttons
- Optional micro-proof or short benefit note

**Right side**

- Vertical phone-shaped preview
- Pet image or video result
- “How it works” step cue
- Small carousel controls or progress indicators
- Soft purple ambient glow

### 9.2 Hero Background

Use a deep navy background with subtle radial purple lighting. The background should feel cinematic, not like a flat black rectangle.

### 9.3 Media Frame

```css
.phone-preview {
  aspect-ratio: 9 / 16;
  border-radius: 28px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow:
    0 24px 70px rgba(0,0,0,0.45),
    0 0 60px rgba(161,43,255,0.14);
}
```

### 9.4 Store Buttons

Use official App Store and Google Play badge formats when legally permitted.

Visual behavior:

- White App Store button
- Purple-gradient or dark Google Play button depending on section
- Similar height
- 12–14px gap
- Clear focus state
- Stack on narrow mobile screens

### 9.5 Hero Copy Style

Keep copy direct and outcome-led.

Recommended content hierarchy:

```text
What it is
What users can make
How easy it is
Where the result can be shared
Download action
```

---

## 10. Buttons and CTAs

### 10.1 Primary Button

```css
.btn-primary {
  min-height: 50px;
  padding: 0 22px;
  border-radius: 12px;
  background: linear-gradient(135deg, #7A1CE6, #C044FF);
  color: #FFFFFF;
  font-weight: 700;
  box-shadow: 0 12px 28px rgba(161, 43, 255, 0.28);
}
```

Hover:

- Slight upward movement: `translateY(-2px)`
- Increased glow
- Brighter gradient
- 160–220ms transition

### 10.2 Secondary Button

On dark background:

```css
.btn-secondary-dark {
  background: #FFFFFF;
  color: #111827;
  border: 1px solid rgba(255,255,255,0.22);
}
```

On light background:

```css
.btn-secondary-light {
  background: #FFFFFF;
  color: #111827;
  border: 1px solid #DDE1E8;
}
```

### 10.3 Text Link

```text
Learn more →
```

Behavior:

- Medium or semibold
- Purple or dark navy
- Arrow moves 2–4px on hover
- No unnecessary pill background

### 10.4 CTA Hierarchy

Use only one dominant action per section.

Primary actions:

- Download
- Get the app
- Create your pet video
- Start creating

Secondary actions:

- Learn more
- View examples
- Explore features

---

## 11. Cards

### 11.1 Feature Card

Recommended appearance:

- White card on light section or navy card on dark section
- 18–24px corner radius
- 24–32px padding
- Small icon or media preview
- Short title
- Two to four lines of copy
- Optional text link

```css
.feature-card {
  border-radius: 20px;
  padding: 28px;
  background: #FFFFFF;
  border: 1px solid #E6E8EE;
  box-shadow: 0 14px 40px rgba(13, 30, 46, 0.07);
}
```

### 11.2 Dark Feature Card

```css
.feature-card-dark {
  background: #0D1E2E;
  border: 1px solid rgba(255,255,255,0.10);
  box-shadow: 0 20px 50px rgba(0,0,0,0.20);
}
```

### 11.3 Media Card

- Image fills most of card
- 1:1, 4:5, or 9:16 ratio
- Rounded clipping
- Small title below
- Optional descriptive sentence
- Hover scale restricted to image, not full card

### 11.4 Card Hover

```css
transform: translateY(-4px);
box-shadow: 0 22px 55px rgba(13, 30, 46, 0.12);
```

Do not use dramatic 3D tilting. The content is already visually expressive.

---

## 12. How-It-Works Pattern

The process content should be easy enough to scan in seconds.

### Recommended Structure

```text
1. Upload a pet photo
2. Choose a creation type
3. Generate and share
```

The current product may contain more detailed steps, but the landing-page visual system benefits from presenting the first three essential actions first.

### Step Component

- Purple number badge
- Clear action title
- One short supporting sentence
- Optional phone screenshot
- Connected by spacing rather than heavy arrows

```css
.step-number {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #7A1CE6, #C044FF);
  color: white;
  font-weight: 800;
}
```

---

## 13. Product and Feature Presentation

### Core Content Categories

The website organizes the product around recognizable creative outcomes:

- Talking pet videos
- Singing pet videos
- Dancing pet videos
- Multi-pet scenes
- AI pet photos
- Pet avatars
- Stylized portraits
- Social-ready vertical videos

### Design Rule

Each major feature should be represented by:

```text
One outcome-led title
+ one vivid preview
+ one short explanation
+ one small action
```

Avoid creating large technical feature matrices.

### Feature Icon Style

Use:

- Minimal line icons
- Simple emoji-like pictograms
- Small gradient icon containers
- White line icons on purple surfaces
- Consistent stroke width

Avoid:

- Corporate outline icon packs with unrelated metaphors
- Detailed illustrations that compete with pet media
- Multiple accent colors inside one icon set

---

## 14. Image and Video Direction

### 14.1 Content Role

Media should demonstrate transformation, entertainment, and variety. The page should feel like a living content gallery rather than a software documentation page.

### 14.2 Preferred Media Types

- Real pet photography
- AI-generated pet scenarios
- Full-body pet animation
- Vertical short-form video
- Before/after transformation
- Multiple visual styles from one prompt
- Pet characters in culturally recognizable situations

### 14.3 Image Ratios

| Use | Ratio |
|---|---|
| Phone or social video | 9:16 |
| Gallery card | 1:1 |
| Feature media | 4:5 or 3:4 |
| Wide editorial banner | 16:9 |
| Comparison styles | 1:1 |

### 14.4 Image Treatment

- High resolution
- Bright, recognizable subject
- Clean clipping
- Rounded corners
- Minimal interface overlays
- Avoid darkening the pet image excessively
- Use subtle hover zoom: `scale(1.02–1.04)`

### 14.5 Art Style Comparison

The “one prompt, many styles” concept should use repeated composition:

```text
Same pet
+ same scene
+ different visual style
```

This makes AI capability understandable immediately.

Recommended labels:

- Realistic
- Cartoon
- Pop Art
- Anime
- Oil Painting
- 3D Character

---

## 15. Motion Language

Motion should suggest creativity and responsiveness without making the site feel like a game interface.

### Recommended Motion

- Soft fade-up as sections enter viewport
- Small CTA lift on hover
- Image zoom inside media cards
- Animated gradient shimmer used sparingly
- Carousel transitions for app previews
- Auto-playing muted video when visible
- Arrow slide on text links
- Subtle background glow movement

### Timing

| Interaction | Duration |
|---|---:|
| Button hover | 160–220ms |
| Card hover | 220–300ms |
| Section reveal | 450–700ms |
| Carousel slide | 350–500ms |
| Modal/drawer | 240–360ms |

### Easing

```css
cubic-bezier(0.22, 1, 0.36, 1)
```

### Reduced Motion

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

## 16. Border Radius System

| Token | Value | Usage |
|---|---:|---|
| `--radius-sm` | 8px | Small tags and compact controls |
| `--radius-md` | 12px | Buttons and inputs |
| `--radius-lg` | 18px | Standard cards |
| `--radius-xl` | 24px | Large cards and content panels |
| `--radius-phone` | 28–36px | Mobile previews |
| `--radius-pill` | 999px | Tags, language pills, chips |

The design is rounded, but not excessively bubbly. Keep primary buttons closer to 12px than full pill shapes unless matching an official store badge.

---

## 17. Shadow and Glow System

### Light Card Shadow

```css
box-shadow:
  0 2px 8px rgba(16, 24, 40, 0.04),
  0 18px 50px rgba(16, 24, 40, 0.08);
```

### Dark Media Shadow

```css
box-shadow:
  0 28px 80px rgba(0, 0, 0, 0.42),
  0 0 60px rgba(161, 43, 255, 0.12);
```

### CTA Glow

```css
box-shadow:
  0 10px 30px rgba(161, 43, 255, 0.30);
```

Do not use strong shadows on every element. Reserve depth for:

- Phone previews
- Main conversion actions
- Large media cards
- Floating navigation or mobile drawers

---

## 18. Light Sections

Light sections provide readability and relief from the dark hero.

### Appearance

- Near-white background rather than pure white everywhere
- Dark navy or charcoal headings
- Muted gray body copy
- Purple accent numbers and links
- White cards with faint gray borders
- Generous white space

### Recommended Background

```css
background: #FAFAFC;
```

For subtle differentiation:

```css
background:
  linear-gradient(180deg, #FFFFFF 0%, #F8F7FC 100%);
```

---

## 19. Dark Sections

Dark sections create the product’s cinematic, AI-oriented identity.

### Appearance

- Deep navy rather than neutral black
- White headings
- Blue-gray body copy
- Purple highlights
- Dark raised cards
- Glowing media edges
- Sparse decorative lighting

### Avoid

- Bright blue cyberpunk grids
- Excessive neon
- Green terminal imagery
- Large technical diagrams
- Dense particle effects
- Generic futuristic robots

The brand is pet entertainment first and AI technology second.

---

## 20. Final CTA Section

### Recommended Structure

```text
Large emotional heading
One short supporting sentence
App Store + Google Play actions
Optional pet media or soft glow
```

### Visual Treatment

- Dark navy or purple-gradient panel
- 24–32px radius if placed inside a light section
- Centered content
- Strong but simple
- Maximum two actions

Example:

```text
Ready to make your pet a star?

Create your first AI pet photo or full-body video in a few taps.
[App Store] [Google Play]
```

---

## 21. Footer

### Structure

Recommended columns:

1. Brand summary
2. Features
3. Pet types
4. Platforms or occasions
5. Company and legal links

### Visual Style

- Very dark navy
- Small white logo
- Muted blue-gray text
- White or soft-gray links
- Purple hover color
- Thin upper border
- Compact but not crowded

### SEO Link Handling

The website contains many intent-specific links. Keep them structured into labeled groups so the footer remains usable rather than becoming a raw keyword list.

---

## 22. Responsive Design Rules

### Mobile Hero

- Stack content vertically
- Keep headline under four lines where possible
- Use 38–48px type
- Store buttons either full-width or equal-width
- Place phone preview below CTA
- Reduce ambient glow
- Keep 20px horizontal page padding

### Mobile Cards

- One card per row
- 16–20px gaps
- 20–24px internal padding
- Avoid long copy
- Keep media above text

### Tablet

- Two-column cards
- Hero can stack or remain split based on available width
- Navigation may switch to menu below 900px
- Limit section intro width

### Media Loading

- Use responsive images
- Lazy-load below-the-fold media
- Poster image for every video
- Do not autoplay audio
- Pause videos when off-screen

---

## 23. Accessibility Requirements

The current visual direction can remain playful while meeting accessibility standards.

### Contrast

- White text on deep navy should meet WCAG AA
- Avoid using purple body text on dark navy unless contrast is verified
- Gradient text should be decorative; repeat critical meaning in accessible text
- Muted gray text should remain readable at 16px or larger

### Interaction

- Minimum 44×44px touch area
- Visible keyboard focus ring
- Do not rely only on hover for video preview
- Provide pause controls for auto-playing content
- Use descriptive alt text for generated pet examples
- Mark decorative glows and shapes as hidden from assistive technology

### Motion

- Honor reduced-motion preferences
- Do not use flashing transitions
- Avoid auto-advancing carousels faster than five seconds

---

## 24. Recommended Design Tokens

```css
:root {
  /* Colors */
  --color-bg-deep: #071421;
  --color-bg-deeper: #030A12;
  --color-surface-dark: #0D1E2E;
  --color-surface-dark-alt: #12263A;

  --color-primary: #A12BFF;
  --color-primary-deep: #7A1CE6;
  --color-primary-bright: #C044FF;
  --color-magenta: #E548C6;

  --color-white: #FFFFFF;
  --color-page-light: #FAFAFC;
  --color-text-dark: #111827;
  --color-text-muted-dark: #9BA8B7;
  --color-text-muted-light: #667085;

  --color-border-dark: rgba(255,255,255,0.10);
  --color-border-light: #E6E8EE;

  /* Typography */
  --font-heading: "Manrope", "Inter", sans-serif;
  --font-body: "Inter", "Segoe UI", sans-serif;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-phone: 32px;
  --radius-pill: 999px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-28: 112px;
  --space-32: 128px;

  /* Motion */
  --ease-out-smooth: cubic-bezier(0.22, 1, 0.36, 1);
  --duration-fast: 180ms;
  --duration-normal: 260ms;
  --duration-slow: 520ms;
}
```

---

## 25. Tailwind CSS Theme Approximation

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#030A12",
          900: "#071421",
          800: "#0D1E2E",
          700: "#12263A",
        },
        wiggle: {
          700: "#7A1CE6",
          600: "#A12BFF",
          500: "#C044FF",
          400: "#E548C6",
        },
        page: "#FAFAFC",
        muted: {
          dark: "#9BA8B7",
          light: "#667085",
        },
      },
      fontFamily: {
        heading: ["Manrope", "Inter", "sans-serif"],
        body: ["Inter", "Segoe UI", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        panel: "24px",
        phone: "32px",
      },
      boxShadow: {
        card: "0 18px 50px rgba(16,24,40,.08)",
        media: "0 28px 80px rgba(0,0,0,.42)",
        glow: "0 10px 30px rgba(161,43,255,.30)",
      },
      backgroundImage: {
        "wiggle-gradient":
          "linear-gradient(135deg, #7A1CE6 0%, #A12BFF 50%, #E548C6 100%)",
      },
    },
  },
};
```

---

## 26. Suggested Component Library

A reusable implementation should include:

```text
AppNavbar
LanguageSelector
HeroSection
GradientHeadline
StoreBadgeGroup
PhoneVideoPreview
SectionHeader
FeatureCard
DarkFeatureCard
CreationTypeCard
HowItWorksSteps
PetMediaCard
VideoPreviewCard
StyleComparisonGrid
PromptExampleCard
CategoryChipGroup
FinalDownloadCTA
SEOFooter
```

### Component Rules

- Components should support both dark and light themes.
- Card content should remain concise.
- Media ratios should be explicit.
- All video components need poster, muted, loop, and accessible controls.
- Store actions should stay consistent across the site.
- Repeated CTA text should use the same terminology.

---

## 27. Content Design Language

### Tone

- Friendly
- Energetic
- Clear
- Entertaining
- Non-technical
- Social-media aware
- Pet-owner focused

### Sentence Style

Use:

- Short headlines
- Active voice
- Concrete outcomes
- Familiar verbs
- Social-content examples
- Simple three-step explanations

Examples:

```text
Make your pet talk.
Turn one photo into a full-body video.
Create a dancing pet clip in minutes.
Pick a style and let AI do the rest.
Ready to make your pet a star?
```

Avoid:

```text
Leverage our multimodal generative infrastructure.
Unlock next-generation pet-content workflows.
Utilize advanced latent diffusion orchestration.
```

### CTA Vocabulary

Preferred:

- Download free
- Start creating
- Make your pet talk
- Create a pet video
- Explore styles
- See examples

Avoid generic CTAs such as:

- Submit
- Proceed
- Click here
- Learn everything

---

## 28. Conversion Design Logic

### Primary Conversion

App download from iOS or Android.

### Supporting Conversion Mechanisms

- Clear product demonstration in the hero
- App-store badges above the fold
- Simple workflow explanation
- Visible generated examples
- Repeated download CTA after major proof sections
- Feature-specific landing-page links
- Social-platform relevance
- Low learning-curve language

### Recommended CTA Placement

1. Navbar
2. Hero
3. After product explanation
4. After examples/gallery
5. Final CTA

The page should not add a CTA after every small card.

---

## 29. What Makes This Design Distinctive

The design is not just “dark SaaS.” Its distinctiveness comes from the combination of:

1. Deep navy cinematic framing
2. Purple-magenta AI accent
3. Mobile app-store conversion structure
4. Real and AI-generated pet content
5. Vertical social-video presentation
6. Rounded consumer-interface geometry
7. Simple entertainment-led copy
8. Alternating dark and white content bands
9. Same-prompt style comparison
10. SEO-rich feature architecture kept visually approachable

---

## 30. What Not to Copy Literally

Use this design language as inspiration, not as a direct clone.

Do not copy:

- Exact logo or pet-shaped “W” mark
- Brand name
- Proprietary screenshots
- Original generated sample assets
- Exact wording
- App-store visual assets beyond permitted official badges
- Exact page sequence if it does not support your product
- Brand-specific feature names

Reuse the principles:

- Dark playful AI presentation
- Purple conversion hierarchy
- Media-first proof
- Mobile product framing
- Simple outcome-led messaging
- Rounded visual system
- Dark/light section rhythm

---

## 31. Common Mistakes When Recreating This Style

### Mistake 1: Using Pure Black Everywhere

Use deep navy. It feels friendlier and makes purple accents more natural.

### Mistake 2: Overusing Purple Gradients

Limit gradients to the strongest hierarchy points.

### Mistake 3: Filling the Page with Generic AI Artwork

Use product-specific outputs and real examples. The media should demonstrate capability.

### Mistake 4: Writing Enterprise SaaS Copy

Keep the language fun, specific, and simple.

### Mistake 5: Making Every Card Glow

Use normal white or navy cards. Reserve glow for focal media and CTAs.

### Mistake 6: Ignoring Vertical Media

The product is closely tied to TikTok, Reels, and Shorts. 9:16 examples are essential.

### Mistake 7: Making the Footer Look Like Keyword Spam

Group intent-based links under clear headings and maintain readable spacing.

### Mistake 8: Using Tiny Gray Text

The brand should feel accessible. Supporting text still needs strong readability.

---

## 32. Recommended Homepage Blueprint

```text
01. Sticky dark navbar
02. Dark split hero with app preview
03. Light “What is the product?” section
04. Simple how-it-works steps
05. Dark visual product showcase
06. Feature cards for talking, singing, dancing, photos, avatars
07. Quick creation-type chips
08. User-created examples gallery
09. Same-prompt style comparison
10. Final app-download CTA
11. Structured SEO footer
```

---

## 33. Recreation Brief for a Designer

Create a mobile-app landing page for an entertaining AI product using a premium dark navy visual foundation. Use purple-to-magenta gradients only for the primary conversion path, important text emphasis, and compact icons. Build the hero as a split layout with concise product copy on the left and a vertical app or content preview on the right. Alternate deep navy sections with near-white sections, maintaining large spacing and soft rounded cards. Use real product results as the main proof. Typography should be bold, geometric, and friendly, with short headings and readable supporting copy. The final experience should feel futuristic but approachable, visually rich but not crowded, and optimized to drive App Store and Google Play downloads.

---

## 34. AI Website Generation Prompt

```text
Design a responsive mobile-app landing page in a playful dark AI product style inspired by modern consumer entertainment apps.

Use a deep navy background instead of pure black, with subtle radial purple lighting. The primary accent should be a controlled violet-to-magenta gradient. Use bold rounded geometric sans-serif typography, large concise headings, and soft blue-gray supporting text.

Build a sticky minimal navbar with a white logo, language selector, and download CTA. Create a two-column hero with product copy and App Store/Google Play buttons on the left, and a tall 9:16 phone-style media preview on the right. Use large spacing, rounded cards, subtle borders, soft shadows, and restrained purple glow.

Alternate dark cinematic sections with near-white content sections. Include a simple three-step workflow, outcome-led feature cards, a gallery of AI-generated examples, and a same-prompt/multiple-styles comparison. Keep copy short, friendly, playful, and non-technical. Use real-looking product media as the main proof.

The visual experience should feel premium, energetic, pet-friendly, creator-focused, and easy to use. Avoid corporate blue SaaS styling, excessive neon, technical AI diagrams, sharp cards, clutter, tiny text, or gradients on every component.

Desktop container: approximately 1200px.
Card radius: 18–24px.
Button radius: approximately 12px.
Phone preview radius: approximately 32px.
Section padding: 96–128px desktop and 64–80px mobile.
```

---

## 35. Final Design Checklist

### Brand

- [ ] Deep navy is the dominant background
- [ ] Purple-magenta is the controlled primary accent
- [ ] The page feels playful and futuristic
- [ ] The product remains more important than decorative effects

### Typography

- [ ] Hero heading is bold and compact
- [ ] Paragraph widths are controlled
- [ ] Supporting text is readable
- [ ] Gradient text is used selectively

### Layout

- [ ] Hero is split between copy and vertical media
- [ ] Sections alternate dark and light
- [ ] Cards use consistent radius and spacing
- [ ] Mobile design is single-column and touch-friendly

### Media

- [ ] Real product results appear above the fold
- [ ] Vertical social-video media is included
- [ ] Images use consistent aspect ratios
- [ ] Videos have posters, controls, and muted autoplay behavior

### Conversion

- [ ] App-store actions are visible immediately
- [ ] Each section has one clear purpose
- [ ] CTA wording is consistent
- [ ] Final CTA repeats the primary action

### Quality

- [ ] No excessive neon
- [ ] No generic robot imagery
- [ ] No dense technical language
- [ ] No SEO-link clutter in the main content
- [ ] Accessibility and reduced motion are supported

---

## 36. Final Summary

WigglePet’s visual language can be described as a **Playful Dark AI Product Landing Page**. Its strongest design characteristics are a deep navy cinematic foundation, selective purple-magenta gradients, bold friendly typography, vertical mobile-media previews, rounded cards, light-and-dark section contrast, and a strong focus on generated pet results. The design makes AI feel less technical by presenting it as an entertaining creative tool built around familiar outcomes: making pets talk, sing, dance, and appear in imaginative scenes.
