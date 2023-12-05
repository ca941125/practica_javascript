//** métodos existentes en los strings:

const product = 'Monitor 20 Pulgadas ';
const valor = '30 USD';

    console.log(product.length); 

    // IndexOf
    console.log(product.indexOf("Pulgadas")) // Nos dirá que posición tiene el texto en caso de encontrarlo
    console.log(product.indexOf('Tablet')); // -1 Significa que no lo pudo encontrar

    // Includes
    console.log(product.includes('Monitor')); // Conocer si un texto existe
    console.log(product.includes('monitor')); // Conocer si un texto existe

//** concatenar o unir 2 textos o variables:

const producto = 'Monitor 50 Pulgadas ';
const precio = '$ 300.000';

    console.log(producto.concat('En Descuento')); // Concactenar un string
    console.log(producto.concat(precio)); // Concactenar una variable

    // Otras formas de concatenar:
    console.log(producto + precio); 
    console.log(producto +  "Con un precio de " +precio); 
    console.log("El Producto " + producto +  "tiene un precio de " + precio); // Esta forma se puede complicar
    console.log("El Producto" ,producto, "tiene un precio de ", precio); // Otra forma

    // ES6 trajo consigo una mejor forma de concatenar variables que es con algo llamado Template String o template literal

    console.log(`El Producto ${producto} tiene un precio de ${precio}`);


//* métodos para strings

const producto1 = '        Monitor 60 Pulgadas      '; 

    console.log(producto1);
    console.log(producto1.length);

    // Eliminar el inicio
    console.log(producto1.trimStart()); // Elimina todos los espacios en blancos del inicio
    console.log(producto1.trimEnd()); // Elimina todos los espacios en blancos del final

    // Los métodos se pueden encadenar
    console.log(producto1.trimStart().trimEnd() );

    // Un método es trim que hace lo mismo
    console.log(producto1.trim().length);

    
const producto2 = 'Monitor 70 Pulgadas';

    // Replace 
    console.log(producto2.replace("20", "24"));
    console.log(producto2.replace('Pulgadas', '"'));

    // Slice te va a permitir extraer una parte de una cadena
    console.log( producto2.slice(0, 10)); // Iniciar en 0 y cortar hasta 10
    console.log(producto2.slice(8));// Cortar desde el 8 hasta el fin
    console.log(producto2.slice(2, 10)); // cortar desde 2 hasta el 10

    console.log(producto2.slice(2,1)); // Si el primer número es mayor, no va a cortar hacia atras

    // substring
    console.log( producto2.substring(0, 10) );

    console.log( producto2.substring(2, 1) );  // Si el número es mayor al segundo, va a cortar hacia atras (voltear los números)

const producto3 = 'Monitor 80 pulgadas ';
const texto = 'en Promoción '.repeat(3)

    // Repeat Te va a permitir repetir una cadena de texto:
    console.log(producto3.repeat(3));
    console.log(producto3.repeat(2.2)); // va a redondear a entero
    console.log(`${producto3} ${texto} !!!`);
 


const actividad = 'Estoy aprendiendo Javascript Moderno';
    // Split
    console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
    
    console.log(hobbies.split(", "));


    // .toUpperCase() te va a permitir cambiar un texto a todo mayusculas
    const producto4 = 'Monitor 90 pulgadas ';
    console.log(producto4.toUpperCase() );

    // .toLowerCase()
    console.log(producto4.toLowerCase() );

    // .toString()
    const cantidad = 200;
    console.log(cantidad);
    console.log(cantidad.toString());