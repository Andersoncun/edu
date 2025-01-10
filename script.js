document.addEventListener("DOMContentLoaded", function() {
    alert("¡Bienvenido a la página informativa sobre la Isla del Coco.!");

    const toggleButton = document.getElementById("toggle-info");
    const datosCuriosos = document.getElementById("datos-curiosos");

    toggleButton.addEventListener("click", function() {
        if (datosCuriosos.style.display === "none") {
            datosCuriosos.style.display = "block";
        } else {
            datosCuriosos.style.display = "none";
        }
    });

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;
        if (email) {
            alert("Gracias por tu mensaje, " + email);
            contactForm.reset();
        } else {
            alert("Por favor, ingresa un correo electrónico válido.");
        }
    });

    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const comment = document.getElementById("comment").value;
        if (comment) {
            const newComment = document.createElement("p");
            newComment.textContent = comment;
            commentList.appendChild(newComment);
            commentForm.reset();
        } else {
            alert("Por favor, escribe un comentario.");
        }
    });
});