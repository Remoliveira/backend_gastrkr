module.exports = {

    index(req,res){
        const conn = require('../server');
        conn.query("SELECT * FROM usuario", (err, result)=>{
            
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
        let user_id = req.params.id;

        conn.query('SELECT * FROM usuario WHERE idusuario = ?',
        [user_id],
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

    store(req,res){
        const conn = require('../server');
        let user = req.body;

        conn.query('INSERT INTO usuario SET ?',
        [user],
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
        let id_usuario = req.params.id;
        let user = req.body;

        conn.query('UPDATE usuario SET ? WHERE idusuario = ?',
        [user,id_usuario],
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
        let user_id = req.params.id;

        conn.query('DELETE FROM usuario WHERE idusuario = ?',
        [user_id],
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