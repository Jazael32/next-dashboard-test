import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/app/pokemons';

/*
  favorites {
    '1': {id: 1, name: 'bulbasur},
    '2': {id: 2, name: 'squirtle},
  }
*/

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon },
}

const getInitialState = (): PokemonsState => {
  // if (typeof localStorage === 'undefined') return {};
  const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}');
  return favorites
}

const initialState: PokemonsState = {
  favorites: {},
  // ...getInitialState(),
  // '1': { id: '1', name: 'bulbasur' },
  // '3': { id: '3', name: 'venusaur' },
  // '5': { id: '5', name: 'charmeleon' },
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      //Si existe el pokemon en nuestro PokemonState y hacemos toggle a favoritos lo borramos del state
      if (state.favorites[id] !== undefined) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      //TODO: NO SE DEBE HACER EN REDUX
      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
    }
  }
});

export const { setFavoritePokemons, toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer