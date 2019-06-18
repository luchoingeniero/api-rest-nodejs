const express=require('express');
const router=express.Router();
const peoplesController=require('../controllers/peoples');

router.route('/')
    .get(peoplesController.listAll)
    .post(peoplesController.add);

router.route('/:id')
      .put(peoplesController.update)
      .delete(peoplesController.delete)
      .get(peoplesController.findById);

module.exports=router;