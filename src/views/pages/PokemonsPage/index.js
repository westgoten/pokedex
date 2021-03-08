import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
	fetchPokemonsByPage,
	setInitialPageRequest
} from '../../../actions/pokemonsActions'
import useShallowEqualSelector from '../../../utils/hooks/useShallowEqualSelector'
import Loader from '../../components/Loader'
import ErrorWarning from '../../components/ErrorWarning'
import INITIAL_PAGE from '../../../utils/consts/initialPage'
import { TRY_AGAIN } from '../../../utils/consts/errorMessages'
import PokemonsGrid from '../../components/PokemonsGrid'

function PokemonsPage() {
	const dispatch = useDispatch()
	const isPending = useShallowEqualSelector(
		(state) => state.pokemons.isPending
	)
	const pokemonList = useShallowEqualSelector(
		(state) => state.pokemons.pokemonList
	)
	const nextPage = useShallowEqualSelector((state) => state.pokemons.nextPage)
	const isInitialPageRequest = useShallowEqualSelector(
		(state) => state.pokemons.isInitialPageRequest
	)
	const error = useShallowEqualSelector((state) => state.pokemons.error)

	useEffect(() => {
		if (!nextPage) dispatchPokemonsRequest()
		// eslint-disable-next-line
	}, [])

	return isPending && isInitialPageRequest ? (
		<Loader />
	) : error && isInitialPageRequest ? (
		<ErrorWarning
			error={error}
			buttonMessage={TRY_AGAIN}
			buttonOnClick={() => dispatchPokemonsRequest()}
		/>
	) : (
		<PokemonsGrid pokemonList={pokemonList} />
	)

	function dispatchPokemonsRequest() {
		dispatch(setInitialPageRequest(true))
		dispatch(fetchPokemonsByPage({ page: INITIAL_PAGE }))
	}
}

export default PokemonsPage
