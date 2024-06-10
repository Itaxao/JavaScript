// Interação com o Usuário utilizando o DOM
function soma(){
    n1 = document.querySelector('input#n1')
    n2 = document.querySelector('input#n2')
    resultado = document.querySelector('div.resultado')
    n1 = Number(n1.value)
    n2 = Number(n2.value)
    somar = n1 + n2
    
    resultado.innerHTML = `<strong> A soma entre ${n1} e ${n2} é igual a ${somar}</strong>`
}
