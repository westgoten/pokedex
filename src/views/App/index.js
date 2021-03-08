import { ThemeProvider } from 'styled-components'
import Routes from '../../Routes'
import Header from '../components/Header'
import Main from '../components/Main'
import GlobalStyle from '../GlobalStyle'
import appTheme from '../../utils/appTheme'
import { Container } from './styles'

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<GlobalStyle />
			<Container>
				<Header />
				<Main>
					<Routes />
				</Main>
			</Container>
		</ThemeProvider>
	)
}

export default App
