import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPokemonsByPage } from '../../../actions/pokemonsActions'
import useShallowEqualSelector from '../../../utils/hooks/useShallowEqualSelector'
import PokemonCard from '../../components/PokemonCard'
import INITIAL_PAGE from '../../../utils/consts/initialPage'
import { Grid } from './styles'

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

	return isPending && isPokemonListEmpty() ? (
		<div>Loading</div>
	) : error && isPokemonListEmpty() ? (
		<div>Error</div>
	) : (
		<Grid>
			{pokemonList.map((pokemon) => (
				<PokemonCard
					key={pokemon.name}
					name={pokemon.name}
					imageUrl={pokemon.imageUrl}
					color='purple'
				/>
			))}
		</Grid>
	)

	function isPokemonListEmpty() {
		return pokemonList.length === 0
	}
}

export default PokemonsPage
