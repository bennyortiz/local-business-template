# Local Business Next.js Starter Template - PRD & Technical Plan

This document outlines the Product Requirements Document (PRD) and technical plan for developing a Next.js 15 starter template for local businesses. Checkboxes are included to track progress.

---

## [ ] 1. Project Overview

- [ ] **Objective:** Develop a Next.js 15 starter template for local businesses. The template will include basic pages (Home, About, Contact, Legal) and dynamic pages for Services and Service Areas (including individual city pages). The solution must be production-ready, highly optimized, responsive, and easy to maintain. Comprehensive documentation and clear naming conventions are required so that both human and AI developers can understand and extend the codebase.
- [ ] **Target Users:** Local business agencies and developers building custom websites for local companies.

---

## [ ] 2. Technology Stack & Versions

- [ ] Next.js: Version 15.x
- [ ] React: Version 19.x
- [ ] TypeScript: Version 5.x
- [ ] Tailwind CSS: Version 4.x
- [ ] shadcn/ui: Latest stable release
- [ ] tailwind-merge: Latest stable version
- [ ] clsx: Latest stable version
- [ ] framer-motion: Latest stable version
- [ ] ESLint & Prettier: Latest stable releases
- [ ] NextAuth (or Auth.js): Latest stable release for authentication

---

## [ ] 3. Functional Requirements

### [ ] A. Basic Static Pages
- [ ] **Home Page:** Modular landing page with hero section, service overview, and clear CTAs.
- [ ] **About Page:** Company history, team, and mission.
- [ ] **Contact Page:** Contact form, map integration, and business contact details.
- [ ] **Legal Pages:** Privacy Policy, Terms of Service, and other legal documents.

### [ ] B. Dynamic Pages for Services & Service Areas
- [ ] **Services Page:** Dynamic listing page that renders service cards based on data from a centralized configuration.
- [ ] **Individual service detail pages:** via dynamic route (`/services/[slug].tsx`).
- [ ] **Service Areas Page:** Overview page listing all areas served.
- [ ] **Dynamic individual city pages:** for specific services via route (`/service-areas/[city].tsx`).

### [ ] C. Admin Panel
- [ ] **Configuration Management:** A secure admin dashboard at `/admin` for managing business settings and service data.
- [ ] **CRUD operations:** to update configuration (stored in `/config` files) to automatically refresh dynamic pages (using ISR where applicable).

### [ ] D. Global Theming & Dynamic Color Variations
- [ ] **Dynamic Color Palette:** Generate a full palette of color variations (dark, medium, light) from a primary color defined in `/config/business-config.ts`.
- [ ] **Theme Provider:** Implement a global `ThemeProvider` (via React Context) that makes the dynamic color tokens available across all components.

### [ ] E. Reusable Component Library & Naming Conventions
- [ ] **Component Organization:** Use an intuitive folder structure:
    - [ ] `/components/ui/atoms`: Small, reusable elements (e.g., `Button.tsx`, `Input.tsx`, `Icon.tsx`).
    - [ ] `/components/ui/molecules`: Slightly larger components that combine atoms (e.g., `Card.tsx`, `FormGroup.tsx`).
    - [ ] `/components/ui/sections`: Complex, composite sections (e.g., `FAQSection.tsx`, `CTABanner.tsx`, `HeroSection.tsx`).
- [ ] **Naming Guidelines:**
    - [ ] Components: Use PascalCase (e.g., `Header`, `ServiceCard`, `FAQSection`).
    - [ ] Pages: Use descriptive lower-case names with dynamic segments in brackets (e.g., `services/[slug].tsx`, `service-areas/[city].tsx`).
    - [ ] Utilities & Hooks: Use camelCase (e.g., `useTheme`, `fetchServices`).

### [ ] F. Performance & Responsiveness
- [ ] **Image Optimization:** Use Next.js `<Image />` component with `blurDataURL` for low-quality placeholders.
- [ ] **Font Optimization:** Use Next.js built‑in font optimization (`next/font`) to preload and self-host fonts.
- [ ] **Responsive Design:** Ensure full responsiveness using Tailwind CSS responsive utilities and test across multiple devices.

---

## [ ] 4. Non-functional Requirements

- [ ] **Performance:** Optimize with SSR/SSG, lazy loading, and code splitting.
- [ ] **Maintainability:** Comprehensive inline documentation and a dedicated developer guide.
- [ ] **Scalability:** Modular architecture for easy future expansion (localization, CMS integration).
- [ ] **Security:** Secure admin routes with basic authentication (JWT/NextAuth).
- [ ] **Code Quality:** Consistent coding style enforced by ESLint and Prettier.

---

## [ ] 5. Technical Architecture & File Structure

```
/app
  ├── layout.tsx                // Global layout (ThemeProvider, Header, Footer)
  ├── page.tsx                  // Home page
  ├── about.tsx                 // About page
  ├── contact.tsx               // Contact page
  ├── legal/
  │    ├── privacy.tsx          // Privacy Policy page
  │    └── terms.tsx            // Terms of Service page
  ├── services/
  │    ├── index.tsx            // Services listing page
  │    └── [slug].tsx           // Dynamic route for service detail pages
  └── service-areas/
       ├── index.tsx            // Service Areas overview page
       └── [city].tsx           // Dynamic route for individual city pages

/components
  ├── Header.tsx                // Global header component
  ├── Footer.tsx                // Global footer component
  ├── ui/
  │     ├── atoms/
  │     │    ├── Button.tsx     // Basic button component
  │     │    ├── Input.tsx      // Basic input component
  │     │    └── Icon.tsx       // Basic icon component
  │     ├── molecules/
  │     │    ├── Card.tsx       // Generic card component
  │     │    └── FormGroup.tsx  // Grouped form elements
  │     └── sections/
  │          ├── FAQSection.tsx // FAQ section component
  │          ├── CTABanner.tsx  // Call-to-action banner component
  │          └── HeroSection.tsx// Home page hero component

/config
  ├── business-config.ts        // Business settings (logo, primary color, contact info)
  ├── service-config.ts         // Data for services and service areas
  └── theme.ts                  // Generates dynamic color palette from primary color

/lib
  ├── api.ts                    // API utility functions for admin CRUD operations
  ├── hooks.ts                  // Custom hooks (useTheme, useServices)
  └── utils.ts                  // Utility functions (formatDate, formatPrice)

/styles
  ├── globals.css               // Global CSS resets and base styles
  └── tailwind.config.js        // Tailwind configuration with dynamic design tokens

/types
  ├── business.ts               // Type definitions for business config
  └── service.ts                // Type definitions for services and service areas

/public
  ├── images/                   // Optimized images and placeholders
  └── fonts/                    // Self-hosted fonts

/admin
  ├── layout.tsx                // Admin panel layout component
  └── page.tsx                  // Admin dashboard for configuration management
```

---

## [ ] 6. Implementation Phases & Timeline

### [x] Phase 1: Environment Setup & Global Configuration (Week 1)
- [x] Initialize Next.js 15 project with TypeScript.
- [x] Set up Tailwind CSS 4, installing `tailwind-merge` and `clsx`.
- [x] Integrate `shadcn/ui` and create basic atomic components.
- [x] Create `/config/business-config.ts`, `/config/service-config.ts`, and `/config/theme.ts`.
- [x] Implement `ThemeProvider` in `/app/layout.tsx`.

### [x] Phase 2: Basic Static Pages Development (Week 2)
- [x] Develop Home, About, Contact, and Legal pages.
- [x] Integrate Next.js SEO, optimized `<Image />`, and `next/font`.
- [x] Document the structure and naming conventions. (Partially done via inline comments and plan)

### [x] Phase 3: Dynamic Service & Service Area Pages (Week 3)
- [x] Build `/app/services/index.tsx` and `/app/services/[slug].tsx` to render services dynamically.
- [x] Develop `/app/service-areas/index.tsx` and `/app/service-areas/[city].tsx` for service area pages.
- [x] Implement fallback and loading states. (Fallback implemented via notFound)

### [/] Phase 4: Admin Panel Development (Week 4) - Partially Complete
- [x] Build a ~~secure~~ admin panel structure at `/admin` ~~for CRUD operations on business and service data~~. (Structure created, CRUD/Security TBD)
- [ ] Implement CRUD operations with Server Actions (Requires config file strategy - JSON recommended).
- [ ] Implement security/authentication for `/admin`.
- [ ] Ensure configuration updates trigger page regeneration (via ISR/On-Demand Revalidation).

### [/] Phase 5: Performance Optimization & Final Documentation (Week 5) - Started
- [ ] Integrate image optimization (`blurDataURL`). (Requires placeholder generation)
- [x] Integrate font optimization (`next/font`). (Done via initial setup)
- [x] Set up ESLint, Prettier. (Done via initial setup)
- [ ] Set up testing tools. (TBD)
- [ ] Conduct performance audits (Lighthouse) and resolve issues. (TBD)
- [ ] Finalize comprehensive documentation and developer guides. (TBD)

---

## [ ] 7. AI “Cursor Rules” & Developer Guidelines

### [ ] AI Cursor Rules
- [ ] **Global Theme Usage:** Always reference the global theme provided by `/config/theme.ts` instead of hardcoding colors inline.
- [ ] **Component Reuse:** Check for existing reusable components in `/components/ui/atoms` or `/components/ui/molecules` before creating new ones.
- [ ] **Consistent Naming:** Follow the naming conventions detailed in the developer guide (PascalCase for components, camelCase for hooks/utilities, descriptive folder names).
- [ ] **Code Structure:** Maintain the modular file structure and avoid inline styles—use Tailwind utility classes and global design tokens.

### [ ] Developer Guidelines
- [ ] **Documentation:** Every component and function must include clear inline comments. A separate developer guide will outline the file structure, naming conventions, and “cursor rules.”
- [ ] **Naming Conventions:** Use descriptive names that clearly indicate the purpose of each component (e.g., `FAQSection`, `ServiceCard`, `PrimaryButton`).
- [ ] **Extensibility:** Write modular code with reusable components to facilitate future expansion (e.g., adding new pages or integrating additional services).

---

## [ ] 8. Future Expansion

- [ ] **Localization:** Add multi-language support via Next.js i18n routing.
- [ ] **Headless CMS Integration:** Replace static config files with a headless CMS if dynamic content management becomes necessary.
- [ ] **Advanced Admin Features:** Enhance the admin panel with role-based access control and analytics.
- [ ] **Additional UI Components:** Expand the `shadcn/ui` component library with more complex, reusable elements (testimonials, pricing tables, etc.).

---
