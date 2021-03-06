import styled from 'styled-components'
import { headerHeight } from '../Header/styles'
import { SMALL_WIDTH } from '../../../utils/consts/screenSizes'

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	overflow: auto;
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.theme.secondaryColor};
	padding: 4.5625rem 7.4375rem;
	padding-top: ${headerHeight.value + 4.5625 + headerHeight.unit};

	@media (max-width: ${SMALL_WIDTH}) {
		padding-bottom: 0;

		&::after {
			content: '';
			display: block;
			min-width: 100%;
			min-height: 4.5625rem;
		}
	}
`
