import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { getPokemonsByPage, getPokemonDetails } from '../api/pokeApi'

export const fetchPokemonsByPage = createAsyncThunk(
	'fetchPokemonsByPage',
	async ({ page = 1 }, { rejectWithValue }) => {
		try {
			const response = await getPokemonsByPage(page)
		} catch (err) {}
	}
)
