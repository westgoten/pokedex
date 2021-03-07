import styled from 'styled-components'
import Button from '../Button'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
`

export const Message = styled.span`
	font-size: 16px;
	font-weight: bold;
	color: ${(props) => props.theme.primaryTextColor};
	margin-bottom: 16px;
`

export const ErrorButton = styled(Button)``
