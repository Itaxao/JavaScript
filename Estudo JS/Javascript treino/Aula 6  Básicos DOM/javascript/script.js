// Selecionando elementos com o javascript por tags

p1 = document.getElementsByTagName('p')[0] //[0] Está se referindo a primeira tag "p"
corpo = window.document.body
document.write("No primeiro paragráfo está escrito : " + p1.innerText) // Reescreve o paragrafo selecionado
p1.style.color = 'blue' // Muda a cor do parágrafo selecionado
corpo.style.background = "black" // Muda a cor do corpo do site
// (p1.innerHTML) Com o innerHTML o javascript busca todas as formatações e não só o texto

// Selecionando elementos com o javascript por ID

piroca = document.getElementById('piroca')
piroca.style.background = 'green'
piroca.innerText = "Estou no aguardo..."

// Selecionando elementos com o javascript por nome

bunda = document.getElementsByName('bunda')[0]
bunda.style.background = 'orange'
bunda.innerText = "Clique aqui"

// Selecionando elementos com o javascript por classe

buceta = document.getElementsByClassName('buceta')[0]
buceta.style.background = 'red'
buceta.innerText = "Poggers"

// Selecionando elementos com o javascript por seletores

sakuro = document.querySelector('div#sakuro') // Por ID
sakuro.style.background = 'blue'
sakuro.innerText = "Sou gay!!"

naruto = document.querySelector('div.naruto') // Por Class
naruto.style.background = 'grey'
naruto.innerText = "Pode cre pai"