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