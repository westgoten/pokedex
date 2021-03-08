import { Container, Type } from './styles'

function PokemonTypeSlot({ type, color }) {
	return (
		<Container>
			<Type color={color}>{type}</Type>
		</Container>
	)
}

export default PokemonTypeSlot
