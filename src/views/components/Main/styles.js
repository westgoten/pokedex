import styled from 'styled-components'
import { headerHeight } from '../Header/styles'

export const Container = styled.main`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.theme.secondaryColor};
	padding: ${headerHeight.value + 4.5625 + headerHeight.unit} 7.4375rem
		4.5625rem 7.4375rem;
`
