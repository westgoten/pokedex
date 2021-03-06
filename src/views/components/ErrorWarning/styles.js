import styled from 'styled-components'
import Button from '../Button'

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

export const ErrorButton = styled(Button)`
	margin-top: 12px;
`
