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
        this._nombres = new Set();
    }

    agregarParticipante(nombre) {
        const clave = nombre.trim().toLowerCase();
        if (!clave) return;               // no vacío
        if (this._nombres.has(clave)) return;  // ya existe

        this._nombres.add(clave);
        this.participantes.push(new Participante(nombre.trim()));
    }

    eliminarParticipante(nombre) {
        this.participantes = this.participantes.filter(p => p.nombre !== nombre);
    }

    reiniciarJuego() {
        this.participantes = [];
        this._nombres.clear();
    }

    // Extrae aleatoriamente un elemento del array y lo elimina de ese array
    extraerAleatorioYRemover(arr) {
        if (arr.length === 0) return null;
        const indice = Math.floor(Math.random() * arr.length);
        const elemento = arr[indice];
        arr.splice(indice, 1);
        return elemento;
    }

    mostrarResultados() {
        this.participantes.forEach(p => {
            console.log(`${p.nombre} → ${p.amigoSecreto ? p.amigoSecreto.nombre : "sin asignar"}`);
        });
    }
}

// Controlador que encapsula flujo de sorteo / reintento / turno
class ControladorSorteo {
    constructor(juego) {
        this.juego = juego;
        this.restantes = [];
        this.turno = 0;
        this.contador = 0; // para controlar reintento por turno
        this.lastAmigo = null;

        // cacheo DOM
        this.modal = document.getElementById('resultadoModal');
        this.amigoTexto = document.getElementById('amigoTexto');
        this.btnReintentar = document.getElementById('btn-reintentar');
        this.btnSiguiente = document.getElementById('btn-siguiente');
        this.btnSorteo = document.getElementById('sorteo');

        this._bindEventos();
    }

    _bindEventos() {
        this.btnReintentar.addEventListener('click', () => this.reintentar());
        this.btnSiguiente.addEventListener('click', () => this.siguiente());
        this.btnSorteo.addEventListener('click', () => this.sortear());
    }

    abrirModal(amigo) {
        this.lastAmigo = amigo;
        this.amigoTexto.innerHTML = `Tu amigo secreto es: <br> ${amigo.nombre}`;

        if (this.contador === 0) {
            this.btnReintentar.style.display = 'inline-block';
            this.btnReintentar.disabled = false;
        } else {
            this.btnReintentar.style.display = 'none';
            this.btnReintentar.disabled = true;
        }

        this.modal.classList.add('active');
        this.contador++;
    }

    cerrarModal() {
        this.modal.classList.remove('active');
    }

    sortear() {
        if (this.turno === 0) {
            // inicializa cola clonando participantes
            this.restantes = [...this.juego.participantes];

        }

        if (this.restantes.length === 0) {
            alert('El sorteo ha finalizado.');
            this.btnSorteo.disabled = true;
            return;
        }

        this.contador = 0; // reset por nuevo turno
        const actual = this.juego.participantes[this.turno];
        const amigo = this.juego.extraerAleatorioYRemover(this.restantes);
        actual.amigoSecreto = amigo;
        this.abrirModal(amigo);
    }

    reintentar() {
        const actual = this.juego.participantes[this.turno];
        if (this.lastAmigo) {
            // devolver el anterior a la cola
            this.restantes.push(this.lastAmigo);
        }
        const nuevo = this.juego.extraerAleatorioYRemover(this.restantes);
        actual.amigoSecreto = nuevo;
        this.cerrarModal();
        this.abrirModal(nuevo);
    }

    siguiente() {
        this.cerrarModal();
        this.turno++;
        this.contador = 0;
        if (this.turno >= this.juego.participantes.length) {
            this.btnSorteo.disabled = true;

            reglasJuegoTitulo.style.display = 'none';
            reglasJuego.style.display = 'none';
            sorteo.style.display = 'none';
            mensajeFinal.style.display = 'block';
            btnReiniciarJuego.style.display = 'flex';
        }
    }

    reiniciarSorteo() {
        this.juego.reiniciarJuego();
        this.restantes = [];
        this.turno = 0;
        this.contador = 0;
        this.btnSorteo.disabled = false;
        inicioSorteo.style.display = 'none';
        amigoSecreto.style.display = 'flex';
        divParticipantes.style.display = 'flex';

        renderParticipantes();
    }
}

// Instancia del juego y controlador
const juego = new JuegoAmigoSecreto();
const controlador = new ControladorSorteo(juego);
const btnIniciar = document.getElementById("iniciarJuego");
const btnReiniciar = document.getElementById("btnReiniciarJuego");

// -------- UI de participantes --------
const form = document.getElementById("amigoSecreto");
const listaParticipantes = document.getElementById("listaParticipantes");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    const datos = new FormData(this);
    const nombre = datos.get("nombre");
    juego.agregarParticipante(nombre);
    this.reset();
    renderParticipantes();
});

function renderParticipantes() {
    listaParticipantes.innerHTML = juego.participantes
        .map(p => `<li>${p.nombre} <button class="quitar" data-nombre="${p.nombre}">Quitar</button></li>`)
        .join('');
}

/* function ocultar donde oculta la lista de participantes y el formulario */
function iniciarJuego() {
    divParticipantes.style.display = 'none';
    form.style.display = 'none';
    btnReiniciarJuego.style.display = 'none';
    mensajeFinal.style.display = 'none';


    inicioSorteo.style.display = 'flex';
    reglasJuegoTitulo.style.display = 'flex';
    reglasJuego.style.display = 'flex';
    sorteo.style.display = 'flex';


}

listaParticipantes.addEventListener("click", function (e) {
    if (e.target.classList.contains("quitar")) {
        const nombre = e.target.dataset.nombre;
        juego.eliminarParticipante(nombre);
        renderParticipantes();
    }
});

btnIniciar.addEventListener("click", function () {
    iniciarJuego();
});

btnReiniciar.addEventListener("click", function () {
    controlador.reiniciarSorteo();
});
