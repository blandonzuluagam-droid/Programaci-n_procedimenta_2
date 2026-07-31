
let producto = "";




function SeleccionarProducto(nombreProducto) {


    producto = nombreProducto;





    if(producto == "") {


        Swal.fire({

            icon: "error",
            title: "Error",
            text: "Debe seleccionar un producto."

        });


        return;

    }





    console.log("========== PEDIDO DEL MENÚ ==========");

    console.log("Producto seleccionado: " + producto);





    Swal.fire({

        icon: "success",
        title: "Producto agregado",

        text: "Ha seleccionado: " + producto

    });


}