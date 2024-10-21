document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Envía los datos del formulario al script de PHP utilizando una solicitud AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "enviar_correo.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert("El mensaje ha sido enviado correctamente");
        }
    };
    xhr.send("subject=" + encodeURIComponent(subject) + "&message=" + encodeURIComponent(message));
});



document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.getElementById("carouselExampleCaptions");
    var carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 3000  // Intervalo de tiempo en milisegundos (4 segundos)
    });

    carouselInstance.pause(); // Detiene la reproducción automática
    carouselInstance.cycle(); // Inicia la reproducción automática
});
