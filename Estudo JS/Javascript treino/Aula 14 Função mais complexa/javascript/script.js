// Criação da função para fatorial
function fatorial(n){
    let fat = 1

    for(let c = n;c > 1 ; c--){
        fat *= c
    }
    return fat
}

console.log (fatorial(5))

// Fatorial utilizando Recursividade quando uma função é chamada dentro dela mesma, dessa forma a recursividade funciona como se fosse uma estrutura de repetição
function factorial(num){
    if (num == 1){
        return 1 
    }
    else{
        return num * factorial(num-1)
    }
}

console.log(factorial(5))