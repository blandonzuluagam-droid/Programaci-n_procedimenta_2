// ==================================
// Declaración de variables
// ==================================

let codigoProducto = "";
let nombreProducto = "";
let nombreUsuario = "";
let cantidad = "";
let direccion = "";
let telefono = "";
let metodoPago = "";
let valorCancelar = "";


// ==================================
// Función para validar datos
// ==================================

function ValidarDatos() {


    // Capturar valores de los campos

    codigoProducto = document.getElementById("codigoProducto").value;
    nombreProducto = document.getElementById("nombreProducto").value;
    nombreUsuario = document.getElementById("nombreUsuario").value;
    cantidad = document.getElementById("cantidad").value;
    direccion = document.getElementById("direccion").value;
    telefono = document.getElementById("telefono").value;
    metodoPago = document.getElementById("metodoPago").value;
    valorCancelar = document.getElementById("valorCancelar").value;



    // Validar Código Producto

    if(codigoProducto.trim() == ""){

        Swal.fire(
            "Error",
            "Ingrese el código del producto.",
            "error"
        );

        return;
    }


    if(isNaN(codigoProducto)){

        Swal.fire(
            "Error",
            "El código del producto no debe contener letras.",
            "error"
        );

        return;
    }





    // Validar Nombre Producto

    if(nombreProducto.trim() == ""){

        Swal.fire(
            "Error",
            "Ingrese el nombre del producto.",
            "error"
        );

        return;
    }


    if(/\d/.test(nombreProducto)){

        Swal.fire(
            "Error",
            "El nombre del producto no debe contener números.",
            "error"
        );

        return;
    }





    // Validar Nombre Usuario

    if(nombreUsuario.trim() == ""){

        Swal.fire(
            "Error",
            "Ingrese el nombre del usuario.",
            "error"
        );

        return;
    }


    if(/\d/.test(nombreUsuario)){

        Swal.fire(
            "Error",
            "El nombre del usuario no debe contener números.",
            "error"
        );

        return;
    }





    // Validar Cantidad

    if(cantidad == ""){

        Swal.fire(
            "Error",
            "Ingrese la cantidad.",
            "error"
        );

        return;
    }


    if(isNaN(cantidad)){

        Swal.fire(
            "Error",
            "La cantidad no debe contener letras.",
            "error"
        );

        return;
    }





    // Validar Dirección

    if(direccion.trim() == ""){

        Swal.fire(
            "Error",
            "Ingrese la dirección.",
            "error"
        );

        return;
    }





    // Validar Teléfono

    if(telefono.trim() == ""){

        Swal.fire(
            "Error",
            "Ingrese el teléfono.",
            "error"
        );

        return;
    }


    if(isNaN(telefono)){

        Swal.fire(
            "Error",
            "El teléfono no debe contener letras.",
            "error"
        );

        return;
    }





    // Validar Método de Pago

    if(metodoPago == ""){

        Swal.fire(
            "Error",
            "Seleccione un método de pago.",
            "error"
        );

        return;
    }





    // Validar Valor a Cancelar

    if(valorCancelar == ""){

        Swal.fire(
            "Error",
            "Ingrese el valor a cancelar.",
            "error"
        );

        return;
    }


    if(isNaN(valorCancelar)){

        Swal.fire(
            "Error",
            "El valor a cancelar no debe contener letras.",
            "error"
        );

        return;
    }





    // ==================================
    // Mostrar información en consola
    // ==================================

    console.log("========== DATOS DEL PEDIDO ==========");

    console.log("Código Producto: " + codigoProducto);
    console.log("Nombre Producto: " + nombreProducto);
    console.log("Nombre Usuario: " + nombreUsuario);
    console.log("Cantidad: " + cantidad);
    console.log("Dirección: " + direccion);
    console.log("Teléfono: " + telefono);
    console.log("Método de Pago: " + metodoPago);
    console.log("Valor a Cancelar: $" + valorCancelar);



    // Mensaje final

    Swal.fire({

        icon: "success",
        title: "Pedido realizado",
        text: "Los datos fueron validados correctamente."

    });


}