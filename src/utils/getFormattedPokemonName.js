function getFormattedPokemonName(name) {
	if (name) {
		return name.split('-').join(' ')
	}
	return name
}

export default getFormattedPokemonName
