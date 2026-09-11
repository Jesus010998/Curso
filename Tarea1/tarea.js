const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellidoP = document.getElementById("apellidoP");
const apellidoM = document.getElementById("apellidoM");
const carrera = document.getElementById("carrera");
const control = document.getElementById("control");
const lista = document.getElementById("lista");

let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];

mostrarAlumnos();

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const alumno = {
        nombre: nombre.value,
        apellidoP: apellidoP.value,
        apellidoM: apellidoM.value,
        carrera: carrera.value,
        control: control.value
    };

    alumnos.push(alumno);

    localStorage.setItem("alumnos", JSON.stringify(alumnos));

    mostrarAlumnos();

    formulario.reset();

});

function mostrarAlumnos() {

    lista.innerHTML = "";

    alumnos.forEach(function (alumno) {

        const elemento = document.createElement("div");

        elemento.classList.add("alumno");

        elemento.innerHTML = `
            <strong>${alumno.nombre} ${alumno.apellidoP} ${alumno.apellidoM}</strong>
            <p>Carrera: ${alumno.carrera}</p>
            <p>Número de control: ${alumno.control}</p>
        `;

        lista.appendChild(elemento);

    });

}