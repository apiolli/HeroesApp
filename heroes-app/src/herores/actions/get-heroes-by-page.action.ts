import { BASE_URL, heroApi } from "../api/hero.api";
import type { HeroesResponse } from "../types/get-heroes-response";

export const getHeroesByPage = async (): Promise<HeroesResponse> => {
  const { data } = await heroApi.get<HeroesResponse>(`/`);

  const heroes = data.heroes.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }));

  return {
    ...data,
    heroes: heroes,
  };
};
