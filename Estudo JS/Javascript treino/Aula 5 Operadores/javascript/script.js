// Definição de valores e opeeradores
var soma = 5+2 // Operador de soma
var sub = 5-2 // Operador de subtração
var mult = 5*2 // Operador de multiplicação
var div = 5/2 // Operador de divisão real
var restodiv = 5%2  // Operador de divisão inteira ou resto da divisão
var potencia = 5**2 // Operador de potenciação

var media = (soma+sub+mult+div+restodiv+potencia)/6 // Operaçao de media

// Impressão na tela
document.write ("<h3> Impressão das operações básicas :)</h3>")
document.writeln(`Esse é o valor da soma ${soma} "+" <br>`)
document.write(`Esse é o valor da subtração ${sub} "-" <br>`)
document.write(`Esse é o valor da multiplicação ${mult} "*" <br>`)
document.write(`Esse é o valor da divisão ${div} "*" <br>`)
document.write(`Esse é o valor do resto da divisão ${restodiv} "/" <br>`)
document.write(`Esse é o valor da potênciação ${potencia} "**" <br>`)
document.write(`Esse é o valor da média ${media} <br> <br>`)

// Estudo de ordem de precedência
var a = 5 + 3
var b = a % 5
var c = 5 * b ** 2
var d = 10 - a / 2 
var e = 6 * 2 / d
var f = b % e + 4 / e

// Operadores de atribuição 
var n = 3
n += 4
n -= 5
n *= 4
n /= 2
n **= 2
n %= 5

// Impressão na tela
document.write ("<h3> Impressão de operações complexas :) </h3>")
document.write(`Valor da primeira operação ${a} "+=" <br>`)
document.write(`Valor da segunda operação ${b} "-=" <br>`)
document.write(`Valor da terceira operação ${c} "*=" <br>`)
document.write(`Valor da quarta operação ${d} "/*" <br>`)
document.write(`Valor da quinta operação ${e} "**=" <br>`)
document.write(`Valor da sexta operação ${f} "%=" <br>`)
document.write(`Valor da variavel n ${n} <br>`)



// Operadores de Incrementação e Decrementação
var x = 5
++x // Automaticamente soma 1 na variavel
var y = 5
--y // Automaticamente subtrai 1 na variavel

// Impressão Incrementação e Decrementação
document.write("<h3> Impressão de Incrementação e Decrementação :) </h3>")
document.write(`Incrementação "++" ${x}<br>`)
document.write(`Incrementação "--" ${x}<br>`)

// Operadores relacionais 
var maior = 5 > 2 //Maior
var menor = 7 < 4 //Menor
var maiorigual = 8 >= 8 //Maior ou igual
var menorigual = 9 <= 7 //Menor ou igual
var igual = 5 == 5 //Igual
var diferente = 4 != 4 //Diferente
var identico = 5 === "5" //Identico
var desigual = 5 !== "5" //Desigual

// Impressão operações relacionais
document.write("<h3> Impressão de operações relacionais :) </h3>")
document.write(`5 é maior que 2? ${maior} ">" <br>`)
document.write(`7 é menor que 4? ${menor} "<" <br>`)
document.write(`8 é maior ou igual a 8? ${maiorigual} ">=" <br>`)
document.write(`9 é menor ou igual a 7? ${menorigual} "<=" <br> `)
document.write(`5 é igual a 5? ${igual} "==" <br> `)
document.write(`4 é diferente de 4? ${diferente} "!=" <br>`)
document.write(`5 é identico a "5" ${identico} "===" <br>`)
document.write(`5 é desigual a "5" ${desigual} "!==" <br>`)

// Operadores Lógicos
var neg = !20 >= 20 //Negação do primeiro valor
var and = 20 + 20 == 40 && 20 < 15 //Teste lógico utilizando and, caso tenha um falso o resultado é falso
var or = 45 - 10 == 5 || 31 > 4 //Teste lógico utilizando or, caso tenha um verdadeiro o resultado é verdadeiro

// Impressão Operadores lógicos
document.write("<h3> Impressão operações lógicas </h3>")
document.write(`!20 é maior ou igual a 20? ${neg} <br>`)
document.write(`20 + 20 é igual a 40 E 20 < 15? ${and} <br>`)
document.write(`45 - 10 é igual a 5 OU 31 > 4? ${or} <br>`)

// Operador ternário
var media = 6.5

document.write("<h3> Impressão do teste ternário </h3>")
document.write("Exemplo: media = 6.5 <br> Caso media seja maior ou igual a 7 o retorno será 'aprovado' caso seja menor o retorno será 'Reprovado': <br>")
media >= 7 ? document.write("Aprovado") : document.write("Reprovado") 