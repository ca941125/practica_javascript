
const elemento1 = document.querySelector("#elemento-1");
const elemento2 = document.querySelector("#elemento-2");
const elemento3 = document.querySelector("#elemento-3");
const elemento4 = document.querySelector("#elemento-4");

elemento1.onclick = function () {
    elemento1.innerHTML = "Gracias!";
};

elemento2.ondblclick = function () {
    elemento2.innerHTML = "Perfecto!";
}

elemento3.addEventListener("click", function () {
    alert("se ha desencadenado el evento onclick");
})

elemento4.addEventListener("mouseover", function () {
    alert("se ha desencadenado el evento mouseover");
})
