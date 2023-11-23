// ejercicio 3
let numero = prompt("ingresa un numero")

if (numero % 2 === 0) {
    alert("El número es par");
}else {
    alert("El número es impar");
}

// ejercicio 4
let valorUno = prompt("ingresa un numero");
let valorDos = prompt("ingresa otro numero");

if (valorUno > valorDos){
    alert("El primer número es mayor");
}else if(valorUno < valorDos){
    alert("El primer número es menor");
}else {
    alert("Los numeros son iguales");
}

// ejercicio 5
function mostrarValor(valor) {
    console.log("El valor recibido es: " + valor);
  }
  
  mostrarValor(5);

// ejercicio 6
let edad = prompt("¿Cual es tu edad?")

if (edad>=18){
    alert("Poder conducir");
}

// ejercicio 9
let nombre = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");

alert("Bienvenido a nuestra página" + " " + nombre + " " + apellido);