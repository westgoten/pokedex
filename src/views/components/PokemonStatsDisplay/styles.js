import styled from 'styled-components'
import { SMALL_WIDTH } from '../../../utils/consts/screenSizes'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin-left: 4rem;

	@media (max-width: ${SMALL_WIDTH}), (orientation: portrait) {
		margin-left: 0;
		margin-top: 4rem;
	}
`

export const Title = styled.p`
	color: ${(props) => props.theme.primaryTextColor};
	font-family: ${(props) => props.theme.primaryFontFamily};
	font-weight: 700;
	font-size: 1.875rem;
	line-height: 1.25rem;
	text-transform: capitalize;
	margin-bottom: 3.125rem;
`
