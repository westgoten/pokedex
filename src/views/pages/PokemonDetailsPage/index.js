import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import { fetchPokemonDetails } from '../../../actions/pokemonDetailsActions'
import useShallowEqualSelector from '../../../utils/hooks/useShallowEqualSelector'
import Loader from '../../components/Loader'
import ErrorWarning from '../../components/ErrorWarning'
import PageNotFound from '../../components/PageNotFound'
import PokemonDetailsCard from '../../components/PokemonDetailsCard'
import PokemonStatsDisplay from '../../components/PokemonStatsDisplay'
import { TRY_AGAIN, NOT_FOUND } from '../../../utils/consts/errorMessages'
import { DEFAULT_COLOR } from '../../../utils/consts/pokemonCardColors'
import { Container } from './styles'

function PokemonDetailsPage() {
	const dispatch = useDispatch()
	const pokemonName = useParams().pokemonName
	const location = useLocation()

	const isPending = useShallowEqualSelector(
		(state) => state.pokemonDetails.isPending
	)
	const pokemonDetails = useShallowEqualSelector(
		(state) => state.pokemonDetails.details
	)
	const error = useShallowEqualSelector((state) => state.pokemonDetails.error)

	useEffect(() => {
		console.log(pokemonName)
		if (pokemonName) dispatch(fetchPokemonDetails({ name: pokemonName }))
	}, [pokemonName])

	return isPending ? (
		<Loader />
	) : error && isPageNotFound() ? (
		<PageNotFound />
	) : error ? (
		<ErrorWarning
			error={error}
			buttonMessage={TRY_AGAIN}
			buttonOnClick={() =>
				dispatch(fetchPokemonDetails({ name: pokemonName }))
			}
		/>
	) : (
		<Container>
			<PokemonDetailsCard
				pokemonDetails={pokemonDetails}
				color={getCardColor()}
			/>
			<PokemonStatsDisplay pokemonDetails={pokemonDetails} />
		</Container>
	)

	function isPageNotFound() {
		return String(error).toUpperCase() === NOT_FOUND.toUpperCase()
	}

	function getCardColor() {
		if (location.state && location.state.cardColor)
			return location.state.cardColor
		return DEFAULT_COLOR
	}
}

export default PokemonDetailsPage
