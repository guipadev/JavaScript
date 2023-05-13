/*
Dado un array de enteros no ordenado llamados nums,
devuelve el entero  positiva más pequeño que falte
*/

function smallestMissingPositive(nums) {
	if (nums.length === 0) return 1

	// Solo números positivos
	const onlyPositives = nums.filter(
		num => num > 0
	)

	// Quitar números repetidos
    const set = new Set(onlyPositives);

    // Buscamos el primer positivo que no está
    for (let i = 1; i <= set.size + 1; i++) {
    	if (!set.has(i)) return i
    }

}