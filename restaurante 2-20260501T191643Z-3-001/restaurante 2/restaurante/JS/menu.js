// ==================================
// Declaración de variables
// ==================================

let producto = "";



// ==================================
// Función para seleccionar producto
// ==================================

function SeleccionarProducto(nombreProducto) {


    producto = nombreProducto;



    // Validar que exista un producto seleccionado

    if(producto == "") {


        Swal.fire({

            icon: "error",
            title: "Error",
            text: "Debe seleccionar un producto."

        });


        return;

    }




    // Mostrar información en consola

    console.log("========== PEDIDO DEL MENÚ ==========");

    console.log("Producto seleccionado: " + producto);




    // Mensaje de confirmación

    Swal.fire({

        icon: "success",
        title: "Producto agregado",

        text: "Ha seleccionado: " + producto

    });


}