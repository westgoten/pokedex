import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
`

const Loader = styled.div`
	width: 100px;
	height: 100px;
	margin: auto;
	border-top: 4px solid ${(props) => props.theme.primaryColor};
	border-radius: 100%;
	animation: ${spin} 0.5s linear infinite;
`

export default Loader
