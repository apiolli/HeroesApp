import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { AdminPages } from "@/admin/pages/AdminPages";
import { HeroesLayout } from "@/herores/layout/HeroesLayout";
import { HeroPage } from "@/herores/pages/hero/HeroPage";
import { HomePage } from "@/herores/pages/home/HomePage";
import { lazy } from "react";
// import { SearchPage } from "@/herores/pages/search/SearchPage";
import { createBrowserRouter } from "react-router";

const SearchPage = lazy(() => import("@/herores/pages/search/SearchPage"));

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
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPages />,
      },
    ],
  },
]);
