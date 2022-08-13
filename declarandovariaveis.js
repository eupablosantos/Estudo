//formas de declarar variáveis

let videogame = "nintendo"
console.log(videogame) //dessa forma, a variável videogame imprime a string inserida nela, no caso "nintendo"
videogame = "playstation"
console.log(videogame) //agora foi atribuido um novo valor na variável

//obs: para criar uma nova variável, é necessário usar o "let". Porém se ela já existe, basta usar o nome da mesma junto ao símbolo de =

---------------------------------------------------------------------------------------------------------------------------------------------

const galáxia = "Via Láctea" //const vem de constante, ou seja, só pode receber 1 único valor
console.log(galáxia)
galáxia = "Andromeda" //nessa segunda atribuição o valor não existe, gera um erro.
console.log(galáxia)

---------------------------------------------------------------------------------------------------------------------------------------------

var velocidade = 80 //var funciona da mesma maneira que o let
console.log(velocidade)
velocidade = 30
console.log(velocidade) //dessa forma imprime os 2 valores

---------------------------------------------------------------------------------------------------------------------------------------------

let semvalor
console.log(semvalor) //foi criada uma variável sem valor, dessa forma o resultado vai ser undefined

---------------------------------------------------------------------------------------------------------------------------------------------

let projeto = confirm("Projeto criado com sucesso. Aguardando confirmação.") //dessa forma a variável projeto receberá o valor retornado pela função
console.log(projeto) //sendo cancelado, receberá o valor de "false". Caso seja confirmado, receberá o valor de "true".

let nome = prompt("Qual o seu nome?") //dessa forma vai gerar uma caixa, e o nome digitado vai ser atribuído a variável
console.log(nome) 

. 