// Funções em javascript

area = document.querySelector('div#area') // Variavel global 
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clicar() {
    area.style.background = 'red'
    area.innerText = "Clickou"
}
function entrar(){
    area.innerText = "Entrou"
}
function sair(){
    area.style.background = 'green'
    area.innerText = "Saiu"
}