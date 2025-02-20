let RandomIcon = ["fa-solid fa-diamond", "fa-solid fa-heart", "fa-solid fa-spa", "fa-brands fa-canadian-maple-leaf"];
let RandomNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function generarCarta() {
    let randomIndex = Math.floor(Math.random() * RandomIcon.length);
    let iconClass = RandomIcon[randomIndex];
    let number = RandomNumber[Math.floor(Math.random() * RandomNumber.length)];

    let iconoElement = document.getElementById("icono");
    let iconoAbajoElement = document.getElementById("icono-abajo");

    iconoElement.innerHTML = `<i class="${iconClass}"></i>`;
    iconoAbajoElement.innerHTML = `<i class="${iconClass}"></i>`;

    let numberElement = document.getElementById("Number");
    numberElement.innerHTML = number;


    let esRojo = iconClass.includes("diamond") || iconClass.includes("heart");
    let color = esRojo ? "red" : "black";

    iconoElement.style.color = color;
    iconoAbajoElement.style.color = color;
    numberElement.style.color = color;

    alert("Se que los iconos de Pica y Trebol no son los correspondientes pero los otros ya son de paga");
}

window.onload = generarCarta;