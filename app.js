// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Inicializamos un array vacío para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido agregado.');
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = "";
    mostrarAmigos();
}

// Función para mostrar la lista de amigos en la interfaz
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear al azar los amigos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Se necesitan al menos 2 participantes para realizar el sorteo.');
        return;
    }

    const amigosDisponibles = [...amigos];
    const resultados = {};

    amigos.forEach(amigo => {
        let elegido;

        do {
            elegido = amigosDisponibles[Math.floor(Math.random() * amigosDisponibles.length)];
        } while (elegido === amigo);

        resultados[amigo] = elegido;
        amigosDisponibles.splice(amigosDisponibles.indexOf(elegido), 1);
    });

    mostrarResultado(resultados);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(resultados) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    for (const [amigo, amigoSecreto] of Object.entries(resultados)) {
        const li = document.createElement('li');
        li.textContent = `${amigo} tiene que regalarle a ${amigoSecreto}.`;
        resultadoDiv.appendChild(li);
    }
}


