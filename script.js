// Generar un número aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Función que se ejecuta cuando el usuario hace clic en "Enviar"
function adivinar() {
    // Obtenemos el valor ingresado por el usuario
    let adivinanza = parseInt(document.getElementById('adivinanza').value);
    let pista = document.getElementById('pista');

    // Verificamos que el valor esté entre 1 y 100
    if (adivinanza < 1 || adivinanza > 100 || isNaN(adivinanza)) {
        pista.innerHTML = 'Por favor, introduce un número válido entre 1 y 100.';
        return;
    }

    // Comparar el número ingresado con el número secreto
    if (adivinanza === numeroSecreto) {
        pista.innerHTML = '¡Felicidades! Adivinaste el número correcto.';
        pista.style.color = 'green';
    } else if (adivinanza < numeroSecreto) {
        pista.innerHTML = 'El número es muy bajo.';
        pista.style.color = 'orange';
    } else {
        pista.innerHTML = 'El número es muy alto.';
        pista.style.color = 'orange';
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Generamos un nuevo número secreto
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    // Limpiamos el campo de entrada y las pistas
    document.getElementById('adivinanza').value = '';
    document.getElementById('pista').innerHTML = '';
}

