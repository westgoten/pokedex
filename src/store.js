import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from './reducers/pokemonsReducer'

export default configureStore({
	reducer: {
		pokemons: pokemonsReducer
	}
})
