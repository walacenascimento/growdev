/*
Quando o usuário clicar no botão, deve ser exibido um prompt solicitando que ele escolha uma 
cor (por exemplo, "red", "blue", "green", etc.).
Após o usuário inserir a cor, a cor de fundo da página deve ser alterada para a cor escolhida.
IMPORTANTE! O nome da cor deve ser informado em inglês.
*/ 

// Capturar elementos html
const btn = document.getElementById("btn-cor-fundo") // exercício 1 - Alterando a cor de fundo

// Funções
function alterarCorDeFundo() { // exe 01
    const cor = prompt(`Digite uma cor, (exemplo, "red", "blue", "green")`)
    document.body.style.backgroundColor = cor   
}
// alterarCorDeFundo()
