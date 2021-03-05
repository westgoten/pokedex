import PokemonList from '../models/PokemonList'
import PokemonDetails from '../models/PokemonDetails'
import toPojo from '../utils/toPojo'

export function preparePokemons(data) {
	if (data.results) {
		const pokemonList = new PokemonList(data)
		return toPojo(pokemonList)
	}
	return data
}

export function preparePokemonDetails(data) {
	if (data.id && data.name) {
		const pokemonDetails = new PokemonDetails(data)
		return toPojo(pokemonDetails)
	}
	return data
}
