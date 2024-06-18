calcular = document.querySelector('button#calcular')
calcular.addEventListener ('click', media)

res = document.querySelector('section.resultado')

function media(){
    aluno = prompt("Qual o nome do aluno?")
    nota1 = Number(prompt("Qual foi a primeira nota do aluno?"))
    nota2 = Number(prompt(`Além de ${nota1}, qual foi a outra nota de ${aluno}`))

    res.innerHTML = ` <p> Calculando a média final de <mark>${aluno}</mark>. </p>`
    res.innerHTML += ` <p> As notas obtidas foram <mark>${nota1} e ${nota2}</mark>. </p>`
    res.innerHTML += `<p> A média final será <mark>${(nota1 + nota2)/2}</mark> </p>`
    
    if((nota1 +nota2)/2 <= 7) {
    res.innerHTML += `<p> A mensagem que temos é: <font color="red"> Estude um pouco mais! </font> </p>`
    }
    else{
        res.innerHTML += `<p> A mensagem que temos é: <font color="red"> Meus parabéns! </font> </p> `
    }

}