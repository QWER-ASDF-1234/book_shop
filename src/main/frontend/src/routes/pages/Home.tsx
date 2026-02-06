import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/feedback/Spinner";

interface HealthResponse {
  status: string;
}

async function fetchHealth(): Promise<HealthResponse> {
  // 실제 API 없이도 동작하는 예시
  return new Promise((resolve) =>
    setTimeout(() => resolve({ status: "ok" }), 800)
  );
}

export default function Home() {
  const { t, i18n } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ["health"],
    queryFn: fetchHealth,
  });

  const changeLanguage = (lng: "ko" | "en") => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      {/* Title */}
      <h1 className="text-2xl font-bold">
        {t("home.title", "React Vite TypeScript Starter")}
      </h1>

      <p className="text-muted-foreground">
        {t(
          "home.description",
          "이 페이지는 스타터 템플릿의 기본 사용 예시입니다."
        )}
      </p>

      {/* Language Switcher */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">
          {t("home.language", "Language")}:
        </span>

        <Button
          size="sm"
          variant={i18n.language === "ko" ? "default" : "outline"}
          onClick={() => changeLanguage("ko")}
        >
          한국어
        </Button>

        <Button
          size="sm"
          variant={i18n.language === "en" ? "default" : "outline"}
          onClick={() => changeLanguage("en")}
        >
          English
        </Button>
      </div>

      {/* React Query Example */}
      <div className="rounded-lg border p-4">
        <h2 className="mb-2 font-semibold">
          {t("home.apiExample", "React Query Example")}
        </h2>

        {isLoading && <Spinner label={t("common.loading", "Loading...")} />}

        {!isLoading && data && (
          <div className="text-sm">
            {t("home.apiStatus", "API Status")}: <strong>{data.status}</strong>
          </div>
        )}
      </div>

      {/* Button Example */}
      <div className="flex gap-3">
        <Button onClick={() => alert(t("home.alert", "Button clicked!"))}>
          {t("home.button", "Button Example")}
        </Button>

        <Button variant="outline">
          {t("home.outlineButton", "Outline Button")}
        </Button>
      </div>
    </div>
  );
}
