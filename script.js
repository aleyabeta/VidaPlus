
document.addEventListener("DOMContentLoaded", () => {
    console.log("VidaPlus cargado correctamente");

    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", event => {
            const destino = document.querySelector(
                enlace.getAttribute("href")
            );

            if (destino) {
                event.preventDefault();
                destino.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
