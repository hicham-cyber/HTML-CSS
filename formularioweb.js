const form = document.getElementById("registroForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const edad = document.getElementById("edad");
    const fecha = document.getElementById("fecha");
    const tipo = document.getElementById("tipo");
    const condiciones = document.getElementById("condiciones");

    /*Errores*/
    const errorNombre = document.getElementById("errorNombre");
    const errorEmail = document.getElementById("errorEmail");
    const errorEdad = document.getElementById("errorEdad");
    const errorFecha = document.getElementById("errorFecha");
    const errorTipo = document.getElementById("errorTipo");
    const errorCondiciones = document.getElementById("errorCondiciones");
    const mensajeFinal = document.getElementById("mensajeFinal");

    /*Limpiar mensajes*/
    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorEdad.textContent = "";
    errorFecha.textContent = "";
    errorTipo.textContent = "";
    errorCondiciones.textContent = "";
    mensajeFinal.textContent = "";

    let formularioValido = true;

    /*Validación del nombre*/
    if (nombre.value.trim().length < 3) {
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
        formularioValido = false;
    }

    /*Validación del email*/
    if (!email.checkValidity()) {
        errorEmail.textContent = "Introduce un correo electrónico que sea válido.";
        formularioValido = false;
    }

    /*Validación de edad*/
    if (edad.value < 16 || edad.value > 99) {
        errorEdad.textContent = "La edad debe estar entre 16 y 99 años.";
        formularioValido = false;
    }

    // Validación de la fecha
    if (fecha.value === "") {
        errorFecha.textContent = "Debes seleccionar una fecha.";
        formularioValido = false;
    }

    /*Validación del tipo*/
    if (tipo.value === "") {
        errorTipo.textContent = "Selecciona un tipo de asistencia.";
        formularioValido = false;
    }

    /*Validación de las condiciones*/
    if (!condiciones.checked) {
        errorCondiciones.textContent = "Debes aceptar las normas del taller.";
        formularioValido = false;
    }

    if (formularioValido) {
        mensajeFinal.textContent = "Formulario enviado correctamente.";
        form.reset();
    }
});
