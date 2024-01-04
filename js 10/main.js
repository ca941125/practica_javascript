function respuesta(){
    let formulario = document.forms["formulario"];
    formulario.addEventListener("submit", (evento) => {
        evento.preventDesault();
        let apellido = formulario["apellido"].value.trim();
        let nombres = formulario["nombres"].value.trim();
        let resultado = document.getElementById("resultado");
        if (apellido === "" || nombres === ""){
            resultado.innerText = "";
            alert("Asegurate de completar todos los " + "campos antes de enviar el formulario");
            return;
        }
        resultado.innerText = apellido + ", " + nombres;
    })
}