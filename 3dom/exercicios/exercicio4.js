/*
Requisitos:
1. Adicionar Tarefa: 
    Quando o usuário inserir um texto no campo
    e clicar no botão,
    crie um novo item de lista <li>
    com o texto da tarefa
    e adicione-o à lista.
2. Remover Tarefa:
    Ao clicar em uma tarefa na lista,
    ela deve ser removida.
*/

function adicionaTarefa() {
    const input = document.getElementById("input-nova-tarefa"); // captura o input
    const textInput = input.value; // pega o valor que foi inserido no input
    
    const novoLi = document.createElement("li"); // cria um novo li
    novoLi.textContent = textInput; // passa o valor do input no novo li
    
    const lista = document.getElementById("ul-list"); // captura o elemento PAI da li (UL)
    lista.appendChild(novoLi); // adiciona a li no elemento pai com o valor do input

    novoLi.onclick = function(){
        this.remove();
    };

    input.value = " ";
    
}

