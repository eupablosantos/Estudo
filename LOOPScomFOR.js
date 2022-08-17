//exemplo de funcionamento do "for"

/* for(<variavel>; <expressao>; <ação de controle>) {
    <bloco de controle>
}

*/

let nave = "Helmet" //vou mascarar a palavra helmet para hilmit
let novanave = "" //nova nave sem valor, a ser atribuido 

for(let i = 0; i < nave.length; i++) { //a expressão i++ funciona da mesma forma que i +=1 e i = i +1
    //for vai executar enquanto "i" for menor que o tamanho da string nave. Logo, vai encrementar +1 a cada interação
    if(nave[i] == "e") {
      novanave += "i"  
    } else {
      novanave += nave[i] //aqui o código entende que no valor 1 a string tem valor de "e", então adiciona o caracter i na varival novanave
    }
}

console.log(novanave)

//dessa forma teremos o resultado de hilmit como retorno na variável novanave