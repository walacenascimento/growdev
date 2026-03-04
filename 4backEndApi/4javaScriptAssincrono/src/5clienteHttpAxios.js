import axios from 'axios';

axios.get('https://rickandmortyapi.com/api/character')
    .then((result)=>{
        console.log(result.data);
    })
    .catch((error)=>{
        console.log(error);
    })


console.log("Testando");
