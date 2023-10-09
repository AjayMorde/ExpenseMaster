const express =require('express');
const app=express();
const cors = require('cors');  // cross-origin requests
const bodyParser=require('body-parser');
const sequelize=require('./connections/db');

const addRoute=require('./routes/add-expense');
const deleteroute=require('./routes/delete-expense');
const getroute=require('./routes/getall-expense');




app.use(cors());


app.use(bodyParser.json({extended:false}));
app.use('/expense',addRoute)
app.use('/expense', getroute)
app.use('/expense', deleteroute)





sequelize
  .sync()
  .then((result) => {
    console.log(result)
    
    app.listen(3000, ()=>
{
    console.log("Server Is Started on port 3000");
})})
  .catch(err => {
    console.log(err);
});





