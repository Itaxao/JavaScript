//Formatação de strings em js
var nome = prompt("Qual é o seu nome?")

document.writeln(`Olá ${nome}. Seu nome tem ${nome.length} letras <br> `)
document.writeln(`Olá ${nome}. Seu nome em maiusculas é ${nome.toUpperCase()}<br>`)
document.writeln(`Olá ${nome}. Seu nome em minusculas é ${nome.toLowerCase()}<br>`)

//Formatação de numbers em js

var n1 = 1543.5
document.writeln (`${n1.toFixed(2).replace(".",",")}<br>`)

//Como formatar numero em uma moeda especifica 
var n2 = 1800.0
document.writeln (`${n2.toLocaleString("pt-BR",{style:"currency", currency:'USD'} )}`)

