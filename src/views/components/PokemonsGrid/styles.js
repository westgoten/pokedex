import styled from 'styled-components'
import { SMALL_WIDTH } from '../../../utils/consts/screenSizes'
import { pokemonCardWidth } from '../PokemonCard/styles'
import {
	DEFAULT_FONT_SIZE,
	MEDIUM_FONT_SIZE
} from '../../../utils/consts/remFontSizes'

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fit,
		minmax(${pokemonCardWidth.value + pokemonCardWidth.unit}, 1fr)
	);
	gap: 2.900625em 2.25em;
	width: 100%;
	overflow: auto;
	padding-right: 1.9375em;
	font-size: ${DEFAULT_FONT_SIZE};

	@media (max-width: ${SMALL_WIDTH}) {
		font-size: ${MEDIUM_FONT_SIZE};
		overflow: visible;
		padding-right: 0;
	}
`
