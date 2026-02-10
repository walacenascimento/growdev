/*
Quando o usuário clicar no botão,
crie uma função que capture e exiba em um alert o texto do 
segundo parágrafo
*/

// Capturando Elementos
const paragrafo2 = document.getElementById("paragrafo2");

// Manipulando Elemento Capturado
const result =  paragrafo2.innerText;


// Declarando Funções
function exibeTexto() {
    const result =  paragrafo2.innerText;
    alert(result);
}
