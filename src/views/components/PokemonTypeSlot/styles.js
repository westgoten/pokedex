import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #ffffff;
	border-radius: 15px;
	min-width: 15.6875rem;
	min-height: 2.125rem;
	margin-bottom: 1.375rem;
`

export const Type = styled.span`
	color: ${(props) => props.color};
	font-size: 1.25rem;
	text-transform: capitalize;
`
