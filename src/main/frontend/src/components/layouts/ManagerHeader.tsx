import { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

type ResolvedTheme = "light" | "dark";

const getResolvedTheme = (
  theme: "light" | "dark" | "system"
): ResolvedTheme => {
  if (theme === "light" || theme === "dark") return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ManagerHeader = () => {
  const { theme, setTheme } = useTheme();

  // system 테마일 때 OS 테마 변화도 반영하고 싶어서, resolved theme를 state로 관리
  const [resolved, setResolved] = useState<ResolvedTheme>(() =>
    getResolvedTheme(theme)
  );

  useEffect(() => {
    const init = () => setResolved(getResolvedTheme(theme));
    init();

    if (theme !== "system") return;

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setResolved(getResolvedTheme("system"));

    mql.addListener(handler);
    return () => mql.removeListener(handler);
  }, [theme]);

  const isDark = useMemo(() => resolved === "dark", [resolved]);

  const toggleTheme = () => {
    // system이어도 "현재 보이는 테마" 기준으로 토글
    const next = isDark ? "light" : "dark";
    setTheme(next);
  };
  return (
    <div className="mb-3 flex items-center justify-between">
      <img
        className="h-[100px] w-[300px] object-cover"
        src="/book_logo.svg"
        alt=""
      />
      <div className="flex gap-3">
        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-muted"
          aria-label="Toggle theme"
          title={`Current: ${theme} (resolved: ${resolved})`}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
          <span className="hidden sm:inline">
            {isDark ? "Light mode" : "Dark mode"}
          </span>
        </button>
        <ul className="my-[8px] flex justify-end gap-3">
          <li>Login</li>
          <li>Join</li>
        </ul>
      </div>
    </div>
  );
};

export default ManagerHeader;
