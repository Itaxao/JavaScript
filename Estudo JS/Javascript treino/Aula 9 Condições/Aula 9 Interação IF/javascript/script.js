// Interação com o Usuário
function verificar(){
    velocidade = document.querySelector('input#velocidade')
    res = document.querySelector('div.resultado')
    vel = Number(velocidade.value)
    res.innerHTML = `<p> A sua velocidade atual é de <strong>${vel}</strong> </p>`

    if(vel > 80 ){
        res.innerHTML += "Você está <strong> MULTADO!!! </strong> por excesso de velocidade. "
    }

    res.innerHTML += " <p> Dirija sempre com cinto de segurança! </p>"
}