'use strict'
const usersService=require('../services/users');
module.exports={

    listAll: async (req,res)=>{
       res.send( await usersService.listAll() ) ;
    },
    add:async (req,res)=>{
        if(!req.body.user){
            res.status(400).end();
        }else{
            res.send( await usersService.add(req.body.user) ) ;
        }
       
    },
    update:async (req,res)=>{
        if(!req.body.user||!req.body.user.id){
            res.status(400).end();
        }else{
        res.send( await usersService.update(req.body.user) ) ;
        }
    },
    delete: async(req,res)=>{
        if(!req.params.id){
            res.status(400).end();
        }
        var user=await usersService.findById(req.params.id);
        if(!user.id){
            res.status(400).send({"error":"Registro No Encontrado!"});
        }else{
            var deleted= await usersService.delete(user);
            var output=(deleted.affectedRows&&deleted.affectedRows>0)?user:deleted;
        res.send( output) ;
        }
    },
    findById:async (req,res)=>{
        if(!req.params.id){
            res.status(400).end();
        }else{
        res.send(await usersService.findById(req.params.id)) ; 
        }
    },
  

};