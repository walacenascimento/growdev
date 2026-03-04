// Requisitos:
// 1. Inicie o contador de cliques da sessão em 0 ao carregar a página.- OK
// 2. Recupera o contador total e inicia o contador total, caso não tenha nenhum valor. - OK
// 3. Exiba os contadores atualizados nos parágrafos correspondentes. - OK
// 4.incremente o contador de cliques da sessão e o contador total ao cliclar no botão.- OK

// Requisito 1
sessionStorage.setItem("sessionClicks", 0);

// Requisito 2
    // Recupera o valor total ou inicia em 0
    let cliquesTotal = localStorage.getItem("totalClicks");
    if(cliquesTotal === null){
        localStorage.setItem("totalClicks",0);
        cliquesTotal = 0;
    }

// Requisito 3
function atualizarTela() {
    // contador de sessao
    let sessao = document.getElementById("total-sessao-cliques");
    sessao.textContent = sessionStorage.getItem("sessionClicks");

    // contador total
    let total = document.getElementById("total-cliques");
    total.innerText = localStorage.getItem("totalClicks");
};

// Requisito 4
const btn = document.getElementById("btn-clique-aqui");
btn.addEventListener('click', () => {
// Incrementa contador da sessão
    sessionClicks = Number(sessionStorage.getItem("sessionClicks"));
    sessionClicks++;
    sessionStorage.setItem("sessionClicks", sessionClicks);

// Incrementa contador total
    totalClicks = Number(localStorage.getItem("totalClicks"));
    totalClicks++;
    localStorage.setItem("totalClicks", totalClicks);

// Atualiza a tela
    atualizarTela();
});

//Atualiza a tela ao carregar a página
atualizarTela();

























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










