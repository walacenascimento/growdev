import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT

// Criando as rotas
app.listen(port, ()=>{
    console.log(`"Servidor rodando na porta ${port}"` );
});

// listando algo
// app.get("/teste", (req, res)=>{
//     console.log(`Hello World teste!`);
//     res.send(`Hello World!`)
// });

// também podemos retornar no send um arquivo JSON com várias iformações
app.get("/teste", (req, res)=>{
    console.log(`Hello World teste!`);
    res.send({
        OK: true,
        message: "Hello World, rota executada com sucesso!"
    })
});