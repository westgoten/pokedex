import styled from 'styled-components'
import Card from '../Card'

export const Container = styled(Card)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 27rem;
	max-height: 30.75rem;
	width: 100%;
	height: 100%;
	padding: 3.0625rem;
	box-sizing: border-box;
`

export const Image = styled.img`
	width: 58%;
	height: auto;
	margin-bottom: 1rem;
`

export const Name = styled.span`
	color: ${(props) => props.theme.primaryTextColor};
	margin-bottom: 2.5rem;
	font-family: ${(props) => props.theme.primaryFontFamily};
	font-weight: 700;
	font-size: 1.875rem;
	line-height: 1.25rem;
	text-transform: capitalize;
`
