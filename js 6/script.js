const frutitas = ["🍎", "🍊"];
const numeritos = [1, 2, 3, 4];

console.log(frutitas.includes("🍎"));
//numeritos = ["🍎", "🍊"];

//push= añadir uno o más elementos AL FINAL del array. RETORNA el nuevo largo del array
console.log(numeritos.push("🍎", "🍊"));
console.log(numeritos);

//pop= elimina el ULTIMO elemento del array y LO RETORNA.
let elementoEliminado = numeritos.pop();
console.log(elementoEliminado);
console.log(numeritos);

//slice= crea una copia de un segmento del array. el primer argumento es la posicion inicial(y lo incluye). 
//El segundo es el "hasta donde", y no incluye al elemento de esa posicion. NO MODIFICA EL ARRAY ORIGINAL
let copiaDeNumeritos = numeritos.slice(0, 4);
console.log(copiaDeNumeritos);
console.log(numeritos.slice(4));
console.log(numeritos);

//sPlice = RECORTA un segmento de un array y lo retorna como un nuevo array.

let numeritosRecortados = numeritos.splice(0, 4);
console.log(numeritosRecortados);
console.log(numeritos);

console.log(numeritos === frutitas);