const express=require('express');
const morgan=require('morgan');
const parser=require('body-parser');
const app=express();
const {PATH_SECURE,KEY_PATH_SECURE}=require('./api/util/util');
const {peoplesRoutes,usersRoutes,loginRoutes}=require('./api/routes/index');

app.set(KEY_PATH_SECURE,PATH_SECURE);
app.set('json spaces',4);


app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:false}));
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, POST, GET,PUT, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    if(req.method=='OPTIONS'){
        res.status(200).end();
    }else{
    next();
    }
});

app.use('/auth',loginRoutes);
app.use(require('./api/middlewares/secure'));
app.use(app.get(KEY_PATH_SECURE)+'/peoples',peoplesRoutes);
app.use(app.get(KEY_PATH_SECURE)+'/users',usersRoutes);
app.use(require('./api/middlewares/404'));

app.listen(3000,()=>{
    console.log("Servicio Iniciado!!");
});