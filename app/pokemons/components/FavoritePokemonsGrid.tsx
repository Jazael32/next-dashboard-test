'use client';

import { PokemonCard, SimplePokemon } from "@/app/pokemons";
import { useAppSelector } from "@/app/store";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemonsGrid = () => {


  const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites));

  const [pokemons, setPokemons] = useState(favoritePokemons)


  return (
    <>
      {
        favoritePokemons.length === 0 ? <NoFavorites /> : (
          <div className="flex flex-wrap gap-10 items-center justify-center">
            {
              favoritePokemons.map(pokemon => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))
            }
          </div>
        )
      }
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  )
}