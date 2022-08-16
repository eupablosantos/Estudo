let distancialy = prompt("Digite a distância em anos-luz") //prompt criado para o usuário escolher a distância em anos-luz

let escolha = prompt("Para qual unidade deseja converter?\n 1. Parse(pc)\n2. Unidade Astronômica (AU)" + //prompt para o usuário escolher a unidade que deseja converter
                    "\n3. Quilômetros (km)\n\n(Digite o número da opção desejada)")

let escolhaunidade //armazena a unidade
let convertedistancia //armazena o valor da distância em anos-luz convertida para a unidade desejada

switch(escolha) {
    case "1":
        escolhaunidade = "Parsec"
        convertedistancia = distancialy 
        * 0.306601 //convertendo unidade em anos-luz para Parsec
        break
    case "2":
        escolhaunidade = "Unidade Astronômica"
        convertedistancia = distancialy * 63241.1 //convertendo distância em anos-luz para unidade astronômica
        break
    case "3":
        escolhaunidade = "Quilômetros"
        convertedistancia = distancialy * 9.5 * Math.pow(10, 12) //convertendo distância em anos-luz para quilômetros
        break
    default: //default irá ser executada caso nenhuma das opções acima sejam executadas
        escolhaunidade = "Unidade não identificada"
        convertedistancia = "Conversão não disponível"
}

alert("Distância em Anos-luz: " + distancialy + "\n" + escolhaunidade + ": " + convertedistancia)