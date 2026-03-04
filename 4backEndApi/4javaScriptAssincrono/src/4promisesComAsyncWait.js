function processoDemorado(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Hello do processo demorado");
        resolve();
        // reject();
    }, 2000);  
    })
}
// Usando async / await
// async function executarProcessoDmorado(){
//     await processoDemorado();
//     console.log("Log do processo demorado");
// }

// executarProcessoDmorado()

// console.log("Fora da função Async");

// Usando Async Await e Trando erros com o Try/Catch

async function executarProcessoDmorado(){
    try {
        await processoDemorado();
        console.log("Log do processo demorado");
    } catch (error) {
        console.log("Promise REJEITADA");
    }
}

executarProcessoDmorado()

console.log("Fora da função Async");
