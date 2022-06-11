let teclaRandom

const teclaPressionada = (e) => {
    var keyCode = e.keyCode
    var tecla = document.getElementById(keyCode)

    if (tecla == undefined) return

    if (keyCode == teclaRandom) teclaCerta()

    tecla.classList.add("pressionado")
}

const teclaDespressionada = (e) => {
    var keyCode = e.keyCode
    var tecla = document.getElementById(keyCode)

    if (tecla == undefined) return

    tecla.classList.remove("pressionado")
}

document.addEventListener("keydown", teclaPressionada, false)
document.addEventListener("keyup", teclaDespressionada, false)


const teclaCerta = () => {
    var tecla = document.getElementById(teclaRandom)

    tecla.classList.remove("random")

    teclaAleatoria()
}

const teclaAleatoria = () => {
    teclaRandom = Teclas[Math.floor(Math.random() * Teclas.length)]
    document.getElementById(teclaRandom).classList.add("random")
}

teclaAleatoria()