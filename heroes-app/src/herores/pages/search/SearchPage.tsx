import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/herores/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { searchHeroesAction } from "@/herores/actions/search-heros.action";
import { HeroGrid } from "@/herores/components/HeroGrid";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? undefined;
  const strength = searchParams.get("strength") ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ["search", { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      <CustomJumbotron
        title="Busqueda de SuperHeroes"
        description="Descubre, explora y administra super heroes"
      />
      <CustomBreadCrumbs currentPage="Buscador de heroes" breadCrumbs={[]} />
      <HeroStats />
      <SearchControls />
      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
