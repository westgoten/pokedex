import { useDispatch } from 'react-redux'
import {
	fetchPokemonsByPage,
	setInitialPageRequest
} from '../../../actions/pokemonsActions'
import useShallowEqualSelector from '../../../utils/hooks/useShallowEqualSelector'
import { Container, Message, ErrorButton } from './styles'
import { ERROR_OCCURRED, TRY_AGAIN } from '../../../utils/consts/errorMessages'

function InfiniteScrollErrorWarning() {
	const dispatch = useDispatch()
	const nextPage = useShallowEqualSelector((state) => state.pokemons.nextPage)

	return (
		<Container>
			<Message>{ERROR_OCCURRED}</Message>
			<ErrorButton onClick={dispatchNextPageRequest}>
				{TRY_AGAIN}
			</ErrorButton>
		</Container>
	)

	function dispatchNextPageRequest() {
		dispatch(setInitialPageRequest(false))
		dispatch(fetchPokemonsByPage({ page: nextPage }))
	}
}

export default InfiniteScrollErrorWarning
