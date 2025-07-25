let participants = [];

// Cargar datos guardados cuando se carga la página
function loadParticipants() {
    const savedParticipants = localStorage.getItem("participants");
    if (savedParticipants) {
        participants = JSON.parse(savedParticipants);
        updateParticipantsList();
    }
}

// Guardar datos en localStorage
function saveParticipants() {
    localStorage.setItem("participants", JSON.stringify(participants));
}

/* Agregar Participante */
function addParticipant() {
    const participantName = document.getElementById("participant-name").value;

    // Limpiar errores anteriores
    clearErrorMessage();

    if (participantName === "") {
        showErrorMessage("El nombre del participante no puede estar vacío.");
        return;
    } else if (participants.includes(participantName)) {
        showErrorMessage("Este participante ya ha sido agregado.");
        return;
    }

    participants.push(participantName);
    document.getElementById("participant-name").value = "";
    updateParticipantsList();

    // Guardar después de agregar un participante
    saveParticipants();
}

/* Limpiar Lista de Participantes */
function clearParticipantsList() {
    participants = [];
    updateParticipantsList();

    //Limpiar localStorage
    localStorage.removeItem("participants");
}

/* Actualizar Lista de Participantes */
function updateParticipantsList() {
    const listElement = document.getElementById("participants-list");
    if (listElement) {
        listElement.innerHTML = participants.map(name => `<li>${name}</li>`).join("");
    }
}

// Funciones para mostrar y limpiar errores
function showErrorMessage(message) {
    const errorElement = document.getElementById("error-message");
    const input = document.getElementById("participant-name");

    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
        input.classList.add("input-error");
    }
}

function clearErrorMessage() {
    const errorElement = document.getElementById("error-message");
    const input = document.getElementById("participant-name");

    if (errorElement) {
        errorElement.style.display = "none";
        input.classList.remove("input-error");
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    loadParticipants();

    const input = document.getElementById("participant-name");
    if (input) {
        input.addEventListener('input', clearErrorMessage);
        input.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                addParticipant();
            }
        });
    }
});

console.log("Participants:", participants);