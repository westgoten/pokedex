import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from '../Card'

export const pokemonCardWidth = {
	value: 10.1875,
	unit: 'em'
}

const pokemonCardHeight = {
	value: 8.5663,
	unit: 'em'
}

const imageMarginBottom = '7px'

export const PokemonLink = styled(Link)`
	outline: none;
	text-decoration: none;
`

export const Container = styled(Card)`
	position: relative;
	min-width: ${pokemonCardWidth.value + pokemonCardWidth.unit};
	padding-top: ${(pokemonCardHeight.value / pokemonCardWidth.value) * 100}%;
	height: 0;
`

export const Content = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 12px 35px;
`

export const Image = styled.img`
	max-width: 97%;
	height: auto;
	margin-bottom: ${imageMarginBottom};
`

export const ImagePlaceholder = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 90%;
	min-height: 70%;
	margin-bottom: ${imageMarginBottom};
	background-color: gray;
	border-radius: 20px;
`

export const ImagePlaceholderText = styled.span`
	font-size: 16px;
	color: ${(props) => props.theme.primaryTextColor};
	text-transform: capitalize;
`

export const Name = styled.span`
	font-size: 14px;
	font-weight: 700;
	font-family: ${(props) => props.theme.primaryFontFamily};
	line-height: 20px;
	color: ${(props) => props.theme.primaryTextColor};
	text-transform: capitalize;
`
