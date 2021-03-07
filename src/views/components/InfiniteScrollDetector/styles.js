import styled from 'styled-components'
import Loader from '../Loader'
import { SMALL_WIDTH } from '../../../utils/consts/screenSizes'

const smallLoaderSize = '50px'

export const Container = styled.div`
	grid-column: 1 / -1;
	width: 100%;
	padding-bottom: 16px;
	min-height: ${smallLoaderSize};

	@media (max-width: ${SMALL_WIDTH}) {
		padding-bottom: 0;
	}
`

export const SmallLoader = styled(Loader)`
	width: ${smallLoaderSize};
	height: ${smallLoaderSize};
`
