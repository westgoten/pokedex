import PokemonStat from './PokemonStat'
import PokemonType from './PokemonType'
import toPojo from '../utils/toPojo'

class PokemonDetails {
	constructor(data) {
		this.id = data.id
		this.name = data.name
		this.baseExperience = data.base_experience
		this.imageUrl = data.sprites.other['official-artwork'].front_default
		this.stats = data.stats.map((stat) => toPojo(new PokemonStat(stat)))
		this.types = data.types.map((type) => toPojo(new PokemonType(type)))
	}
}

export default PokemonDetails
