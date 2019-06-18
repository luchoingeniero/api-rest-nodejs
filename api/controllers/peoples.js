'use strict'
const peoplesService=require('../services/peoples');
module.exports={

    listAll: async (req,res)=>{
       res.send( await peoplesService.listAll() ) ;
    },
    add:(req,res)=>{

    },
    update:(req,res)=>{

    },
    delete:(req,res)=>{

    },
    findById:(req,res)=>{
        peoplesService.findById(req.params.id);
    },
  

};