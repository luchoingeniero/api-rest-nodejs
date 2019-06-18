'use strict'
const usersDao=require('../dao/users');
module.exports={

    listAll:usersDao.listAll,
    findById:usersDao.findById,
    findByUsername:usersDao.findByUsername,
    delete:usersDao.delete,
    add:usersDao.add,
    update:usersDao.update
};