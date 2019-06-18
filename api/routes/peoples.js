const express=require('express');
const router=express.Router();
const peoplesController=require('../controllers/peoples');

router.route('/')
    .get(peoplesController.listAll)
    .post(peoplesController.add)
    .put(peoplesController.update);

router.route('/:id')
      .delete(peoplesController.delete)
      .get(peoplesController.findById);

module.exports=router;