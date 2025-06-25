# 🍲 TasteScript - Recipes, Written to Remember.

A beautifully designed, fully responsive Recipe Book App where users can explore, save, and manage recipes with ease. Built with Firebase authentication, MongoDB backend, and a modern UI, this app makes recipe discovery and creation a joy for food enthusiasts.

## 🚀 Live Demo

[🔗 View Deployed App](https://recipe-book-app-e876f.web.app/)

---


## 🧱 Monorepo Structure

This repository combines:

- **Client** (`/client`): React app built with React.js, Tailwind CSS, Firebase Auth, and MongoDB backend integration.
- **Server** (`/server`): Backend API built with Node.js, Express, MongoDB, and handles recipe data persistence, user management, and authentication.

The monorepo is organized to keep both codebases cleanly separated while making it easy to develop, test, and deploy fullstack features together.

```bash
📦recipe-book-monorepo/
├── 📁client/
├── 📁server/
├── README.md (this file)/
```

---

## 🧰 Tech Stack

### Client

- React.js
- Tailwind CSS
- Firebase Authentication
- React Router
- MongoDB (via backend API)
- React Toastify, SweetAlert2, Swiper.js, Radix UI, React Awesome Reveal

### Server

- Node.js
- Express.js
- MongoDB (Atlas or local)
- REST API endpoints for recipe and user management

---

## 📦 Installation

To run this project locally:

```bash
git clone https://github.com/jubayers-r/recipe-book-monorepo/
cd recipe-book-monorepo
```

For the client:
```bash
cd client
npm install
npm run dev
```

For the server:

```bash
cd ../server
npm install
node index.js
```

## 🔐 Vite Environment Variables (.env for Firebase secrets)

### Client (/client/.env)

Create a .env file at the root and add your Firebase config:

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_msg_id
VITE_appId=your_app_id
```

### Server (/server/.env)

Create a .env file at the root and add your Firebase config:

```env
db_user=your_mongodb_string_username
db_pass=your_mongodb_string_pass
```

---

## 🌟 Key Features

### 🌐 Global Navigation

- Logo and links: Home, All Recipes, Add Recipe (private), My Recipes (private)
- Conditional display of login/register buttons or avatar dropdown
- Avatar dropdown includes username and logout

### 🏠 Home Page

- Hero Banner Slider using Swiper.js
- Top 6 Recipes by Likes (3-column grid)
- "See All Recipes" button
- Two extra sections: Promotional Banner and FAQ

### 🔐 Authentication
- Email/Password Login and Registration (with validation)
- Google Social Login
- Conditional redirects to intended/private routes
- Error handling with Error Message on form

### 🍳 Add Recipe Page (Private)
- Full recipe submission form with:
- Title, Image, Ingredients, Instructions, Cuisine Type, Prep Time, Categories
- Recipes are saved with user info and initial like count
- Toast success message after adding

### 📚 All Recipes Page
- 4-column grid view of all user-submitted recipes
- Cuisine filter dropdown (e.g., Italian, Indian, Mexican)
- View Details button on each card

### 📄 Recipe Details Page (Private)
- Full recipe info displayed
- Dynamic "X people interested in this recipe" title on the top
- Like button increases like count (except for owner's recipe)

### 📁 My Recipes Page (Private)
- View, update, or delete your own submitted recipes
- Update opens modal with pre-filled form
- Deletion updates both UI and DB instantly

---

## 📂 Folder Structure (Simplified)

```bash
📦recipe-book-app/
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

---

## ✅ Challenges & Solutions
- ✔️ Like button logic prevents liking own recipes
- ✔️ All protected routes redirect correctly
- ✔️ Cuisine Type filter implemented on All Recipes page
- ✔️ Update/Delete recipe functions scoped to logged-in user
- ✔️ Dark/Light mode toggle for better UX
- ✔️ Used React Simple Typewriter for typewriting animations
- ✔️ Used React Awesome Reveal for scroll animations

---

## 🔒 Route Protection
- All pages except Home, All Recipes ,Sign up, and Sign in are protected
- Firebase for Authentication
- User is not redirected to Login on reload of private routes

---

## 🧪 Testing and UX

- 🔁 Routes refresh correctly (SPA behavior ensured)
- ✅ No reload errors on hosted URL (Netlify/Firebase)
- 📱 Fully responsive on mobile, tablet, desktop

---

## 🧑‍💼 Author

**Made with ❤️ by Jubayer Shikder** </br>
[🐦 Twitter (X)](https://x.com/jubayers_r) • [📧 Email](mailto:jubayer.shikder.007@gmail.com) • [💼 LinkedIn](https://linkedin.com/in/jubayers-r) • [💻 GitHub](https://github.com/jubayers-r)</br>
Feel free to reach out if you'd like to collaborate or need help using the project!

---

## 📜 License

This project is licensed under the [MIT License](LICENSE) — free to use, modify, and fork..