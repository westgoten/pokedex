import { Container, Content, Image, Name } from './styles'

function PokemonCard({ name, imageUrl, ...props }) {
	return (
		<Container {...props}>
			<Content>
				<Image src={imageUrl} alt='Pokemon image' />
				<Name>{name.split('-').join(' ')}</Name>
			</Content>
		</Container>
	)
}

export default PokemonCard
