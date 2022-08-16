let piloto = prompt ("Qual o nome do piloto?")

let velocidadeinicial = 0

let velocidadenova = prompt ("A qual velocidade deseja acelerar?")

let confirmavelocidade = confirm("Estamos acelerar para" + velocidadenova + " km/s")

if (velocidade < 0) {
    alert("A nave está em repouso.")
} else if (velocidade < 40) {
    alert("A nave está devagar, por favor, acelerar.")
} else if (velocidade < 80) {
    alert("A velocidade é a recomendada.") 
} else if (velocidade < 100) {
    alert("Velocidade alta. Cuidado.") 
} else if (velocidade < 110) {
    alert("Velocidade perigosa. Controle automático ativado.")
}

alert("Piloto: " + piloto + "\nVelocidade: " + velocidade + " km/s")