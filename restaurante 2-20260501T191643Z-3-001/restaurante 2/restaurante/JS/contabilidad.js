
let ingresos = "";
let egresos = "";
let concepto = "";
let fecha = "";

function ValidarDatos() {

    ingresos = document.getElementById("ingresos").value;
    egresos = document.getElementById("egresos").value;
    concepto = document.getElementById("concepto").value;
    fecha = document.getElementById("fecha").value;

    if (ingresos === "") {
        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Debe ingresar los ingresos."
        });
        return;
    }

    if (isNaN(ingresos)) {
        Swal.fire({
            icon: "error",
            title: "Dato inválido",
            text: "Los ingresos solo deben contener números."
        });
        return;
    }

    if (egresos === "") {
        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Debe ingresar los egresos."
        });
        return;
    }

    if (isNaN(egresos)) {
        Swal.fire({
            icon: "error",
            title: "Dato inválido",
            text: "Los egresos solo deben contener números."
        });
        return;
    }

    if (concepto.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Debe ingresar el concepto."
        });
        return;
    }

    if (fecha === "") {
        Swal.fire({
            icon: "error",
            title: "Campo vacío",
            text: "Debe seleccionar una fecha."
        });
        return;
    }

    console.log("===== DATOS DE CONTABILIDAD =====");
    console.log("Ingresos: " + ingresos);
    console.log("Egresos: " + egresos);
    console.log("Concepto: " + concepto);
    console.log("Fecha: " + fecha);

    Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Todos los datos fueron validados correctamente."
    });

}

document.getElementById ("Guardar").onclick =ValidarDatos;