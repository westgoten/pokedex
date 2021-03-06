import styled from 'styled-components'
import { SMALL_WIDTH } from '../../../utils/consts/screenSizes'

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10.1875rem, 1fr));
	gap: 2.900625rem 2.25rem;
	width: 100%;
	overflow: auto;
	padding-right: 1.9375rem;

	@media (max-width: ${SMALL_WIDTH}) {
		overflow: visible;
		padding-right: 0;
	}
`

export const ChildTest = styled.div`
	min-width: 10.1875rem;
	min-height: 8.5663rem;
	background-color: red;
`
