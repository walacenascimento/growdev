import axios from "axios";

// Fazendo a requisição, chamada da API de livros
const api = axios.create({
    baseURL: "https://books-api-j138.onrender.com/"
});
//console.log(api);

//GET/books - listar todos os livros:
async function listarLivros(){
    try {
        const result =  await api.get("books");
        // console.log(result.data.data);
        const lista = result.data.data.map(item => {
            return {
                id: item.id,
                title: item.title,
                author: item.author.name
            }
        });

        console.log(lista);
        
    } catch (error) {
        console.log(error);
    }
}

// Listar livros pelo id
async function listarLivrosId(id){
    try {
        const result =  await api.get(`/books/${id}`);
        console.log(result.data.data);
        
    } catch (error) {
        console.log(error);
    }
}


// Criar livors | POST
async function criarLivro(dados){
    try {
        const result = await api.post(`books`, dados);
        console.log(result.data);
        
    } catch (error) {
        console.log(error);
    }
}


// listarLivros();
// listarLivrosId('6562c926-edd4-49dc-955e-a63fbbe25dc8');
criarLivro({
    title: 'Revolução dos Bichos 2',
    resume: 'Conta a história de uma revolução dos animais da fazenda',
    totalPages: 120,
    isFavorite: false,
    authorId: 'a10950ca-dd1d-453d-bac8-603a3bc26401'
});
