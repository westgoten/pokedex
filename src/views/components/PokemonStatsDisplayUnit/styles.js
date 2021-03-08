import styled from 'styled-components'
import {
	MAX_BASE_STAT,
	MAX_BASE_EXPERIENCE,
	BASE_STATS
} from '../../../utils/consts/baseStats'

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 3rem;
`

export const StatLabel = styled.span`
	color: ${(props) => props.theme.primaryTextColor};
	font-family: ${(props) => props.theme.primaryFontFamily};
	font-weight: 600;
	font-size: 1.25rem;
	line-height: 1.25rem;
	text-transform: uppercase;
	margin-right: 1.9375rem;
`

export const StatGaugeContainer = styled.div`
	min-height: 1.375rem;
	width: 100%;
	background-color: #ffffff;
	border-radius: 5px;
`

export const StatGauge = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 100%;
	width: ${(props) => getStatGaugeLevel(props.statValue, props.statLabel)}%;
	background-color: ${(props) => props.color};
	border-radius: 5px;
	padding-right: 0.625rem;
	padding-left: 4rem;
	box-sizing: border-box;
`

function getStatGaugeLevel(statValue, statLabel) {
	return (statValue / getMaxStat(statLabel)) * 100
}

function getMaxStat(statLabel) {
	return statLabel === BASE_STATS.base_experience.label
		? MAX_BASE_EXPERIENCE
		: MAX_BASE_STAT
}

export const StatGaugeText = styled.span`
	font-size: 1rem;
	line-height: 1.25rem;
	color: ${(props) => props.theme.primaryTextColor};
	font-family: ${(props) => props.theme.primaryFontFamily};
`
