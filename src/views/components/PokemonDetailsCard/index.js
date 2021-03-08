import { Container, Image, Name } from './styles'
import PokemonTypeSlot from '../PokemonTypeSlot'
import getFormattedPokemonName from '../../../utils/getFormattedPokemonName'
import TYPE_COLORS from '../../../utils/consts/pokemonTypeColors'

function PokemonDetailsCard({ pokemonDetails, color }) {
	return pokemonDetails ? (
		<Container color={color}>
			<Image src={pokemonDetails.imageUrl} />
			<Name>{getFormattedPokemonName(pokemonDetails.name)}</Name>
			{pokemonDetails.types.map((type) => (
				<PokemonTypeSlot
					type={type.name}
					color={TYPE_COLORS[type.name]}
				/>
			))}
		</Container>
	) : null
}

export default PokemonDetailsCard
