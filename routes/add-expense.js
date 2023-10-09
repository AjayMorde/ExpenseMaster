const express =require('express');
const router = express.Router();
const routes=require('../controllers/addexpense');
router.post('/add-expense',routes.addExpense)

module.exports=router