// Seleção do botao
botao = document.querySelector('input.botao')

botao.addEventListener('click', media)

function media(){
    nome = prompt('Digite o nome do aluno: ')
    nota1 = Number(prompt('Digite a primeira nota do aluno: '))
    nota2 = Number(prompt('Digite a outra nota do aluno: '))
    resultado = document.querySelector('div.resultado')
    resultado.innerHTML = `<p> Calculando a média final de <mark> ${nome}</mark>. </p>`
    resultado.innerHTML += `<p> As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark>. </p>`
    resultado.innerHTML += `<p> A média final será <mark>${(nota1 + nota2) / 2}</mark>. </p>`
}

