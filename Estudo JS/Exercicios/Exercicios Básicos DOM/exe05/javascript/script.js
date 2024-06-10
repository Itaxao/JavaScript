function soma() {
    numero1 = Number(prompt('Digite um número: '))
    numero2 = Number(prompt('Digite outro número: '))
    resultado = document.querySelector('div.resultado')
    resultado.innerHTML = `A soma entre <mark>${numero1}</mark> e <mark>${numero2}</mark> é igual a <strong> ${numero1 + numero2}! </strong>`
}