// Chamada do botão
document.querySelector('#botao').addEventListener('click', informacoes)
// Chamada do resultado
var res = document.querySelector('#resultado')

// Função para aparecer os valores
function informacoes(){
    let dataHora = new Date()

    // Criação das chamadas dos dias, mes e ano
    let dia = dataHora.getDate()
    let mes = dataHora.getMonth()
    let ano = dataHora.getFullYear()
    let diaSem = dataHora.getDay()

    // Criação das chamadas das horas
    let hora = dataHora.getHours()
    let minutos = dataHora.getMinutes()
    let segundos = dataHora.getSeconds()

    // Transformando o valor de diaSem em nome
    switch (diaSem) {
        case 0: {
            diaSem = "Dom"
            break
        }
        case 1:{
            diaSem = "Seg"
            break
        }
        case 2:{
            diaSem = "Ter"
            break
        }
        case 3:{
            diaSem = "Qua"
            break
        }
        case 4:{
            diaSem = "Qui"
            break
        }
        case 5:{
            diaSem = "Sex"
            break
        }
    }
  
    res.innerHTML = `<p> Dia: <mark> ${dia}</mark> </p>`
    res.innerHTML += `<p>Mês: <mark> ${mes}</mark></p>`
    res.innerHTML += `<p>Ano: <mark> ${ano}</mark></p>`
    res.innerHTML += `<p>Dia da semana: <mark> ${diaSem}</mark></p>`
    res.innerHTML += `<p>Hora: <mark> ${hora}</mark></p>`
    res.innerHTML += `<p>Minutos: <mark> ${minutos}</mark></p>`
    res.innerHTML += `<p>Segundos: <mark> ${segundos}</mark></p>`
}