// ==================================
// Declaración de variables
// ==================================

let nombre = "";
let apellido = "";
let tipoDocumento = "";
let numeroDocumento = "";
let telefono = "";
let correo = "";
let genero = "";
let cargo = "";
let fechaNacimiento = "";
let password = "";


// ==================================
// Función para validar datos
// ==================================

function ValidarDatos() {


    // Capturar información de los campos

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    tipoDocumento = document.getElementById("tipoDocumento").value;
    numeroDocumento = document.getElementById("numeroDocumento").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("correo").value;
    genero = document.getElementById("genero").value;
    cargo = document.getElementById("cargo").value;
    fechaNacimiento = document.getElementById("fechaNacimiento").value;
    password = document.getElementById("password").value;



    // Validar Nombre

    if(nombre.trim() == ""){

        Swal.fire(
            "Error",
            "Debe ingresar el nombre.",
            "error"
        );

        return;
    }


    if(/\d/.test(nombre)){

        Swal.fire(
            "Error",
            "El nombre no debe contener números.",
            "error"
        );

        return;
    }



    // Validar Apellido

    if(apellido.trim() == ""){

        Swal.fire(
            "Error",
            "Debe ingresar el apellido.",
            "error"
        );

        return;
    }


    if(/\d/.test(apellido)){

        Swal.fire(
            "Error",
            "El apellido no debe contener números.",
            "error"
        );

        return;
    }



    // Validar Tipo Documento

    if(tipoDocumento == ""){

        Swal.fire(
            "Error",
            "Seleccione un tipo de documento.",
            "error"
        );

        return;
    }



    // Validar Número Documento

    if(numeroDocumento == ""){

        Swal.fire(
            "Error",
            "Ingrese el número de documento.",
            "error"
        );

        return;
    }


    if(isNaN(numeroDocumento)){

        Swal.fire(
            "Error",
            "El documento no debe contener letras.",
            "error"
        );

        return;
    }



    // Validar Teléfono

    if(telefono == ""){

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


    if(telefono.length != 10){

        Swal.fire(
            "Error",
            "El teléfono debe contener 10 caracteres.",
            "error"
        );

        return;
    }



    // Validar Correo

    if(correo == ""){

        Swal.fire(
            "Error",
            "Ingrese el correo electrónico.",
            "error"
        );

        return;
    }


    if(!correo.includes("@")){

        Swal.fire(
            "Error",
            "El correo debe contener @.",
            "error"
        );

        return;
    }



    // Validar Género

    if(genero == ""){

        Swal.fire(
            "Error",
            "Seleccione el género.",
            "error"
        );

        return;
    }



    // Validar Cargo

    if(cargo.trim() == ""){

        Swal.fire(
            "Error",
            "Ingrese el cargo.",
            "error"
        );

        return;
    }



    // Validar Fecha

    if(fechaNacimiento == ""){

        Swal.fire(
            "Error",
            "Seleccione la fecha de nacimiento.",
            "error"
        );

        return;
    }



    // Validar Contraseña

    if(password == ""){

        Swal.fire(
            "Error",
            "Ingrese la contraseña.",
            "error"
        );

        return;
    }


    if(password.length < 8){

        Swal.fire(
            "Error",
            "La contraseña debe tener mínimo 8 caracteres.",
            "error"
        );

        return;
    }



    // ==================================
    // Mostrar datos en consola
    // ==================================

    console.log("========== DATOS DEL USUARIO ==========");

    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Tipo Documento: " + tipoDocumento);
    console.log("Número Documento: " + numeroDocumento);
    console.log("Teléfono: " + telefono);
    console.log("Correo: " + correo);
    console.log("Género: " + genero);
    console.log("Cargo: " + cargo);
    console.log("Fecha de Nacimiento: " + fechaNacimiento);
    console.log("Contraseña: " + password);



    // Mensaje final

    Swal.fire({

        icon: "success",
        title: "Registro exitoso",
        text: "Los datos del usuario fueron validados correctamente."

    });


}