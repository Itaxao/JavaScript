// Chamada do botão sorteio
document.querySelector('#botao').addEventListener('click',sortear)

// Criação do sorteio
let sorteio = (Math.floor(Math.random() * 100)) + 1

// Chamada do resultado
var res = document.querySelector('#resultado')

// Teste
console.log (sorteio)
// Função para mostrar a advinhação
function sortear(){
    num = Number(prompt ("Qual é o seu palpite?"))

    if (sorteio > num){
        res.innerHTML += `<p> Você falou ${num}. Meu número é <strong>MAIOR!</strong>`
    }
    else if (sorteio < num){
        res.innerHTML += `<p> Você falou ${num}. Meu número é <strong>MENOR!</strong>`
    }
    else {
        res.innerHTML += `<p> Você falou ${num}. Você acertou!!!!!`
    }
}
