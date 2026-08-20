import { Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/herores/components/HeroStats";
import { HeroGrid } from "@/herores/components/HeroGrid";
import { useEffect, useState } from "react";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs";
import { getHeroesByPage } from "@/herores/actions/get-heroes-by-page.action";

type active = "all" | "favorites" | "heroes" | "villains";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<active>("all");

  useEffect(() => {
    getHeroesByPage().then((heroes) => {
      console.log({ heroes });
    });
  }, []);

  return (
    <>
      <>
        <CustomJumbotron
          title="Universo de SuperHeroes"
          description="Descubre, explora y administra super heroes"
        />

        <CustomBreadCrumbs currentPage="Super Heroes" />
        <HeroStats />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab("favorites")}
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("villains")}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            <h1>Todos los favoritos</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            <h1>Todos los heroes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            <h1>Todos los villanos</h1>
            <HeroGrid />
          </TabsContent>
        </Tabs>

        <CustomPagination totalPages={8} />
      </>
    </>
  );
};
