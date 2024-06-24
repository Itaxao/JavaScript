// Criação do onclick
document.querySelector(".contar").addEventListener('click',contar)

// Criação da Função
function contar(){
    // Chamada das inputs e valores
    let inicio = Number(document.querySelector(".inicio").value)
    let fim = Number(document.querySelector(".fim").value)
    let passo = Number(document.querySelector(".passo").value)
    let res = document.querySelector(".resultado")

    // Limpando o resultado
    res.innerHTML = ""

    // Verificação de passo válido
    if (passo <= 0){
        alert("Passo inválido! Tente um valor maior que 0")
        passo = 1
    }

    // Verificação de inicio e fim
    if (inicio <= fim){
        // Loop
    for(let i = inicio; i <= fim; i+= passo){
        res.innerHTML += `${i} &#x1F449; `
    }}

    // Verificação de inicio e fim
    else{
        for(let i = inicio; i >= fim ; i -= passo ){
            res.innerHTML += `${i} &#x1F449; `
        }
    }
    res.innerHTML += '&#x1F3C1;'
}