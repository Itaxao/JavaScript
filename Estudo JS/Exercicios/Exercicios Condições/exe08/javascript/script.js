// Chamada do botão sorteio
document.querySelector('#botao').addEventListener('click',sorteio)

// Chamada do botão limpar
document.querySelector('#limpar').addEventListener('click',limpar) 

// Chamada do resultado
var res = document.querySelector('#resultado')

// Função para mostrar o sorteio
function sorteio(){
    let sorteio = (Math.floor(Math.random() * 100)) + 1
    res.innerHTML += `<p> Acabei de pensar no número <mark>${sorteio}!</mark>`
}

// Função para limpar o campo do resultado
function limpar(){
    res.innerHTML = ""
}