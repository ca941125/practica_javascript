//objetos
let coche = {
    modelo: "Renault",
    maxima: 300,
    antiguedad: 2015,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
        document.write(this.modelo);
        document.write(this.propiedad1);
    },
    propiedad1: "valor aleatorio",
};
document.write("<h2>" + coche.modelo + "</h2>")

//clases 

class Coche {
    constructor(modelo, velocidad, antiguedad) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad() {
        this.velocidad += 1;
    }

    reducirVelocidad() {
        this.velocidad -= 1;
    }
}

let coche1 = new Coche('BMW', 300, 2017);
let coche2 = new Coche('Audi', 400, 2000);

document.write("<h1>Velocidad: "+ coche1.velocidad+"</h1>")
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
document.write("<h1>Velocidad: "+ coche1.velocidad+"</h1>")
