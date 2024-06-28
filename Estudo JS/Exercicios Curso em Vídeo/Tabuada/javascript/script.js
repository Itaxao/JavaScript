// Criação do botão
document.querySelector('#tabuada').addEventListener('click',function tabuada(){
    // Variaveis
    const num = Number(document.querySelector('#numero').value)
    const res = document.querySelector('#result')

    // Limpeza do resultado
    res.innerHTML = ""

    if(document.querySelector('#numero').value === ""){
        alert("PREENCHA O CAMPO")
        return
    }

    for(let i = 0 ; i < 11 ; i++ ){

        // Criação do elemento option dinamicamente
        let item = document.createElement('option')

        // Define valores novos para o elemento option
        item.text = `(${num}x${i} = ${num * i})`
        
        // Aplica elementos filho a um elemento pai
        res.appendChild(item)
    }
})