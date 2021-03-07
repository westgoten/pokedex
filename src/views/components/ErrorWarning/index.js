import { Container, Title, Message, Button } from './styles'
import { ERROR_OCCURRED } from '../../../utils/consts/errorMessages'

function ErrorWarning({ error, buttonMessage, buttonOnClick }) {
	return (
		<Container>
			<Title>{ERROR_OCCURRED}</Title>
			<Message>{error}</Message>
			<Button onClick={buttonOnClick}>{buttonMessage}</Button>
		</Container>
	)
}

export default ErrorWarning
