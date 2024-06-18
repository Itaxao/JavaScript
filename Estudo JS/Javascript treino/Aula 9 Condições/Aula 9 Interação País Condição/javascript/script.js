// Interação com o Usuário utilizando IF

function verificar(){
   pais = document.querySelector('input#nacao')
   nacao = pais.value
   res = document.querySelector('div.resultado')

   res.innerHTML = `Você nasceu no país <strong>${nacao}</strong> <br>`

   if(nacao == "Brasil"){
    res.innerHTML += "Você é brasileiro!! <br>"
   }

   else{
    res.innerHTML += "Você é estrangeiro!!"
   }
}