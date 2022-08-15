//TABELA VERDADE DO "E" que é definido pelo símbolo &&

let planeta = "terra"
let velocidade = 10

console.log(planeta.length == 05 && velocidade > 08)

//dessa forma estou perguntando se a palavra "terra" possui 05 letras e utilizando "&&" serve como "e" para fazer uma nova consulta, onde pergunto que velocidade é maior que 08

console.log(velocidade > 09 && velocidade < 19)

//dessa forma estou perguntando se "velocidade" é maior que 09 "e" velocidade é menor que 19. Como velocidade é 10, o resultado vai ser (true) pois as duas estão corretas

console.log(velocidade >= 11 && planeta == "terra")

//dessa forma estou perguntando se "velocidade" é maior ou IGUAL a 10 "e" planeta é terra. Como velocidade é 10 e planeta tem valor "terra", o resultado vai ser (false) pois uma esta incorreta

/*tabela verdade

  p         q        p&&q
  true    true       true
  true    false      false
  false   true       false
  false   false      false
  
 */

-------------------------------------------------------------------------------------------------------------------
  
//TABELA VERDADE DO "OU" que é definido pelo símbolo ||

let planeta = "terra"
let velocidade = 10

console.log(planeta.length == 5 || velocidade > 09)

//dessa forma vai retornar true pois planta é igual a 5 ou velocidade é maior que 09
//V ou V = V

console.log(velocidade > 09 || velocidade < 08)
// V ou F = V (true)

console.log(velocidade > 11 || planeta == "terra")
// F ou V = V (true)

console.log(planeta == "marte" || velocidade > 11)
// F ou F = F (false)

/*tabela verdade

  p         q        p&&q
  true    true       true
  true    false      true
  false   true       true
  false   false      false
  
 */

-------------------------------------------------------------------------------------------------------------------

//TABELA VERDADE DO "NAO" que é definido pelo símbolo !

let planeta = "terra"
let velocidade = 10

console.log(!(velocidade > 09))
// NÃO V = F

console.log(!(planeta == "Marte"))
// NÃO F = V

/*tabela verdade

  p         !p
true       false
false      true

 */

-------------------------------------------------------------------------------------------------------------------

let planeta = "terra"
let velocidade = 10

console.log(!(velocidade > 11 && planeta == "terra") || (velocidade - 3 == 7 && planeta.length + 1 > 15))
// se velocidade tem valor 10, e 10 -3 é igual a 7, então irá retornar V
// se planeta tem valor 5, sendo planeta +1 com valor 6, não é maior que 15, retornando F
// logo, V + F = F

// se velocidade tem valor de 10, não é maior que 11, então irá retornar F
// se planeta tem valor de terra, irá retornar V
// logo, F + V = F