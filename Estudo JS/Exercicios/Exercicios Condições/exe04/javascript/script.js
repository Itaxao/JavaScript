// Chamada do botão
document.querySelector('#botao').addEventListener('click', informacoes)
// Chamada do resultado
var res = document.querySelector('#resultado')

// Função para aparecer os valores
function informacoes(){
    let dataHora = new Date()
    res.innerHTML = `Os dados recebidos do sistema são <mark>${dataHora}</mark>`
}