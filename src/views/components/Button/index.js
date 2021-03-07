import styled from 'styled-components'

const Button = styled.button`
	outline: 0;
	background: none;
	border: none;
	background-color: ${(props) => props.theme.primaryColor};
	padding: 8px 16px;
	border-radius: 100px;
	color: ${(props) => props.theme.primaryTextColor};
	cursor: pointer;

	&:active {
		background-color: ${(props) => props.theme.buttonHighlightColor};
	}
`

export default Button
