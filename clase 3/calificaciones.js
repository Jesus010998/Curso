const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellidoP = document.getElementById("apellidoP");
const apellidoM = document.getElementById("apellidoM");
const Materia1 = document.getElementById("Materia1");
const Materia2 = document.getElementById("Materia2");
const Materia3 = document.getElementById("Materia3");
const lista = document.getElementById("lista");

let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];

mostrarAlumnos();

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const cal1 = Number(Materia1.value);
    const cal2 = Number(Materia2.value);
    const cal3 = Number(Materia3.value);

    if (cal1 > 10 , cal2 > 10 , cal3 > 10) {
        
        return;
    }

    const promedio = (cal1 + cal2 + cal3) / 3;

    let resultado = "";

    if (promedio < 7) {
        resultado = "Reprobado";
    } else {
        resultado = "Aprobado";
    }

    const alumno = {
        nombre: nombre.value,
        apellidoP: apellidoP.value,
        apellidoM: apellidoM.value,
        Materia1: cal1,
        Materia2: cal2,
        Materia3: cal3,
        promedio: promedio,
        resultado: resultado
    };

    alumnos.push(alumno);

    localStorage.setItem("alumnos", JSON.stringify(alumnos));

    mostrarAlumnos();

    formulario.reset();
});

function mostrarAlumnos() {

    lista.innerHTML = "";

    alumnos.forEach(function(alumno, indice) {

        const elemento = document.createElement("div");

        elemento.innerHTML = `
            <strong>${alumno.nombre} ${alumno.apellidoP} ${alumno.apellidoM}</strong>
            <p>Materia 1: ${alumno.Materia1}</p>
            <p>Materia 2: ${alumno.Materia2}</p>
            <p>Materia 3: ${alumno.Materia3}</p>
            <p>Promedio: ${alumno.promedio}</p>
            <p>Resultado: ${alumno.resultado}</p>

            <button onclick="eliminarAlumno(${indice})">
                Eliminar
            </button>
        `;

        lista.appendChild(elemento);
    });
}

function eliminarAlumno(indice) {

    alumnos.splice(indice, 1);

    localStorage.setItem("alumnos", JSON.stringify(alumnos));

    mostrarAlumnos();
}