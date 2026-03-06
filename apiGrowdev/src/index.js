import express from 'express';
import * as dotenv from 'dotenv';
import {growdevers} from './dados.js';
import {randomUUID} from 'crypto';
dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT

// Criando as rotas
// GET - growdevers
app.get("/growdevers", (req, res) =>{const {idade} = req.query;
    let dados = growdevers
    
    if(idade){
        dados = dados.filter(item => item.idade === Number(idade));
    }

    res.status(200).send({
        ok: true,
        mensagem: "Growdevers listado com sucesso!",
        // dados: growdevers
        dados
    });
});

// GET-ID - Buscando um growdever pelo id
app.get("/growdevers/:id", (req, res) =>{
    // entrada
    //const params = req.params // ou de forma desestruturada assim: const {id} = req.params
    const {id} = req.params

    // processamento
    const growdever = growdevers.find((item) => item.id === id);
    // validado se o growdever existe
    if(!growdever){
        return res.status(404).send({
            OK: false,
            mensagem: "Growdev não encontrado!"
        });
    }

//     // GET - usando query params (opcional);
//     app.get("/growdevers", (req, res) =>{
//         const {idade} = req.query;

//         let dados = growdevers
//         if(idade){
//             dados = dados.filter(item => item.idade === Number(idade));
//         }

//         res.status(200).send({
//         ok: true,
//         mensagem: "Growdevers listado com sucesso!",
//         dados
//     });
// });

    // saida
    res.status(200).send({
        OK: true,
        mensagem: "Growdev obtido com sucesso!",
        dados: growdever
    })

})

// POST - Cadastrando um novo Growdever
app.post("/growdevers", (req, res) => {
    // entrada de dados
    const body = req.body;
    const novoGrowdevers = {
        id: randomUUID(),
        nome: body.nome,
        email: body.email,
        idade: body.idade,
        matriculado: body.matriculado
    }
    // Processando - inserido os dados de entrada no banco de dados - no nosso caso na lista "dados".
    growdevers.push(novoGrowdevers);

    // Saída de dados
    res.status(201).send({
        OK: true,
        mensagem: "Growdevers cadastrado com sucesso!",
        dados: growdevers
    });
});

// PUT -  Atualizando dados
app.put("/growdevers/:id", (req, res) => {
    // Entrada
    const {id} = req.params; // pegando o id do growdev que será atualizado.
    const {nome, email, idade, matriculado} = req.body // pegando os dados no body do growdev que será atualizado.
    
    // Processamento
    const growdever = growdevers.find(item => item.id === id); // fazendo o filtro do id do growdev a ser atualizado.
    if(!growdever){// verificando se o id/growdev existe
        return res.status(404).send({
            OK: false,
            mensagem: "Growdev não encontrado!"
        });
    }
    // passando os dados a serem atualizado
        growdever.nome = nome,
        growdever.email = email,
        growdever.idade = idade,
        growdever.matriculado = matriculado

    // Saída
        res.status(200).send({
            OK: true,
            mensagem: "Growdev atualizado com sucesso!",
            dados: growdever // retorna o growdev com os dados atualizado
        });
});

// PATCH - atualizar uma informação específica do dados
app.patch("/growdevers/:id", (req, res) =>{
    // Entrada
        const { id } = req.params;

    // Processamento
    const growdever = growdevers.find(item => item.id === id);
    if(!growdever){
        return res.status(404).send({
            OK: false,
            mensagem: "Gowdever não encontrado!"
        });
    };

    growdever.matriculado = !growdever.matriculado;

    // Saída
    res.status(200).send({
        OK: true,
        mensagem: "Matrícula do Growdev atualizado com sucesso!",
        dados: growdever
    });

});

// DELETE - Excluíndo dados 
app.delete("/growdevers/:id", (req, res) => {
    // Entrada de dados
    const { id } = req.params;

    // Processamento de dados
    const growdeverIndex = growdevers.findIndex(item => item.id === id);

    if(growdeverIndex < 0) {
        return res.status(404).send({
            OK: false,
            mensagem: "Growdever não encontrado"
        });
    }

    growdevers.splice(growdeverIndex, 1);

    //Saída de dados
    res.status(200).send({
        OK: true,
        mensagem: "Gowdever excluído com sucesso!",
        dados: growdevers
    });

});



app.listen(port, ()=>{
    console.log(`"Servidor rodando na porta ${port}"` );
});


// listando algo
// app.get("/teste", (req, res)=>{
//     console.log(`Hello World teste!`);
//     res.send(`Hello World!`)
// });

// também podemos retornar no send um arquivo JSON com várias iformações
// app.get("/teste", (req, res)=>{
//     console.log(`Hello World teste!`);
//     res.send({
//         OK: true,
//         message: "Hello World, rota executada com sucesso!"
//     })
// });