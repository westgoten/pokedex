import axios from './axios'
import ITEMS_PER_PAGE from '../utils/consts/itemsPerPage'
import {
	INVALID_PAGE,
	INVALID_OFFSET_OR_LIMIT
} from '../utils/consts/errorMessages'
import INITIAL_PAGE from '../utils/consts/initialPage'
import { preparePokemons, preparePokemonDetails } from './dataHandlers'

export function getPokemonsByPage(page = INITIAL_PAGE) {
	if (page >= INITIAL_PAGE) {
		const offset = (page - 1) * ITEMS_PER_PAGE
		return getPokemons(offset)
	}
	throw Error(INVALID_PAGE)
}

export function getPokemons(offset = 0, limit = ITEMS_PER_PAGE) {
	if (offset >= 0 && limit >= 0) {
		return axios.get(`/pokemon?offset=${offset}&limit=${limit}`, {
			transformResponse: getDataHandlerList(preparePokemons)
		})
	}
	throw Error(INVALID_OFFSET_OR_LIMIT)
}

export function getPokemonDetails(name) {
	return axios.get(`/pokemon/${name}`, {
		transformResponse: getDataHandlerList(preparePokemonDetails)
	})
}

function getDataHandlerList(...dataHandlers) {
	return axios.defaults.transformResponse.concat(dataHandlers)
}
