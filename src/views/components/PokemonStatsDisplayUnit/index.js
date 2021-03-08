import {
	Container,
	StatLabel,
	StatGaugeContainer,
	StatGauge,
	StatGaugeText
} from './styles'
import {
	MAX_BASE_STAT,
	MAX_BASE_EXPERIENCE,
	BASE_STATS
} from '../../../utils/consts/baseStats'

function PokemonStatsDisplayUnit({ statLabel, statValue, gaugeColor }) {
	return (
		<Container>
			<StatLabel>{statLabel}</StatLabel>
			<StatGaugeContainer>
				<StatGauge
					statLabel={statLabel}
					statValue={statValue}
					color={gaugeColor}>
					<StatGaugeText>{`${statValue}/${getMaxStat()}`}</StatGaugeText>
				</StatGauge>
			</StatGaugeContainer>
		</Container>
	)

	function getMaxStat() {
		return statLabel === BASE_STATS.base_experience.label
			? MAX_BASE_EXPERIENCE
			: MAX_BASE_STAT
	}
}

export default PokemonStatsDisplayUnit
