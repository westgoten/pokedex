function toPojo(model) {
	const jsonString = JSON.stringify(model)
	return JSON.parse(jsonString)
}

export default toPojo
