'use strict'
const connection=require('./config/connection');
const table="users";
module.exports={

    listAll:()=>{ return connection.findAllTable(table);},
    findById:(id)=>{ return connection.findByIdTable(table,id);},
    findByUsername:(username)=>{return connection.findOneByColumnTable(table,"username",username); },
    delete:(user)=>{return conn.deleteByColumn(table,"id",user.id);},
    add:(user)=>{return conn.createByObject(table,user);},
    update:(user)=>{ return conn.createByObject(table,user);  }

};