import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layouts/RootLayout";
import RouteError from "./pages/RouteError";
import { dynamic } from "@/utils/dynamic";

// lazy pages
//const HomePage = dynamic(() => import("./pages/Home"));
const HomePage = dynamic(() => import("../App"));
//const HomePage = dynamic(() => import("./pages/member/Join"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <RouteError />,
    children: [{ index: true, Component: HomePage }],
  },
]);
