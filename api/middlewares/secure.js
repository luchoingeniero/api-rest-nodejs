const util=require('../util/util');

module.exports=function (req,res,next){
    if(req.url.startsWith(util.PATH_SECURE)){
        var token = req.headers['authorization']
         if(!token){
                res.status(401).send({
                error: "Es necesario el token de autenticación"
            })
        return
        }

    token = token.replace('Bearer ', '');// reemplazamos el texto que le pone el navegador
    var callback=(err, user)=>{
              if (err) {
                res.status(401).send({
                  error: 'Token inválido'
                })
              } else {
                res.send({
                  message: 'Autorizado!!'
                })
              };
    }
    util.verifyTocken(token,callback);
    }

    next();
}