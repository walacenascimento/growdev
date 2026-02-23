/*
4. Quando o usuário clicar no botão, a função deve alterar o src da imagem para um novo arquivo 
de imagem, como "image2.jpg".

*/

// Capturar Elemento
const imagem = document.getElementById("image-1")

// Declando função

function trocarImagem(){
    if(imagem.src.includes("imagem1.jpg")){
        imagem.src = "imagem2.jpg"
    } else {
        imagem.setAttribute('src', 'imagem1.jpg.avif')
    }
}

