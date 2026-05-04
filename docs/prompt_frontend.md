# Frontend Implementation Prompt for Local LLM

*Copy and paste the prompt below into your local LLM:*

***

**System Role:** 
Act as an expert Frontend engineer specializing in Next.js, React, and Tailwind CSS. We are building the frontend for a modern, SEO-optimized Bengali news portal called "The Daily Akash".

**Core Layout Requirements:**
1. **Header:** Top navigation bar with the site logo, current date (in Bengali), and main categories (Home, National, Sports, etc.).
2. **Mega Menu:** A full-screen overlay menu triggered by a hamburger icon containing all sub-categories and regions.
3. **Sticky Notice Bar:** A persistent footer/bottom ticker scrolling the latest "Breaking News". This must listen to a Server-Sent Events (SSE) stream.
4. **Homepage Structure:** 
   - Featured "Lead Story" hero section.
   - Grid layout for categorical news blocks.
   - Sidebars for "Latest" (সর্বশেষ) and "Popular" (জনপ্রিয়) articles.
5. **Regional News Filter:** Interactive dropdowns to filter news dynamically by Division -> District -> Upazila.

**Technical Constraints:**
- Use Next.js (App Router preferred) with Server-Side Rendering capabilities.
- Use Tailwind CSS for highly responsive styling.
- Assume the backend API runs at `http://localhost:8000/api`.

**Deliverables:**
1. Provide the `package.json` dependencies to install.
2. Write the React component for the `Header` and the `MegaMenu`.
3. Write the component for the `LiveTicker` ensuring `EventSource` is used to consume SSE from the backend securely.
4. Write the main homepage block (`page.tsx`) demonstrating how to combine the grid layout and fetch initial server-rendered data.
5. Return clean, accessible code inside markdown blocks.
