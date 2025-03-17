// Inicializamos un array vacío para almacenar los nombres de los amigos
let amigos = [];

// Función para validar el nombre ingresado
function validarNombre(nombre) {
    const regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/;
    if (nombre === "") {
        alert('Debe ingresar un nombre.');
        return false;
    }
    if (!regex.test(nombre)) {
        alert('Ingrese un nombre válido.');
        return false;
    }
    return true;
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (!validarNombre(nombre)) return;

    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido agregado.');
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = "";
    mostrarAmigos();
}

// Permitir agregar amigo con Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

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

// Función para sortear un amigo secreto al azar
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Se necesitan al menos 2 participantes para realizar el sorteo.');
        return;
    }

    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    mostrarResultado(amigoSecreto);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigoSecreto) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSecreto}</strong>.</li>`;
}

// Función para borrar la lista de amigos
function borrarLista() {
    amigos = [];
    mostrarAmigos();
    document.getElementById('resultado').innerHTML = '';
}
