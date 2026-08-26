import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { AdminPages } from "@/admin/pages/AdminPages";
import { HeroesLayout } from "@/herores/layout/HeroesLayout";
import { HeroPage } from "@/herores/pages/hero/HeroPage";
import { HomePage } from "@/herores/pages/home/HomePage";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";

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
        path: "heroes/:idSlug",
        element: <HeroPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
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
