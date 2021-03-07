import { Container, Title, Message, ErrorButton } from './styles'
import { ERROR_OCCURRED } from '../../../utils/consts/errorMessages'

function ErrorWarning({ error, buttonMessage, buttonOnClick }) {
	return (
		<Container>
			<Title>{ERROR_OCCURRED}</Title>
			<Message>{error}</Message>
			<ErrorButton onClick={buttonOnClick}>{buttonMessage}</ErrorButton>
		</Container>
	)
}

export default ErrorWarning
