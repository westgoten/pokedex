import { Container, Title } from './styles'
import PokemonStatsDisplayUnit from '../PokemonStatsDisplayUnit'
import { BASE_STATS } from '../../../utils/consts/baseStats'

function PokemonStatsDisplay({ pokemonDetails }) {
	return pokemonDetails ? (
		<Container>
			<Title>Base Stats</Title>
			{pokemonDetails.stats.map((stat) => {
				const baseStat = BASE_STATS[stat.name]
				if (baseStat)
					return (
						<PokemonStatsDisplayUnit
							statLabel={baseStat.label}
							statValue={stat.baseStat}
							gaugeColor={baseStat.color}
						/>
					)
				return null
			})}
			<PokemonStatsDisplayUnit
				statLabel={BASE_STATS.base_experience.label}
				statValue={pokemonDetails.baseExperience}
				gaugeColor={BASE_STATS.base_experience.color}
			/>
		</Container>
	) : null
}

export default PokemonStatsDisplay
