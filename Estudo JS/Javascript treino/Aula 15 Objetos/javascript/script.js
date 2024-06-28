
let resultado = document.querySelector('#resultado')

document.querySelector('#botao').addEventListener('click',function aparecer(){

// Criação de um array 
let num = [
    5,
    8,
    4,
    "Olá"]
    
// Criação de um objeto chamado amigo
let amigo = {
    nome:'josé',
    sexo:'Masculino',
    peso:85.4,
    // Criação de uma função dentro de um objeto utilizando parâmetros
    engordar( p = 0 ){
        alert("Engordou")
        this.peso +=p
    }
}

// Chamada da função + criaçãoo do parâmetro
amigo.engordar(2)
resultado.innerHTML = `${amigo.nome} pesa ${amigo.peso}kg`
    
})