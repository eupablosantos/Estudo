/* let velocidade = 80 //caso eu mude a velocidade, vai mudar o case que será retornado

//Aqui estou criando um switch onde declaro que o valor velocidade vai ser multiplicado por 2, e os cases desse switch irão retornar com o resultado

switch(velocidade * 2) {
    case 100:
        console.log("Sua velocidade é 100km/s")
        break //break serve para para a execução
    case 160:
        console.log("Sua velocidade é 160km/s")
        break
    default:
        console.log("velocidade não identificada")
}

*/
--------------------------------------------------------------------------------------------------------------------------------------------

let aviao = "blackbird"

switch(aviao) {
    case "u2":
        console.log("Avião espião")
        break
    case "f117":
        console.log("Avião cargueiro, Stealth")
        break
    case "b2 spirit":
        console.log("Avião cargueiro, Steath. Sucessor do f117 Nighthawk")
        break
    default:
        console.log("Avião padrão")
}

//outro exemplo de execução do switch