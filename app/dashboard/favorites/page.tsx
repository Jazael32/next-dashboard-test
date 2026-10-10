import { FavoritePokemonsGrid, PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";

import { cacheLife, cacheTag, revalidateTag } from "next/cache";
import { IoHeartOutline } from "react-icons/io5";


export const metadata = {
  title: 'Favoritos',
  description: 'Favoritos',
};


export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemons Favoritos<small className="text-blue-500">global state</small></span>
      <FavoritePokemonsGrid />
    </div>
  );
}