/*
Requisitos:
    1. Clique no Botão: Cada vez que o usuário clicar no botão, o número no primeiro parágrafo deve aumentar e ser atualizado.
    2. Hover no Texto: Quando o usuário passar o mouse sobre o segundo parágrafo, o texto deve mudar para "Você passou o mouse!".
    3. Ao Carregar a Página: Quando a página carregar, exiba um alert com a mensagem 
    "Bem-vindo, Visitante".
*/

let contador = 0

function atualizaContado() {
    contador++;
    document.getElementById("p-contador").innerHTML = `Número de cliques: ${contador}`

}

