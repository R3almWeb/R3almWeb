# R3almWeb

[![StackBlitz](https://developer.stackblitz.com/blitz.png)](https://stackblitz.com/github/R3almWeb/R3almWeb)

R3almWeb is a modern, single-page application (SPA) built with React, designed as the official frontend for R3alm—a cutting-edge blockchain and fintech platform. It serves as a showcase for R3alm's subsidiaries and products (e.g., crowdfund, assets, trade), waitlist management, blog/FAQ content, and a secure admin dashboard for content and user management.

The app features a dark-themed, futuristic UI with smooth animations, role-based authentication, and dynamic routing for scalable content. It's optimized for performance and mobile responsiveness, making it ideal for user engagement and internal team workflows.

**Current Status**: Prototype/MVP stage. Launched via StackBlitz for rapid development. Contributions welcome!

## ✨ Features

- **Public Pages**: Home, About (with Vision/Mission, Partnerships, Tech Architecture), Products/Subsidiaries overview, Blog & Articles, FAQ, Contact, Privacy/Terms.
- **Product Pages**: Dedicated routes for core offerings like RCrowdfund, RAssets, RTrade, RGovernance, RConnect. Dynamic templates for divisions and dev products.
- **Waitlist System**: Main waitlist, detailed entries, division-specific pages (e.g., RVentures, RInsurance), and perks (Early Access, Beta Testing).
- **Authentication**: Login/Register with JWT/token-based auth.
- **Admin Dashboard**: Role-based access (editor/admin) for managing users, articles, FAQs, products, waitlists, analytics, and settings (email/system/content).
- **UI/UX Enhancements**: Custom CSS animations (fade-ins, gradients, hover effects), Tailwind CSS for styling, and ScrollToTop for seamless navigation.
- **Dynamic Content**: Routes generated from `./data/content` for easy updates without code changes.
- **Protected Routes**: Secure admin sections with role checks (e.g., `editor` for content, `admin` for users/settings).

For a full list of pages and routes, see [App.tsx](src/App.tsx).

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | React 18+ |
| **Routing** | React Router v6 |
| **Styling** | Tailwind CSS, Custom CSS (App.css for animations) |
| **State/Auth** | React Context (AuthProvider), Custom hooks assumed |
| **Build Tool** | Vite (inferred from StackBlitz setup) |
| **Fonts** | Inter (Google Fonts) |
| **Other** | TypeScript (partial), React.lazy/Suspense ready for optimization |

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Clone the repo:
   ```
   git clone https://github.com/R3almWeb/R3almWeb.git
   cd R3almWeb
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```
npm run build
# Outputs to /dist folder
```

### Deployment
- **Vercel/Netlify**: Connect GitHub repo for auto-deploys.
- **Custom**: Serve `/dist` via any static host (e.g., AWS S3, GitHub Pages).

## 📁 Project Structure

```
R3almWeb/
├── public/                 # Static assets (e.g., favicon)
├── src/
│   ├── components/         # Reusable UI (Navbar, Footer, ProtectedRoute, ScrollToTop)
│   ├── contexts/           # AuthContext for global state
│   ├── data/               # content.ts (divisionsData, productsData)
│   ├── pages/              # All route components
│   │   ├── admin/          # Dashboard, managers, editors
│   │   ├── subsidiaries/   # Product pages (RCrowdfund, etc.)
│   │   ├── waitlist/       # Waitlist details and perks
│   │   └── ...             # Home, About, Blog, etc.
│   ├── App.tsx             # Main app with routes
│   ├── main.tsx            # Entry point
│   ├── App.css             # Custom styles/animations
│   └── index.css           # Tailwind imports
├── .gitignore              # Standard ignores
├── package.json            # Dependencies (react, router, tailwind)
└── README.md               # This file!
```

## 🔧 Development Guidelines

- **Code Style**: Use ESLint/Prettier (add if missing). Follow functional components with hooks.
- **Testing**: Add Jest + React Testing Library for components (e.g., test ProtectedRoute auth).
- **Optimization**: Implement React.lazy for lazy-loading heavy pages. Use memoization for dynamic routes.
- **Environment Vars**: Add `.env` for API keys (e.g., auth backend). Example: `VITE_API_URL=http://localhost:3001`.
- **Data Fetching**: Integrate Axios or Fetch for admin APIs (e.g., user CRUD).

## 🤝 Contributing

1. Fork the repo and create a feature branch (`git checkout -b feature/amazing-feature`).
2. Commit changes (`git commit -m 'Add some amazing feature'`).
3. Push to the branch (`git push origin feature/amazing-feature`).
4. Open a Pull Request!

We welcome bug reports, features, and docs improvements. See [CONTRIBUTING.md](CONTRIBUTING.md) for details (create if needed).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details (add if missing).

## 🙌 Acknowledgments

- Built with [StackBlitz](https://stackblitz.com) for instant prototyping.
- Icons/UI inspiration from Heroicons and Lucide React.
- Thanks to the open-source community!

## 📞 Contact

- **Project Lead**: [Your Name/Handle] (@r3almweb on X/Twitter)
- **Issues**: Open a GitHub issue.
- **Demo**: [Live Site](https://r3almweb.stackblitz.io) (update with deployed URL)

---

*Last updated: November 05, 2025*  
⭐ Star this repo if it helps! 🚀
