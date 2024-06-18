function clicar(){
    nome = prompt('Qual é o seu nome?')

    resultado = document.querySelector('div.resultado')

    resultado.innerHTML = `Olá, <strong> ${nome}</strong>! É um grande prazer te conhecer! 🖖`
}