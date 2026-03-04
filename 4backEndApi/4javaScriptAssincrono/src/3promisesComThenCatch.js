// function processoDemorado(){
//     setTimeout(() => {
//         console.log("Hello do processo demorado");
//     }, 2000);
// }

// processoDemorado()
// console.log("Log do processo demorado");

function processoDemorado(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("Hello do processo demorado");
        resolve();
    }, 2000);  
    })
}

processoDemorado().then(()=>{
    console.log("Log do processo demorado");
}).catch(()=>{
    console.log("Processo REJEITADO");
});
