botao = document.querySelector('input.botao')
botao.addEventListener('click',calculo)

function calculo(){
    numero = Number(prompt('Digite um Número: '))
    resultado = document.querySelector('div.result')
    resultado.innerHTML = `O número a ser analisado aqui será o <strong> ${numero} </strong> <hr>`
    resultado.innerHTML += `<p> O seu valor absoluto é ${Math.abs(numero)} </p>`
    resultado.innerHTML += `<p> A sua parte inteira é ${Math.trunc(numero)} </p>`
    resultado.innerHTML += `<p> O valor inteiro mais próximo é ${Math.round(numero)} </p>`
    resultado.innerHTML += `<p> A sua raiz quadrada é ${Math.sqrt(numero)} </p>`
    resultado.innerHTML += `<p> A sua raiz cúbica é ${Math.cbrt(numero)} </p>`
    resultado.innerHTML += `<p> O valor de ${numero}² é ${numero ** 2} </p>`
    resultado.innerHTML += `<p> O valor de ${numero}³ é ${numero ** 3} </p>`
}