import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemonsByPage, getPokemonDetails } from '../api/pokeApi'
import handleRequestError from '../utils/handleRequestError'

export const fetchPokemonsByPage = createAsyncThunk(
	'fetchPokemonsByPage',
	async ({ page = 1 }, { rejectWithValue }) => {
		try {
			const response = await getPokemonsByPage(page)
		} catch (err) {
			return handleRequestError(err, rejectWithValue)
		}
	}
)
