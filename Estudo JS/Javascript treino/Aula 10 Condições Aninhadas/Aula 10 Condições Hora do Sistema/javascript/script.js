// Pegar hora do sistema
horaAtual = new Date()
hora = horaAtual.getHours()
minutos = horaAtual.getMinutes()
segundos = horaAtual.getSeconds()
document.querySelector('div.resultado').innerHTML = `Agora são exatamente ${hora} horas e ${minutos} minutos e ${segundos} segundos.`
