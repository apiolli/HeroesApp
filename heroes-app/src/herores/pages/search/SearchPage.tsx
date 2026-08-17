import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/herores/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de SuperHeroes"
        description="Descubre, explora y administra super heroes"
      />

      <HeroStats />
      <SearchControls />
    </>
  );
};

export default SearchPage;
