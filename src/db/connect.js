const mongoose = require('mongoose')

function connect(){
    mongoose
    .connect('mongodb://localhost/fseletro',{useNewUrlParser:true, useUnifiedTopology:true})
        .then(()=> {
            console.log("Conectado com o Banco 'FSLELETRO'")
    
        }).catch ((error)=>{
            console.log(`Erro ao tentar conexão ${error}`);
        });
}

module.exports = connect()