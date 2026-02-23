/*
Requisitos:
    1. Ao clicar no botão,
        incremente o contador de cliques da sessão e o contador total.   - OK
    2. Exiba os contadores atualizados nos parágrafos correspondentes.   - OK
    3. Inicie o contador de cliques da sessão em 0 ao carregar a página. - OK 
    4. O contador total deve persistir entre as sessões.
*/

let contador = 0;

// Capturando elementos html
let totalCliques = document.getElementById("total-cliques");
let cliqueDaSessao = document.getElementById("total-sessao-cliques");
const btn = document.getElementById("btn-clique-aqui");

window.onload = function(){ // Função de reload
    reloadSession();
    reloadCliquesTotal();
}

function reloadSession(){ // função que inici o clique da sessão em 0 ao fazer o reload da página
    let valorDaSessao = localStorage.getItem("total-sessao-cliques");
    if(valorDaSessao === null){
        valorDaSessao = 0
    }
    cliqueDaSessao.innerText = valorDaSessao;
}

function reloadCliquesTotal(){ // função que inicia o clique total em 0 ao fazer o reload da página.
    let cliquesTotal = localStorage.getItem('contador');
    if(cliquesTotal === null){
        cliquesTotal = 0
    }
    totalCliques.innerHTML = cliquesTotal;
}

function incrementaContador(){ // Função que incrementa o contador e mostra o valor na sessao e no total de cliques
    contador++
    totalCliques.innerText = contador;
    cliqueDaSessao.innerText = contador;

    localStorage.setItem('contador', contador);
};

btn.addEventListener('click', () => {
    incrementaContador();
        atualizaTotal() +1 ;
});























// // Função para atualizar a tela:
// function atualizarTela(valor) {
//     totalCliques.textContent = valor;
//   }

//   // Função para buscar o valor salvo
//   function getContador() {
//     return parseInt(localStorage.getItem(CONTADOR))||0;
//   }

// // Função para salvar o valor
//   function setContador(valor) {
//     localStorage.setItem(CONTADOR, valor);
//     atualizarTela(valor);
//   }

//     // Valor inicial ao carregar a página
//   atualizarTela(getContador());

//     // Evento de click para incrementar
//   btn.addEventListener('click', () => {
//     const novoValor = getContador() + 1;
//     setContador(novoValor);
//   });


// btn.addEventListener("click", ()=>{
//     contador++;
//     // LocalStorage - TOTAL DE CLICKs
//     totalCliques.innerHTML = `Número total de cliques:<strong>${contador}</strong>`;

//     // SessioStogare - cliques na sessão atual
//     cliqueDaSessao.innerHTML = `número de cliques na sessão atual:<strong>${contador}</strong>`

//     localStorage.setItem('click', contador);

    
//     let totalDeClicks = incremento() +1;
//     totalCliques.innerHTML = `Número total de cliques:<strong>${totalDeClicks}</strong>`;

    
// });

//     function incremento(){
//         return parseInt(localStorage.getItem('click'))
//     }

// // RELOAD DA PÁGINA -  Iniciando o total de cliques com o valor armazenado no localStorage
// window.onload = function () {
//     const totalClickStorage = localStorage.getItem('click');
//     if(totalClickStorage){
//         totalCliques.innerHTML = `Número total de cliques:<strong>${totalClickStorage}</strong>`;
//     } else {
//         totalCliques.innerHTML = `Número total de cliques:<strong>${0}</strong>`;
//     } 
// };










