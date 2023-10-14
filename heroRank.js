function rankCalculator(victories, defeats) {
    let rankScore = victories - defeats
    return rankScore
}

function getRankPosition(rankScore){
    if (rankScore < 10) {return rankPosition = "Ferro"}
    if (rankScore > 10 && rankScore <= 20) {return rankPosition = "Bronze"}
    if (rankScore > 20 && rankScore <= 50) {return rankPosition = "Prata"}
    if (rankScore > 50 && rankScore <= 80) {return rankPosition = "Ouro"}
    if (rankScore > 80 && rankScore <= 90) {return rankPosition = "Diamante"}
    if (rankScore > 90 && rankScore <= 100) {return rankPosition = "Lendário"}
    if (rankScore >= 101){return rankPosition= "Imortal"}
}

rankScore = rankCalculator(11, 0)
rankPosition = getRankPosition(rankScore)
console.log(`O Herói tem um saldo de ${rankScore} vitórias e está no nível ${rankPosition}`)