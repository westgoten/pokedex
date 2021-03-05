import Pokemon from './Pokemon'
import toPojo from '../utils/toPojo'

class PokemonList {
	constructor(data) {
		this.count = data.count
		this.next = data.next
		this.results = data.results.map((pokemon) =>
			toPojo(new Pokemon(pokemon))
		)
	}
}

export default PokemonList
