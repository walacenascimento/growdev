import axios from "axios";

// Fazer a requisição à API ViaCEP
const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});
// console.log(api);

async function listarCep(cep){
    try {
        const result = await api.get(`${cep}/json/`);
        const endereco = {
                Cep: result.data.cep,
                logradouro: result.data.logradouro,
                Bairro: result.data.bairro,
                Localidade: result.data.localidade,
                Estado: result.data.estado,
                Uf: result.data.uf
        }      
        console.log(endereco);
        
    } catch (error) {
        console.log(error);
    }
};

listarCep(45656502);
