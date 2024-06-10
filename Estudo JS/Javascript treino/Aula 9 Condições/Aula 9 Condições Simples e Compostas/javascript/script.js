// Estudos de condições

// Condição simples
var carro = 70
document.write(`A velocidade do seu carro é ${carro}Km/h <br>`)
document.write('Dirija sempre usando cinto de segurança')


if (carro > 50 ){
    document.write('Você ultrapassou a velocidade permitida, você será multado <br>')
}  

// Condição composta
var pais = "frança"

document.write(`Vivendo em ${pais} `)

if(pais != "brasil"){
    document.write(`Você é estrangeiro! <br>`)
}
else{
    document.write(`Você é brasileiro! <br>`)
}

//  