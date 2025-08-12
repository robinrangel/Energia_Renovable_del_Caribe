document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#register form");
    const mensaje = document.getElementById("mensaje-exito");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        mensaje.style.display = "block"; // Muestra el mensaje
        form.reset();
    });
});