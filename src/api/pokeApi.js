import axios from './axios'
import ITEMS_PER_PAGE from '../utils/consts/itemsPerPage'
import {
	INVALID_PAGE,
	INVALID_OFFSET_OR_LIMIT
} from '../utils/consts/errorMessages'

export function getPokemons(offset = 0, limit = ITEMS_PER_PAGE) {
	if (offset >= 0 && limit >= 0) {
		return axios.get(`/pokemon?offset=${offset}&limit=${limit}`)
	}
	throw Error(INVALID_OFFSET_OR_LIMIT)
}

export function getPokemonsByPage(page = 1) {
	if (page >= 1) {
		const offset = (page - 1) * ITEMS_PER_PAGE
		return getPokemons(offset)
	}
	throw Error(INVALID_PAGE)
}

export function getPokemonDetails(name) {
	return axios.get(`/pokemon/${name}`)
}
