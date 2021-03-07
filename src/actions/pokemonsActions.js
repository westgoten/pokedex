import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { getPokemonsByPage, getPokemonDetails } from '../api/pokeApi'
import handleRequestError from '../utils/handleRequestError'
import INITIAL_PAGE from '../utils/consts/initialPage'
import { FULFILLED } from '../utils/consts/promiseStatus'

export const fetchPokemonsByPage = createAsyncThunk(
	'fetchPokemonsByPage',
	async ({ page = INITIAL_PAGE }, { rejectWithValue }) => {
		try {
			const response = await getPokemonsByPage(page)
			const pokemons = response.data.results
			response.data.results = await bindImageUrlToPokemons(pokemons)
			return response.data
		} catch (err) {
			return handleRequestError(err, rejectWithValue)
		}
	}
)

async function bindImageUrlToPokemons(pokemons) {
	const requestsPromises = pokemons.map((pokemon) =>
		getPokemonDetails(pokemon.name)
	)
	const requestsResults = await Promise.allSettled(requestsPromises)
	return pokemons.map((pokemon, index) => {
		const requestResult = requestsResults[index]
		if (requestResult.status === FULFILLED)
			pokemon.imageUrl = requestResult.value.data.imageUrl
		return pokemon
	})
}

export const setInitialPageRequest = createAction('setInitialPageRequest')
