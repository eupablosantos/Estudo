//Nesse exercício irei criar um sistema onde será digitado o nome de uma nave e logo depois será perguntado se deseja substituir algum carácter do nome
//Logo, é perguntado por qual carácter será substituído e o processo é armazenado em uma nova variável

let nave = prompt("Digite o nome da nave") //comando para armazenar o nome da nave

let caracternovo = prompt("Qual caracter deseja substituir?") //comando para armazenar o caracter que vai substituir
let caracterantigo = prompt("Por qual caracter deseja substituir?") //comando para armazenar o caracter que será substituído

console.log("nave, caracternovo, caracterantigo") //retornar o que está acontecendo nessas variáveis

let novanave = "" //variável que receberá o novo valor final

for(let pos = 0; pos < nave.length; pos++) { //sempre que valor "pos" for menos que o numero da nave, irá receber +1 posição
    if(nave[pos] == caracternovo) { //aqui é verificado se o caracter da posição atual é igual ao novo
        novanave += caracterantigo //se for, a novanave irá receber o valor a ser substituído
    } else {
        novanave += nave[pos] //se não for igual, novanave irá receber o caracter 
    }
}

alert("O novo nome da nave é: " + novanave) //irá retornar o valor novo digitado