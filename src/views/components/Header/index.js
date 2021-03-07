import { Link } from 'react-router-dom'
import { Container, Logo } from './styles'

function Header() {
	return (
		<Container>
			<Link to='/'>
				<Logo src='/logo.png' alt='Pokedex logo' />
			</Link>
		</Container>
	)
}

export default Header
