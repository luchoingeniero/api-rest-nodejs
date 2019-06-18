'use strict'
const connection=require('./config/connection');
const table="peoples";
module.exports={

    listAll:()=>{ return connection.findAllTable(table);},
    findById:(id)=>{ return connection.findByIdTable(table,id);},
    findAllByContainsName:(name)=>{return connection.findAllByContainsColumnTable(table,"names",name); },
    delete:(people)=>{return connection.deleteByColumn(table,"id",people.id);},
    add:(people)=>{return connection.createByObject(table,people);},
    update:(people)=>{ return connection.updateByObject(table,people);  }

};