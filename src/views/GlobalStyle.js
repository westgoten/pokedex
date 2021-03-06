import { createGlobalStyle } from 'styled-components'
import {
	BIG_WIDTH,
	MEDIUM_WIDTH,
	SMALL_WIDTH
} from '../utils/consts/screenSizes'
import {
	DEFAULT_FONT_SIZE,
	BIG_FONT_SIZE,
	MEDIUM_FONT_SIZE,
	SMALL_FONT_SIZE
} from '../utils/consts/remFontSizes'

const GlobalStyle = createGlobalStyle`
    html {
        font-size: ${DEFAULT_FONT_SIZE};

        @media (max-width: ${BIG_WIDTH}) {
            font-size: ${BIG_FONT_SIZE};
        }

        @media (max-width: ${MEDIUM_WIDTH}) {
            font-size: ${MEDIUM_FONT_SIZE};
        }

        @media (max-width: ${SMALL_WIDTH}) {
            font-size: ${SMALL_FONT_SIZE};
        }
    }

    body { 
        position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`

export default GlobalStyle
