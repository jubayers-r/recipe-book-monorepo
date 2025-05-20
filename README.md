## 📂 Folder Structure (Simplified)

```bash
📦bill-management-app/
├── 📁public/
│   └── ... (static assets, favicon, etc.)
├── 📁src/
│   ├── 📁assets/                  # Images, icons, CSS (like winter theme, logos)
│   ├── 📁components/              # Reusable UI components (Navbar, Footer, Carousel, Cards, etc.)
│   ├── 📁layout/                  # App layout (e.g., <Navbar />, <Footer />, <Outlet />)
│   ├── 📁pages/                   # Page-level components
│   │   ├── 📁Home/
│   │   ├── 📁Login/
│   │   ├── 📁Register/
│   │   ├── 📁MyProfile/
│   │   ├── 📁EditProfile/
│   │   ├── 📁Bills/
│   │   └── 📁BillDetails/
│   ├── 📁context/                 # Auth context or balance context
│   ├── 📁hooks/                   # Custom hooks (e.g., useAuth, useBalance)
│   ├── 📁routes/                  # All React Router routes and route protection logic
│   ├── 📁firebase/                # Firebase init, auth logic
│   ├── App.jsx
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── README.md
└── vite.config.js
```