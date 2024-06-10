horaAtual = new Date()
diaSem = horaAtual.getDay()

/*  Para o javascript os dias da semana são contados da seguinte forma 
    
    Domingo = 0
    Segunda = 1
    Terça = 2
    Quarta = 3
    Quinta = 4
    Sexta = 5
    Sábado = 6
*/

switch(diaSem){
    case 0:{
        document.querySelector('div.resultado').innerHTML = "Hoje é Domingo :)"
        break
    }
    case 1:{
        document.querySelector('div.resultado').innerHTML = "Hoje é Segunda :("
        break
    }
    case 2:{
        document.querySelector('div.resultado').innerHTML = "Hoje é Terça :) "
        break
    }
    case 3:{
        document.querySelector('div.resultado').innerHTML = "Hoje é quarta :)"
        break
    }
    case 4:{
        document.querySelector('div.resultado').innerHTML = "Hoje é quinta :)"
        break
    }
    case 5:{
        document.querySelector('div.resultado').innerHTML = "Hoje é sexta!!! UHULLLLLL"
        break
    }
    case 6:{
        document.querySelector('div.resultado').innerHTML = "Hoje é sábado!!!!!!!!!!!!!!!!!!!"
        break
    }
    default:{
        document.querySelector('div.resultado').innerHTML = "[ERRO] Tá doidão não existe esse dia não mermão"
        break
    }
}