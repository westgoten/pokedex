import { useEffect, useRef, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
	fetchPokemonsByPage,
	setInitialPageRequest
} from '../../../actions/pokemonsActions'
import useShallowEqualSelector from '../../../utils/hooks/useShallowEqualSelector'
import InfiniteScrollErrorWarning from '../InfiniteScrollErrorWarning'
import { Container, SmallLoader } from './styles'

function InfiniteScrollDetector() {
	const dispatch = useDispatch()
	const containerRef = useRef(null)

	const isPending = useShallowEqualSelector(
		(state) => state.pokemons.isPending
	)
	const nextPage = useShallowEqualSelector((state) => state.pokemons.nextPage)
	const error = useShallowEqualSelector((state) => state.pokemons.error)

	const intersectionHandler = useCallback(
		(entries) => {
			if (entries[0].isIntersecting && !isPending && !error) {
				dispatch(setInitialPageRequest(false))
				dispatch(fetchPokemonsByPage({ page: nextPage }))
			}
		},
		// eslint-disable-next-line
		[isPending, error, nextPage]
	)

	useEffect(() => {
		const intersectionObserver = new IntersectionObserver(
			intersectionHandler
		)
		const container = containerRef.current
		if (container) intersectionObserver.observe(container)

		return () => {
			if (container) intersectionObserver.unobserve(container)
		}
	}, [intersectionHandler])

	return nextPage ? (
		<Container ref={containerRef}>
			{isPending ? (
				<SmallLoader />
			) : error ? (
				<InfiniteScrollErrorWarning />
			) : (
				<SmallLoader />
			)}
		</Container>
	) : null
}

export default InfiniteScrollDetector
