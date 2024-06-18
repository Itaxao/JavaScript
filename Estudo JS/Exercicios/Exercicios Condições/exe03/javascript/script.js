// Chamada do botão
document.querySelector('#botao').addEventListener('click',calculo)

// Chamada do resultado
res = document.querySelector('#resultado')

// Função
function calculo (){

    // Variaveis
    let numero1 = Number(prompt("Digite um número"))
    let numero2 = Number(prompt("Digite outro número"))
    

    // Verificação
    if (numero1 > numero2){
        res.innerHTML = `Analisando os valor <mark>${numero1}</mark> e <mark>${numero2}</mark>, o maior valor é <strong>${numero1}</strong>`
    }
    else if (numero2 > numero1) {
        res.innerHTML = `Analisando os valor <mark>${numero1}</mark> e <mark>${numero2}</mark>, o maior valor é <strong>${numero2}</strong>`
    }
    else {
        res.innerHTML = `Analisando os valor <mark>${numero1}</mark> e <mark>${numero2}</mark>, ambos são <strong>IGUAIS!!</strong>`
    }
}