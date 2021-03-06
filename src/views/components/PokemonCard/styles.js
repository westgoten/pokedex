import styled from 'styled-components'
import Card from '../Card'

export const pokemonCardWidth = {
	value: 10.1875,
	unit: 'em'
}

const pokemonCardHeight = {
	value: 8.5663,
	unit: 'em'
}

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
	padding: 12px 35px;
`

export const Image = styled.img`
	margin-bottom: 7px;
`

export const Name = styled.span`
	font-size: 14px;
	font-weight: 700;
	font-family: Inter, Roboto;
	line-height: 20px;
	color: ${(props) => props.theme.primaryTextColor};
`
