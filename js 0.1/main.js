// Operaciones
let resultadoSuma;
let resultadoResta;
let resultadoMult;
let resultadoDivision;
let resultadoModulo;
const numero1 = 30;
const numero2 = 20;

// Suma
resultadoSuma = numero1 + numero2;
// Resta
resultadoResta = numero1 - numero2;
// Mult
resultadoMult = numero1 * numero2;
// Division
resultadoDivision = numero1 / numero2;
// Modulo
resultadoModulo = numero1 % numero2;

console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMult);
console.log(resultadoDivision);
console.log(resultadoModulo);


// Math tiene una serie de operaciones 

// Pi
let resultadoA = Math.PI; 
console.log(resultadoA);

// redondeo
let resultadoB= Math.round(2.5);
console.log(resultadoB);

// redondeo abajo o arriba (ceil o floor )
let resultadoC = Math.ceil(2.2);
console.log(resultadoC);

// Raiz cuadrada
let resultadoD = Math.sqrt(144);
console.log(resultadoD);

// Abssoluto
let resultadoE= Math.abs(-300);
console.log(resultadoE);

// Potencia
let resultadoF= Math.pow(8, 3);
console.log(resultadoF);

// Minimo
let resultadoG = Math.min(3,5,1,2,9,4,2, -3);
console.log(resultadoG);

// Max
let resultadoH = Math.max(4,1,21,4,15,5,11,5);
console.log(resultadoH);

// Aleatorio
let resultadoI = Math.random();
console.log(resultadoI);

// Aleatorio dentro de un rango:
let resultadoJ =  Math.floor( Math.random() * 30 );
console.log(resultadoJ);


// Incluir incremento por 1 y menos 1

let puntaje = 5;
puntaje++;
console.log(puntaje);

let puntaje1 = 5;
puntaje1--;
console.log(puntaje1);

let puntaje2 = 5;
++puntaje2;
console.log(puntaje2);

let puntaje3 = 5;
--puntaje3;
console.log(puntaje3);

let puntaje4 = 5;
puntaje4 += 3;
console.log(puntaje4);

let puntaje5= 5;
puntaje5 -= 3;
console.log(puntaje5);


// operadores

const numeroUno = 20;
const numeroDos = "20";
const numeroTres = 30;

// Operador Mayor a 
console.log( numeroUno > numeroTres );
console.log( numeroTres > numeroUno );


// Operador Menor que
console.log(numeroTres < numero1);

// Revisar si 2 valores son iguales o diferentes
console.log(numeroUno == numeroTres);
console.log(numeroUno == numeroDos);

// Typeof
console.log( typeof numeroUno );
console.log( typeof numeroDos );

// Operador estricto (revisa valor y tipo de dato)
console.log(numeroUno === numeroDos );

// Diferente a 

console.log(numeroUno != numeroTres);
console.log(numeroUno != numeroDos);
console.log(numeroUno !== numeroDos);

// Null y Undefined

// veamos un ejemplo de undefined.
let numero;

console.log(numero); // La variable esta definida pero su valor no, por lo tanto es undefined...
console.log(typeof numero)

// En el caso de null es más bien asignarlo

let numeroCuatro = null;
console.log(numeroCuatro);
console.log(typeof numeroCuatro); // ahora esto nos dirá que es un objeto, la especificación de ecma que es quien define el standard del lenguaje dice que null debe ser un objeto

// Comparando null y undefined - Comparar un valor null y un undefined puede ser de las cosas más complicadas
console.log (numero == numeroCuatro);

// Puedes ver que el resultado es true, a pesar de que numero  no tiene un valor, eso usualmente nos lleva a ejecución de código no deseada o con comportamientos extraños ya que comparamos un valor que no existe, y nos retorna true

// para ello llega a ser muy  util el comparador estricto
console.log(numero === numeroCuatro);

// De esta forma no comparamos un falso positivo y evitamos errores.