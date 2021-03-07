import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPokemonsByPage } from '../../../actions/pokemonsActions'
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
	const error = useShallowEqualSelector((state) => state.pokemons.error)

	useEffect(() => {
		if (!nextPage) dispatch(fetchPokemonsByPage({ page: INITIAL_PAGE }))
		// eslint-disable-next-line
	}, [])

	return isPending ? (
		<Loader />
	) : error ? (
		<ErrorWarning
			error={error}
			buttonMessage={TRY_AGAIN}
			buttonOnClick={() =>
				dispatch(fetchPokemonsByPage({ page: INITIAL_PAGE }))
			}
		/>
	) : (
		<PokemonsGrid pokemonList={pokemonList} />
	)
}

export default PokemonsPage
