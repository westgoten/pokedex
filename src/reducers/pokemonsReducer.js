import { createReducer } from '@reduxjs/toolkit'
import { fetchPokemonsByPage } from '../actions/pokemonsActions'
import INITIAL_PAGE from '../utils/consts/initialPage'

const initialState = {
	isPending: false,
	pokemonList: [],
	nextPage: null,
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
		[fetchPokemonsByPage.fulfilled]: (state, action) => ({
			...state,
			isPending: false,
			pokemonList: action.payload.results,
			nextPage: getNextPage(state, action),
			count: action.payload.count,
			error: null
		}),
		[fetchPokemonsByPage.rejected]: (state, action) => ({
			...state,
			isPending: false,
			error: action.payload
		})
	},
	[],
	(state) => state
)

function getNextPage(state, action) {
	if (action.payload.next)
		if (state.nextPage) return state.nextPage + 1
		else return INITIAL_PAGE + 1
	return null
}

export default pokemonsReducer
