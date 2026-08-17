import { AdminPages } from "@/admin/pages/AdminPages";
import { HeroesLayout } from "@/herores/layout/HeroesLayout";
import { HeroPage } from "@/herores/pages/hero/HeroPage";
import { HomePage } from "@/herores/pages/home/HomePage";
import { SearchPage } from "@/herores/pages/search/SearchPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "heroes/1",
        element: <HeroPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminPages />,
  },
]);
