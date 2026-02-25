// Capturando elementos
let input = window.document.getElementById("website_url");

const btnNavegar = window.document.getElementById("btn-navegar-website")

const btnSubstituirWebsite = window.document.getElementById("btn-substituir-website");

const btnAtribuiUrl = window.document.getElementById("btn-atribui-url");
console.log(btnAtribuiUrl);

// Criando elemento html
let paragrafo = window.document.createElement("p");

// Escutador de envento, aguadando o evento de click do botão
btnNavegar.addEventListener("click", () => {
    if(!input.value){
        alert("Por favor, insira um URL válida!")
    }
    window.location.href = input.value;
    
})

btnSubstituirWebsite.addEventListener("click", ()=>{
     if(!input.value){
        alert("Por favor, insira um URL válida!")
    }
    window.location.replace(input.value);
});

btnAtribuiUrl.addEventListener("click", ()=>{
     if(!input.value){
        alert("Por favor, insira um URL válida!")
    }
    window.location.assign(input.value);
});

// Adicionando o paragrafo com a URL atual após o carregamento da página
    paragrafo.innerHTML = `URL atual ${window.location.href}`
    window.document.body.appendChild(paragrafo)





