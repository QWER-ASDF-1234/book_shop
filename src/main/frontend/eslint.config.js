import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

import tailwind from "eslint-plugin-tailwindcss";

import prettierRecommended from "eslint-plugin-prettier/recommended";
import prettierConfig from "eslint-config-prettier";

export default [
  // 0) ignore
  { ignores: ["dist", "build", "node_modules"] },

  // 1) JS recommended
  js.configs.recommended,

  // 2) TS recommended (includes parser)
  ...tseslint.configs.recommended,

  // 3) Project rules for TS/TSX (+ keep TS parser explicitly to avoid overwrite issues)
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // React hooks rules
      ...reactHooks.configs.recommended.rules,

      // Vite react-refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // TS rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-explicit-any": "warn",

      // (선택) 코드 스타일은 prettier에 맡기는 걸 추천하지만,
      // 네가 ESLint로 강제하고 싶다면 유지해도 됨.
      semi: ["error", "always"],
      quotes: [
        "error",
        "double",
        { avoidEscape: true, allowTemplateLiterals: true },
      ],
      "jsx-quotes": ["error", "prefer-double"],
    },
  },

  // 4) Tailwind CSS lint (flat config)
  ...tailwind.configs["flat/recommended"],

  // 5) Prettier: format을 ESLint 에러로 노출
  prettierRecommended,

  // 6) Prettier와 충돌하는 ESLint 규칙 끄기 (반드시 맨 마지막)
  prettierConfig,
];
