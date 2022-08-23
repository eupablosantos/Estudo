let nave = prompt("Qual o nome da nave?") //declarando o nome da nave

let velocidadeship = 0 //declarando velocidade zero

let escolha //declarando variável

function menu() { //criando função de menu
    let option //declarando variável de funções
    while(option != "1" && option != "2" && option != "3" && option != "4") { //quando for diferente de 1, 2, 3, 4, chamar return novamente
    option = prompt("O que deseja fazer?\n" +
                    "1 - Acelerar a nave em 5km/s\n" +
                    "2 - Desacelerar a nave em 5km/s\n" +
                    "3 - Imprimir dados de bordo\n" +
                    "4 - Sair de programa")
    }

    return option //chamando return quando digitado valor diferente do mencionado
}

function speed(velocidade) { //criando função com variável velocidade
    let novavelocidade = velocidade + 5 //toda vez que velocidade receber +5, irá somar dentro da variável novavelocidade
    return novavelocidade //retornando o valor da variável novavelocidade
}

function slowspeed(velocidade) { //criando função com variável velocidade
    let novavelocidade = velocidade - 5 //toda vez que velocidade receber -5, irá somar dentro da variável novavelocidade
    if(novavelocidade < 0) { //se nova velocidade for menor que zero, ou seja, receber valor negativo... Irá retornar o valor de zero
        novavelocidade = 0 //retornando o valor de zero
    }
    return novavelocidade
}

function dadosbordo(nave, novavelocidade) { //criando função com variáveis
    alert("Espaçonave: " + nave + "\nVelocidade: " + novavelocidade + "km/s")
}

do {
    escolha = menu() //criando sistema de menu
    switch(escolha) {
        case "1":
            velocidadeship = speed(velocidadeship) //retornando o valor de speed
            break
        case "2":
            velocidadeship = slowspeed(velocidadeship) //salvando valor de speed negativo
            break
        case "3":
            dadosbordo(nave, velocidadeship) //retornando valor de dados de bordo
            break
        default:
            alert("Encerrando programa de bordo") 
    }
} while(escolha != "4")
