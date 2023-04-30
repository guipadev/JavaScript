/**
 * Si englobamos todo en un try/catch el fetch no se ira por el catch
 * si el error lo envia el servidor (si se envia un estado 400 ó 401)
 * por lo cual tenemos que realizar dicha condicion, como veremos a continuacion
 * /

try {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

	if (!response.ok) {
		throw new Error('Error al realizar el fetch')
	}

	if (response.status === 200) {
		const data = await response.json()
		console.log(data)
	}

	if (response.status === 401) {
		console.log('API key bad')
	}

	if (response.status === 404) {
		console.log('data not found')
	}
} catch (error) {	// solo llegara al cactch si hubo un error a la hora de hacer la petición demora demasiado
	console.log(error)
}