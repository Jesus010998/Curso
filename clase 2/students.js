// Obtener elementos del HTML
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const carrera = document.getElementById("carrera");
const lista = document.getElementById("lista");


// Obtener los alumnos guardados
let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];


// Mostrar los alumnos al cargar la página
mostrarAlumnos();


// Evento del formulario
formulario.addEventListener("submit", function (evento) {

    // Evitar que la página se recargue
    evento.preventDefault();

    // Crear un objeto alumno
    const alumno = {
        nombre: nombre.value,
        carrera: carrera.value
    };

    // Agregar el alumno al arreglo
    alumnos.push(alumno);

    // Guardar en localStorage
    localStorage.setItem(
        "alumnos",
        JSON.stringify(alumnos)
    );

    // Mostrar nuevamente la lista
    mostrarAlumnos();

    // Limpiar formulario
    formulario.reset();

});


// Función para mostrar alumnos
function mostrarAlumnos() {

    lista.innerHTML = "";

    alumnos.forEach(function (alumno) {

        const elemento = document.createElement("div");

        elemento.classList.add("alumno");

        elemento.innerHTML = `
            <strong>${alumno.nombre}</strong>
            <p>${alumno.carrera}</p>
        `;

        lista.appendChild(elemento);

    });

}