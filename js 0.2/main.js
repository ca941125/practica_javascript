// ForEach y Map con arrow functions...

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]


const nuevoArray = carrito.map(  producto =>  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `)

const nuevoArray2 = carrito.forEach( producto =>  console.log( `Articulo: ${ producto.nombre } Precio: $ producto.precio} `));

console.log(nuevoArray);
console.log(nuevoArray2);

//*los arrow Functions

// Los arrow functions son otra forma de declarar funciones, la sintaxis es más corta.

const aprendiendoA = function() {
    console.log('Aprendiendo JavaScript');
}

const aprendiendoB = () =>  {
    console.log('Aprendiendo JavaScript');
}

// una linea no requiere llaves
const aprendiendoC = () => console.log('Aprendiendo JavaScript');

// retornar un valor
const aprendiendoD = () => 'Aprendiendo JavaScript';


console.log(aprendiendoA());
console.log(aprendiendoB());
console.log(aprendiendoC());
console.log(aprendiendoD());