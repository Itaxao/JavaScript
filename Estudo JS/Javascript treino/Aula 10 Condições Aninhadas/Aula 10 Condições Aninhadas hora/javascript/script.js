
// Else if para definir bom dia, boa tarde, boa noite ou boa madrugada
var hora = 25
var res = document.querySelector('div.resultado')

if(hora > 4 && hora < 12){
    document.querySelector('div.resultado').innerHTML = `Agora são exatamente ${hora} horas: <br>`
    document.querySelector('div.resultado').innerHTML += `BOM DIA!!!!!`
    res.style.backgroundColor = '#ADD8E6'
}
else if (hora >= 12 && hora < 18){
    document.querySelector('div.resultado').innerHTML = `Agora são exatamente ${hora} horas: <br>`
    document.querySelector('div.resultado').innerHTML += `BOA TARDE!!!!!`
    res.style.backgroundColor = '#FFDEAD'
}
else if (hora >= 18 && hora < 24){
    document.querySelector('div.resultado').innerHTML = `Agora são exatamente ${hora} horas: <br>`
    document.querySelector('div.resultado').innerHTML += `BOA NOITE!!!!!`
    res.style.backgroundColor = '#8B008B'
}
else{
    document.querySelector('div.resultado').innerHTML = `Agora são exatamente ${hora} horas: <br>`
    document.querySelector('div.resultado').innerHTML += `BOA MADRUGADA!!!!!`
    res.style.backgroundColor = '#4B0082'
}
