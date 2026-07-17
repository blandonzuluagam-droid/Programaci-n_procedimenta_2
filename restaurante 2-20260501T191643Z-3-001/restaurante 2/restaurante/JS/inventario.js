// ================================
// Declaración de variables
// ================================

let codigo = "";
let nombre = "";
let cantidad = "";
let descripcion = "";
let marca = "";
let valor = "";
let categoria = "";
let ubicacion = "";

// ================================
// Función para validar los datos
// ================================

function ValidarDatos() {

    // Capturar los datos de los inputs
    codigo = document.getElementById("codigo").value;
    nombre = document.getElementById("nombre").value;
    cantidad = document.getElementById("cantidad").value;
    descripcion = document.getElementById("descripcion").value;
    marca = document.getElementById("marca").value;
    valor = document.getElementById("valor").value;
    categoria = document.getElementById("categoria").value;
    ubicacion = document.getElementById("ubicacion").value;

    // Validar Código
    if (codigo == "") {
        Swal.fire("Error", "Debe ingresar el código del producto.", "error");
        return;
    }

    if (isNaN(codigo)) {
        Swal.fire("Error", "El código no debe contener letras.", "error");
        return;
    }

    // Validar Nombre
    if (nombre.trim() == "") {
        Swal.fire("Error", "Debe ingresar el nombre del producto.", "error");
        return;
    }

    if (/\d/.test(nombre)) {
        Swal.fire("Error", "El nombre no debe contener números.", "error");
        return;
    }

    // Validar Cantidad
    if (cantidad == "") {
        Swal.fire("Error", "Debe ingresar la cantidad del producto.", "error");
        return;
    }

    if (isNaN(cantidad)) {
        Swal.fire("Error", "La cantidad solo debe contener números.", "error");
        return;
    }

    // Validar Descripción
    if (descripcion.trim() == "") {
        Swal.fire("Error", "Debe ingresar la descripción del producto.", "error");
        return;
    }

    // Validar Marca
    if (marca.trim() == "") {
        Swal.fire("Error", "Debe ingresar la marca del producto.", "error");
        return;
    }

    if (/\d/.test(marca)) {
        Swal.fire("Error", "La marca no debe contener números.", "error");
        return;
    }

    // Validar Valor
    if (valor == "") {
        Swal.fire("Error", "Debe ingresar el valor unitario.", "error");
        return;
    }

    if (isNaN(valor)) {
        Swal.fire("Error", "El valor unitario solo debe contener números.", "error");
        return;
    }

    // Validar Categoría
    if (categoria == "") {
        Swal.fire("Error", "Debe seleccionar una categoría.", "error");
        return;
    }

    if (/\d/.test(categoria)) {
        Swal.fire("Error", "La categoría no debe contener números.", "error");
        return;
    }

    // Validar Ubicación
    if (ubicacion.trim() == "") {
        Swal.fire("Error", "Debe ingresar la ubicación del producto.", "error");
        return;
    }

    // Mostrar datos en consola
    console.log("========== INVENTARIO ==========");
    console.log("Código del Producto: " + codigo);
    console.log("Nombre del Producto: " + nombre);
    console.log("Cantidad del Producto: " + cantidad);
    console.log("Descripción del Producto: " + descripcion);
    console.log("Marca del Producto: " + marca);
    console.log("Valor Unitario: $" + valor);
    console.log("Categoría del Producto: " + categoria);
    console.log("Ubicación del Producto: " + ubicacion);

    // Mensaje de éxito
    Swal.fire({
        icon: "success",
        title: "Registro Exitoso",
        text: "El producto fue registrado correctamente."
    });

}