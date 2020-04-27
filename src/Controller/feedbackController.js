module.exports = {

    index(req,res){

        const conn = require('../server');
        let stationId = req.params.stationid;
    
        conn.query('SELECT * FROM avalia WHERE posto_idposto = ? ',
        [stationId],
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
        let userId = req.params.userid;
        let stationId = req.params.stationid;
        let feedback = req.body;

        conn.query('INSERT INTO avalia SET usuario_idusuario = ?, posto_idposto = ?, comentario = ?, nota = ?, sugestao = ?, preco_atual = ?',
        [userId,stationId,feedback.comentario,feedback.nota,feedback.sugestao,feedback.preco_atual],
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
        let idAvalia = req.params.idavalia;
        let feedback = req.body;

        conn.query('UPDATE avalia SET ? WHERE idAvalia = ?',
        [feedback,idAvalia],
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

    destroy(req,res){

        const conn = require('../server');
        let idAvalia = req.params.idavalia;


        conn.query('DELETE FROM avalia WHERE idAvalia = ?',
        [idAvalia],
        (err,result) =>{
            if(err){
                console.log(err);
                res.status(500).end();
            }else{
                res.status(200);
                res.json(result);
            }
        });

    }

}