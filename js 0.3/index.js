// "camelCasing"  =>  "camel Casing"
//Complete la solución para que la función separe, dentro de un string, 
//las palabras que terminen con minúsculas y empiecen con mayúsculas con un espacio.

// mayusculas 65-90

function espaciadorDePalabras(cadena) { //define la funcion 
  let resultado = ''; // se inicializa variable resultado 
  for (let i = 0; i < cadena.length; i++) { // este for itera cada carácter en la cadena de entrada

    //creo la variable letra que almacena un caracter 
    let letra = cadena[i];
    // console.log(letra); 
    if(i == 0){
      resultado += letra;
    }else if (i != 0 && letra.charCodeAt() >= 65 && letra.charCodeAt() <= 90){
    //si esto se cumple va a agregar un espacio antes
      resultado += ' ' + letra;
    }else {
      resultado += letra;
    }
  }
  return resultado;
}

console.log(espaciadorDePalabras("CarolinaAguirre"));
console.log(espaciadorDePalabras("PolyGastonFacuDemianMoka"));
console.log(espaciadorDePalabras("Carolina"));
