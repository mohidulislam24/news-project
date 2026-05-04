# Frontend Coding Explanation

This document explains the architecture and coding structure of the frontend for the News Portal.

## Technology Stack
- **Framework:** Next.js (React)
- **Styling:** CSS Modules / Tailwind CSS (depending on configuration)
- **Package Manager:** npm

## Project Structure
The frontend is built using Next.js to leverage features like Server-Side Rendering (SSR) and Static Site Generation (SSG) for optimal performance and SEO, which are crucial for a news portal.

### Key Components

1. **Pages (`pages/` or `app/` router)**
   - Defines the routes of the application.
   - **`index.js` or `page.js`:** The landing page displaying top news, recent articles, and categories.
   - **`category/[slug].js`:** Dynamic routes for displaying articles within a specific category.
   - **`article/[slug].js`:** Dynamic routes for displaying individual full articles.

2. **Components (`components/`)**
   - Reusable UI elements used across different pages.
   - **`Navbar` / `Header`:** Site navigation and branding.
   - **`Footer`:** Site links and copyright info.
   - **`ArticleCard`:** A component summarizing an article (thumbnail, title, excerpt) used in lists or grids.
   - **`Sidebar`:** For displaying trending news or advertisements.

3. **API Integration (`utils/` or `lib/`)**
   - Functions responsible for fetching data from the FastAPI backend.
   - Often utilizes standard `fetch` API or libraries like `axios`.
   - Handles data fetching for Server-Side Rendering (e.g., in `getServerSideProps` or Server Components) or client-side data fetching.

4. **Public Assets (`public/`)**
   - Static assets such as images, icons, and fonts that are served directly.

5. **Styles (`styles/`)**
   - Global stylesheets and CSS variables.

## Running the Frontend
To start the Next.js development server, you run:
```bash
npm run dev
```
The frontend application will be accessible at `http://localhost:3000`.

## Data Flow
1. A user requests a page (e.g., an article page).
2. The Next.js frontend (either on the server during SSR or on the client) makes an HTTP GET request to the FastAPI backend (e.g., `http://localhost:8000/articles/{id}`).
3. The backend retrieves the data from the database and returns it as JSON.
4. The frontend receives the JSON data, populates the React components, and renders the page for the user.
