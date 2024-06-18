// Chamada do botão e criação da função
document.querySelector('.botao').addEventListener('click', function enviar(){

    // Chamada do resultado texto
    let res = document.querySelector('.resultado')

    // Chamada da imagem
    let imagem = document.querySelector('.imagens')

    // Chamada dos inputs de genero
    let sexo = document.querySelector('.genero').value

    // Chamada do input de idade
    let anoNasc = Number(document.querySelector('.anoNasc').value)

    // Chamada do ano do sistema
    let data = new Date()
    let anoAtual = data.getFullYear()

    // Garantia de sexos válidos
    if (sexo !== "Masculino" && sexo !== "Feminino"){
        alert("Sexo inválido! Por favor tente novamente com seu sexo de nascença e não o seu gênero")
        return;
    }

    // Garantia de anos de nascimento válidos
    if (isNaN(anoNasc) || anoNasc === 0 ){
        alert("Ano de nascimento inválido! Insira um ano válido")
        return;
    }

    // Calculo da idade
    var idade = anoAtual - anoNasc

    // Verificação de idades válidas
    if (idade < 0){
        alert ("Idade inválida")
        return;
    }
    
    // Selecionando imagem e texto baseado na idade e sexo

        // Bebês
    if (idade <= 5) {
        if (sexo === "Masculino") {
            res.innerHTML = `Seu sexo é ${sexo} e você tem ${idade} anos`;
            imagem.src = "imagens/bebe_menino.png";
        } else {
            res.innerHTML = `Seu sexo é ${sexo} e você tem ${idade} anos`;
            imagem.src = "imagens/bebe_menina.png";
        }

        // Crianças
    } else if (idade <= 13) {
        if (sexo === "Masculino") {
            res.innerHTML = `Seu sexo é ${sexo} e você tem ${idade} anos`;
            imagem.src = "imagens/menino_crianca.png";
        } else {
            res.innerHTML = `Seu sexo é ${sexo} e você tem ${idade} anos`;
            imagem.src = "imagens/menina_crianca.png";
        }

        // Adolescentes
    } else if (idade <= 25) {
        if (sexo === "Masculino") {
            res.innerHTML = `Seu sexo é ${sexo} e você tem ${idade} anos`;
            imagem.src = "imagens/homem_adolescente.png";
        } else {
            res.innerHTML = `Seu sexo é ${sexo} e você tem ${idade} anos`;
            imagem.src = "imagens/mulher_adolescente.png";
        }

        // Adultos
    } else if (idade <= 60) {
        if (sexo === "Masculino") {
            res.innerHTML = `Seu sexo é ${sexo} e você tem ${idade} anos`;
            imagem.src = "imagens/homem_adulto.png";
        } else {
            res.innerHTML = `Seu sexo é ${sexo} e você tem ${idade} anos`;
            imagem.src = "imagens/mulher_adulta.png";
        }

        // Idosos
    } else {
        if (sexo === "Masculino") {
            res.innerHTML = `Seu sexo é ${sexo} e você tem ${idade} anos`;
            imagem.src = "imagens/homem_idoso.png";
        } else {
            res.innerHTML = `Seu sexo é ${sexo} e você tem ${idade} anos`;
            imagem.src = "imagens/mulher_idosa.png";
        }
    }
})
