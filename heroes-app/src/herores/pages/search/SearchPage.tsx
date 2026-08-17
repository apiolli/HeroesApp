import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/herores/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de SuperHeroes"
        description="Descubre, explora y administra super heroes"
      />
      <CustomBreadCrumbs
        currentPage="Buscador de heroes"
        breadCrumbs={[
          { label: "Home1", to: "/" },
          { label: "Home1", to: "/" },
          { label: "Home1", to: "/" },
        ]}
      />
      <HeroStats />
      <SearchControls />
    </>
  );
};

export default SearchPage;
