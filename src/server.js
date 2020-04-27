const express = require('express');
const mysql = require('mysql');
const routes = require('./routes');
var cors = require('cors')
const app = express();

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "5538437",
    database: "app-posto"
})
app.use(cors());
app.use(express.json());
app.use(routes);


module.exports = conn;

const jwt = require('jsonwebtoken');
app.post('/auth',(req,res)=>{
    let user = req.body;

    conn.query("SELECT * FROM usuario WHERE cpf = ? AND senha = ?",
    [user.cpf,user.senha],
    (err,result)=>{
        if(result.lenght ==0){
            res.status(401);
            res.send({token: null,sucess:false});
        }else{
            let token = jwt.sign({id:result[0].idusuario},user.nome,{
                expiresIn:6000
            });

            res.status(200);
            res.send({token:token,sucess:true});
        }
    }
    );
})

app.listen('2222',() => {

    conn.connect((err => {

        if(err) return console.log(err);
        console.log("Rodando na porta 2222");
    }));
});


