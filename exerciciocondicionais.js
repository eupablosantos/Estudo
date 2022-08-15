//Exercício onde se deve: Perguntar o nome do piloto, colocar a velocidade da nave igual a zero
//perguntar a velocidade que deseja acelerar a nave e pedir uma confirmação informando a nova velocidade

let piloto = prompt ("Qual o nome do piloto?") 
console.log(piloto)

let velocidade = 0

let velocidadenova = prompt ("A qual velocidade deseja acelerar a nave?")

let confirmavelocidade = confirm("Estamos acelerando para " + velocidadenova + " km/s")

if(confirmavelocidade) {
    velocidade = velocidadenova
}

if(velocidade <= 0) {
    alert("A nave está parada.")
} else if(velocidade < 40) {
    alert("Nave devagar, recomendado acelerar.")
} else if(velocidade < 80) {
    alert("Nave em velocidade recomendada.")
} else if(velocidade < 100) {
    alert("Nave em velocidade perigosa. Cuidado.")
} else {
    alert("Velocidade extrema. Entrando em modo automático.")
}

alert("Piloto: " + piloto + "\nVelocidade: " + velocidade + "km/s")

//este código é utilizado junto à um arquivo .html para ser demonstrado no navegador