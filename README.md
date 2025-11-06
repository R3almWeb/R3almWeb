```markdown
# R3almWeb – Modern SaaS Dashboard with Role-Based Auth

![R3alm Preview](https://i.imgur.com/EXAMPLE_PREVIEW.png)  
*(Professional collapsible sidebar • Supabase Auth • Tailwind CSS • Vite + React)*

[![Live Demo](https://img.shields.io/badge/Live_Demo-StackBlitz-FF4B4B?style=for-the-badge&logo=stackblitz)](https://r3almweb-5r05--5173--cf284e50.local-credentialless.webcontainer.io)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?style=for-the-badge&logo=github)](https://github.com/R3almWeb/R3almWeb)
[![React](https://img.shields.io/badge/React-18.3+-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-5.4+-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Supabase](https://img.shields.io/badge/Supabase-Auth_&_DB-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

**R3alm** is a production-ready full-stack web app built with **React 18 + TypeScript + Vite**, **Supabase** (Auth + PostgreSQL), and **Tailwind CSS**. It features a sleek **x.ai/Grok-inspired collapsible sidebar**, role-based access control, real-time demo user creation, and fully responsive design.

> Perfect starter template for SaaS dashboards, admin panels, or internal tools.

## 🚀 Live Demo

**Instant Play:** https://r3almweb-5r05--5173--cf284e50.local-credentialless.webcontainer.io  
(StackBlitz – no install needed)

### Demo Credentials (click "CREATE DEMO USERS" on login page first)
| Role   | Email                  | Password   |
|--------|------------------------|------------|
| Admin  | `admin@r3alm.com`      | `admin123` |
| Editor | `editor@r3alm.com`     | `editor123`|
| User   | `user@r3alm.com`       | `user123`  |

## ✨ Key Features

- **Role-Based Access Control** (stored in Supabase user metadata)
  - `ADMIN`: Full dashboard + user/blog/FAQ/waitlist managers
  - `EDITOR`: Limited admin tools
  - `USER`: Standard protected views
- **Professional Collapsible Sidebar**
  - Persistent state (`localStorage`)
  - Full-area clickable links (even when collapsed)
  - Smooth tooltips on hover
  - Inline SVG icons (zero dependencies)
  - Active route glow + shadow
  - Mobile backdrop + auto-close
- **One-Click Demo Users** (bypasses email confirmation for dev)
- **Responsive Layout** (mobile-first, no content overlap)
- **Modern Tech Stack**
  - Vite 5+ (blazing fast HMR)
  - React Router DOM v6
  - Supabase Auth + Client
  - Tailwind CSS v3.4+ with custom gradients
  - TypeScript for type safety

## 🛠️ Tech Stack

```text
Frontend:  React 18 + TypeScript + Vite
Routing:   React Router DOM v6
Auth/DB:   Supabase (Auth + PostgreSQL)
Styling:   Tailwind CSS + custom glassmorphism
Icons:     Inline SVGs (Heroicons style)
State:     React Context + localStorage
```

## 📂 Project Structure

```bash
src/
├── components/          # Navbar, UI components
├── contexts/            # AuthContext.tsx (Supabase wrapper)
├── lib/                 # supabase.ts client
├── pages/               # All routes
│   ├── Login.tsx
│   ├── Home.tsx
│   ├── About.tsx
│   └── admin/*.tsx      # Protected admin pages
├── App.tsx              # <Routes> definition
├── main.tsx             # BrowserRouter + AuthProvider
└── index.css            # Tailwind base + globals
```

## 🚀 Getting Started

### Option 1: StackBlitz (Instant)
1. Open: https://stackblitz.com/edit/r3almweb-5r05
2. Click **"CREATE DEMO USERS"** on `/login`
3. Log in as Admin → Explore!

### Option 2: Local Development

```bash
git clone https://github.com/R3almWeb/R3almWeb.git
cd R3almWeb
npm install
npm run dev
```

### Supabase Setup
1. Create free project at [supabase.com](https://supabase.com)
2. Create `.env.local`:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
3. (Recommended) Disable email confirmation: **Authentication → Settings → Confirm email → OFF**

## 🛳 Deployment

- **Vercel / Netlify**: Connect GitHub repo → auto-deploy
- **StackBlitz**: Already live forever!

## 🤝 Contributing

1. Fork repo
2. Create feature branch (`git checkout -b feature/cool-thing`)
3. Commit (`git commit -m 'Add cool thing'`)
4. Push & open PR

## 📄 License

[MIT License](LICENSE) – free to use, modify, and distribute.

---

**Built with ❤️ by the StackBlitz + Supabase community**

⭐ **Star this repo if you found it useful!**  
🚀 **Fork & deploy your own version in seconds**

*Last updated: November 05, 2025*
```

### How to Add This README.md
1. In StackBlitz → **Create new file** → name: `README.md`
2. Paste **everything above**
3. Save → Commit & Push to GitHub
4. Done! Your repo now looks **professional** with badges, tables, and live demo.

Want a dark-mode banner image or GitHub Actions workflow? Just say! 🚀
```
