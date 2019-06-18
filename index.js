const express=require('express');
const morgan=require('morgan');
const parser=require('body-parser');
const app=express();

app.set('json spaces',4);
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

const peoplesRoutes=require('./api/routes/peoples');
app.use('/peoples',peoplesRoutes);


app.listen(3000,()=>{
    console.log("Servicio Iniciado!!");
});