# React + Vite + TypeScript Starter

A **production-ready React + Vite + TypeScript starter template**.  
This project preconfigures routing, state management, API communication, theming, i18n, and linting  
to eliminate common setup friction.

---

## ✨ Features

- ⚡ **Vite** – fast dev server & build
- ⚛️ **React 19 + TypeScript**
- 🧭 **React Router (createBrowserRouter)**
- 📡 **TanStack React Query**
- 🔌 **Axios instance with interceptors**
- 🌙 **Dark mode (localStorage + system support)**
- 🌍 **Internationalization (i18next)**
- 🛡 **Component & router-level error handling**
- 🎨 **Tailwind CSS**
- 🧹 **ESLint (Flat Config) + Prettier**
- 📦 **Clear responsibility-based architecture**

---

## 📁 Project Structure

```txt
src/
 ├─ api/                # API call functions
 ├─ queries/            # React Query hooks
 ├─ queryKeys.ts        # queryKey factories
 ├─ components/
 │   ├─ ui/             # Shared UI components
 │   ├─ feedback/       # Spinner / ErrorFallback
 │   └─ layout/         # Header / RootLayout
 ├─ pages/              # Page components
 ├─ routes/             # Router configuration
 ├─ utils/
 │   ├─ axios.ts
 │   ├─ axios.interceptors.ts
 │   └─ index.ts
 ├─ theme-provider.tsx  # Theme management
 └─ i18n/               # i18n setup
```

---

## 🚀 Getting Started

```bash
npm install
cp .env.example .env
npm run dev
```

---

## 📜 Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
npm run typecheck
```

---

## 🌙 Dark Mode

- Supports `light / dark / system`
- Persisted via **localStorage**
- Tailwind `darkMode: ["class"]`

---

## 🌍 Internationalization

- Powered by `i18next`
- Language switching example in `Home.tsx`
- Default languages: `ko`, `en`

---

## 🧱 Error Handling

- **Component-level errors**
  - `ErrorBoundary + ErrorFallback` inside `dynamic()`
- **Router-level errors**
  - `RouteError` using `useRouteError`

---

## 🔌 API Architecture

- `utils/axios.ts` : axios instance
- `utils/axios.interceptors.ts` : interceptors & error normalization
- `api/*.api.ts` : pure API functions
- `queries/*.queries.ts` : React Query hooks
- `queryKeys.ts` : centralized query keys

---

## 🧠 Design Principles

- Avoid `any`; prefer `unknown + type guards`
- Clear separation of concerns
- Starter template with real-world scalability

---

## 📄 License

MIT License
