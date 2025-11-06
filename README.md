```markdown
# R3almWeb - Modern SaaS Dashboard Starter

R3almWeb is a production-ready boilerplate for building modern SaaS dashboards, admin panels, or internal tools. It features role-based authentication with Supabase, a sleek collapsible sidebar (inspired by x.ai/Grok designs), responsive layouts, and one-click demo user creation for development.

Key highlights:
- **Role-Based Access Control (RBAC)**: Secure routes and actions based on user roles (ADMIN, EDITOR, USER).
- **Collapsible Sidebar**: Persistent state, hover tooltips, active indicators, and mobile-friendly.
- **Demo Users**: Instant creation without email confirmation for quick testing.
- **Responsive Design**: Mobile-first with Tailwind CSS and glassmorphism effects.

Live Demo: [StackBlitz Preview](https://r3almweb-5r05--5173--cf284e50.local-credentialless.webcontainer.io)  
Demo Credentials:  
- Admin: admin@r3alm.com / admin123  
- Editor: editor@r3alm.com / editor123

## Features

- **Authentication & Authorization**: Supabase-powered login/register with role metadata enforcement.
- **Admin Dashboard**: Comprehensive CMS tools including:
  - User Manager: CRUD for users with role assignment.
  - Blog Manager: CRUD for articles with rich text support.
  - FAQ Manager: Manage frequently asked questions.
  - Product/Pipeline Managers: For SaaS-specific workflows.
  - **New**: Page Manager for static/dynamic pages (CRUD with status toggles).
  - **New**: Media Library for centralized asset uploads/deletions (Supabase Storage integration).
  - **New**: Category Manager for taxonomy (auto-slug, descriptions).
- **UI Components**: Reusable Navbar, Footer, ProtectedRoute, DeleteModal (confirmation dialog).
- **State Management**: React Context for auth; localStorage for sidebar persistence.
- **Performance**: Vite HMR for fast dev; inline SVGs to minimize dependencies.
- **Security**: Env vars for Supabase keys; no hardcoded secrets; RLS policies recommended.
- **Debugging**: Added logs and timeouts to auth flows for reliability.

## Technology Stack

| Category      | Tools/Tech                     |
|---------------|--------------------------------|
| Frontend     | React 18, TypeScript, Vite 5+ |
| Routing      | React Router DOM v6            |
| Auth/DB      | Supabase (Auth + PostgreSQL + Storage) |
| Styling      | Tailwind CSS v3.4+ (custom themes) |
| Icons        | Inline SVGs (Heroicons style)  |
| State        | React Context, localStorage    |
| Build/Lint   | ESLint, PostCSS                |

## Quick Start

1. **Clone the Repo**:
   ```
   git clone https://github.com/R3almWeb/R3almWeb.git
   cd R3almWeb
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Setup Environment**:
   - Create `.env.local` in root:
     ```
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_ANON_KEY=your_anon_key
     ```
   - In Supabase: Disable email confirmations for dev (Project Settings > Auth).
   - Create tables: `pages` (id, title, slug, content, status, updated_at), `media` (id, filename, url, type, uploaded_by, created_at), `categories` (id, name, slug, description).
   - Setup Row Level Security (RLS) policies for roles.

4. **Run Locally**:
   ```
   npm run dev
   ```
   Open http://localhost:5173. Use demo creds to login.

   **Note on StackBlitz/Web-based IDEs**: You may see platform warnings (e.g., Contextify, bad Node option, iframe sandbox, preload delays). These are harmless and disappear in local Node v20+ env. Recommend local dev for clean console.

5. **Build for Production**:
   ```
   npm run build
   ```

## Deployment

- **Vercel/Netlify**: Deploy as static site; set env vars in platform dashboard.
- **StackBlitz**: Instant preview (as in demo link)—great for sharing.

## Contributing

- Fork the repo and create a PR.
- Follow conventional commits (e.g., `feat: add new manager`).
- Add tests for new features (Vitest recommended).

## License

MIT License - see [LICENSE](LICENSE) for details.

## Recent Changes

**v0.1.8 - Auth Timeouts & Env Checks (November 06, 2025)**

### Added
- **Env Validation**: In supabase.ts, check for missing VITE_ env vars and throw/log early to catch setup issues.
- **Timeouts**: 10s timeouts on all Supabase auth calls in AuthContext.tsx to avoid hangs.

### Fixed
- **Login Hang**: Timeouts ensure loading resets even on failed calls; improved debugging for env/network problems.

**Commit Message**: `fix(auth): add timeouts to Supabase calls + env var checks to prevent hangs (#9)`

For full history, see commits.
```