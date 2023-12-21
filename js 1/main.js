
let nombre = "Carolina Aguirre";
let altura = 171;

let concatenacion = nombre + " " + altura;

let datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos con una variable</h1>
    <h2>Mi nombre es ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
`;

if(altura >= 190){
    datos.innerHTML += "<h2> Eres una persona ALTA</h2>";
}else{
    datos.innerHTML += "<h2> Eres una persona BAJA</h2>";
}

for(let i = 0; i<=4; i++){
    datos.innerHTML += "<br>Estamos en el numero:" +i;
}

for(let i = 2020; i<= 2023; i++){
    datos.innerHTML += "<br>Estamos en el año:" +i;
}

function muestraMiNombres(nombre, altura){
    let datosDos = document.getElementById("datosDos");
    datosDos.innerHTML = `
        <h1>Soy la caja de datos con una función básica</h1>
        <h2>Mi nombre es ${nombre}</h2>
        <h3>Mido: ${altura} cm</h3>
    `;
}

muestraMiNombres("Carolina", 171);



function muestraMiNombre(nombre, altura){
    let misDatos = `
    <h1>Soy la caja de datos con una función</h1>
    <h2>Mi nombre es ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
    `;

    return misDatos;
} 

function imprimir(){
    let datos = document.getElementById("datosTres");
    datos.innerHTML = muestraMiNombre("Carolina", 171);
}

imprimir();
