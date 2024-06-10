function calculo(){
    numero1 = prompt('Digite um número: ')
    resultado = document.querySelector('div.resultado')
    resultado.innerHTML = `O dobro de ${numero1} é ${numero1 * 2} e a metade é ${numero1 / 2}!`
}