/**
 * 3. La clasificación de caracteres no ASCII es fácil
 * En su aplicación, puede encontrar cadenas que no están en inglés 
 * y representadas por caracteres que no son ASCII. 
 * Use el método de cadena localeCompare() en su función de comparación 
 * para ordenarlos.
 */

 let items = ['communiqué', 'zèbre', 'adieu', 'éclair'];

 items.sort();
 console.log('Without localeCompare', items);
 
 items.sort((a,b) => a.localeCompare(b));
 console.log('With localeCompare', items);
 