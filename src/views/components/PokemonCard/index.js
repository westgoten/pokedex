import { useState } from 'react'
import { POKEMON_PATH } from '../../../utils/consts/routeNames'
import {
	PokemonLink,
	Container,
	Content,
	Image,
	ImagePlaceholder,
	ImagePlaceholderText,
	Name
} from './styles'

function PokemonCard({ name, imageUrl, color, ...props }) {
	const [isImageAvailable, setImageAvailable] = useState(true)

	return (
		<PokemonLink to={createLocationObject()} {...props}>
			<Container color={color}>
				<Content>
					{isImageAvailable ? (
						<Image
							src={imageUrl}
							alt='Pokemon image'
							onError={handleImageError}
							onLoad={handleImageLoad}
						/>
					) : (
						<ImagePlaceholder>
							<ImagePlaceholderText>
								No image
							</ImagePlaceholderText>
						</ImagePlaceholder>
					)}
					<Name>{name.split('-').join(' ')}</Name>
				</Content>
			</Container>
		</PokemonLink>
	)

	function createLocationObject() {
		return {
			pathname: `${POKEMON_PATH}/${name}`,
			state: { cardColor: color }
		}
	}

	function handleImageError() {
		setImageAvailable(false)
	}

	function handleImageLoad() {
		setImageAvailable(true)
	}
}

export default PokemonCard
