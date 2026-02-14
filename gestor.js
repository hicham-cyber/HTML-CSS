let puntsA = 0
let puntsB = 0

const puntsAEq1 = document.getElementById('puntsA')
const puntsBEq2 = document.getElementById('puntsB')
const mensajeMarcador = document.getElementById('mensajeMarcador')

document.getElementById('sumarA').addEventListener('click', () => {
    puntsA++
    puntsAEq1.textContent = puntsA
    actualizarMensaje()
})

document.getElementById('sumarB').addEventListener('click', () => {
    puntsB++
    puntsBEq2.textContent = puntsB
    actualizarMensaje()
})

document.getElementById('resetMarcador').addEventListener('click', () => {
    puntsA = 0
    puntsB = 0
    puntsAEq1.textContent = puntsA
    puntsBEq2.textContent = puntsB
    mensajeMarcador.textContent = "Marcador reiniciat"
})

function actualizarMensaje() {
    if (puntsA > puntsB) {
        mensajeMarcador.textContent = "Va guanyant l'equip A"
    } else if (puntsB > puntsA) {
        mensajeMarcador.textContent = "Va guanyant l'equip B"
    } else {
        mensajeMarcador.textContent = "Empatats"
    }
}

const formJugador = document.getElementById('formJugador')
const inputJugador = document.getElementById('inputJugador')
const listaJugadors = document.getElementById('listaJugadors')
const mensajes = document.querySelector('.mensajes')

const jugadors = []

function limpiarMensajes() {
    mensajes.textContent = ""
    mensajes.className = "mensajes"
}

function mostrarMensaje(texto, tipo) {
    limpiarMensajes()
    mensajes.textContent = texto
    mensajes.classList.add(tipo)
}

function marcarError(element) {
    element.classList.remove('input-ok')
    element.classList.add('input-error')
}
function marcarOk(element) {
    element.classList.remove('input-error')
    element.classList.add('input-ok')
}

function añadirJugador(nom) {
    const li = document.createElement('li')
    li.textContent = nom

    const btnEliminar = document.createElement('button')
    btnEliminar.type = 'button'
    btnEliminar.textContent = 'Eliminar'

    btnEliminar.addEventListener('click', () => {
        li.remove()
        const index = jugadors.indexOf(nom.toLowerCase())
        if (index !== -1) {
            jugadors.splice(index, 1)
        }
        mostrarMensaje(`Jugador eliminat: ${nom}`, 'ok')
    })

    li.appendChild(btnEliminar)
    listaJugadors.appendChild(li)
}


formJugador.addEventListener('submit', (e) => {
    e.preventDefault()

    const nom = inputJugador.value.trim()
    if (nom === "") {
        marcarError(inputJugador)
        mostrarMensaje("Escriu alguna cosa", "ERRORRR")
        return
    }

    const nomLower = nom.toLowerCase()
    if (jugadors.includes(nomLower)) {
        marcarError(inputJugador)
        mostrarMensaje("Jugador ja existeix", "ERRORRRR")
        return
    }

    jugadors.push(nomLower)
    marcarOk(inputJugador)
    mostrarMensaje("Jugador afegit", "ok")
    añadirJugador(nom)
    formJugador.reset()
})
