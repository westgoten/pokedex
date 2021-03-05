import Stat from './Stat'
import Type from './Type'
import toPojo from '../utils/toPojo'

class PokemonDetails {
	constructor(data) {
		this.id = data.id
		this.name = data.name
		this.baseExperience = data.base_experience
		this.imageUrl = data.sprites.other['official-artwork'].front_default
		this.stats = data.stats.map((stat) => toPojo(new Stat(stat)))
		this.types = data.types.map((type) => toPojo(new Type(type)))
	}
}

export default PokemonDetails
