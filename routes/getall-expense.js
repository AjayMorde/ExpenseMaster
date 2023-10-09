const express =require('express');
const router = express.Router();
const routes=require('../controllers/getallexpense');
router.get('/get-expense',routes.getAllExpense)


module.exports=router
