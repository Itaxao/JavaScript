// Função utilizando parametros
function parimp(n){

    // Retorno caso o número seja par
    if(n % 2 == 0){
        return 'par'
    }

    // Retorno caso o número seja impar
    else{
        return 'impar'
    }
}

// Impressão do resultado e Atribuição do parâmetro
console.log(parimp(223))

// Utilizando mais de um parâmetro e colocando um valor já na função para evitar problema caso um parametro esteja vazio
function soma(n1 = 0, n2 = 0){
    return n1 + n2
}

// Impressão do resultado e Atribuição dos parâmetros
console.log (soma(5,7))


// Função dentro de uma variavel
let v = function(x){
    return x*2
}

// Impressão do resultado e Atribuição dos parâmetros
console.log(v(10))