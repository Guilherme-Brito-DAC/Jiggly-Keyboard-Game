document.addEventListener("keydown", teclaPressionada, false);
let PontuacaoDiv = document.getElementById("pontuacao")
let Pontuacao = 0

const Teclas = [
    "222",
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
    "109",
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
    "160",
    "221",
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
    "77",
    "108",
    "190",
    "191",
    "17",
    "91",
    "18",
    "32",
    "93",
    "17"
]

function teclaPressionada(e) {
    var keyCode = e.keyCode
    var tecla = document.getElementById(keyCode)

    if (tecla == undefined) return

    tecla.classList.add("pressionado")
    tecla.addEventListener('animationend', () => {
        tecla.classList.remove("pressionado")
    })
}

function teclaAleatoria() {
    return Teclas[Math.floor(Math.random() * Teclas.length)]
}