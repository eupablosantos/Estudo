//Conhecendo símbolos e comparando dados

let planeta = "Terra"
let velocidade = "10"

console.log(velocidade == 20) //o símbolo de == é um simbolo de comparação, nesse caso vai retornar "false" pois velocidade tem valor de 10 e não de 20
console.log(planeta == Terra) //dessa forma irá retornar o valor de "true"

console.log(velocidade != 10) //o símbolo de != é para verificar se um valor é DIFERENTE de outro. Nesse caso irá retornar false 
console.log(velocidade !== "80") //dessa forma vai retornar true pois 10 do tipo numérico é diferente do tipo texto

console.log(velocidade > 80) //aqui retorna false pois velocidade tem valor de 10 e não é maior que 80
console.log(planeta > "Jupiter") //aqui vai retornar false pois a letra J vem antes da letra T

console.log(velocidade >= 10) //aqui vai retornar true pois 10 é igual a 10

/*  == símbolo de comparação
    != símbolo de diferente
    !== símbolo de diferente para texto e numérico
    > símbolo de maior
    >= símbolo de maior ou igual
    < símbolo de menor
