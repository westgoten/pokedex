import PokemonCard from '../PokemonCard'
import InfiniteScrollDetector from '../InfiniteScrollDetector'
import { COLORS_IN_ORDER } from '../../../utils/consts/pokemonCardColors'
import { Grid } from './styles'

function PokemonsGrid({ pokemonList }) {
	return (
		<Grid>
			{pokemonList.map((pokemon, index) => (
				<PokemonCard
					key={pokemon.name}
					name={pokemon.name}
					imageUrl={pokemon.imageUrl}
					color={COLORS_IN_ORDER[getColorIndex(index)]}
				/>
			))}
			<InfiniteScrollDetector />
		</Grid>
	)

	function getColorIndex(index) {
		return index % COLORS_IN_ORDER.length
	}
}

export default PokemonsGrid
