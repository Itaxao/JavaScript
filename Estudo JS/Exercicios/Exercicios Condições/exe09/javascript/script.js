// Chamada do botão
document.querySelector('#calcular').addEventListener('click',calculo)

// Chamada do resultado
var res = document.querySelector('#resultado')

// Função para o calculo
function calculo(){
    let valor1 = Number(prompt("Primeiro valor:"))
    let valor2 = Number(prompt("Segundo valor:"))
    let operacao = Number(prompt("O que vamos fazer? \n [1]Somar \n [2]Subtrair \n [3]Multiplicar \n [4]Dividir"))

    res.innerHTML = "<h2> Calculando... </h2>"
    switch (operacao) {
        case 1:{
            res.innerHTML += ` <p>${valor1} + ${valor2} = <strong>${valor1 + valor2}</strong> </p>`
            break
        }
        case 2:{
            res.innerHTML += `<p>${valor1} - ${valor2} = <strong>${valor1 - valor2}</strong> </p>`
            break
        }
        case 3:{
            res.innerHTML += `<p>${valor1} * ${valor2} = <strong>${valor1 * valor2}</strong> </p>`
            break
        }
        case 4:{
            res.innerHTML += `<p>${valor1} / ${valor2} = <strong>${valor1 / valor2}</strong> </p>`
            break
        }
        default:{
            res.innerHTML += `<p> os valores informados foram ${valor1} e ${valor2}, porém não sei o que fazer com eles </p>`
        }
    }
}