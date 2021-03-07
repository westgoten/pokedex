import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
`

export const Title = styled.span`
	font-size: 22.5px;
	font-weight: bold;
	color: ${(props) => props.theme.primaryTextColor};
	margin-bottom: 8px;
`

export const Message = styled.p`
	font-size: 16px;
	color: ${(props) => props.theme.primaryTextColor};
`

export const Button = styled.button`
	outline: 0;
	background: none;
	border: none;
	background-color: ${(props) => props.theme.primaryColor};
	padding: 8px 16px;
	margin-top: 12px;
	border-radius: 100px;
	color: ${(props) => props.theme.primaryTextColor};
	cursor: pointer;

	&:active {
		background-color: ${(props) => props.theme.buttonHighlightColor};
	}
`
