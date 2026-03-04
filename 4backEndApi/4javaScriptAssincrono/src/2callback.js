function obterClienteApi(callback){
    setTimeout(()=>{
        console.log(`"Obter cliente API"`);
        callback.call(null,
            {
                id: 1,
                nome: "Daphne",
                idade: 20
            }
        )
    },2000);
}

obterClienteApi((result)=>{
    console.log(result); 
});
