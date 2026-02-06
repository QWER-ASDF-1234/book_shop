# React + Vite + TypeScript Starter

실무에서 바로 사용할 수 있는 **React + Vite + TypeScript** 기반 스타터 템플릿입니다.  
UI, 라우팅, 상태 관리, API 통신, 다크모드, 다국어, 에러 처리, 린트 설정까지  
**초기 세팅에서 가장 고민되는 부분을 모두 정리**한 프로젝트입니다.

[English README](./README.en.md)

---

## ✨ 주요 기능

- ⚡ **Vite** – 빠른 개발 서버 & 빌드
- ⚛️ **React 19 + TypeScript**
- 🧭 **React Router (createBrowserRouter)**
- 📡 **TanStack React Query**
- 🔌 **Axios instance + interceptor 구조**
- 🌙 **다크모드 (localStorage 기반, system 지원)**
- 🌍 **다국어 (i18next)**
- 🛡 **ErrorBoundary + Router Error 분리**
- 🎨 **Tailwind CSS**
- 🧹 **ESLint (Flat Config) + Prettier**
- 📦 **명확한 책임 분리 구조 (HTTP / API / Query / UI)**

---

## 📁 프로젝트 구조

```txt
src/
 ├─ api/                # 서버 호출 함수 (axios)
 ├─ queries/            # React Query hooks
 ├─ queryKeys.ts        # queryKey 팩토리
 ├─ components/
 │   ├─ ui/             # 공용 UI 컴포넌트
 │   ├─ feedback/       # Spinner / ErrorFallback
 │   └─ layout/         # Header / RootLayout
 ├─ pages/              # 페이지 컴포넌트
 ├─ routes/             # createBrowserRouter 설정
 ├─ utils/
 │   ├─ axios.ts
 │   ├─ axios.interceptors.ts
 │   └─ index.ts
 ├─ theme-provider.tsx  # 다크모드 관리
 └─ i18n/               # 다국어 설정
```

---

## 🚀 시작하기

### 1️⃣ 패키지 설치

```bash
npm install
```

### 2️⃣ 환경 변수 설정

```bash
cp .env.example .env
```

```env
VITE_API_BASE_URL=http://localhost:8080
```

### 3️⃣ 개발 서버 실행

```bash
npm run dev
```

---

## 📜 사용 가능한 스크립트

```bash
npm run dev        # 개발 서버
npm run build      # 프로덕션 빌드
npm run preview    # 빌드 미리보기
npm run lint       # ESLint 검사
npm run format     # Prettier 포맷
npm run typecheck  # 타입 체크
```

---

## 🌙 다크모드

- `light / dark / system` 지원
- 선택한 테마는 **localStorage**에 저장되어 새로고침 후에도 유지됩니다.
- Tailwind `darkMode: ["class"]` 방식 사용
- `theme-provider.tsx`에서 관리

---

## 🌍 다국어 (i18n)

- `i18next` + `react-i18next` 사용
- 언어 변경 예시는 `Home.tsx` 참고
- 기본 제공 언어: `ko`, `en`

---

## 🧱 에러 처리 전략

- **컴포넌트 레벨 에러**
  - `dynamic()` 내부의 `ErrorBoundary + ErrorFallback`
- **라우터 레벨 에러**
  - `RouteError` (`useRouteError`)

에러의 성격에 따라 책임을 분리한 구조입니다.

---

## 🔌 API 통신 구조

- `utils/axios.ts` : axios instance
- `utils/axios.interceptors.ts` : 공통 interceptor / 에러 정규화
- `api/*.api.ts` : 순수 서버 호출 함수
- `queries/*.queries.ts` : React Query hooks
- `queryKeys.ts` : queryKey 팩토리

---

## 🧠 설계 원칙

- `any` 사용 지양, `unknown + 타입 가드` 패턴 권장
- UI / API / 상태 관리 책임 분리
- 스타터 템플릿이지만 **실무 확장성 우선**

---

## 📄 라이선스

MIT License
