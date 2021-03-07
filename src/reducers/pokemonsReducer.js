import { createReducer } from '@reduxjs/toolkit'
import {
	fetchPokemonsByPage,
	setInitialPageRequest
} from '../actions/pokemonsActions'
import INITIAL_PAGE from '../utils/consts/initialPage'

const initialState = {
	isPending: false,
	pokemonList: [],
	nextPage: null,
	isInitialPageRequest: true,
	count: 0,
	error: null
}

const pokemonsReducer = createReducer(
	initialState,
	{
		[fetchPokemonsByPage.pending]: (state) => ({
			...state,
			isPending: true,
			error: null
		}),
		[fetchPokemonsByPage.fulfilled]: (state, action) => {
			let pokemonList = []
			const results = action.payload.results

			if (state.isInitialPageRequest) {
				pokemonList = results
			} else {
				pokemonList = state.pokemonList.concat(results)
			}

			return {
				...state,
				isPending: false,
				pokemonList,
				nextPage: getNextPage(state, action),
				isInitialPageRequest: false,
				count: action.payload.count,
				error: null
			}
		},
		[fetchPokemonsByPage.rejected]: (state, action) => ({
			...state,
			isPending: false,
			error: action.payload
		}),
		[setInitialPageRequest]: (state, action) => ({
			...state,
			isInitialPageRequest: action.payload
		})
	},
	[],
	(state) => state
)

function getNextPage(state, action) {
	if (action.payload.next)
		if (state.nextPage && !state.isInitialPageRequest)
			return state.nextPage + 1
		else return INITIAL_PAGE + 1
	return null
}

export default pokemonsReducer
