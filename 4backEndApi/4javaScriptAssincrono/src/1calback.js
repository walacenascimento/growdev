// function processoDemorado(){
//     console.log("Hello do processo demorado");
// }

// processoDemorado()

// console.log("Log do processo demorado");

// function processoDemorado(){
//     setTimeout(() => {
//         console.log("Hello do processo demorado");
//     }, 2000);
// }

// processoDemorado()

// console.log("Log do processo demorado...");


// Passando uma calback 
function processoDemorado(callback){
    setTimeout(() => {
        console.log("Hello do processo demorado");
        callback.call()
    }, 2000);
}

// Chamando a função que será exacuta, após aguardar a execução do processi setTimeOut
processoDemorado(()=>{
    console.log("Log do processo demorado...");
})
