const express =require('express');
const router = express.Router();
const routes=require('../controllers/deleteexpense');

router.delete('/delete-expense/:id',routes.deleteExpense)

module.exports=router