// Complete la solución para que divida el string en pares de dos caracteres.
// Si el string contiene un número impar de caracteres, entonces debe reemplazar el segundo carácter que falta del par final con un guion bajo. La función que cree deberá retornar el resultado en una array. El UNICO método que pueden usar es .push().
// Ejemplo:
// function solucion("abc"){
//     return ['ab', 'c_'];
// al lado de la c va un guion bajo, no entiendo porque no lo muestra 🙂
// }
// o
// function solucion("abcdef){
//     return ['ab', 'cd', 'ef'];
// }
// Una pista?
// el operador modulo(%), también le dicen resto, los puede ayudar.

function solucion(cadena) {
  let resultado = [];
  if (cadena.length % 2 != 0) {
    cadena += "_";
  }
  for (let index = 0; index < cadena.length; index += 2) {
    resultado.push(cadena[index] + cadena[index + 1]);
  }
  return resultado;
}

console.log(solucion("Carolina"));
console.log(solucion("Valentina"));


