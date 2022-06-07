/* #region Variaveis  */
const Teclas = [
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "48",
    "61",
    "81",
    "87",
    "69",
    "82",
    "84",
    "89",
    "85",
    "73",
    "79",
    "80",
    "220",
    "9",
    "65",
    "83",
    "68",
    "70",
    "71",
    "72",
    "74",
    "75",
    "76",
    "20",
    "13",
    "59",
    "16",
    "90",
    "88",
    "67",
    "86",
    "66",
    "78",
    "108",
    "190",
    "191",
    "32",
    "93",
    "17"
]
const PontuacaoDiv = document.getElementById("pontuacao")
const MultiplicadorDiv = document.getElementById("multiplicador")
const TimerDiv = document.getElementById("timer")

let Pontuacao = 0
let Multiplicador = 1
let TeclaAleatoria
let TimeOuts = []

/* #endregion */

document.addEventListener("keydown", teclaPressionada, false)
document.addEventListener("keyup", teclaDespressionada, false)

function teclaPressionada(e) {
    var keyCode = e.keyCode
    var tecla = document.getElementById(keyCode)

    if (tecla == undefined) return

    keyCode == TeclaAleatoria ? teclaCerta() : teclaErrada()

    tecla.classList.add("pressionado")
}

function teclaDespressionada(e) {
    var keyCode = e.keyCode
    var tecla = document.getElementById(keyCode)

    if (tecla == undefined) return

    tecla.classList.remove("pressionado")
}

function teclaAleatoria() {

    for (var i = 0; i < TimeOuts.length; i++) {
        clearTimeout(TimeOuts[i])
    }

    if (TeclaAleatoria != null) document.getElementById(TeclaAleatoria).classList.remove("random")

    var x = Teclas[Math.floor(Math.random() * Teclas.length)]
    TeclaAleatoria = x

    document.getElementById(x).classList.add("random")

    TimeOuts.push(setTimeout(teclaErrada, 2000))
}

function teclaCerta() {
    Pontuacao = Pontuacao + (1 * Multiplicador)

    PontuacaoDiv.innerHTML = `Pontuação : ${Pontuacao}`

    Multiplicador++

    MultiplicadorDiv.innerHTML = Multiplicador + "x"

    teclaAleatoria()
}

function teclaErrada() {
    Pontuacao = 0

    PontuacaoDiv.innerHTML = `Pontuação : ${Pontuacao}`

    Multiplicador = 1

    MultiplicadorDiv.innerHTML = Multiplicador + "x"

    teclaAleatoria()
}

function tempoRestante(timeout) {
    return Math.ceil((timeout._idleStart + timeout._idleTimeout - Date.now()) / 1000);
}