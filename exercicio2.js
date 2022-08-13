//Projeto onde irá ser solicitado o nome e idade de duas pessoas, onde uma é mais velha que a outra.
//No final irá surgir uma caixa mostrando os nomes e idade das pessoas, e a diferença de idade entre elas.

let nomev = prompt("Digite o nome da pessoa mais velha") //utilizando prompt para abrir caixa e declarar um valor
let idadev = prompt("Qual a sua idade?")

let nomen = prompt("Digite o nome da pessoa mais nova") //utilizando prompt para abrir caixa e declarar um valor
let idaden = prompt("Qual a sua idade?")

let diferencaidade = idadev - idaden //utilizando sinal de subtração para chegar em uma diferença dos valores das variáveis

alert(
    "Pessoa mais velha: " + nomev + "\nIdade: " + idadev + 
    "\n\nPessoa mais nova: " + nomen + "\nIdade: " + idaden +
    "\n\nDiferença de idade: " + diferencaidade) 
    
//utilizando alert para apresentar o resultado acima 