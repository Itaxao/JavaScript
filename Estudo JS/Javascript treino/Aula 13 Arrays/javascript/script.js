
function resultado(){

    // Criação do array
    let vaga_auto = [5,8,2,9,3]

    // Adiciona valor a uma posição específica do array
    vaga_auto[5] = 8

    // Manipulação de array com valores de fora
    let valor = 5

    // Adiciona valor na útlma posição do array
    vaga_auto.push(7)

    // Mostra o tamanho do array
    vaga_auto.length
    alert(`O array possui ${vaga_auto.length} posições`)

    // Coloca todos os valores do array em ordem crescente
    vaga_auto.sort()

    // Posição especifica do array sendo mostrada com for simples
    for (let pos = 0; pos < vaga_auto.length; pos++){
        console.log(`A posição do array ${pos} tem o valor: ${vaga_auto[pos]}`)
    }

    // Posição especifica do array sendo mostrada com for simplificado para objetos e arrays (for in)
    for (let pos in vaga_auto){
        console.log(`A posição do array ${pos} tem o valor: ${vaga_auto[pos]}`)
    }

    // Impressão no navigator
    const res = document.querySelector('#resultado')
    res.innerHTML += `${vaga_auto} <br>`

    // Mostra a posição que o valor que está sendo procurado está  
    res.innerHTML += `O valor ${valor} está na posição ${vaga_auto.indexOf(valor)}`
}