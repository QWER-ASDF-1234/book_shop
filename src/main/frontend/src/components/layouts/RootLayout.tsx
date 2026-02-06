import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import ManagerHeader from "./ManagerHeader";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../AppSidebar";

export default function RootLayout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="m-auto min-h-screen w-[1600px]">
        <ManagerHeader />
        <main>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}
