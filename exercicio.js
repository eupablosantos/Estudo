alert("Bem-vindo! A seguir pediremos que informe alguns dados.")

let nome = prompt("Qual o seu nome?")
console.log(nome)

let idade = prompt("Qual a sua idade?")
let confirmacao = confirm("Sua idade é "+ idade + " anos")


alert("Nome: " + nome)
alert("Idade: " + idade)
alert("Idade confirmada: " + confirmacao)

//alert("Nome: " + nome + "\nidade: " + age + "\nIdade confirmada: " + confirmacao)
//dessa forma mencionada acima, o texto ficaria em um único alerta, um abaixo do outro