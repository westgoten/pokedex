import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from './reducers/pokemonsReducer'
import pokemonDetailsReducer from './reducers/pokemonDetailsReducer'

export default configureStore({
	reducer: {
		pokemons: pokemonsReducer,
		pokemonDetails: pokemonDetailsReducer
	}
})
