// Chamda dos resultados
const res = document.querySelector('#result')
const calculo = document.querySelector('#calculos')

// Criação do Array
let agrupamento = []

// Criação do botão adicionar
document.querySelector('#adicionar').addEventListener('click',function adicionar(){
    // Variavei do input
    let num = Number(document.querySelector('#numero').value)

    // Impedimento caso o valor seja maior que 100 e verificação se o valor já foi inserido no array
    if(num > 100 || num <= 0 || agrupamento.includes(num)){
        alert("Valor inválido ou já inserido")
    }

    // Caso o valor sejá menor que 100 e o valor já tenha sido inserido
    else{

    // Adição dos valores do input no array
    agrupamento.push(num)

    // Limpeza do resultado
    res.innerHTML = ""
    
    for(let i = 0 ; i < agrupamento.length ; i++ ){
        // Criação do elemento option dinamicamente
        let item = document.createElement('option')

        // Define valores novos para o elemento option
        item.text = `O valor ${agrupamento[i]} foi adicionado`
        
        // Aplica elementos filho a um elemento pai
        res.appendChild(item)
            }
            
            // Colocando o array em ordem crescente de fato, utilizando apenas o sort o metódo apenas funciona para strings
            agrupamento.sort(function(a,b){
                return a - b
            })
        
    }
});

document.querySelector('#finalizar').addEventListener('click',function calcular(){

    // Verificação se o array está vazio
    if(agrupamento.length <= 0){
        alert("Insira valores antes de finalizar")
        }

    // Caso não esteja vazio
    else{

    // Soma dos valores no array
    let soma = 0
    for (let i = 0; i < agrupamento.length; i++){
        soma += agrupamento[i]
    }

    // Calculo da média
    let media = soma/agrupamento.length

    // Calculando maior valor
    let maiorValor = agrupamento[0]
    for (pos = 1; pos < agrupamento.length; pos++){
        if(agrupamento[pos] > maiorValor){
            maiorValor = agrupamento[pos]
        }
    }

    // Calculando menor valor
    let menorValor = agrupamento[0]

    // Informando o tamanho do array
    calculo.innerHTML = `Ao todo, temos ${agrupamento.length} números cadastrados. <br>`
    calculo.innerHTML += ` O maior valor informado foi ${maiorValor} <br>`
    calculo.innerHTML += ` O menor valor informado foi ${menorValor} <br>`
    calculo.innerHTML += `A soma dos valores no array é ${soma} <br>`
    calculo.innerHTML += `A média dos valores no array é ${media} <br>`
    }
})  