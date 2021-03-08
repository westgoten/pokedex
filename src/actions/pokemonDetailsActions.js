import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemonDetails } from '../api/pokeApi'
import handleRequestError from '../utils/handleRequestError'

export const fetchPokemonDetails = createAsyncThunk(
	'fetchPokemonDetails',
	async ({ name }, { rejectWithValue }) => {
		try {
			const response = await getPokemonDetails(name)
			return response.data
		} catch (err) {
			return handleRequestError(err, rejectWithValue)
		}
	}
)
