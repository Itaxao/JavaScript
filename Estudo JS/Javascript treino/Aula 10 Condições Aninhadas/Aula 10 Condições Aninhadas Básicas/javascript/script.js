// Syntax básica do else if
idade = 22
if(idade < 16 ){
    document.querySelector('div.resultado').innerHTML = `Você tem ${idade} anos: `
    document.querySelector('div.resultado').innerHTML += "Não pode votar"
}
else if (idade < 18 || idade >= 65){
    document.querySelector('div.resultado').innerHTML = `Você tem ${idade} anos: `
    document.querySelector('div.resultado').innerHTML += "Voto opcional"
}
else{
    document.querySelector('div.resultado').innerHTML = `Você tem ${idade} anos: `
    document.querySelector('div.resultado').innerHTML += "Voto obrigatório"
}