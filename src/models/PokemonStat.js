class PokemonStat {
	constructor(data) {
		this.baseStat = data.base_stat
		this.name = data.stat.name
	}
}

export default PokemonStat
