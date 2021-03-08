import { createReducer } from '@reduxjs/toolkit'
import { fetchPokemonDetails } from '../actions/pokemonDetailsActions'

const initialState = {
	isPending: false,
	details: null,
	error: null
}

const pokemonDetailsReducer = createReducer(initialState, {
	[fetchPokemonDetails.pending]: (state) => ({
		...state,
		isPending: true,
		error: null
	}),
	[fetchPokemonDetails.fulfilled]: (state, action) => ({
		...state,
		isPending: false,
		details: action.payload,
		error: null
	}),
	[fetchPokemonDetails.rejected]: (state, action) => ({
		...state,
		isPending: false,
		error: action.payload
	})
})

export default pokemonDetailsReducer
