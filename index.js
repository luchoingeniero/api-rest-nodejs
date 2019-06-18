const express=require('express');
const morgan=require('morgan');
const parser=require('body-parser');
const app=express();

app.set('json spaces',4);
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

const {peoplesRoutes,usersRoutes}=require('./api/routes/index');

app.use('/peoples',peoplesRoutes);
app.use('/users',usersRoutes);


app.use(function(req, res, next) {
    res.status(404).send({"error":"Recurso Solicitado no Encontrado"});
});

app.listen(3000,()=>{
    console.log("Servicio Iniciado!!");
});