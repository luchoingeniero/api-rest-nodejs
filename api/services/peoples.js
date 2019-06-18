'use strict'
const peoplesDao=require('../dao/peoples');
module.exports={

    listAll:peoplesDao.listAll,
    findById:peoplesDao.findById,
    findAllByContainsName:peoplesDao.findAllByContainsName,
    delete:peoplesDao.delete,
    add:peoplesDao.add,
    update:peoplesDao.update

};