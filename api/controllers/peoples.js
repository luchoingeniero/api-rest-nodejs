'use strict'
const peoplesService=require('../services/peoples');
module.exports={

    listAll: async (req,res)=>{
       res.send( await peoplesService.listAll() ) ;
    },
    add:async (req,res)=>{
        if(!req.body.people){
            res.status(400).end();
        }else{
            res.send( await peoplesService.add(req.body.people) ) ;
        }
       
    },
    update:async (req,res)=>{
        if(!req.body.people||!req.body.people.id){
            res.status(400).end();
        }else{
        res.send( await peoplesService.update(req.body.people) ) ;
        }
    },
    delete: async(req,res)=>{
        if(!req.params.id){
            res.status(400).end();
        }
        var people=await peoplesService.findById(req.params.id);
        if(!people.id){
            res.status(400).send({"error":"Registro No Encontrado!"});
        }else{
            var deleted= await peoplesService.delete(people);
            var output=(deleted.affectedRows&&deleted.affectedRows>0)?people:deleted;
        res.send( output) ;
        }
    },
    findById:async (req,res)=>{
        if(!req.params.id){
            res.status(400).end();
        }else{
        res.send(await peoplesService.findById(req.params.id)) ; 
        }
    },
  

};