let imagem = document.querySelector('#imagens');
let lampada = document.querySelector('#lampada');
let ligarLampada = document.querySelector('#lampada-ligada');
let desligarLampada = document.querySelector('#lampada-desligada');


// Botão para ligar a lâmpada funcional
ligarLampada.addEventListener('click',(event) => {
    imagem.src = "images/lampada_ligada.jpg"
});

// Botão para desligar a lâmpada funcional
desligarLampada.addEventListener('click',(event) => {
    imagem.src = "images/lampada_desligada.jpg"
});

// Evento para quando o mouse entrar no elemento
lampada.addEventListener('mouseover', 
    (event) => {
        // Muda a imagem para a lâmpada ligada quando o mouse entrar
        imagem.src = "images/lampada_ligada.jpg"
});

// Evento para quando o mouse sair do elemento
lampada.addEventListener('mouseout', 
    (event) => {
        // Volta a imagem para lsâmpada desligada quando o mouse sair
        imagem.src = "images/lampada_desligada.jpg"
})

// Evento para quando o usuario der double click
lampada.addEventListener('dblclick', 
    (event) => {
        // Quebra a imagem da lâmpada
        imagem.src = "images/lampada_quebrada.jpg"
})
