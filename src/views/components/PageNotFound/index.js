import { useHistory } from 'react-router-dom'
import {
	PAGE_NOT_FOUND,
	BACK_TO_HOME
} from '../../../utils/consts/errorMessages'
import ErrorWarning from '../ErrorWarning'

function PageNotFound() {
	const history = useHistory()

	return (
		<ErrorWarning
			error={PAGE_NOT_FOUND}
			buttonMessage={BACK_TO_HOME}
			buttonOnClick={() => history.push('/')}
		/>
	)
}

export default PageNotFound
