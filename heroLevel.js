let charName = "Test Char"
let charXP = 8999
let elo = ""

function getCharElo() {
    if (charXP < 1000){ elo = "Ferro"}
    if (charXP >= 1000 && charXP <= 2000){elo = "Bronze"}
    if (charXP > 2000 && charXP <= 5000){elo = "Prata"}
    if (charXP > 5000 && charXP <= 6000){elo = "Ouro"}
    if (charXP > 6000 && charXP <= 7000){elo = "Diamante"}
    if (charXP > 7000 && charXP <= 8000){elo = "Platina"}
    if (charXP > 8000 && charXP <= 9000){elo = "Ascendente"}
    if (charXP > 9000 && charXP < 10000){elo = "Imortal"}
    if (charXP >= 10000){elo = "Radiante"}
}


function sobeNivel() {
    console.log(`${charName} Você possui: ${charXP} pontos de experiência e seu elo é: ${elo}`)
}

getCharElo()
sobeNivel()