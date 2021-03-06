import { ThemeProvider } from 'styled-components'
import Routes from '../Routes'
import Header from './components/Header'
import Main from './components/Main'
import GlobalStyle from './GlobalStyle'
import appTheme from '../utils/appTheme'

function App() {
	return (
		<ThemeProvider theme={appTheme}>
			<GlobalStyle />
			<Header />
			<Main>
				<Routes />
			</Main>
		</ThemeProvider>
	)
}

export default App
