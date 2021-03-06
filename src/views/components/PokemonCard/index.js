import { Container, Content, Image, Name } from './styles'

function PokemonCard(props) {
	return (
		<Container {...props}>
			<Content>
				<Image alt='Pokemon image' />
				<Name>Charizard</Name>
			</Content>
		</Container>
	)
}

export default PokemonCard
