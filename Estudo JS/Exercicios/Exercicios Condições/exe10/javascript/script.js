// Chamada do botão
document.querySelector('#calcular').addEventListener('click',estacoes)

// Chamada do resultado
var res = document.querySelector('#resultado')

// Função para o calculo
function estacoes(){
   let mes = prompt("Digite o mês em extenso (ex: Setembro)")
   let estacao 

   switch (mes.toUpperCase()){

      case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
         estacao = 'INVERNO'
         break

      case 'ABRIL': case 'MAIO': case 'JUNHO':
         estacao = 'PRIMAVERA'
         break

      case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
         estacao = 'VERÃO'
         break
      
      case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
         estacao = 'OUTONO'
         break
      
      default :
         res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>INDEFINIDA!</strong></mark>.</p>`
   }
   res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark>.</p>`
}