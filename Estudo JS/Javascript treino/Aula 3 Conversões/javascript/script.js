// Conversão de String para Number
var numero1 = parseInt(prompt('Digite um Número ')) //Prompt sempre retorna String // parseInt converte para Inteiro

var numero2 = parseFloat(prompt('Digite outro Número ')) // parseFloat converte para Float

var soma = numero1+numero2

// Conversão de Number para String
alert("A soma dos valores é " + String(soma))//Concatenação

//Ao Invés de parseInt ou parseFloat, pode-se utilizar apenas "Number" para o javascript decidir o tipo

alert(`A soma dos valores ${numero1} e ${numero2} é igual a ${soma}`)// Utiliza template string






