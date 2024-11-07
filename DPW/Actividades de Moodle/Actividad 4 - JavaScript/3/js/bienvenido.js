
window.onload = function() {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = "Bienvenido a mi pagina"; 
};


window.onbeforeunload = function(event) {

    const confirmationMessage = "¿Estás seguro de que deseas salir:C?";
    event.returnValue = confirmationMessage;
    return confirmationMessage;
};

window.onunload = function() {
    alert("Adiós");
};
