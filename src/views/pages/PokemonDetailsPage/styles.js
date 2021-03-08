import styled from 'styled-components'
import { SMALL_WIDTH } from '../../../utils/consts/screenSizes'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	height: 100%;

	@media (max-width: ${SMALL_WIDTH}), (orientation: portrait) {
		flex-direction: column;
	}
`
