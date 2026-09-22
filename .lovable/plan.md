# Nilesh Chatap Portfolio

## Overview
Build a complete, single-page professional portfolio for Nilesh Chatap, closely inspired by the reference site’s section rhythm, polished dark aesthetic, sticky navigation, animated timelines, card-based showcases, and recruiter-friendly presentation—without copying its personal content or assets.

## What will be built
- A sticky desktop navigation and accessible mobile menu linking to Home, About, Education, Experience, Projects, Skills, Publications, Certifications, Resume, and Contact.
- A high-impact first screen with Nilesh’s name, AI/Data Science positioning, three calls to action, editable social profile controls, and a lightweight animated neural/grid background.
- About and objective content with four factual, non-numeric highlight cards.
- Animated education and experience timelines using only the supplied institutions, roles, dates, descriptions, and certificate placeholders.
- A responsive project showcase for all five supplied projects, with original technology-themed artwork, category filters, feature lists, and clearly disabled “link not added” states for unavailable GitHub/demo URLs.
- Skills grouped into Languages, Libraries, AI/ML, Databases, Tools, and Behavioral Skills with icons and subtle reveal effects.
- Publication and certification sections with editable placeholder actions and no invented links.
- A dedicated resume area with view/download actions targeting `Nilesh_Chatap_Resume.pdf` once the PDF is provided.
- A contact area with email, phone, location, social placeholders, and a client-side form that opens a prefilled email draft so it works without storing submissions or adding a backend.
- A polished footer with the supplied identity and positioning statement.

## Visual direction
- Dark graphite and deep navy surfaces with restrained cyan/teal and warm amber accents, luminous borders, crisp high-contrast text, and selective glass effects.
- Geometric display typography paired with a highly readable sans-serif body font.
- Spacious full-width sections, timeline rails, compact skill badges, and project/certificate cards with consistent radii and depth.
- Subtle particles, grid lines, glows, scroll reveals, navbar transitions, filter transitions, and hover movement; all reduced or removed when the visitor prefers reduced motion.
- Stable layouts tailored for 1920, 1440, 1024, 768, 425, and 375 pixel widths without horizontal overflow.

## Content and interaction rules
- Use only facts supplied in the brief; no fake links, counts, awards, testimonials, companies, or metrics.
- Unavailable profile, certificate, publication, GitHub, and demo destinations remain visibly editable placeholders and do not navigate to fake pages.
- Every visible control will either scroll, open an email/phone action, filter content, toggle navigation, or clearly communicate that its link has not been added.
- Smooth scrolling, keyboard focus states, semantic headings, labelled icon controls, readable contrast, and touch-friendly targets will be included.

## Technical details
- Implement the page in React and TypeScript using reusable portfolio section and card components, Tailwind CSS v4 semantic tokens, Lucide icons, and lightweight CSS/IntersectionObserver motion.
- Store portfolio content in typed data collections so links and future content are easy to update.
- Keep this as one intentional scrolling portfolio page because the brief explicitly requests smooth section navigation.
- Add route-level SEO metadata with the supplied title, description, keywords, Open Graph fields, `og:type`, and Twitter card metadata.
- Use locally bundled/generated visual assets only; no hotlinked or broken imagery.
- Verify compilation, desktop/mobile rendering, navigation, menu behavior, project filters, contact action, button states, and horizontal overflow in the live preview.

## Resume dependency
The requested uploaded resume is not currently present. The portfolio will be built with the exact final filename and safe unavailable states; attaching the PDF later will immediately enable the view/download actions without changing the design.
