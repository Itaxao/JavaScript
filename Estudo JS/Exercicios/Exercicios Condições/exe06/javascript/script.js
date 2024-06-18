// Chamada do botão
document.querySelector('#botao').addEventListener('click', informacoes)
// Chamada do resultado
var res = document.querySelector('#resultado')

// Função para aparecer os valores
function informacoes(){
    let dataHora = new Date()
    let anoAtual = dataHora.getFullYear()
    let anoNasc = Number(prompt("Qual ano você nasceu?"))
    let idade = anoAtual - anoNasc

    if (anoNasc > anoAtual){
        alert("IDADE INVALIDA!")
        return
    }

    res.innerHTML = `Quem nasceu em ${anoNasc} vai completar ${idade} em ${anoAtual}`
}