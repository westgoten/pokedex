import styled from 'styled-components'
import { SMALL_WIDTH } from '../../../utils/consts/screenSizes'
import {
	DEFAULT_FONT_SIZE,
	MEDIUM_FONT_SIZE
} from '../../../utils/consts/remFontSizes'

export const headerHeight = {
	value: 5.125,
	unit: 'rem'
}

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: ${headerHeight.value + headerHeight.unit};
	background-color: ${(props) => props.theme.primaryColor};
	border-radius: 0 0 20px 20px;
	font-size: ${DEFAULT_FONT_SIZE};

	@media (max-width: ${SMALL_WIDTH}) {
		font-size: ${MEDIUM_FONT_SIZE};
	}
`

export const Logo = styled.img`
	object-fit: contain;
	width: 8.5625em;
	height: 3.375em;
`
