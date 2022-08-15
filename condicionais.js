let velocidade = 110

if(velocidade < 100) { // o comando "if" é para "se"
    console.log("Dentro do limite de velocidade")
} else { // o comando "else" é para "se não"
    console.log("Fora do limite de velicidade")
}

//Ou seja, caso velocidade seja menor que 100, irá executar o comando de "if". Diferente disso irá executar o comando de "se não"
//O mando "else" não existe sem o "if"

---------------------------------------------------------------------------------

let velocidade = 80

if(velocidade < 40) {
    console.log("Velocidade baixa")
} else {
    if(velocidade <= 100) {
        console.log("Cuidado! Velocidade de risco")
    } else {
        console.log("Acima da velocidade")
    }
}

---------------------------------------------------------------------------------

let velocidade = 80

if(velocidade < 40) {
    console.log("Velocidade baixa")
} else if(velocidade <= 100) {
    console.log("Cuidado! Velocidade de risco")
} else {
    console.log("Acima da velocidade")
}

//Uma segunda forma de utilizar o if else sem precisar utilizar chaves novamente

---------------------------------------------------------------------------------

(velocidade > 100) ? console.log("Velocidade maior que 100") : console.log("Velocidade menor que 100")

//este é chamado if de uma linha, pois é feito if e else em uma única linha