'use strict'
const peoplesService=require('../services/peoples');
module.exports={

    listAll:(req,res)=>{
        peoplesService.listAll();
    },
    findById:(req,res)=>{
        peoplesService.findById(req.params.id);
    },
  

};