class heroClass {
    constructor(age, name, type){
        this.age = age
        this.name = name
        this.type = type
    }
    atack(){
        let atackType = ""
        if (this.type == "mago") {
            atackType = "magia"
        }
        if (this.type == "guerreiro"){
            atackType = "sua espada"
        }
        if (this.type == "monge") {
            atackType = "artes marciais"
        }
        if (this.type == "ninja") {
            atackType = "sua shuriken"
        }
        return console.log(`O ${this.type} ${this.name} atacou usando ${atackType}!`)
    }
}

let liuKang = new heroClass(34, "Liu Kang", "ninja")
let quanChi = new heroClass(320, "Quan Chi", "mago")
let shujinko = new heroClass(84, "Shujinko", "monge")
let scorpion = new heroClass(43, "Scorpion", "guerreiro")

liuKang.atack()
quanChi.atack()
shujinko.atack()
scorpion.atack()