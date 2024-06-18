// Chamada do botão
document.querySelector('#botao').addEventListener('click',calculo)

// Chamada do resultado
resultado = document.querySelector('#resultado')

// Função
function calculo(){
    numero = Number(prompt("Digite um número"))

    // Verificação se o número é par ou ímpar
    if (numero % 2 == 0 ){
        resultado.innerHTML = `O número ${numero} é <b>PAR!</b>`
    }
    else{
        resultado.innerHTML = `O número ${numero} é <b>ÍMPAR!</b>`
    }
}