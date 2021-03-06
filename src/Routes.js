import { Switch, Route, Redirect } from 'react-router-dom'
import PokemonsPage from './views/pages/PokemonsPage'
import PokemonDetailsPage from './views/pages/PokemonDetailsPage'
import PageNotFound from './views/components/PageNotFound'
import { POKEMON_PATH } from './utils/consts/routeNames'

function Routes() {
	return (
		<Switch>
			<Route exact path='/'>
				<PokemonsPage />
			</Route>
			<Route
				exact
				path={[
					`${POKEMON_PATH}/:pokemonName`,
					`${POKEMON_PATH}/:pokemonName/`
				]}>
				<PokemonDetailsPage />
			</Route>
			<Route exact path={[POKEMON_PATH, POKEMON_PATH + '/']}>
				<Redirect to='/' />
			</Route>
			<Route path='*'>
				<PageNotFound />
			</Route>
		</Switch>
	)
}

export default Routes
