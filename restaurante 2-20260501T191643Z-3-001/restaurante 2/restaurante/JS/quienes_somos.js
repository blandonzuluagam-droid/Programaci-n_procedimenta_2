// ==================================
// Declaración de variables
// ==================================

let nombreRestaurante = "";
let descripcion = "";
let telefono = "";
let correo = "";
let direccion = "";


// ==================================
// Función para mostrar información
// ==================================

function MostrarInformacion() {


    nombreRestaurante = "Restaurante Sabores Exóticos";

    descripcion = "Experiencia gastronómica única con recetas tradicionales y exóticas de diferentes culturas.";

    telefono = "300 123 4567";

    correo = "restaurante2@gmail.com";

    direccion = "Calle 45 #12-34, Manizales, Caldas - Colombia";



    // Mostrar datos en consola

    console.log("========== QUIÉNES SOMOS ==========");

    console.log("Nombre del Restaurante: " + nombreRestaurante);

    console.log("Descripción: " + descripcion);

    console.log("Teléfono: " + telefono);

    console.log("Correo: " + correo);

    console.log("Dirección: " + direccion);



    // Mensaje de confirmación

    Swal.fire({

        icon: "success",
        title: "Bienvenido",
        text: "Información del restaurante cargada correctamente."

    });


}