module.exports = {

    store(req,res){

        const conn = require('../server');
        let station = req.body;

        conn.query('INSERT INTO posto SET ?',
        [station],
        (err,result) =>{
            if(err){
                console.log(err);
                res.status(500).end();
            }else{
                res.status(200);
                res.json(result);
            }
        });
        
    },
    index(req,res){
        const conn = require('../server');
        conn.query("SELECT * FROM posto", (err, result)=>{
            
            if(err){
                console.log(err);
                res.status(500).end();
            }else{
                res.json(result);
            }
        });
        
    },

    show(req,res){
        const conn = require('../server');
        let posto_id = req.params.id;

        conn.query('SELECT * FROM posto WHERE idposto = ?',
        [posto_id],
        (err,result) =>{
            if(err){
                console.log(err);
                res.status(500).end();
            }else{
                res.status(200);
                res.json(result);
            }
        });
        
        
       
    },

    
    update(req,res){
        const conn = require('../server');
        let id_posto = req.params.id;
        let posto = req.body;

        conn.query('UPDATE posto SET ? WHERE idposto = ?',
        [posto,id_posto],
        (err, result ) => {

            if (err) {
                console.log(err);
                res.status(500).end();
            } else {
                res.status(200).end();
            }
        });


    },
    destroy(req,res){
        const conn = require('../server');
        let posto_id = req.params.id;

        conn.query('DELETE FROM posto WHERE idposto = ?',
        [posto_id],
        (err,result) =>{
            if(err){
                console.log(err);
                res.status(500).end();
            }else{
                res.status(200);
                res.json(result);
            }
        }
        )

    }




}