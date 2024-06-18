
window.addEventListener('load',carregar)

function carregar(){
    let elementos = document.querySelector('.elementos')
    let mensagem = document.querySelector('.texto')
    let imagem = document.querySelector('.imagens')
    let horaAtual = new Date()
    let hora = horaAtual.getHours()
    let minutos = horaAtual.getMinutes()
    let segundos = horaAtual.getSeconds()

    var corpo = document.querySelector('.corpo')

    mensagem.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`

    if (hora >= 0 && hora < 12){
        // Bom Dia!!!
        imagem.src = "imagens/dia.png"
        corpo.style.backgroundColor = "#F5DEB3"
        elementos.style.backgroundColor = "#fae9c9f6"
    }
    else if (hora >= 12 && hora < 18){
        // Boa Tarde!!!
        imagem.src = "imagens/tarde.png"
        corpo.style.backgroundColor = "#CD853F"
        elementos.style.backgroundColor = "#facea1"
    }
    else {
        // Boa Noite!!!
        imagem.src = "imagens/noite.png"
        corpo.style.backgroundColor = "#1C1C1C"
        elementos.style.backgroundColor = "#9932CC"
    }
}
