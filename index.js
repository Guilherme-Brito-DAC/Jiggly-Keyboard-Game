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
    "16",
    "90",
    "88",
    "67",
    "86",
    "66",
    "78",
    "190",
    "191",
    "32",
    "17"
]
const PontuacaoDiv = document.getElementById("pontuacao")

let TeclaAleatoria
let t = 2000

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
    if (TeclaAleatoria != null) document.getElementById(TeclaAleatoria).classList.remove("random")

    var x = Teclas[Math.floor(Math.random() * Teclas.length)]

    TeclaAleatoria = x

    document.getElementById(x).classList.add("random")
}

function teclaCerta() {
    teclaAleatoria()
}

function teclaErrada() {
    teclaAleatoria()
}