import { createReducer } from '@reduxjs/toolkit'

const initialState = {
	isPending: false,
	pokemonList: [],
	nextPage: null,
	error: null
}

const pokemonsReducer = createReducer(initialState, {}, [], (state) => state)

export default pokemonsReducer
