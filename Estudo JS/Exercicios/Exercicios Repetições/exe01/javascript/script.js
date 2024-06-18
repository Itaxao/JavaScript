// Chamada do botão
document.querySelector('#botao').addEventListener('click',contar)

// Chamada do resultado
res = document.querySelector('#resultado')

// Criação da função para contar
function contar(){

    res.innerHTML = "<h1> Contando de 1 até 10... </h1>"

    for (i = 1 ; i <= 10 ;i++){
        res.innerHTML += `&#x1F449; ${i} `
    }
}