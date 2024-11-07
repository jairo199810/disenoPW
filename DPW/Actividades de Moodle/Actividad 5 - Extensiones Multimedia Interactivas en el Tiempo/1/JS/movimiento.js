document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById('botonEscurridizo');

    boton.addEventListener('mouseover', () => {
        const nuevaPosicionTop = Math.random() * (window.innerHeight - boton.offsetHeight);
        const nuevaPosicionLeft = Math.random() * (window.innerWidth - boton.offsetWidth);

        boton.style.top = `${nuevaPosicionTop}px`;
        boton.style.left = `${nuevaPosicionLeft}px`;

    });

    function actualizarFechaHora() {
        const ahora = new Date();
        document.getElementById('fechaHora').innerText = ahora.toLocaleString();
    }
    setInterval(actualizarFechaHora, 1000);
});
