const Sequelize=require('sequelize');
const sequelize=new Sequelize('expenseTrackerProject','root','Ajay@1998',{
    dialect:'mysql',
    host:'localhost'
})
module.exports=sequelize;