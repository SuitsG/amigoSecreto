/* Practicando POO */

class Participante {
    constructor(nombre) {
        this.nombre = nombre;
        this.amigoSecreto = null;
    }
}

class JuegoAmigoSecreto {
    constructor() {
        this.participantes = [];
    }


    agregarParticipante(nombre) {
        const nuevo = new Participante(nombre);
        this.participantes.push(nuevo);
    }

    obtenerAmigoSecreto(arr) {
        if (arr.length === 0) return null;

        const indice = Math.floor(Math.random() * arr.length);
        const elemento = arr[indice];
        arr.splice(indice, 1); // Elimina el elemento ya usado

        return elemento;
    }

    mostrarResultados() {
        this.participantes.forEach(p => {
            console.log(` ${p.amigoSecreto.nombre}`);
        });
    }


};



const juego = new JuegoAmigoSecreto();

// Agregar participantes
/* juego.agregarParticipante("Ana"); */

/* // Realizar sorteo
juego.sortear();

// Ver resultados
juego.mostrarResultados(); */




//Agregar Participantes desde el formulario
document.getElementById("amigoSecreto").addEventListener("submit", function (e) {
    e.preventDefault();
    const datos = new FormData(this);
    const nombre = datos.get("nombre");
    juego.agregarParticipante(nombre);
    this.reset(); // Limpiar el formulario

    console.log(juego.participantes);
    renderParticipantes();
})


const listaParticipantes = document.getElementById("listaParticipantes");
function renderParticipantes() {
    listaParticipantes.innerHTML = juego.participantes.map(p => `<li>${p.nombre} <button class="quitar" data-nombre="${p.nombre}">Quitar</button></li>`).join('');
}

// Eliminar participantes
listaParticipantes.addEventListener("click", function (e) {
    if (e.target.classList.contains("quitar")) {
        const nombre = e.target.dataset.nombre;
        juego.participantes = juego.participantes.filter(p => p.nombre !== nombre);
        renderParticipantes();
    }
});


// Iniciar sorteo

// Cola de “restantes” que irá consumiéndose
let restantes = [];
let turno = 0;
let puedeReintentar = false;
let contador = 0;

// guarda la última asignación para reintentos
let lastAmigo = null;

// Crea o retorna el modal de resultado (ahora ya existe en el HTML)
function getModal() {
    return document.getElementById('resultadoModal');
}

// Muestra el modal con mensaje y botones
function showResultado(amigo) {
    lastAmigo = amigo;                          // ← guarda el amigo actual
    const modal = getModal();
    document.getElementById('amigoTexto').textContent =
        `Tu amigo secreto es: ${amigo.nombre}`;

    const btnReintentar = document.getElementById('btn-reintentar');
    // Solo en el primer intento permitimos reintento
    if (contador === 0) {
        btnReintentar.style.display = 'inline-block';
        btnReintentar.disabled = false;
    } else {
        btnReintentar.style.display = 'none';
        btnReintentar.disabled = true;
    }
    btnReintentar.onclick = reintentar;

    document.getElementById('btn-siguiente').onclick = siguiente;

    modal.classList.add('active');
    contador++;
}

// Cierra el modal
function closeModal() {
    getModal().classList.remove('active');
}

// Reintenta solo una vez usando lastAmigo
function reintentar() {
    const actual = juego.participantes[turno];
    // devolvemos el amigo original a la cola
    if (lastAmigo) {
        restantes.push(lastAmigo);
    }
    // sacamos uno nuevo
    const nuevo = juego.obtenerAmigoSecreto(restantes);
    actual.amigoSecreto = nuevo;
    puedeReintentar = true;
    closeModal();
    showResultado(nuevo);                       // ← no pasamos esSiMismo
}

// Avanza al siguiente participante
function siguiente() {
    closeModal();
    turno++;
    contador = 0;
    if (turno >= juego.participantes.length) {
        document.getElementById('sorteo').disabled = true;
        alert('¡Sorteo completado!');
        return;
    }
}

// Listener del botón Sortear
document.getElementById('sorteo').addEventListener('click', function () {
    if (turno === 0) {
        // preparamos la cola clonando la lista original
        restantes = [...juego.participantes];
    }
    if (restantes.length === 0) {
        alert('El sorteo ha finalizado.');
        this.disabled = true;
        return;
    }

    puedeReintentar = false;
    const actual = juego.participantes[turno];
    const amigo = juego.obtenerAmigoSecreto(restantes);
    actual.amigoSecreto = amigo;

    showResultado(amigo);

});
